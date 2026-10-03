const NUMERO_WHATSAPP = "50578612261";

const productos = [
  {
    nombre: "9 AM Dive",
    marca: "Afnan",
    precio: 45,
    imagen: "Perfumes/9AMDiveAfnan.jpeg",
    descripcion: "Una fragancia fresca y limpia para el día a día. Se siente cítrica y acuática, con un carácter ligero que va bien con el clima cálido y los planes informales."
  },
  {
    nombre: "9 PM",
    marca: "Afnan",
    precio: 45,
    imagen: "Perfumes/9PM.jpeg",
    descripcion: "Un perfume dulce con aire goloso, pensado para salidas de noche. Tiene calidez y un toque festivo que lo hace cómodo de llevar en eventos y reuniones."
  },
  {
    nombre: "9 PM Elixir",
    marca: "Afnan",
    precio: 50,
    imagen: "Perfumes/9PMElixir.jpeg",
    descripcion: "Una versión más densa y especiada de 9 PM, para quien ya conoce la línea y prefiere algo más intenso. Funciona bien en climas fríos y ocasiones especiales."
  },
  {
    nombre: "9 PM Night Out",
    marca: "Afnan",
    precio: 48,
    imagen: "Perfumes/9PMNightOut.jpeg",
    descripcion: "Otro lado de la línea 9 PM, con un aire más nocturno. Combina la dulzura característica con un toque de especias y se siente festivo. Pensado para salir de noche."
  },
  {
    nombre: "Yum Yum",
    marca: "Armaf",
    precio: 42,
    imagen: "Perfumes/ArmarfYumYum.jpeg",
    descripcion: "Un gourmand juguetón y dulce, con aire de postre. Se siente goloso y alegre, ideal para quienes prefieren aromas que huelen rico y quieren algo distinto al clásico de oficina."
  },
  {
    nombre: "Asad Elixir",
    marca: "Lattafa",
    precio: 50,
    imagen: "Perfumes/AsadElixirLattafa.jpeg",
    descripcion: "Un oriental especiado con carácter oscuro. Combina la calidez de las especias con un fondo amaderado y ámbar, y se siente denso y envolvente. Para quienes buscan un aroma con personalidad."
  },
  {
    nombre: "Asad Bourbon",
    marca: "Lattafa",
    precio: 52,
    imagen: "Perfumes/AssadBourbon.jpeg",
    descripcion: "Un aroma cálido con un guiño de licor y algo de dulzura suave. Es más sobrio que el resto de la línea y cae bien en climas fríos y noches de plan tranquilo."
  },
  {
    nombre: "Asad",
    marca: "Lattafa",
    precio: 45,
    imagen: "Perfumes/AssadLattfa.jpeg",
    descripcion: "Uno de los perfumes con más seguidores de Lattafa. Mezcla especias y vainilla en un aroma masculino, cálido y versátil, que funciona tanto de día como de noche."
  },
  {
    nombre: "Club de Nuit Iconic",
    marca: "Armaf",
    precio: 55,
    imagen: "Perfumes/ClubdeNuitIcolnic.jpeg",
    descripcion: "Una fragancia fresca y cítrica, de esas que se sienten limpias y azules. Es muy versátil: acomoda bien en el trabajo y en salidas informales, sin complicaciones."
  },
  {
    nombre: "Club de Nuit Intense Man",
    marca: "Armaf",
    precio: 48,
    imagen: "Perfumes/ClubdeNuitIntenseMan.jpeg",
    descripcion: "Un clásico entre quienes buscan un perfume con carácter. Tiene una salida cítrica con un toque ahumado y se siente marcado y masculino. Muy popular para ocasiones en las que se quiere destacar."
  },
  {
    nombre: "Club de Nuit Urban Man Elixir",
    marca: "Armaf",
    precio: 52,
    imagen: "Perfumes/ClubdeNuitUrbanManElixir.jpeg",
    descripcion: "Una versión más moderna y limpia de la línea Club de Nuit. Es fresca, aromática y equilibrada, con un carácter urbano. Buena opción diaria que no se siente pesada."
  },
  {
    nombre: "Hawas Ice",
    marca: "Rasasi",
    precio: 60,
    imagen: "Perfumes/HawasIce.jpeg",
    descripcion: "La versión más fresca de la familia Hawas. Tiene un aire acuático que se siente limpio y liviano, ideal para el calor y los looks deportivos."
  },
  {
    nombre: "Hawas Tropical",
    marca: "Rasasi",
    precio: 60,
    imagen: "Perfumes/HawasTropical.jpeg",
    descripcion: "Una fragancia frutal y dulce con espíritu veraniego. Se siente jugosa y tropical, perfecta para climas cálidos y para quienes disfrutan de aromas alegres."
  },
  {
    nombre: "Khamrah Dukan",
    marca: "Lattafa",
    precio: 55,
    imagen: "Perfumes/KhamrahDukan.jpeg",
    descripcion: "Una variante de Khamrah con más resina y especias. Se siente cálida, con la dulzura de la línea y un fondo un poco ahumado. Para quienes quieren lo goloso con más cuerpo."
  },
  {
    nombre: "Khamrah",
    marca: "Lattafa",
    precio: 50,
    imagen: "Perfumes/KhamrahLattfa.jpeg",
    descripcion: "Un gourmand dulce y especiado que se ha vuelto muy popular. Huele a canela, vainilla y dátiles, con un aire cálido y confortable. Ideal para climas fríos y reuniones de noche."
  },
  {
    nombre: "Khamrah Qahwa",
    marca: "Lattafa",
    precio: 55,
    imagen: "Perfumes/KhamrahQahwa.jpeg",
    descripcion: "La versión de Khamrah con un giro de café. Mantiene la dulzura y las especias, pero se nota más tostado y cálido. Para quienes prefieren el dulce con un punto más seco."
  },
  {
    nombre: "Khamrah Waha",
    marca: "Lattafa",
    precio: 52,
    imagen: "Perfumes/KhamrahWaha.jpeg",
    descripcion: "Una versión más suave y redonda de Khamrah. Se siente cálida y menos especiada, fácil de llevar en el día a día de clima templado o frío."
  },
  {
    nombre: "Odyssey Homme",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyHomme.jpeg",
    descripcion: "Un aroma elegante, empolvado y con un toque dulce. Es sobrio y se siente pulido, buena opción para el trabajo o para eventos formales."
  },
  {
    nombre: "Odyssey Mandarin Sky",
    marca: "Armaf",
    precio: 48,
    imagen: "Perfumes/OdysseyMandarinSky.jpeg",
    descripcion: "Un cítrico dulce con aire de caramelo. La mandarina se nota desde el inicio y el conjunto queda goloso y alegre. Para quienes buscan un aroma frutal fácil de usar."
  }
];

function formatearPrecio(precio) {
  return "$" + precio.toFixed(2);
}

function enlaceWhatsApp(mensaje) {
  return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
}

function iniciales(texto) {
  const palabras = (texto || "KP").trim().split(/\s+/);
  const letras = palabras
    .map((palabra) => palabra[0])
    .filter(Boolean);
  return letras.slice(0, 2).join("").toUpperCase();
}

function marcadorImagen(texto) {
  const fondo = "#0A111E";
  const oro = "#D4AF37";
  const inicial = iniciales(texto);
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'>" +
    "<rect width='100%' height='100%' fill='" + fondo + "'/>" +
    "<text x='50%' y='46%' font-family='Georgia, serif' font-size='72' fill='" + oro + "' opacity='0.3' text-anchor='middle' dominant-baseline='middle'>" + inicial + "</text>" +
    "<text x='50%' y='62%' font-family='Georgia, serif' font-size='22' fill='" + oro + "' opacity='0.5' text-anchor='middle' dominant-baseline='middle'>PERFUME</text>" +
    "</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function reemplazarImagen(img) {
  img.onerror = null;
  const alt = img.alt || "";
  const marca = alt.includes(" de ") ? alt.split(" de ").pop() : alt;
  img.src = marcadorImagen(marca || "KP");
}

function escaparHTML(texto) {
  const mapa = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return String(texto).replace(/[&<>"']/g, (caracter) => mapa[caracter]);
}

/* ---------- Render de productos ---------- */

const contenedor = document.getElementById("productos");

function crearTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("producto");

  const nombre = escaparHTML(producto.nombre);
  const marca = escaparHTML(producto.marca);
  const mensajePedido = "Hola, me interesa el perfume " + producto.nombre;

  tarjeta.innerHTML = `
    <div class="producto-imagen">
      <img src="${producto.imagen}" alt="${nombre} de ${marca}" loading="lazy" decoding="async" onerror="reemplazarImagen(this)">
    </div>
    <div class="producto-info">
      <span class="producto-casa">${marca}</span>
      <h3 class="producto-nombre">${nombre}</h3>
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

  return tarjeta;
}

function renderizarProductos(lista) {
  contenedor.innerHTML = "";
  const fragmento = document.createDocumentFragment();
  lista.forEach((producto) => fragmento.appendChild(crearTarjeta(producto)));
  contenedor.appendChild(fragmento);
}

try {
  renderizarProductos(productos);
  console.info("[Kenshua] Catálogo cargado: " + productos.length + " productos.");
} catch (error) {
  console.error("[Kenshua] Error al renderizar el catálogo:", error);
  document.getElementById("productos").innerHTML =
    '<p class="sin-js">No fue posible cargar el catálogo. Intenta recargar la página.</p>';
}

/* ---------- Buscador y filtro ---------- */

const buscador = document.getElementById("buscador-perfumes");
const botonLimpiar = document.getElementById("limpiar-busqueda");

buscador.addEventListener("input", () => {
  const texto = buscador.value.trim();
  botonLimpiar.classList.toggle("visible", texto.length > 0);

  if (texto === "") {
    renderizarProductos(productos);
    return;
  }

  const termino = texto.toLowerCase();
  const filtrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(termino) ||
      producto.marca.toLowerCase().includes(termino)
  );

  if (filtrados.length === 0) {
    contenedor.innerHTML =
      "<p class='sin-resultados'>No se encontraron perfumes que coincidan con " +
      "<span class='sr-term'>'" + escaparHTML(texto) + "'</span>.</p>";
  } else {
    renderizarProductos(filtrados);
  }
});

botonLimpiar.addEventListener("click", () => {
  buscador.value = "";
  botonLimpiar.classList.remove("visible");
  renderizarProductos(productos);
  buscador.focus();
});

/* ---------- Modal de producto ---------- */

const modal = document.getElementById("modal-perfume");

const modalImagen = document.getElementById("modal-imagen");
const modalMarca = document.getElementById("modal-marca");
const modalNombre = document.getElementById("modal-nombre");
const modalPrecio = document.getElementById("modal-precio");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalPedir = document.getElementById("modal-pedir");

let elementoAnterior = null;

function abrirModal(producto) {
  elementoAnterior = document.activeElement;

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

  document.getElementById("modal-cerrar").focus();
}

function cerrarModal() {
  modal.classList.remove("abierto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");

  if (elementoAnterior && typeof elementoAnterior.focus === "function") {
    elementoAnterior.focus();
  }
}

document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);
document.querySelector(".modal-fondo").addEventListener("click", cerrarModal);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && modal.classList.contains("abierto")) {
    cerrarModal();
    return;
  }

  if (evento.key === "Tab" && modal.classList.contains("abierto")) {
    const focables = modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    if (focables.length === 0) {
      return;
    }
    const primero = focables[0];
    const ultimo = focables[focables.length - 1];

    if (evento.shiftKey && document.activeElement === primero) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
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

/* ---------- Aviso de conexión ---------- */

const avisoOffline = document.getElementById("aviso-offline");

function mostrarAviso() {
  avisoOffline.hidden = false;
}

function ocultarAviso() {
  avisoOffline.hidden = true;
}

function sincronizarEstado() {
  if (navigator.onLine) {
    ocultarAviso();
  } else {
    mostrarAviso();
  }
}

function verificarRedReal() {
  fetch(location.origin, { method: "HEAD", cache: "no-store" })
    .then(ocultarAviso)
    .catch(mostrarAviso);
}

window.addEventListener("online", sincronizarEstado);
window.addEventListener("offline", sincronizarEstado);
window.addEventListener("load", () => {
  sincronizarEstado();
  setTimeout(verificarRedReal, 400);
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    verificarRedReal();
  }
});
sincronizarEstado();

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