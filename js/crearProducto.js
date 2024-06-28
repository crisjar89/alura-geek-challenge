
import { conexionAPI } from "./conexion_api.js";
const formulario = document.querySelector("[data-formulario]");


formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    conexionAPI.crearProducto(nombre,precio,imagen);

})




