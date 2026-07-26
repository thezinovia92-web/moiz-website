const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {
  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    surpriseBtn.textContent = "hehe you found it 💙";
    createHearts();
  } else {
    surpriseBtn.textContent = "Open your surprise 💌";
  }
});

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = ["💙", "🩵", "☁️", "✨", "🧸"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 18 + 18 + "px";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4500);
  }
}
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.textContent = ["💙", "🩵", "☁️", "✦"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";

    document.body.appendChild(heart);

    const duration = Math.random() * 2 + 2;

    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
