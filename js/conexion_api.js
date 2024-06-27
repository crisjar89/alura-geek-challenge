async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const datosConexion = conexion.json();

    return datosConexion
}

async function crearProducto(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const datosConexion = conexion.json();

    return datosConexion;
}

//listarProductos();

export const conexionAPI = {
    listarProductos, crearProducto
}