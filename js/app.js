const qrcodeContainer = document.getElementById("qrcode-container");
const qrcodeElement = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download-btn");

function gerarUrl() {
    const url = document.getElementById("urlInput").value.trim();
    if (url) {
        gerarCodigo(url);
    } else {
        alert("Por favor, digite uma URL!");
    }
}

function gerarWifi() {
    const ssid = document.getElementById("ssid").value.trim();
    const senha = document.getElementById("senha").value.trim();
    if (ssid) {
        const wifiString = `WIFI:S:${ssid};T:WPA;P:${senha};;`;
        gerarCodigo(wifiString);
    } else {
        alert("Por favor, preencha pelo menos o nome da rede!");
    }
}

function gerarCodigo(texto) {
    const qualidade = document.getElementById("quality-select").value;
    qrcodeElement.innerHTML = "";
    new QRCode(qrcodeElement, {
        text: texto,
        width: parseInt(qualidade),
        height: parseInt(qualidade),
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    animateResultIn(); // Chama a animação de resultado do GSAP
}

downloadBtn.addEventListener('click', function() {
    const qrImage = qrcodeElement.querySelector('img');
    if (qrImage) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Não foi possível encontrar a imagem do QR Code para baixar.");
    }
});