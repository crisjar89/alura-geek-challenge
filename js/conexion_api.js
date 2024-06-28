async function listarProductos() {
    const conexion = await fetch("https://alurageek-fakeapi-iota.vercel.app/productos");

    const datosConexion = conexion.json();

    return datosConexion
}

async function crearProducto(nombre,precio,imagen) {
    const conexion = await fetch("https://alurageek-fakeapi-iota.vercel.app/productos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({nombre,precio,imagen})
    })
    const datosConexion = conexion.json();

    return datosConexion;
}

/* 

crearNuevoProducto: (img, name, price, description, category) => {
    const id = uuid.v4();
    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  }, */
//listarProductos();

export const conexionAPI = {
    listarProductos, crearProducto
}