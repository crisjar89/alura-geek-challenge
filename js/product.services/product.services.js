const productList = () => {
    return fetch("http://localhost:3001/productos")
        .then((response) => response.json())
        .catch((err) => console.log(err));
};

const crearProducto = (nombre, precio, imagen) => {
    return fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
}

const borrarProducto = (id) => {
    return fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(res => {
            if (res.ok) {
                id.remove();
            } else {
                console.log("Error al eliminar el producto");
            }
        })
        .catch((err) => console.log(err))
}

export const servicesProducts = {
    productList,
    crearProducto,
    borrarProducto,
}