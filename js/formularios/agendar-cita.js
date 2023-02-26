"use strict";
import { sendMail, showNotification } from "../utils.js";

const formulario = document.getElementById("formulario-agendar-cita");

const opciones = {
  1: "Accidente de transito",
  2: "Derecho de Seguros",
  3: "Derecho Penal",
  4: "Derecho Civil",
  5: "Servicios Notariales",
};

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    showNotification("Procesando solicitud");
    const campos = ["nombre", "telefono", "email"];

    let cuerpo = ``;

    campos.forEach((campo) => {
      cuerpo += `<strong>${event.target[campo].name.toUpperCase()}</strong>: ${
        event.target[campo].value
      } <br/>`;
    });

    cuerpo += `<strong>${event.target.tipo.name.toUpperCase()}</strong>: ${
      opciones[event.target.tipo.value]
    } <br/>`;

    sendMail(
      `Agendar cita`,
      event.target.nombre.value,
      cuerpo,
      "Su solicitud de cita fue enviada!"
    );
    formulario.reset();
  });
}
