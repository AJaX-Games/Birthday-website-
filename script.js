const sparkleButton = document.getElementById("sparkleButton");
const openLetterButton = document.getElementById("openLetterButton");
const envelope = document.getElementById("envelope");

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent = ["♡", "✦", "❀", "✨"][Math.floor(Math.random() * 4)];
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
}

if (sparkleButton) {
  sparkleButton.addEventListener("click", () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 34; i++) {
      setTimeout(() => {
        const x = centerX + (Math.random() - 0.5) * window.innerWidth * 0.76;
        const y = centerY + (Math.random() - 0.5) * window.innerHeight * 0.62;
        createSparkle(x, y);
      }, i * 18);
    }
  });
}

if (openLetterButton && envelope) {
  openLetterButton.addEventListener("click", () => {
    envelope.classList.add("open");
    openLetterButton.textContent = "Letter opened ♡";
    openLetterButton.disabled = true;
    envelope.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    if (openLetterButton) {
      openLetterButton.textContent = "Letter opened ♡";
      openLetterButton.disabled = true;
    }
  });
}
