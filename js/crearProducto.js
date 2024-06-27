import { conexionAPI } from "./conexion_api.js";

const formulario = document.querySelector("[data-formulario]");

async function nuevoProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.crearProducto(nombre,precio,imagen);

}

formulario.addEventListener("submit", evento => nuevoProducto(evento));
