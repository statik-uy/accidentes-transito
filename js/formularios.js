const formularioConsulta = document.getElementById("formulario-consulta");

const sendMail = (asunto, email, mensaje) => {
  fetch("https://m76x7ulnva.execute-api.sa-east-1.amazonaws.com/sendMail", {
    method: "POST",
    body: JSON.stringify({
      asunto: asunto,
      mensaje: mensaje,
      para: ["lucaspintos909@gmail.com"],
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Accept": "*/*"
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};

if (formularioConsulta) {
  formularioConsulta.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const motivo = event.target.motivo.value;
    const email = event.target.email.value;
    const mensaje = event.target.mensaje.value;

    const cuerpo = `
Nombre: ${nombre}
Motivo de contacto: ${motivo}

Mensaje: ${mensaje}
`;

    sendMail("Formulario de Contacto", email, cuerpo);
  });
}

const generateEmailTemplate = (title, content) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" > <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="x-apple-disable-message-reformatting"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <title></title> <style type="text/css"> @media only screen and (min-width: 570px){.u-row{width: 550px !important;}.u-row .u-col{vertical-align: top;}.u-row .u-col-100{width: 550px !important;}}@media (max-width: 570px){.u-row-container{max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important;}.u-row .u-col{min-width: 320px !important; max-width: 100% !important; display: block !important;}.u-row{width: 100% !important;}.u-col{width: 100% !important;}.u-col > div{margin: 0 auto;}}body{margin: 0; padding: 0;}table, tr, td{vertical-align: top; border-collapse: collapse;}p{margin: 0;}.ie-container table, .mso-container table{table-layout: fixed;}*{line-height: inherit;}a[x-apple-data-detectors="true"]{color: inherit !important; text-decoration: none !important;}table, td{color: #000000;}</style> </head> <body class="clean-body u_body" style=" margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f7f7f7; color: #000000; " > <table style=" border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; min-width: 320px; margin: 0 auto; background-color: #f7f7f7; width: 100%; " cellpadding="0" cellspacing="0" > <tbody> <tr style="vertical-align: top"> <td style=" word-break: break-word; border-collapse: collapse !important; vertical-align: top; " > <div class="u-row-container" style="padding: 0px; background-color: transparent" > <div class="u-row" style=" margin: 0 auto; min-width: 320px; max-width: 550px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff; " > <div style=" border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent; " > <div class="u-col u-col-100" style=" max-width: 320px; min-width: 550px; display: table-cell; vertical-align: top; " > <div style="height: 100%; width: 100% !important"> <div style=" box-sizing: border-box; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; " > <table style="font-family: arial, helvetica, sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style=" overflow-wrap: break-word; word-break: break-word; padding: 30px 10px 10px; font-family: arial, helvetica, sans-serif; " align="left" > <h1 style=" margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-family: arial, helvetica, sans-serif; font-size: 26px; " > ${title} </h1> </td></tr></tbody> </table> </div></div></div></div></div></div><div class="u-row-container" style="padding: 0px; background-color: transparent" > <div class="u-row" style=" margin: 0 auto; min-width: 320px; max-width: 550px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff; " > <div style=" border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent; " > <div class="u-col u-col-100" style=" max-width: 320px; min-width: 550px; display: table-cell; vertical-align: top; " > <div style="height: 100%; width: 100% !important"> <div style=" box-sizing: border-box; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; " > <table style="font-family: arial, helvetica, sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style=" overflow-wrap: break-word; word-break: break-word; padding: 10px 15px; font-family: arial, helvetica, sans-serif; " align="left" > <div style=" line-height: 140%; text-align: left; word-wrap: break-word; " > <p style="line-height: 140%">${content}</p></div></td></tr></tbody> </table> </div></div></div></div></div></div></td></tr></tbody> </table> </body> </html>
  `;
};
