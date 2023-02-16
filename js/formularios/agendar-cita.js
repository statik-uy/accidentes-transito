"use strict";
import { sendMail, showNotification } from "../utils.js";

const formulario = document.getElementById("formulario-agendar-cita");

const opciones = {
  1: "Accidente de transito",
  2: "Derecho de Familia",
  3: "Derecho Civil",
  4: "Derecho de Seguros",
  5: "Derecho Laboral",
};

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    showNotification("Procesando solicitud");
    const campos = ["email"];

    let cuerpo = `<strong>${event.target.nombre.name.toUpperCase()}</strong>: ${
      event.target.nombre.value
    } <br/> <br/>`;

    campos.forEach((campo) => {
      cuerpo += `<strong>${event.target[campo].name.toUpperCase()}</strong>: ${
        event.target[campo].value
      } <br/>`;
    });

    cuerpo += `<strong>${event.target.tipo.name.toUpperCase()}</strong>: ${
      opciones[event.target.tipo.value]
    } <br/>`;

    sendMail(
      "Agendar cita",
      event.target.email.value,
      cuerpo,
      "Su solicitud de cita fue enviada!"
    );
    formulario.reset();
  });
}
