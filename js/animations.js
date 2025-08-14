document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada da página
    const tl = gsap.timeline();

    // Deixa o container visível mas transparente para a animação começar
    gsap.set(".container", { autoAlpha: 1 });

    tl.from(".container", { duration: 0.5, scale: 0.95, opacity: 0, ease: "power2.out" })
      .from(".logo", { duration: 0.5, scale: 0.5, opacity: 0, ease: "back.out(1.7)" }, "-=0.2")
      .from("h2", { duration: 0.5, y: -20, opacity: 0, ease: "power2.out" }, "-=0.4")
      .from(".settings-section", { duration: 0.5, y: -20, opacity: 0, ease: "power2.out" }, "-=0.4")
      .from(".section", { duration: 0.5, y: -20, opacity: 0, stagger: 0.15, ease: "power2.out" }, "-=0.4")
      .from("footer", { duration: 0.7, y: 20, opacity: 0, ease: "power2.out" }, "-=0.5");
});

// Animação para mostrar o resultado do QR Code (VERSÃO CORRIGIDA)
function animateResultIn() {
    const qrcodeContainer = document.getElementById("qrcode-container");
    const downloadBtn = document.getElementById("download-btn");

    // 1. Torna os elementos visíveis no layout ANTES de animar
    qrcodeContainer.style.display = 'flex';
    downloadBtn.style.display = 'inline-block';

    // 2. Usa GSAP para animar a aparição deles
    // Anima o container do QR Code
    gsap.from(qrcodeContainer, {
        duration: 0.6,
        y: 30,
        autoAlpha: 0, // Anima a opacidade e a visibilidade
        ease: "power2.out"
    });

    // Anima o botão de download logo em seguida
    gsap.from(downloadBtn, {
        duration: 0.5,
        delay: 0.2, // Um pequeno atraso para um efeito mais suave
        y: 10,
        autoAlpha: 0,
        ease: "power2.out"
    });
}