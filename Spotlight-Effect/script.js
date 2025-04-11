let main = document.querySelector("#main");
let light = document.querySelector("#light");

main.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;

    light.style.background = `
        radial-gradient(
            circle 230px at ${x}px ${y}px,
            transparent 10%,
            rgba(0, 0, 0, 0.95)
        )
    `;
});
