/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let emojis = ["♦", "♥", "♠", "♣"];
let valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "A",
  "K",
  "Q"
];
let colores = ["red", "black"];
window.onload = function() {
  const upperEmojiDiv = document.getElementById("upperEmoji");
  const bottomEmojiDiv = document.getElementById("bottomEmoji");
  const numLetDiv = document.getElementById("numLet");
  // emoji aleatorio
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];
  //color aleatorio
  const colorRandom = Math.floor(Math.random() * colores.length);
  const selectedColor = colores[colorRandom];
  // número aleatorio
  const randomIndexValue = Math.floor(Math.random() * valores.length);
  const selectedValue = valores[randomIndexValue];
  // Agregando contenido y estilos a los divs
  upperEmojiDiv.textContent = selectedEmoji;
  bottomEmojiDiv.textContent = selectedEmoji;
  upperEmojiDiv.style.color = selectedColor;
  bottomEmojiDiv.style.color = selectedColor;
  numLetDiv.style.color = selectedColor;
  numLetDiv.textContent = selectedValue;
};
