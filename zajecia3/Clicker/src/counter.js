export function setupGame(
  imageElement,
  displayElement,
  cursorButton,
  magnetButton,
  turboKarmaButton,
  breedingButton,
  superBreedingButton,
  megaBreedingButton,
  ultraBreedingButton,
  godBreedingButton
) {
  let points = 0;
  let pointsPerClick = 1;
  let cursors = 0;
  let hamstersPerSecond = 0;
  let magnets = 0;
  let turboKarmaActive = false;
  let breedingLevel = 0;
  let superBreedingLevel = 0;
  let megaBreedingLevel = 0;
  let ultraBreedingLevel = 0;
  let godBreedingActive = false;
  let animationStarted = false;

  let megaBreedingVisible = false;
  let ultraBreedingVisible = false;
  let godBreedingVisible = false;

  let breedingCost = 1000;
  let superBreedingCost = 5000;
  let megaBreedingCost = 10000;
  let ultraBreedingCost = 100000;
  let godBreedingCost = 100000000;

  const updateDisplay = () => {
    displayElement.innerHTML = `Ilość chomików: ${Math.floor(
      points
    )}<br>na sekundę: ${hamstersPerSecond.toFixed(1)}`;
    cursorButton.disabled = points < 15;
    cursorButton.innerText = `Kursor (koszt: 15 chomików) - Kursorów: ${cursors}`;
    magnetButton.disabled = points < 100;
    magnetButton.innerText = `Chomikowy Magnes (koszt: 100 chomików) - Magnesy: ${magnets}`;
    turboKarmaButton.disabled = points < 500 || turboKarmaActive;
    turboKarmaButton.innerText = turboKarmaActive
      ? `Turbo Karma (Aktywne)`
      : `Turbo Karma (koszt: 500 chomików)`;

    breedingButton.disabled = points < breedingCost || breedingLevel >= 10;
    breedingButton.innerText = `Hodowla (koszt: ${breedingCost} chomików) - Poziom: ${breedingLevel}`;
    superBreedingButton.disabled =
      points < superBreedingCost || superBreedingLevel >= 10;
    superBreedingButton.innerText = `Super Hodowla (koszt: ${superBreedingCost} chomików) - Poziom: ${superBreedingLevel}`;

    if (points >= 5000 && !megaBreedingVisible) {
      megaBreedingButton.style.display = "block";
      megaBreedingVisible = true;
    }
    megaBreedingButton.disabled =
      points < megaBreedingCost || megaBreedingLevel >= 10;
    megaBreedingButton.innerText = `Mega Hodowla (koszt: ${megaBreedingCost} chomików) - Poziom: ${megaBreedingLevel}`;

    if (points >= 10000 && !ultraBreedingVisible) {
      ultraBreedingButton.style.display = "block";
      ultraBreedingVisible = true;
    }
    ultraBreedingButton.disabled =
      points < ultraBreedingCost || ultraBreedingLevel >= 10;
    ultraBreedingButton.innerText = `Ultra Hodowla (koszt: ${ultraBreedingCost} chomików) - Poziom: ${ultraBreedingLevel}`;

    if (points >= 100000 && !godBreedingVisible) {
      godBreedingButton.style.display = "block";
      godBreedingVisible = true;
    }
    godBreedingButton.disabled = points < godBreedingCost || godBreedingActive;
    godBreedingButton.innerText = godBreedingActive
      ? `Boska Hodowla (Aktywna)`
      : `Boska Hodowla (koszt: ${godBreedingCost} chomików)`;

    // Sprawdzanie, czy animacja ma się rozpocząć
    if (points >= 100 && !animationStarted) {
      animationStarted = true;
      const event = new Event("startAnimation");
      document.dispatchEvent(event);
    }
  };

  imageElement.addEventListener("click", () => {
    points += pointsPerClick;
    updateDisplay();
  });

  cursorButton.addEventListener("click", () => {
    if (points >= 15) {
      points -= 15;
      cursors += 1;
      hamstersPerSecond += 0.1;
    }
    updateDisplay();
  });

  magnetButton.addEventListener("click", () => {
    if (points >= 100) {
      points -= 100;
      magnets += 1;
      hamstersPerSecond += 5;
    }
    updateDisplay();
  });

  turboKarmaButton.addEventListener("click", () => {
    if (points >= 500 && !turboKarmaActive) {
      points -= 500;
      turboKarmaActive = true;
      hamstersPerSecond += 50;

      const interval = setInterval(() => {
        if (!turboKarmaActive) {
          clearInterval(interval);
        } else {
          points += 50;
          updateDisplay();
        }
      }, 1000);

      setTimeout(() => {
        turboKarmaActive = false;
        hamstersPerSecond -= 50;
        updateDisplay();
      }, 10000);
    }
    updateDisplay();
  });

  // Hodowla
  breedingButton.addEventListener("click", () => {
    if (points >= breedingCost) {
      points -= breedingCost;
      breedingLevel += 1;
      hamstersPerSecond += 100;
      breedingCost = 1000 * (breedingLevel + 1); // Zwiększenie ceny następnej hodowli
    }
    updateDisplay();
  });

  // Super Hodowla
  superBreedingButton.addEventListener("click", () => {
    if (points >= superBreedingCost) {
      points -= superBreedingCost;
      superBreedingLevel += 1;
      hamstersPerSecond += 200;
      superBreedingCost = 5000 * (superBreedingLevel + 1);
    }
    updateDisplay();
  });

  // Mega Hodowla
  megaBreedingButton.addEventListener("click", () => {
    if (points >= megaBreedingCost) {
      points -= megaBreedingCost;
      megaBreedingLevel += 1;
      hamstersPerSecond += 500;
      megaBreedingCost = 10000 * (megaBreedingLevel + 1);
    }
    updateDisplay();
  });

  // Ultra Hodowla
  ultraBreedingButton.addEventListener("click", () => {
    if (points >= ultraBreedingCost) {
      points -= ultraBreedingCost;
      ultraBreedingLevel += 1;
      hamstersPerSecond += 1000;
      ultraBreedingCost = 100000 * (ultraBreedingLevel + 1);
    }
    updateDisplay();
  });

  // Boska Hodowla
  godBreedingButton.addEventListener("click", () => {
    if (points >= godBreedingCost && !godBreedingActive) {
      points -= godBreedingCost;
      godBreedingActive = true;
      hamstersPerSecond += 5000;
    }
    updateDisplay();
  });

  // Zmieniamy liczby co sekundę, aby aktualizować chomiki na sekundę
  setInterval(() => {
    points += hamstersPerSecond;
    updateDisplay();
  }, 1000);

  cursorButton.title = "Kupienie kursora dodaje 0.1 chomika na sekundę.";
  magnetButton.title =
    "Kupienie Chomikowego Magnesu dodaje 5 chomików na sekundę.";
  turboKarmaButton.title =
    "Kupienie Turbo Karmy dodaje 50 chomików na sekundę przez 10 sekund.";
  breedingButton.title =
    "Kupienie Hodowli dodaje 100 chomików na sekundę. Cena rośnie z każdym poziomem.";
  superBreedingButton.title =
    "Kupienie Super Hodowli dodaje 200 chomików na sekundę. Cena rośnie z każdym poziomem.";
  megaBreedingButton.title =
    "Kupienie Mega Hodowli dodaje 500 chomików na sekundę. Cena rośnie z każdym poziomem.";
  ultraBreedingButton.title =
    "Kupienie Ultra Hodowli dodaje 1000 chomików na sekundę. Cena rośnie z każdym poziomem.";
  godBreedingButton.title =
    "Kupienie Boskiej Hodowli dodaje 5000 chomików na sekundę.";

  updateDisplay();
}
