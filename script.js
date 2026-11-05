/* ==========================================
   1. EFECTOS DE SCROLL, NAVBAR Y CARGA
=========================================== */
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

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.8s ease";
  showOnScroll();
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0,0,0,0.7)";
      navbar.style.backdropFilter = "blur(20px)";
    } else {
      navbar.style.background = "rgba(0,0,0,0.35)";
      navbar.style.backdropFilter = "blur(12px)";
    }
  }
});

/* ==========================================
   2. CUENTA ATRÁS (SI EXISTE EL ELEMENTO)
=========================================== */
const fechaFinal = new Date("2026-11-20T00:00:00").getTime();
const CuentaAtras = document.getElementById("CuentaAtras");

if (CuentaAtras) {
  const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaFinal - ahora;

    if (diferencia <= 0) {
      clearInterval(intervalo);
      CuentaAtras.textContent = "¡La velada ha comenzado!";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    CuentaAtras.textContent = `${dias}:${horas}:${minutos}:${segundos}`;
  }, 1000);
}

/* ==========================================
   3. DATOS DE LOS 20 BOXEADORES Y SUS RIVALES
=========================================== */
const datosLuchadores = {
    fabiana: { nombre: "FABIANA SEVILLANO", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.65 M", pesoPactado: "52.5 KG", edad: "24 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/fabiana-sevillano.avif", rivalNombre: "LA PARCE", rivalImg: "https://cdn.infolavelada.com/character-hero/la-parce.avif", porcentaje: "68,8%", rivalPorcentaje: "31,2%" },
    laparce: { nombre: "LA PARCE", pais: "🇨🇴 COLOMBIA", paisCode: "colombia", genero: "femenino", estatura: "1.58 M", pesoPactado: "52.5 KG", edad: "23 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/la-parce.avif", rivalNombre: "FABIANA SEVILLANO", rivalImg: "https://cdn.infolavelada.com/character-hero/fabiana-sevillano.avif", porcentaje: "31,2%", rivalPorcentaje: "68,8%" },
    clersss: { nombre: "CLERSSS", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.67 M", pesoPactado: "57.0 KG", edad: "24 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/clersss.avif", rivalNombre: "NATALIA MX", rivalImg: "https://cdn.infolavelada.com/character-hero/natalia-mx.avif", porcentaje: "45,5%", rivalPorcentaje: "54,5%" },
    natalia: { nombre: "NATALIA MX", pais: "🇲🇽 MÉXICO", paisCode: "mexico", genero: "femenino", estatura: "1.68 M", pesoPactado: "57.0 KG", edad: "26 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/natalia-mx.avif", rivalNombre: "CLERSSS", rivalImg: "https://cdn.infolavelada.com/character-hero/clersss.avif", porcentaje: "54,5%", rivalPorcentaje: "45,5%" },
    edu: { nombre: "EDU AGUIRRE", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.80 M", pesoPactado: "74.0 KG", edad: "38 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/edu-aguirre.avif", rivalNombre: "GASTÓN EDUL", rivalImg: "https://cdn.infolavelada.com/character-hero/gaston-edul.avif", porcentaje: "51,0%", rivalPorcentaje: "49,0%" },
    gaston: { nombre: "GASTÓN EDUL", pais: "🇦🇷 ARGENTINA", paisCode: "argentina", genero: "masculino", estatura: "1.70 M", pesoPactado: "74.0 KG", edad: "30 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/gaston-edul.avif", rivalNombre: "EDU AGUIRRE", rivalImg: "https://cdn.infolavelada.com/character-hero/edu-aguirre.avif", porcentaje: "49,0%", rivalPorcentaje: "51,0%" },
    marta: { nombre: "MARTA DÍAZ", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.68 M", pesoPactado: "57.0 KG", edad: "25 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/marta-diaz.avif", rivalNombre: "TATIANA KÄER", rivalImg: "https://cdn.infolavelada.com/character-hero/tatiana-kaer.avif", porcentaje: "62,0%", rivalPorcentaje: "38,0%" },
    tatiana: { nombre: "TATIANA KÄER", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.65 M", pesoPactado: "57.0 KG", edad: "21 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/tatiana-kaer.avif", rivalNombre: "MARTA DÍAZ", rivalImg: "https://cdn.infolavelada.com/character-hero/marta-diaz.avif", porcentaje: "38,0%", rivalPorcentaje: "62,0%" },
    viruzz: { nombre: "VIRUZZ", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.83 M", pesoPactado: "78.0 KG", edad: "34 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/viruzz.avif", rivalNombre: "GERO ARIAS", rivalImg: "https://cdn.infolavelada.com/character-hero/gero-arias.avif", porcentaje: "58,0%", rivalPorcentaje: "42,0%" },
    gero: { nombre: "GERO ARIAS", pais: "🇦🇷 ARGENTINA", paisCode: "argentina", genero: "masculino", estatura: "1.72 M", pesoPactado: "78.0 KG", edad: "23 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/gero-arias.avif", rivalNombre: "VIRUZZ", rivalImg: "https://cdn.infolavelada.com/character-hero/viruzz.avif", porcentaje: "42,0%", rivalPorcentaje: "58,0%" },
    alondrissa: { nombre: "ALONDRISSA", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.60 M", pesoPactado: "50.0 KG", edad: "24 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/alondrissa.avif", rivalNombre: "ANGIE VELASCO", rivalImg: "https://cdn.infolavelada.com/character-hero/angie-velasco.avif", porcentaje: "44,0%", rivalPorcentaje: "56,0%" },
    angie: { nombre: "ANGIE VELASCO", pais: "🇦🇷 ARGENTINA", paisCode: "argentina", genero: "femenino", estatura: "1.56 M", pesoPactado: "50.0 KG", edad: "27 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/angie-velasco.avif", rivalNombre: "ALONDRISSA", rivalImg: "https://cdn.infolavelada.com/character-hero/alondrissa.avif", porcentaje: "56,0%", rivalPorcentaje: "44,0%" },
    lit: { nombre: "LIT KILLAH", pais: "🇦🇷 ARGENTINA", paisCode: "argentina", genero: "masculino", estatura: "1.72 M", pesoPactado: "72.0 KG", edad: "26 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/lit-killah.avif", rivalNombre: "KIDD KEO", rivalImg: "https://cdn.infolavelada.com/character-hero/kidd-keo.avif", porcentaje: "53,0%", rivalPorcentaje: "47,0%" },
    keo: { nombre: "KIDD KEO", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.70 M", pesoPactado: "67.0 KG", edad: "30 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/kidd-keo.avif", rivalNombre: "LIT KILLAH", rivalImg: "https://cdn.infolavelada.com/character-hero/lit-killah.avif", porcentaje: "47,0%", rivalPorcentaje: "53,0%" },
    rivers: { nombre: "SAMY RIVERS", pais: "🇲🇽 MÉXICO", paisCode: "mexico", genero: "femenino", estatura: "1.58 M", pesoPactado: "52.0 KG", edad: "27 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/samy-rivers.avif", rivalNombre: "RORO", rivalImg: "https://cdn.infolavelada.com/character-hero/roro.avif", porcentaje: "65,0%", rivalPorcentaje: "35,0%" },
    roro: { nombre: "RORO", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "femenino", estatura: "1.50 M", pesoPactado: "52.0 KG", edad: "24 AÑOS", categoria: "FEMENINO", img: "https://cdn.infolavelada.com/character-hero/roro.avif", rivalNombre: "SAMY RIVERS", rivalImg: "https://cdn.infolavelada.com/character-hero/samy-rivers.avif", porcentaje: "35,0%", rivalPorcentaje: "65,0%" },
    plex: { nombre: "PLEX", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.97 M", pesoPactado: "82.0 KG", edad: "24 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/plex.avif", rivalNombre: "FERNANFLOO", rivalImg: "https://cdn.infolavelada.com/character-hero/fernanfloo.avif", porcentaje: "55,0%", rivalPorcentaje: "45,0%" },
    fernan: { nombre: "FERNANFLOO", pais: "🇸🇻 EL SALVADOR", paisCode: "salvador", genero: "masculino", estatura: "1.86 M", pesoPactado: "76.0 KG", edad: "32 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/fernanfloo.avif", rivalNombre: "PLEX", rivalImg: "https://cdn.infolavelada.com/character-hero/plex.avif", porcentaje: "45,0%", rivalPorcentaje: "55,0%" },
    illojuan: { nombre: "ILLOJUAN", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.82 M", pesoPactado: "77.0 KG", edad: "31 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/illojuan.avif", rivalNombre: "THEGREFG", rivalImg: "https://cdn.infolavelada.com/character-hero/thegrefg.avif", porcentaje: "50,0%", rivalPorcentaje: "50,0%" },
    grefg: { nombre: "THEGREFG", pais: "🇪🇸 ESPAÑA", paisCode: "espana", genero: "masculino", estatura: "1.78 M", pesoPactado: "77.0 KG", edad: "29 AÑOS", categoria: "MASCULINO", img: "https://cdn.infolavelada.com/character-hero/thegrefg.avif", rivalNombre: "ILLOJUAN", rivalImg: "https://cdn.infolavelada.com/character-hero/illojuan.avif", porcentaje: "50,0%", rivalPorcentaje: "50,0%" }
};

/* ==========================================
   4. ABRIR Y CERRAR FICHA DETALLADA
=========================================== */
function abrirFicha(id) {
    const data = datosLuchadores[id];
    if (!data) return;
    
    document.getElementById('ficha-nombre').innerText = data.nombre;
    document.getElementById('ficha-pais').innerText = data.pais;
    document.getElementById('ficha-estatura').innerText = data.estatura;
    document.getElementById('ficha-pesopactado').innerText = data.pesoPactado;
    document.getElementById('ficha-edad').innerText = data.edad;
    document.getElementById('ficha-categoria').innerText = data.categoria;
    document.getElementById('ficha-img').src = data.img;
    
    document.getElementById('ficha-rival-nombre').innerText = data.rivalNombre;
    document.getElementById('ficha-rival-img').src = data.rivalImg;

    document.getElementById('votacion-nom-1').innerText = data.nombre;
    document.getElementById('votacion-porc-1').innerText = data.porcentaje;
    document.getElementById('votacion-img-1').src = data.img;

    document.getElementById('votacion-nom-2').innerText = data.rivalNombre;
    document.getElementById('votacion-porc-2').innerText = data.rivalPorcentaje;
    document.getElementById('votacion-img-2').src = data.rivalImg;

    document.getElementById('vista-catalogo').style.display = 'none';
    document.getElementById('vista-ficha').style.display = 'block';
    window.scrollTo(0, 0);
}

function cerrarFicha() {
    document.getElementById('vista-ficha').style.display = 'none';
    document.getElementById('vista-catalogo').style.display = 'block';
    window.scrollTo(0, 0);
}

/* ==========================================
   5. LÓGICA DE FILTRADO Y CONTADORES
=========================================== */
let filtroPaisSeleccionado = 'todos';
let filtroGeneroSeleccionado = 'todos';

document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.sidebar-filtros .btn-filtro');

    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            const grupo = btn.parentElement;
            
            grupo.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const texto = btn.innerText.toUpperCase();
            const labelGrupo = grupo.querySelector('.label-filtro') ? grupo.querySelector('.label-filtro').innerText.toUpperCase() : '';

            if (texto.includes('TODOS')) {
                if (labelGrupo.includes('PAÍS')) {
                    filtroPaisSeleccionado = 'todos';
                } else {
                    filtroGeneroSeleccionado = 'todos';
                }
            } else if (texto.includes('ESPAÑA')) filtroPaisSeleccionado = 'espana';
            else if (texto.includes('ARGENTINA')) filtroPaisSeleccionado = 'argentina';
            else if (texto.includes('MÉXICO')) filtroPaisSeleccionado = 'mexico';
            else if (texto.includes('COLOMBIA')) filtroPaisSeleccionado = 'colombia';
            else if (texto.includes('SALVADOR')) filtroPaisSeleccionado = 'salvador';
            else if (texto.includes('FEMENINO')) filtroGeneroSeleccionado = 'femenino';
            else if (texto.includes('MASCULINO')) filtroGeneroSeleccionado = 'masculino';

            aplicarFiltros();
        });
    });

    actualizarContadores();
});

function aplicarFiltros() {
    const grid = document.querySelector('.grid-cartelera-oficial');
    const hayFiltroActivo = (filtroPaisSeleccionado !== 'todos') || (filtroGeneroSeleccionado !== 'todos');
    const bloques = document.querySelectorAll('.pareja-bloque');

    if (grid) {
        if (hayFiltroActivo) {
            grid.classList.add('modo-filtrado');
        } else {
            grid.classList.remove('modo-filtrado');
        }
    }

    bloques.forEach(bloque => {
        const tarjetas = bloque.querySelectorAll('.card-luchador');
        const badgeVS = bloque.querySelector('.badge-vs-flotante');
        let luchadoresVisiblesEnBloque = 0;

        tarjetas.forEach(card => {
            const onclickAttr = card.getAttribute('onclick');
            if (!onclickAttr) return;

            const idMatch = onclickAttr.match(/'([^']+)'/);
            if (!idMatch) return;

            const luchador = datosLuchadores[idMatch[1]];
            if (!luchador) return;
            
            const cumplePais = (filtroPaisSeleccionado === 'todos') || (luchador.paisCode === filtroPaisSeleccionado);
            const cumpleGenero = (filtroGeneroSeleccionado === 'todos') || (luchador.genero === filtroGeneroSeleccionado);

            if (cumplePais && cumpleGenero) {
                card.style.display = 'flex';
                luchadoresVisiblesEnBloque++;
            } else {
                card.style.display = 'none';
            }
        });

        if (hayFiltroActivo) {
            bloque.style.display = 'contents';
            if (badgeVS) badgeVS.style.display = 'none';
        } else {
            if (badgeVS) badgeVS.style.display = 'block';
            if (luchadoresVisiblesEnBloque > 0) {
                bloque.style.display = 'grid';
            } else {
                bloque.style.display = 'none';
            }
        }
    });

    actualizarContadores();
}

function actualizarContadores() {
    const luchadoresArray = Object.values(datosLuchadores);
    const botonesFiltro = document.querySelectorAll('.sidebar-filtros .btn-filtro');

    botonesFiltro.forEach(btn => {
        const texto = btn.innerText.toUpperCase();
        const grupo = btn.parentElement;
        const labelGrupo = grupo.querySelector('.label-filtro') ? grupo.querySelector('.label-filtro').innerText.toUpperCase() : '';
        const span = btn.querySelector('span');
        
        if (!span) return;

        let total = 0;

        if (labelGrupo.includes('PAÍS')) {
            let pais = '';
            if (texto.includes('TODOS')) pais = 'todos';
            else if (texto.includes('ESPAÑA')) pais = 'espana';
            else if (texto.includes('ARGENTINA')) pais = 'argentina';
            else if (texto.includes('MÉXICO')) pais = 'mexico';
            else if (texto.includes('COLOMBIA')) pais = 'colombia';
            else if (texto.includes('SALVADOR')) pais = 'salvador';

            total = luchadoresArray.filter(l => {
                const cumplePais = (pais === 'todos') || (l.paisCode === pais);
                const cumpleGenero = (filtroGeneroSeleccionado === 'todos') || (l.genero === filtroGeneroSeleccionado);
                return cumplePais && cumpleGenero;
            }).length;

        } else if (labelGrupo.includes('GÉNERO')) {
            let genero = '';
            if (texto.includes('TODOS')) genero = 'todos';
            else if (texto.includes('FEMENINO')) genero = 'femenino';
            else if (texto.includes('MASCULINO')) genero = 'masculino';

            total = luchadoresArray.filter(l => {
                const cumpleGenero = (genero === 'todos') || (l.genero === genero);
                const cumplePais = (filtroPaisSeleccionado === 'todos') || (l.paisCode === filtroPaisSeleccionado);
                return cumplePais && cumpleGenero;
            }).length;
        }

        span.innerText = total;
    });
}