import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { format } from "date-fns";

document.title = "TimeDate"

const ObtenerDate = () => {
  const ahora = new Date()
  return (format(ahora,"yyyy-MM-dd")) 
}

const ObtenerHora = () => {
  const ahora = new Date();
  return format(ahora, "HH:mm:ss");
};


const mostrarDate = () => {
  const fechaElement = document.getElementById("hora");
  fechaElement.textContent = ObtenerHora();
};

setInterval(mostrarDate, 1000);
setInterval(ObtenerDate,1000)



document.querySelector("#app").innerHTML = `
<div>
<p id="hora" class="hora" data-color:"#0F172A">${ObtenerHora()}</p>
<p id="fecha" class="fecha">${ObtenerDate()}</p>
</p>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
</div>
`;


const horaElement = document.getElementById("hora")

console.log(horaElement)

horaElement.addEventListener("mouseenter",(e)=>{
  e.target.style.filter = `drop-shadow(${"#ffff"} 3px 2px 40px)`
  e.target.transition = "1s all "
})

horaElement.addEventListener("mouseleave",(e)=>{
  e.target.style.filter = ``
})

