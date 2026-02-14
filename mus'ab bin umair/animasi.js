// Animasi kotak muncul satu per satu
const observer = new MutationObserver(() => {
    const boxes = document.querySelectorAll('.kotak');
    boxes.forEach((box, index) => {
        box.style.animationDelay = (index * 0.15) + "s";
    });
});

observer.observe(document.getElementById('list'), { childList: true });

// Ripple click effect
document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {

        const button = e.target;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
});

// Ripple effect untuk BUTTON & KOTAK
document.addEventListener("click", function(e) {

    if (e.target.tagName === "BUTTON" || e.target.classList.contains("kotak")) {

        const element = e.target;

        const circle = document.createElement("span");
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.offsetX - radius}px`;
        circle.style.top = `${e.offsetY - radius}px`;
        circle.classList.add("ripple");

        const ripple = element.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        element.appendChild(circle);
    }
});

