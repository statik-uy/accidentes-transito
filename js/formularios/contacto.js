"use strict";
import { sendMail, showNotification } from "../utils.js";

const formularioConsulta = document.getElementById("formulario-consulta");

if (formularioConsulta) {
  formularioConsulta.addEventListener("submit", (event) => {
    event.preventDefault();

    showNotification("Procesando solicitud");

    const nombre = event.target.nombre.value;
    const motivo = event.target.motivo.value;
    const email = event.target.email.value;
    const mensaje = event.target.mensaje.value;
    const telefono = event.target.telefono.value;

    const cuerpo = `
<strong>Nombre</strong>: ${nombre} <br/>
<strong>Teléfono</strong>: ${telefono} <br/>
<strong>Motivo de contacto</strong>: ${motivo}<br/>
<br/>
<strong>Mensaje</strong>: ${mensaje}<br/>
`;

    sendMail(`Formulario de Contacto`, nombre, cuerpo, "La solicitud de contacto fue enviada!");
    formularioConsulta.reset()
  });
}
