import "./style.css";
import hamsterImage from "./assets/chomik.png";
import { setupGame } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class="header">
  <h1 class="title">Hamster Clicker</h1>
  <h2>Pobaw się z chomikiem</h2>
</div>

<div class="game-container">
  <div class="game-info">
    <img id="hamster" src="${hamsterImage}" alt="hamster" />
    <p id="count-display">Ilość chomików: 0</p>
  </div>

  <div class="buttons">
    <button id="cursor" disabled>Kursor (koszt: 15 chomików)</button>
    <button id="magnet" disabled>Chomikowy Magnes (koszt: 100 chomików)</button>
    <button id="turbo-karma" disabled>Turbo Karma (koszt: 500 chomików)</button>
    <button id="breeding" disabled>Hodowla (koszt: 1000 chomików)</button>
    <button id="super-breeding" disabled>Super Hodowla (koszt: 5000 chomików)</button>
    <button id="mega-breeding" disabled>Mega Hodowla (koszt: 10,000 chomików)</button>
    <button id="ultra-breeding" style="display:none">Ultra Hodowla (koszt: 100,000 chomików)</button>
    <button id="god-breeding" style="display:none">Boska Hodowla (koszt: 100,000,000 chomików)</button>
  </div>
</div>

`;

setupGame(
  document.querySelector("#hamster"),
  document.querySelector("#count-display"),
  document.querySelector("#cursor"),
  document.querySelector("#magnet"),
  document.querySelector("#turbo-karma"),
  document.querySelector("#breeding"),
  document.querySelector("#super-breeding"),
  document.querySelector("#mega-breeding"),
  document.querySelector("#ultra-breeding"),
  document.querySelector("#god-breeding")
);
