const inputBox = document.getElementById("input-box");
const generateButton = document.getElementById("generate-button");

// 
const qrCodeDiv = document.getElementById("qr-code");
const errorMessageDiv = document.getElementById("error-message");

const saveButton = document.getElementById("save-button");

generateButton.addEventListener("click", ()=> {
    const userInput = inputBox.value.trim();

    if (userInput === "") {
        errorMessageDiv.innerHTML = "Debe ingresar un link para generar el QR";
        qrCodeDiv.innerHTML = "";
        saveButton.disabled = true;
        return;
    }

    qrCodeDiv.innerHTML = "";
    const qrCode = new QRCode(qrCodeDiv, {
        text: userInput,
        width: 200,
        height: 200,
        colorDark: "#161717",
        colorLight: "white",
        correct: QRCode.CorrectLevel.H
    });
    //Limpiar mensaje de error
    errorMessageDiv.innerHTML = "";
    //Boton de guardar activado
    saveButton.disabled = false;
});

//Leer el evento del boton guardar
saveButton.addEventListener("click", ()=> {
    const dataUrl = qrCodeDiv.querySelector("img").src;

    const link = document.createElement("a");
    link.href = dataUrl;

    link.download = "qr-code.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

