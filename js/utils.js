"use strict";
import { generateEmailTemplate } from "./generateEmailTemplate.js";

const showNotification = (message) => {
  const toastElement = document.getElementById("notification");
  const notificationMessage = document.getElementById("notification-message");
  const toast = new bootstrap.Toast(toastElement);
  notificationMessage.innerHTML = message;
  toast.show();
};

const sendMail = (asunto, email, mensaje) => {
  showNotification(
    "Procesando solicitud."
  );
  const cuerpo = generateEmailTemplate(asunto, mensaje);
  fetch("https://m76x7ulnva.execute-api.sa-east-1.amazonaws.com/sendMail", {
    mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      asunto: asunto,
      mensaje: cuerpo,
      para: ["lucaspintos909@gmail.com"],
    }),
  })
    .then((response) => JSON.parse(response))
    .then((data) => {
      showNotification("La solicitud de contacto fue enviada!");
      alert("La solicitud de contacto fue enviada!");
      window.location.href = "/index.html";
    })
    .catch((error) => {
      showNotification(
        "La solicitud de contacto no pudo ser enviada, intente nuevamente."
      );
      console.error("Error:", error);
    });
};
/* .then(function (response) {
  return JSON.parse(response);
}) */

export { sendMail, showNotification };
