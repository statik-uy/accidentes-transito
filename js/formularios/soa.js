"use strict";
import { sendMail, showNotification } from "../utils.js";

const formulario = document.getElementById("formulario-soa");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    showNotification("Procesando solicitud");
    const campos = [
      "nombre",
      "email",
      "cobertura",
      "vehiculo",
      "marca",
      "asunto",
    ];
    let cuerpo = ""
    campos.forEach((campo) => {
      cuerpo += `<strong>${event.target[campo].name.toUpperCase()}</strong>: ${event.target[campo].value} <br/>`;
    });
    cuerpo += `<br/><strong>${event.target.mensaje.name.toUpperCase()}</strong>: ${event.target.mensaje.value} <br/>`;


    sendMail(
      "Formulario SOA",
      event.target.email.value,
      cuerpo,
      "El formulario SOA fue enviado!"
    );
    formulario.reset();
  });
}
