const NUMERO_WHATSAPP = "50578612261";

const productos = [
  {
    nombre: "9 AM Dive",
    marca: "Afnan",
    precio: 45,
    imagen: "Perfumes/9AMDiveAfnan.jpeg",
    descripcion: "Una fragancia refrescante y dinámica. Abre con notas efervescentes de limón, menta, grosella negra y manzana, evolucionando hacia un corazón marino y de pimienta rosa, sobre un fondo elegante de cedro, sándalo y ámbar."
  },
  {
    nombre: "9 PM",
    marca: "Afnan",
    precio: 45,
    imagen: "Perfumes/9PM.jpeg",
    descripcion: "Un perfume nocturno seductor y dulce. Destaca por su salida frutal de manzana silvestre, canela y bergamota, seguida por lavanda y azahar, descansando sobre una rica base de vainilla, haba tonka, ámbar y maderas."
  },
  {
    nombre: "9 PM Elixir",
    marca: "Afnan",
    precio: 50,
    imagen: "Perfumes/9PMElixir.jpeg",
    descripcion: "Una versión aún más concentrada y profunda de la icónica 9 PM. Potencia las notas de especias cálidas, resinas preciosas y una vainilla ambarada ultra duradera proyectando gran presencia."
  },
  {
    nombre: "9 PM Night Out",
    marca: "Afnan",
    precio: 48,
    imagen: "Perfumes/9PMNightOut.jpeg",
    descripcion: "Diseñado para la vida nocturna y eventos especiales. Combina acordes dulces, toques de especias aromáticas y maderas intensas que garantizan fijación de larga duración."
  },
  {
    nombre: "Yum Yum",
    marca: "Armaf",
    precio: 42,
    imagen: "Perfumes/ArmarfYumYum.jpeg",
    descripcion: "Una fragancia gourmand juguetona y envolvente. Combina frutas tropicales maduras, toques de vainilla cremoso y acordes de repostería fina ideal para un estilo jovial y dulce."
  },
  {
    nombre: "Asad Elixir",
    marca: "Lattafa",
    precio: 50,
    imagen: "Perfumes/AsadElixirLattafa.jpeg",
    descripcion: "Una interpretación magistral y lujosa de Asad. Inicia con azafrán y pimienta, revelando un corazón rico de especias finas y un fondo imponente de oud, ámbar y vainilla negra."
  },
  {
    nombre: "Asad Bourbon",
    marca: "Lattafa",
    precio: 52,
    imagen: "Perfumes/AssadBourbon.jpeg",
    descripcion: "Un perfume cálido y sofisticado. Incorpora acordes de licor añejado, haba tonka ahumada, bálsamos y maderas preciosas con un toque refinado de vainilla Bourbon."
  },
  {
    nombre: "Asad",
    marca: "Lattafa",
    precio: 45,
    imagen: "Perfumes/AssadLattfa.jpeg",
    descripcion: "Uno de los perfumes árabes más aclamados mundialmente. Abre con piña, pimienta negra y especias, abriendo paso a notas de café, iris y tabaco sobre un fondo balsámico y dulce de ámbar y vainilla."
  },
  {
    nombre: "Club de Nuit Iconic",
    marca: "Armaf",
    precio: 55,
    imagen: "Perfumes/ClubdeNuitIcolnic.jpeg",
    descripcion: "Una fragancia fresca, azul y sumamente versátil. Mezcla notas cítricas brillantes como toronja y limón con un toque picante de jengibre, menta e incienso amaderado."
  },
  {
    nombre: "Club de Nuit Intense Man",
    marca: "Armaf",
    precio: 48,
    imagen: "Perfumes/ClubdeNuitIntenseMan.jpeg",
    descripcion: "El rey indiscutible de los cumplidos. Salida ahumada y cítrica de limón, piña y grosellas negras, combinada con abedul, jazmín, almizcle y ámbar gris de proyección legendaria."
  },
  {
    nombre: "Club de Nuit Urban Man Elixir",
    marca: "Armaf",
    precio: 52,
    imagen: "Perfumes/ClubdeNuitUrbanManElixir.jpeg",
    descripcion: "Una fusión moderna que equilibra tonos limpios, especiados y aromáticos. Destaca por notas de flor de azahar, lavanda, pimienta y un fondo ambarado duradero."
  },
  {
    nombre: "Hawas Ice",
    marca: "Rasasi",
    precio: 60,
    imagen: "Perfumes/HawasIce.jpeg",
    descripcion: "La variante ultra fresca y congelada de Hawas. Inicia con manzana crujiente, cítricos helados y menta fresca, matizada con cardamomo y un fondo marino de musgo de roble y ámbar gris."
  },
  {
    nombre: "Hawas Tropical",
    marca: "Rasasi",
    precio: 60,
    imagen: "Perfumes/HawasTropical.jpeg",
    descripcion: "Una explosión frutal exótica inspirada en islas paradisíacas. Integra notas jugosas de frutas tropicales con acentos acuáticos y un fondo limpio amaderado."
  },
  {
    nombre: "Khamrah Dukan",
    marca: "Lattafa",
    precio: 55,
    imagen: "Perfumes/KhamrahDukan.jpeg",
    descripcion: "Una variación intensa con acentos ahumados de resinas y especias tradicionales orientales, combinadas con la dulzura característica de la línea Khamrah."
  },
  {
    nombre: "Khamrah",
    marca: "Lattafa",
    precio: 50,
    imagen: "Perfumes/KhamrahLattfa.jpeg",
    descripcion: "Una joya dulce y gourmand. Abre con canela, nuez moscada y bergamota, evolucionando hacia un corazón de praliné, fechas y tuberosa, sellando con vainilla de Madagascar y mirra."
  },
  {
    nombre: "Khamrah Qahwa",
    marca: "Lattafa",
    precio: 55,
    imagen: "Perfumes/KhamrahQahwa.jpeg",
    descripcion: "La aclamada versión enriquecida con café arábigo tostado. Agrega notas profundas de espresso, cardamomo dulce y praliné a la fórmula original de Khamrah."
  },
  {
    nombre: "Khamrah Waha",
    marca: "Lattafa",
    precio: 52,
    imagen: "Perfumes/KhamrahWaha.jpeg",
    descripcion: "Una interpretación enriquecida con matices balsámicos suaves y florales especiados, conservando una base dulce, rica y cálida."
  },
  {
    nombre: "Odyssey Homme",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyHomme.jpeg",
    descripcion: "Una fragancia elegante y atalcada. Combina iris elegante, notas orientales de ámbar, vainilla gourmand y toques suaves de cuero que proyectan refinamiento."
  },
  {
    nombre: "Odyssey Mandarin Sky",
    marca: "Armaf",
    precio: 48,
    imagen: "Perfumes/OdysseyMandarinSky.jpeg",
    descripcion: "Un perfume vibrante dulce y cítrico. Destaca por notas de mandarina jugosa, naranja dulce, caramelo salado, salvia y haba tonka dulce sobre vetiver."
  }
];

function formatearPrecio(precio) {
  return "$" + precio.toFixed(2);
}

function enlaceWhatsApp(mensaje) {
  return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
}

function marcadorImagen(texto) {
  const inicial = (texto || "KP").split(" ")[0].slice(0, 2).toUpperCase();
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'>" +
    "<rect width='100%' height='100%' fill='#070C15'/>" +
    "<text x='50%' y='50%' font-family='Georgia, serif' font-size='64' fill='#D4AF37' opacity='0.22' text-anchor='middle' dominant-baseline='middle'>" + inicial + "</text>" +
    "</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function reemplazarImagen(img) {
  img.onerror = null;
  img.src = marcadorImagen(img.alt);
}

/* ---------- Render de productos ---------- */

const contenedor = document.getElementById("productos");

try {
  productos.forEach((producto, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("producto");

    const mensajePedido = "Hola, me interesa el perfume " + producto.nombre;

    tarjeta.innerHTML = `
      <div class="producto-imagen">
        <img src="${producto.imagen}" alt="${producto.nombre} de ${producto.marca}" loading="lazy" decoding="async" onerror="reemplazarImagen(this)">
      </div>
      <div class="producto-info">
        <span class="producto-casa">${producto.marca}</span>
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <p class="producto-precio">${formatearPrecio(producto.precio)}</p>
        <button class="btn-ver" type="button">Ver descripción</button>
        <a class="btn-whatsapp" href="${enlaceWhatsApp(mensajePedido)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    `;

    tarjeta.addEventListener("click", (evento) => {
      if (evento.target.closest(".btn-whatsapp")) {
        return;
      }
      abrirModal(producto);
    });

    contenedor.appendChild(tarjeta);
  });

  console.info("[Kenshua] Catálogo cargado: " + productos.length + " productos.");
} catch (error) {
  console.error("[Kenshua] Error al renderizar el catálogo:", error);
  document.getElementById("productos").innerHTML =
    '<p class="sin-js">No fue posible cargar el catálogo. Intenta recargar la página.</p>';
}

/* ---------- Modal de producto ---------- */

const modal = document.getElementById("modal-perfume");

const modalImagen = document.getElementById("modal-imagen");
const modalMarca = document.getElementById("modal-marca");
const modalNombre = document.getElementById("modal-nombre");
const modalPrecio = document.getElementById("modal-precio");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalPedir = document.getElementById("modal-pedir");

function abrirModal(producto) {
  modalImagen.src = producto.imagen;
  modalImagen.alt = producto.nombre + " de " + producto.marca;
  modalMarca.textContent = producto.marca;
  modalNombre.textContent = producto.nombre;
  modalPrecio.textContent = formatearPrecio(producto.precio);
  modalDescripcion.textContent = producto.descripcion;
  modalPedir.href = enlaceWhatsApp("Hola, me interesa el perfume " + producto.nombre);

  modal.classList.add("abierto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function cerrarModal() {
  modal.classList.remove("abierto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);
document.querySelector(".modal-fondo").addEventListener("click", cerrarModal);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

/* ---------- Menú móvil ---------- */

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("overlay");

function cerrarMenu() {
  sidebar.classList.remove("abierta");
  overlay.classList.remove("activo");
  menuToggle.classList.remove("activo");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const abierta = sidebar.classList.toggle("abierta");
  overlay.classList.toggle("activo", abierta);
  menuToggle.classList.toggle("activo", abierta);
  menuToggle.setAttribute("aria-expanded", abierta ? "true" : "false");
});

overlay.addEventListener("click", cerrarMenu);
document.querySelectorAll(".nav-enlace").forEach((enlace) => {
  enlace.addEventListener("click", cerrarMenu);
});

/* ---------- Pestañas del catálogo ---------- */

const botonesTab = document.querySelectorAll(".tab-btn");

botonesTab.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesTab.forEach((b) => {
      b.classList.remove("activo");
      b.setAttribute("aria-selected", "false");
    });
    boton.classList.add("activo");
    boton.setAttribute("aria-selected", "true");

    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.remove("activo");
    });
    document.getElementById(boton.dataset.tab).classList.add("activo");
  });
});

/* ---------- Aparición al hacer scroll ---------- */

const elementosRevelar = document.querySelectorAll(".reveal");

function revelarTodo() {
  elementosRevelar.forEach((el) => el.classList.add("visible"));
}

if ("IntersectionObserver" in window) {
  const revelar = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          revelar.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  elementosRevelar.forEach((elemento) => revelar.observe(elemento));

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 400);
  });
} else {
  revelarTodo();
}

/* ---------- Formulario de contacto ---------- */

document.getElementById("contacto-form").addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const textoPedido =
    "Hola Kenshua Parfums, soy " + nombre +
    " (teléfono: " + telefono + ").\n\n" + mensaje;

  window.open(enlaceWhatsApp(textoPedido), "_blank", "noopener");
});

/* ---------- Botón flotante de WhatsApp ---------- */

const botonWa = document.querySelector(".boton-wa");
let waVisible = false;

function actualizarBotonWa() {
  const debeMostrar = window.scrollY > 250;
  if (debeMostrar !== waVisible) {
    waVisible = debeMostrar;
    botonWa.classList.toggle("visible", debeMostrar);
  }
}

window.addEventListener("scroll", actualizarBotonWa, { passive: true });
actualizarBotonWa();