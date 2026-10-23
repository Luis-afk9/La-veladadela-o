

const elements = document.querySelectorAll(".fade");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.35)";
    navbar.style.backdropFilter = "blur(12px)";
  }
});



window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.8s ease";
});

const fechaFinal = new Date("2026-11-20T00:00:00").getTime();

const CuentaAtras = document.getElementById("CuentaAtras");

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaFinal - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);
    CuentaAtras.textContent = "¡La velada a comenzado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  CuentaAtras.textContent = 
    `${dias} : ${horas} : ${minutos} : ${segundos}`;
}, 1000);

