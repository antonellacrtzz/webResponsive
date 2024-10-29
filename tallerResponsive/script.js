document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "...la energía y vitalidad aumentan",
        "...mayor bienestar y actividad",
        "...ingredientes naturales y frescos"
    ];
    let index = 0;
    const carouselText = document.getElementById("carouselText");

    setInterval(() => {
        index = (index + 1) % texts.length;
        carouselText.textContent = texts[index];
    }, 2000); // Cambia cada 2 segundos
});
