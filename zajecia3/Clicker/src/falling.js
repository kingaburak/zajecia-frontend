function createFallingHamsters() {
  const container = document.getElementById("falling-hamsters");

  const startAnimation = () => {
    setInterval(() => {
      const hamster = document.createElement("div");
      hamster.classList.add("hamster");

      hamster.style.left = `${Math.random() * 100}vw`;

      const size = Math.random() * 30 + 20;
      hamster.style.width = `${size}px`;
      hamster.style.height = `${size}px`;

      const duration = Math.random() * 5 + 3;
      hamster.style.animationDuration = `${duration}s`;

      container.appendChild(hamster);

      setTimeout(() => {
        hamster.remove();
      }, duration * 1000);
    }, 300);
  };

  // Uruchamianie animacji po otrzymaniu zdarzenia
  document.addEventListener("startAnimation", startAnimation, { once: true });
}

createFallingHamsters();
