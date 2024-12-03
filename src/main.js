import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { format } from "date-fns";
import githublogo from "./github-dark.svg"

document.title = "TimeDate";

const ObtenerDate = () => {
  const ahora = new Date();
  return format(ahora, "yyyy-MM-dd");
};

const ObtenerHora = () => {
  const ahora = new Date();
  return format(ahora, "HH:mm:ss");
};

const mostrarDate = () => {
  const fechaElement = document.getElementById("hora");
  fechaElement.textContent = ObtenerHora();
};

setInterval(mostrarDate, 1000);
setInterval(ObtenerDate, 1000);

document.querySelector("#app").innerHTML = `
<div>
<a href="https://github.com/CesarMartinez7" target="_ublank">
<img class="git" src=${githublogo}>
</a>
<h1>DateTime</h1>
<p id="hora" class="hora" data-color:"#0F172A">${ObtenerHora()}</p>
<p id="fecha" class="fecha">${ObtenerDate()}</p>
</p>
</a>
</div>
<main class="cronometro">
  <p class="hora">
      <span id="minutos"></span>:<span id="segundos"></span>
  </p>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
</main>
`;

const horaElement = document.getElementById("hora");

console.log(horaElement);

horaElement.addEventListener("mouseenter", (e) => {
  e.target.style.filter = `drop-shadow(${"#ffff"} 3px 2px 40px)`;
  e.target.transition = "1s all ";
});

horaElement.addEventListener("mouseleave", (e) => {
  e.target.style.filter = ``;
});

const MinutosElement = document.getElementById("minutos");
const SegundosElement = document.getElementById("segundos");
const ButtonStart = document.getElementById("start");

let Segundos = 0;
let Minutos = 0;

MinutosElement.textContent = Minutos;
SegundosElement.textContent = Segundos;

ButtonStart.addEventListener("click", () => {
  Segundos += 1;
  setInterval(() => {
    SegundosElement.textContent = Segundos++;
    if (Segundos === 59) {
      Minutos = Minutos + 1;
      MinutosElement.textContent = Minutos;
      Segundos = 0;
    }
  }, 1000);
});
