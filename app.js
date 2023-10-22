let qrData = document.getElementById("qr-data"),
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "Lutfur",
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    }),
    generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function (e) {
    e.preventDefault();

    let data = qrData.value;
    qrcode.makeCode(data);

    if (data == "") {
        alert("You Cannot Leave Fields Empty!");
    }
});

