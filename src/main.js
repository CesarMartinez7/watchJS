import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { format } from "date-fns";
import githublogo from "./github-dark.svg";

document.title = "watchJS";

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
<h1 data-aos="fade-up">DateTime</h1>




<p id="hora" class="hora" data-color:"#0F172A">${ObtenerHora()}</p>
<p id="fecha" class="fecha">${ObtenerDate()}</p>
</p>
</a>
</div>
<main class="cronometro" data-aos="fade-up">
  <h1>Cronometro</h1>
  <p class="crono">
      <span id="horas"></span>:<span id="minutos"></span>:<span id="segundos"></span>
  </p>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
</main>
`;
const horaElement = document.getElementById("horas");

horaElement.addEventListener("mouseenter", (e) => {
  e.target.style.filter = `drop-shadow(${"#ffff"} 3px 2px 40px)`;
  e.target.transition = "1s all ";
});

horaElement.addEventListener("mouseleave", (e) => {
  e.target.style.filter = ``;
});

/////////////////////////////////////////
const HorasElement = document.getElementById("horas");
const MinutosElement = document.getElementById("minutos");
const SegundosElement = document.getElementById("segundos");
const ButtonStart = document.getElementById("start");
const ButtonStop = document.getElementById("stop");

let Segundos = 0;
let Minutos = 0;
let Horas = 0;
let pausado = false

MinutosElement.textContent = Minutos;
SegundosElement.textContent = Segundos;
HorasElement.textContent = Horas;




ButtonStart.addEventListener("click", () => {
  Segundos += 1;
  setInterval(() => {
    SegundosElement.textContent = Segundos++;
    if (Segundos === 59) {
      Minutos = Minutos + 1;
      MinutosElement.textContent = Minutos;
      Segundos = 0;
      if (Minutos === 59) {
        Horas = Horas + 1;
        HorasElement.textContent = Horas;
        Minutos = 0;
      }
    }
  }, 1000);
});

ButtonStop.addEventListener("click", () => {

});
