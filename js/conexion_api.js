async function listarProductos() {
  const conexion = await fetch("https://alurageek-fakeapi-iota.vercel.app/productos");

  const datosConexion = conexion.json();

  return datosConexion
}

async function crearProducto(nombre, precio, imagen) {
  const conexion = await fetch("https://alurageek-fakeapi-iota.vercel.app/productos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ nombre: nombre, precio: precio, imagen: imagen})
  })
  const datosConexion = conexion.json();

  return datosConexion;
}


export const conexionAPI = {
  listarProductos, crearProducto
}