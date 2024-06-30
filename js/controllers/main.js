import { servicesProducts } from "../product.services/product.services.js";

const productos = document.querySelector("[data-cards-contenedor]");
const fomrulario = document.querySelector("[data-formulario]");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.classList.add("card");
    producto.innerHTML = `
    <img class="producto" src="${imagen}" alt="${nombre}"/>
    <div class="card-info">
    <h2>${nombre}</h2>
    <div class="card-valor">
        <p>$ ${precio}</p>
        <img class="trash" src="assets/trash-icon.png" id="${id}" alt="trash-icon" data-id/>
    </div>`;

    const botonEliminar = producto.querySelector(".trash")
    botonEliminar.addEventListener("click", ()=>{
        
        const id = botonEliminar.id;
        servicesProducts.borrarProducto(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    })

    productos.appendChild(producto);
    return producto;
}

const render = async () => {
    try {
        const listarProductos = await servicesProducts.productList()
        listarProductos.forEach(producto => {
            productos.appendChild(
                crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)
            )
        });
        
        } catch (error) {
            const mensajeError = document.querySelector("[data-error]");
        if (mensajeError) {
            mensajeError.style.display = 'block';
        }
    }
}

fomrulario.addEventListener('submit', (evento)=> {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    servicesProducts
        .crearProducto(nombre, precio, imagen)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

})

render();