const NUMERO_WHATSAPP = "50578612261";

const productos = [
  {
    nombre: "Rome Melancholia",
    marca: "Mast Perfumes",
    precio: 55,
    imagen: "Perfumes/RomeMelancholia.png",
    descripcion: "Una fragancia aromática y amaderada con lavanda, apio, cardamomo, nuez moscada, bergamota y piña. Fresca y especiada, para el día o la noche."
  },
  {
    nombre: "Yara",
    marca: "Lattafa",
    precio: 40,
    imagen: "Perfumes/Yara.png",
    descripcion: "Un aroma dulce y cremoso con vainilla, frutas tropicales, almizcle y flores. Suave y femenino, ideal para quienes disfrutan de fragancias golosas."
  },
  {
    nombre: "Yara Candy",
    marca: "Lattafa",
    precio: 35,
    imagen: "Perfumes/YaraCandy.png",
    descripcion: "Una versión frutal y dulce de Yara, con caramelo efervescente, vainilla, grosella negra, mandarina verde, gardenia y almizcle."
  },
  {
    nombre: "Yara Tous",
    marca: "Lattafa",
    precio: 38,
    imagen: "Perfumes/YaraTous.png",
    descripcion: "Una fragancia tropical y floral con mango, coco, jazmín, vainilla, fruta de la pasión y azahar. Alegre y dulce para el día a día."
  },
  {
    nombre: "Qimmah for Women",
    marca: "Lattafa",
    precio: 35,
    imagen: "Perfumes/QimmahForWomen.png",
    descripcion: "Una fragancia floral y cálida con jazmín, tuberosa, vainilla, almendra, haba tonka y cacao. Dulce y envolvente."
  },
  {
    nombre: "Rafan Pour Homme",
    marca: "Rasasi",
    precio: 50,
    imagen: "Perfumes/RafanPourHomme.png",
    descripcion: "Un aroma marino y amaderado con sal marina, jengibre, algas, vetiver, cedro y musgo de roble. Fresco y acuático para climas cálidos."
  },
  {
    nombre: "9 AM Dive",
    marca: "Afnan",
    precio: 40,
    imagen: "Perfumes/9AMDiveAfnan.jpeg",
    descripcion: "Una fragancia fresca y limpia para el día a día. Se siente cítrica y acuática, con un carácter ligero que va bien con el clima cálido y los planes informales."
  },
  {
    nombre: "9 PM",
    marca: "Afnan",
    precio: 40,
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
    precio: 60,
    imagen: "Perfumes/9PMNightOut.jpeg",
    descripcion: "Otro lado de la línea 9 PM, con un aire más nocturno. Combina la dulzura característica con un toque de especias y se siente festivo. Pensado para salir de noche."
  },
  {
    nombre: "Yum Yum",
    marca: "Armaf",
    precio: 60,
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
    precio: 45,
    imagen: "Perfumes/AssadBourbon.jpeg",
    descripcion: "Un aroma cálido con un guiño de licor y algo de dulzura suave. Es más sobrio que el resto de la línea y cae bien en climas fríos y noches de plan tranquilo."
  },
  {
    nombre: "Asad",
    marca: "Lattafa",
    precio: 40,
    imagen: "Perfumes/AssadLattfa.jpeg",
    descripcion: "Uno de los perfumes con más seguidores de Lattafa. Mezcla especias y vainilla en un aroma masculino, cálido y versátil, que funciona tanto de día como de noche."
  },
  {
    nombre: "Club de Nuit Iconic",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/ClubdeNuitIcolnic.jpeg",
    descripcion: "Una fragancia fresca y cítrica, de esas que se sienten limpias y azules. Es muy versátil: acomoda bien en el trabajo y en salidas informales, sin complicaciones."
  },
  {
    nombre: "Club de Nuit Intense Man",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/ClubdeNuitIntenseMan.jpeg",
    descripcion: "Un clásico entre quienes buscan un perfume con carácter. Tiene una salida cítrica con un toque ahumado y se siente marcado y masculino. Muy popular para ocasiones en las que se quiere destacar."
  },
  {
    nombre: "Club de Nuit Urban Man Elixir",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/ClubdeNuitUrbanManElixir.jpeg",
    descripcion: "Una versión más moderna y limpia de la línea Club de Nuit. Es fresca, aromática y equilibrada, con un carácter urbano. Buena opción diaria que no se siente pesada."
  },
  {
    nombre: "Hawas Ice",
    marca: "Rasasi",
    precio: 55,
    imagen: "Perfumes/HawasIce.jpeg",
    descripcion: "La versión más fresca de la familia Hawas. Tiene un aire acuático que se siente limpio y liviano, ideal para el calor y los looks deportivos."
  },
  {
    nombre: "Hawas Tropical",
    marca: "Rasasi",
    precio: 50,
    imagen: "Perfumes/HawasTropical.jpeg",
    descripcion: "Una fragancia frutal y dulce con espíritu veraniego. Se siente jugosa y tropical, perfecta para climas cálidos y para quienes disfrutan de aromas alegres."
  },
  {
    nombre: "Khamrah Dukan",
    marca: "Lattafa",
    precio: 45,
    imagen: "Perfumes/KhamrahDukan.jpeg",
    descripcion: "Una variante de Khamrah con más resina y especias. Se siente cálida, con la dulzura de la línea y un fondo un poco ahumado. Para quienes quieren lo goloso con más cuerpo."
  },
  {
    nombre: "Khamrah",
    marca: "Lattafa",
    precio: 45,
    imagen: "Perfumes/KhamrahLattfa.jpeg",
    descripcion: "Un gourmand dulce y especiado que se ha vuelto muy popular. Huele a canela, vainilla y dátiles, con un aire cálido y confortable. Ideal para climas fríos y reuniones de noche."
  },
  {
    nombre: "Khamrah Qahwa",
    marca: "Lattafa",
    precio: 45,
    imagen: "Perfumes/KhamrahQahwa.jpeg",
    descripcion: "La versión de Khamrah con un giro de café. Mantiene la dulzura y las especias, pero se nota más tostado y cálido. Para quienes prefieren el dulce con un punto más seco."
  },
  {
    nombre: "Khamrah Waha",
    marca: "Lattafa",
    precio: 60,
    imagen: "Perfumes/KhamrahWaha.jpeg",
    descripcion: "Una versión más suave y redonda de Khamrah. Se siente cálida y menos especiada, fácil de llevar en el día a día de clima templado o frío."
  },
  {
    nombre: "Odyssey Homme",
    marca: "Armaf",
    precio: 40,
    imagen: "Perfumes/OdysseyHomme.jpeg",
    descripcion: "Un aroma elegante, empolvado y con un toque dulce. Es sobrio y se siente pulido, buena opción para el trabajo o para eventos formales."
  },
  {
    nombre: "Odyssey Mandarin Sky",
    marca: "Armaf",
    precio: 40,
    imagen: "Perfumes/OdysseyMandarinSky.jpeg",
    descripcion: "Un cítrico dulce con aire de caramelo. La mandarina se nota desde el inicio y el conjunto queda goloso y alegre. Para quienes buscan un aroma frutal fácil de usar."
  },
  {
    nombre: "Club de Nuit Élite",
    marca: "Armaf",
    precio: 60,
    imagen: "Perfumes/ClubdeNuitElite.jpeg",
    descripcion: "Una fragancia cítrica y aromática con un aire fresco y verde. Abre con bergamota, té verde y pimienta, y se asienta en un fondo amaderado de vetiver, cedro y ámbar. Elegante y moderna, ideal para ocasiones formales o para destacar de noche."
  },
  {
    nombre: "Club de Nuit Lionheart Man",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/ClubdeNuitLionheartMan.jpeg",
    descripcion: "Un aroma cálido y especiado con un toque dulce. Combina menta y lavanda en la salida con un fondo de vainilla, benjuí, miel, haba tonka y tabaco. Masculino y envolvente, pensado para climas fríos y noches especiales."
  },
  {
    nombre: "Club de Nuit Precieux",
    marca: "Armaf",
    precio: 60,
    imagen: "Perfumes/ClubdeNuitPrecieux.jpeg",
    descripcion: "Una fragancia lujosa y versátil que mezcla cítricos, frutas y especias. Se siente fresca al inicio y luego despliega un fondo de ámbar, vainilla, cuero y maderas. Sofisticada y con buena estela, para el día o la noche."
  },
  {
    nombre: "9 PM Rebel",
    marca: "Afnan",
    precio: 50,
    imagen: "Perfumes/9PMRebel.jpeg",
    descripcion: "Un perfume dulce, tropical y amaderado que deja huella. La piña y el caramelo se combinan con maderas secas, musgo de roble y ámbar gris. Juvenil y con buena proyección, ideal para salidas nocturnas."
  },
  {
    nombre: "9 AM Pour Femme",
    marca: "Afnan",
    precio: 40,
    imagen: "Perfumes/9AMPourFemme.jpeg",
    descripcion: "Una fragancia femenina fresca y frutal. Abre con toronja y bergamota, sigue con frambuesa y grosellas negras, y cierra con almizcle y naranja. Ligera y fácil de llevar para el día a día."
  },
  {
    nombre: "Club de Nuit Woman",
    marca: "Armaf",
    precio: 40,
    imagen: "Perfumes/ClubdeNuitWoman.jpeg",
    descripcion: "Un aroma floral y frutal con carácter elegante. Combina naranja, toronja, durazno, rosa, jazmín y lichi sobre una base de vainilla, almizcle y vetiver. Versátil y femenino, para el trabajo o una salida."
  },
  {
    nombre: "Club de Nuit Maleka",
    marca: "Armaf",
    precio: 60,
    imagen: "Perfumes/ClubdeNuitMaleka.jpeg",
    descripcion: "Una fragancia dulce y envolvente con un toque gourmand. La bergamota y el lichi dan paso a un corazón de raíz de lirio y un fondo de praliné, sándalo y ambroxan. Sofisticada y cálida, para ocasiones especiales."
  },
  {
    nombre: "Club de Nuit Untold",
    marca: "Armaf",
    precio: 55,
    imagen: "Perfumes/ClubdeNuitUntold.jpeg",
    descripcion: "Un perfume ámbar y amaderado, cálido y sofisticado. Abre con azafrán y jazmín, y se asienta en amberwood, ámbar gris, resina de abeto y cedro. Intenso y elegante, ideal para la noche y el clima frío."
  },
  {
    nombre: "9 PM Pour Femme",
    marca: "Afnan",
    precio: 40,
    imagen: "Perfumes/9PMPourFemme.jpeg",
    descripcion: "Una fragancia femenina floral y frutal con un fondo atalcado. La frambuesa y el ciprés se mezclan con rosa, violeta, pino y cedro. Dulce y versátil, funciona bien de día o de noche."
  },
  {
    nombre: "Odyssey Artisto",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/OdysseyArtisto.jpeg",
    descripcion: "Un aroma dulce y cremoso con un toque tropical. Combina coco, vainilla, frutas tropicales, bergamota y haba tonka sobre un fondo de ámbar. Moderno y versátil, para quienes buscan algo cálido y agradable."
  },
  {
    nombre: "Odyssey Marshmallow",
    marca: "Armaf",
    precio: 40,
    imagen: "Perfumes/OdysseyMarshmallow.jpeg",
    descripcion: "Una fragancia gourmand cremosa y frutal. Abre con coco, manzana y limón, sigue con malvavisco, fresa, durazno y frambuesa, y cierra con queso mascarpone, praliné, vainilla y ámbar. Dulce y juvenil, ideal para el día."
  },
  {
    nombre: "Odyssey Mega Man",
    marca: "Armaf",
    precio: 40,
    imagen: "Perfumes/OdysseyMegaMan.jpeg",
    descripcion: "Un perfume cítrico, aromático y fresco con un fondo amaderado. Limón, jengibre, bergamota, piña, naranja y menta le dan energía, mientras el ámbar y las maderas lo redondean. Muy versátil para el día a día."
  },
  {
    nombre: "Odyssey Aqua Edition",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyAquaEdition.jpeg",
    descripcion: "Una fragancia fresca y acuática con carácter aromático. Menta, naranja, toronja, lavanda, ciprés y ambroxan se combinan en un aroma limpio y moderno. Ideal para el calor y el uso diario."
  },
  {
    nombre: "Odyssey Limoni Fresh",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyLimoniFresh.jpeg",
    descripcion: "Un cítrico fresco y luminoso con un toque verde. Limón, té, naranja, bergamota, mandarina y azahar crean una sensación limpia y vibrante. Perfecto para el día, especialmente en clima cálido."
  },
  {
    nombre: "Odyssey Revolution Ultra Edition",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/OdysseyRevolutionUltraEdition.jpeg",
    descripcion: "Un aroma dulce y afrutado con un fondo cálido y especiado. La piña, el praliné y la grosella negra se mezclan con vainilla, pachulí y naranja sanguina. Moderno y con buena estela, para el día o la noche."
  },
  {
    nombre: "Odyssey Homme White Edition",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/OdysseyHommeWhiteEdition.jpeg",
    descripcion: "Una versión amaderada y aromática de Odyssey Homme. Combina madera de ámbar, vainilla, cardamomo, cedro, pimienta rosa y salvia en un aroma cálido y elegante. Versátil para el día a día y ocasiones formales."
  },
  {
    nombre: "Odyssey Spectra",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/OdysseySpectra.jpeg",
    descripcion: "Una fragancia cálida y especiada con un toque dulce. Lavanda, vainilla, canela, ámbar, tabaco y manzana se unen en un aroma envolvente y con personalidad. Ideal para la noche y el clima frío."
  },
  {
    nombre: "Odyssey Tyrant Special Edition",
    marca: "Armaf",
    precio: 52,
    imagen: "Perfumes/OdysseyTyrantSpecialEdition.jpeg",
    descripcion: "Un perfume fresco, cítrico y especiado con fondo amaderado. Toronja, cítricos, pimienta, lavanda, ambroxan y notas amaderadas le dan un carácter moderno y versátil. Para el día a día y salidas informales."
  },
  {
    nombre: "Odyssey Mandarin Sky Vintage Edition",
    marca: "Armaf",
    precio: 52,
    imagen: "Perfumes/OdysseyMandarinSkyVintageEdition.jpeg",
    descripcion: "Una edición especial de Mandarin Sky, cítrica, amaderada y cálida. La mandarina y los cítricos abren paso a notas amaderadas, especiadas y florales con un fondo de ámbar. Elegante y versátil, para el día o la noche."
  },
  {
    nombre: "Odyssey Toffee Coffee",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyToffeeCoffee.jpeg",
    descripcion: "Un gourmand dulce y cálido con aroma a café y caramelo. Café, toffee, azúcar, vainilla y lactonas se combinan en un perfume cremoso y adictivo. Ideal para el clima frío y las salidas nocturnas."
  },
  {
    nombre: "Odyssey Mandarin Sky Elixir",
    marca: "Armaf",
    precio: 45,
    imagen: "Perfumes/OdysseyMandarinSkyElixir.jpeg",
    descripcion: "Una versión más intensa de Mandarin Sky. Mandarina, caramelo, vainilla, naranja, haba tonka y lavanda crean un aroma cítrico, dulce y cálido. Con buena estela, para quienes buscan destacar."
  },
  {
    nombre: "Odyssey Bahamas",
    marca: "Armaf",
    precio: 50,
    imagen: "Perfumes/OdysseyBahamas.jpeg",
    descripcion: "Una fragancia marina y acuática con un toque afrutado y salado. Agua de mar, melón, cantalupo y pera se combinan en un aroma fresco y veraniego. Perfecta para el calor y los planes al aire libre."
  }
];

/* ---------- Productos Varios ----------
   - precio: en Córdobas (C$). Usa null para mostrar "Precio a consultar".
   - categorias: la primera es la principal; un producto puede aparecer en varias.
   - imagenes: si hay más de una, la tarjeta muestra un carrusel.
   - variantes: botones de color; cada variante tiene sus propias imágenes.
   Las categorías válidas están en CATEGORIAS_VARIOS (orden de los filtros). */

const CATEGORIAS_VARIOS = [
  "Cuidado personal",
  "Artículos electrónicos",
  "Ropa",
  "Juguetes",
  "Muebles / Hogar"
];

const RUTA_VARIOS = "assets/productos-varios/";

// Precio del perchero separado para editarlo fácilmente.
const PRECIO_PERCHERO = 400;

const productosVarios = [
  {
    id: "galaxy-buds-9-pro",
    nombre: "Samsung Galaxy Buds 9 Pro",
    categorias: ["Artículos electrónicos"],
    precio: 450,
    descripcion: "Audífonos inalámbricos con estuche de carga, diseño compacto y cómodo para el día a día. Disponibles en blanco, negro y morado.",
    variantes: [
      { nombre: "Blanco", color: "#F2F2F2", imagenes: [RUTA_VARIOS + "electronica/galaxy-buds-9-pro-blanco.jpeg"] },
      { nombre: "Negro", color: "#1A1A1A", imagenes: [RUTA_VARIOS + "electronica/galaxy-buds-9-pro-negro.jpeg"] },
      { nombre: "Morado", color: "#8E6CC9", imagenes: [RUTA_VARIOS + "electronica/galaxy-buds-9-pro-morado.jpeg"] }
    ]
  },
  {
    id: "secadora-3-en-1",
    nombre: "Secadora 3 en 1",
    categorias: ["Artículos electrónicos", "Cuidado personal"],
    precio: 1350,
    descripcion: "Set de cuidado del cabello 3 en 1: secadora profesional, cepillo alisador y plancha alisadora. Ideal para secar, dar volumen y alisar desde casa.",
    imagenes: [
      RUTA_VARIOS + "electronica/secadora-3-en-1-1.jpeg",
      RUTA_VARIOS + "electronica/secadora-3-en-1-2.jpeg",
      RUTA_VARIOS + "electronica/secadora-3-en-1-3.jpeg",
      RUTA_VARIOS + "electronica/secadora-3-en-1-4.jpeg"
    ]
  },
  {
    id: "perchero-triangular",
    nombre: "Perchero triangular",
    categorias: ["Muebles / Hogar"],
    precio: PRECIO_PERCHERO,
    descripcion: "Perchero triangular con ruedas, de plástico resistente. Barra superior para colgar ropa, 2 repisas inferiores para zapatos o cajas y 4 ruedas giratorias (2 con freno). Medidas aprox.: 150 × 64 × 43 cm.",
    imagenes: [
      RUTA_VARIOS + "hogar/perchero-triangular-1.jpeg",
      RUTA_VARIOS + "hogar/perchero-triangular-2.jpeg",
      RUTA_VARIOS + "hogar/perchero-triangular-3.jpeg",
      RUTA_VARIOS + "hogar/perchero-triangular-4.jpeg"
    ]
  },
  {
    id: "carrito-juegos-medicos",
    nombre: "Carrito de juegos médicos",
    categorias: ["Juguetes"],
    precio: 1250,
    descripcion: "Carrito médico de juego de rol de doble cara con luces y sonido. Incluye 82 piezas para jugar al doctor y fomentar la imaginación.",
    imagenes: [RUTA_VARIOS + "juguetes/carrito-juegos-medicos.jpeg"]
  },
  {
    id: "carrito-comida-rapida",
    nombre: "Carrito de comida rápida",
    categorias: ["Juguetes"],
    precio: 1250,
    descripcion: "Carrito de comida rápida de juego de rol de doble cara, con luces y sonido. Viene en dos versiones: rojo (90 piezas) y morado (99 piezas).",
    variantes: [
      { nombre: "Rojo", color: "#C8282E", imagenes: [RUTA_VARIOS + "juguetes/carrito-comida-rapida-rojo.jpeg"] },
      { nombre: "Morado", color: "#9B4FB5", imagenes: [RUTA_VARIOS + "juguetes/carrito-comida-rapida-morado.jpeg"] }
    ]
  },
  {
    id: "chaqueta-cuero-roja",
    nombre: "Chaqueta de cuero roja",
    categorias: ["Ropa"],
    precio: 2400,
    descripcion: "Chaqueta corta estilo motociclista de cuero rojo con detalles en crema, parches y cierre frontal.",
    imagenes: [
      RUTA_VARIOS + "ropa/chaqueta-cuero-roja-1.jpeg",
      RUTA_VARIOS + "ropa/chaqueta-cuero-roja-2.jpeg"
    ]
  },
  {
    id: "chaqueta-cuero-negra",
    nombre: "Chaqueta de cuero negra",
    categorias: ["Ropa"],
    precio: 2400,
    descripcion: "Chaqueta corta estilo motociclista de cuero negro con detalles en crema, parches y cierre frontal.",
    imagenes: [RUTA_VARIOS + "ropa/chaqueta-cuero-negra.jpeg"]
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

function marcadorImagen(texto, subtitulo) {
  const fondo = "#0A111E";
  const oro = "#D4AF37";
  const inicial = iniciales(texto);
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'>" +
    "<rect width='100%' height='100%' fill='" + fondo + "'/>" +
    "<text x='50%' y='46%' font-family='Georgia, serif' font-size='72' fill='" + oro + "' opacity='0.3' text-anchor='middle' dominant-baseline='middle'>" + inicial + "</text>" +
    "<text x='50%' y='62%' font-family='Georgia, serif' font-size='22' fill='" + oro + "' opacity='0.5' text-anchor='middle' dominant-baseline='middle'>" + (subtitulo || "PERFUME") + "</text>" +
    "</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function reemplazarImagen(img) {
  img.onerror = null;
  const alt = img.alt || "";
  if (img.dataset.tipo === "vario") {
    img.src = marcadorImagen(alt || "KP", "KENSHUA");
    return;
  }
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

/* ---------- Productos Varios: tarjetas con galería ---------- */

const contenedorVarios = document.getElementById("productos-varios");

const ICONO_WHATSAPP = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

const FLECHA_IZQ = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>';
const FLECHA_DER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>';

function formatearCordobas(precio) {
  if (typeof precio !== "number") {
    return "Precio a consultar";
  }
  return "C$ " + precio.toLocaleString("en-US");
}

function tieneVariantes(producto) {
  return Array.isArray(producto.variantes) && producto.variantes.length > 0;
}

function imagenesDe(producto, indiceVariante) {
  if (tieneVariantes(producto)) {
    return producto.variantes[indiceVariante].imagenes;
  }
  return producto.imagenes || [];
}

function mensajeVario(producto, indiceVariante) {
  let mensaje = "Hola, me interesa el producto " + producto.nombre;
  if (tieneVariantes(producto)) {
    mensaje += " (color " + producto.variantes[indiceVariante].nombre + ")";
  }
  return mensaje;
}

function montarGaleria(galeria, imagenes, alt) {
  const total = imagenes.length;
  const altSeguro = escaparHTML(alt);

  const slides = imagenes
    .map(
      (src, i) =>
        '<div class="galeria-slide">' +
        '<img src="' + src + '" alt="' + altSeguro + (total > 1 ? " — foto " + (i + 1) + " de " + total : "") +
        '" data-tipo="vario" loading="lazy" decoding="async" onerror="reemplazarImagen(this)">' +
        "</div>"
    )
    .join("");

  let controles = "";
  if (total > 1) {
    const puntos = imagenes
      .map((_, i) => '<span class="galeria-punto' + (i === 0 ? " activo" : "") + '"></span>')
      .join("");
    controles =
      '<button class="galeria-flecha galeria-prev" type="button" aria-label="Foto anterior">' + FLECHA_IZQ + "</button>" +
      '<button class="galeria-flecha galeria-next" type="button" aria-label="Foto siguiente">' + FLECHA_DER + "</button>" +
      '<div class="galeria-puntos" aria-hidden="true">' + puntos + "</div>";
  }

  galeria.classList.toggle("galeria-multiple", total > 1);
  galeria.innerHTML =
    '<div class="galeria-pista"' + (total > 1 ? ' tabindex="0" aria-label="Fotos de ' + altSeguro + '"' : "") + ">" +
    slides +
    "</div>" +
    controles;

  const pista = galeria.querySelector(".galeria-pista");
  galeria.indiceActual = 0;

  if (total <= 1) {
    return;
  }

  const puntos = galeria.querySelectorAll(".galeria-punto");

  function irA(indice) {
    const destino = (indice + total) % total;
    pista.scrollTo({ left: destino * pista.clientWidth, behavior: "smooth" });
  }

  let pendiente = false;
  pista.addEventListener(
    "scroll",
    () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        const indice = Math.round(pista.scrollLeft / Math.max(pista.clientWidth, 1));
        if (indice !== galeria.indiceActual) {
          galeria.indiceActual = indice;
          puntos.forEach((p, i) => p.classList.toggle("activo", i === indice));
        }
      });
    },
    { passive: true }
  );

  galeria.querySelector(".galeria-prev").addEventListener("click", (evento) => {
    evento.stopPropagation();
    irA(galeria.indiceActual - 1);
  });

  galeria.querySelector(".galeria-next").addEventListener("click", (evento) => {
    evento.stopPropagation();
    irA(galeria.indiceActual + 1);
  });

  pista.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      irA(galeria.indiceActual - 1);
    } else if (evento.key === "ArrowRight") {
      evento.preventDefault();
      irA(galeria.indiceActual + 1);
    }
  });
}

function crearTarjetaVaria(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("producto", "producto-vario");

  let varianteActual = 0;
  const nombre = escaparHTML(producto.nombre);
  const categoria = escaparHTML(producto.categorias.join(" · "));

  let htmlColores = "";
  if (tieneVariantes(producto)) {
    const botones = producto.variantes
      .map(
        (variante, i) =>
          '<button class="color-btn' + (i === 0 ? " activo" : "") + '" type="button" role="radio"' +
          ' aria-checked="' + (i === 0 ? "true" : "false") + '"' +
          ' aria-label="Color ' + escaparHTML(variante.nombre) + '" title="' + escaparHTML(variante.nombre) + '"' +
          ' data-indice="' + i + '" style="--color-muestra:' + variante.color + '"></button>'
      )
      .join("");
    htmlColores =
      '<div class="colores">' +
      '<div class="colores-botones" role="radiogroup" aria-label="Color">' + botones + "</div>" +
      '<span class="color-nombre">' + escaparHTML(producto.variantes[0].nombre) + "</span>" +
      "</div>";
  }

  tarjeta.innerHTML = `
    <div class="producto-imagen galeria"></div>
    <div class="producto-info">
      <span class="producto-casa">${categoria}</span>
      <h3 class="producto-nombre">${nombre}</h3>
      <p class="producto-precio">${formatearCordobas(producto.precio)}</p>
      ${htmlColores}
      <button class="btn-ver" type="button">Ver descripción</button>
      <a class="btn-whatsapp" href="${enlaceWhatsApp(mensajeVario(producto, 0))}" target="_blank" rel="noopener">
        ${ICONO_WHATSAPP}
        Pedir por WhatsApp
      </a>
    </div>
  `;

  const galeria = tarjeta.querySelector(".galeria");
  const enlacePedido = tarjeta.querySelector(".btn-whatsapp");
  montarGaleria(galeria, imagenesDe(producto, 0), producto.nombre);

  tarjeta.querySelectorAll(".color-btn").forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const indice = Number(boton.dataset.indice);
      if (indice === varianteActual) return;
      varianteActual = indice;

      tarjeta.querySelectorAll(".color-btn").forEach((b) => {
        const activo = b === boton;
        b.classList.toggle("activo", activo);
        b.setAttribute("aria-checked", activo ? "true" : "false");
      });
      const variante = producto.variantes[indice];
      tarjeta.querySelector(".color-nombre").textContent = variante.nombre;
      montarGaleria(galeria, variante.imagenes, producto.nombre + " " + variante.nombre);
      enlacePedido.href = enlaceWhatsApp(mensajeVario(producto, indice));
    });
  });

  tarjeta.addEventListener("click", (evento) => {
    if (evento.target.closest(".btn-whatsapp, .galeria-flecha, .color-btn")) {
      return;
    }
    const imagenes = imagenesDe(producto, varianteActual);
    const variante = tieneVariantes(producto) ? producto.variantes[varianteActual] : null;
    mostrarModal({
      imagen: imagenes[galeria.indiceActual || 0] || imagenes[0],
      alt: producto.nombre,
      tipo: "vario",
      etiqueta: producto.categorias.join(" · "),
      nombre: producto.nombre + (variante ? " — " + variante.nombre : ""),
      precio: formatearCordobas(producto.precio),
      descripcion: producto.descripcion,
      mensaje: mensajeVario(producto, varianteActual)
    });
  });

  return tarjeta;
}

function renderizarVarios(lista) {
  contenedorVarios.innerHTML = "";
  const fragmento = document.createDocumentFragment();
  lista.forEach((producto) => fragmento.appendChild(crearTarjetaVaria(producto)));
  contenedorVarios.appendChild(fragmento);
}

/* ---------- Buscador y filtros ---------- */

const buscador = document.getElementById("buscador-perfumes");
const botonLimpiar = document.getElementById("limpiar-busqueda");

const PLACEHOLDERS = {
  perfumes: "Buscar por nombre o marca...",
  otros: "Buscar por nombre o categoría..."
};

const filtros = {
  perfumes: { texto: "", marca: null, letra: null },
  otros: { texto: "", categoria: null, letra: null }
};

let pestanaActiva = "perfumes";

function normalizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function letraInicial(nombre) {
  const letra = normalizar(nombre.trim()).charAt(0).toUpperCase();
  return /[A-Z]/.test(letra) ? letra : "#";
}

function compararNombres(a, b) {
  return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base", numeric: true });
}

function mezclar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Orden "revuelto" fijo durante la visita, para que no salte al filtrar.
const variosMezclados = mezclar(productosVarios);

function crearBotonFiltro(clase, etiqueta, valor, cantidad) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = clase;
  boton.dataset.valor = valor === null ? "" : valor;
  boton.setAttribute("aria-pressed", "false");
  boton.innerHTML =
    escaparHTML(etiqueta) +
    (typeof cantidad === "number" ? ' <span class="chip-cantidad">' + cantidad + "</span>" : "");
  return boton;
}

function construirChips(contenedorChips, opciones, alElegir) {
  contenedorChips.innerHTML = "";
  contenedorChips.appendChild(crearBotonFiltro("chip", "Todas", null));
  opciones.forEach((opcion) => {
    const boton = crearBotonFiltro("chip", opcion.etiqueta, opcion.valor, opcion.cantidad);
    if (opcion.cantidad === 0) {
      boton.disabled = true;
    }
    contenedorChips.appendChild(boton);
  });
  contenedorChips.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton || boton.disabled) return;
    alElegir(boton.dataset.valor || null);
  });
}

function construirLetras(contenedorLetras, nombres, alElegir) {
  const disponibles = new Set(nombres.map(letraInicial));
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  if (disponibles.has("#")) {
    letras.unshift("#");
  }
  contenedorLetras.innerHTML = "";
  contenedorLetras.appendChild(crearBotonFiltro("letra letra-todas", "Todas", null));
  letras.forEach((letra) => {
    const boton = crearBotonFiltro("letra", letra, letra);
    boton.setAttribute("aria-label", letra === "#" ? "Empiezan con número" : "Letra " + letra);
    if (!disponibles.has(letra)) {
      boton.disabled = true;
    }
    contenedorLetras.appendChild(boton);
  });
  contenedorLetras.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton || boton.disabled) return;
    alElegir(boton.dataset.valor || null);
  });
}

function marcarActivo(contenedorBotones, valor) {
  contenedorBotones.querySelectorAll("button").forEach((boton) => {
    const activo = (boton.dataset.valor || null) === valor;
    boton.classList.toggle("activo", activo);
    boton.setAttribute("aria-pressed", activo ? "true" : "false");
  });
}

function mensajeSinResultados(texto, tipo) {
  if (texto) {
    return (
      "<p class='sin-resultados'>No se encontraron " + tipo + " que coincidan con " +
      "<span class='sr-term'>'" + escaparHTML(texto) + "'</span>.</p>"
    );
  }
  return "<p class='sin-resultados'>No hay " + tipo + " con los filtros seleccionados.</p>";
}

/* Perfumes: texto + marca + letra inicial */

const chipsMarca = document.getElementById("chips-marca");
const letrasPerfumes = document.getElementById("letras-perfumes");
const resumenPerfumes = document.getElementById("resumen-perfumes");
const limpiarPerfumes = document.getElementById("limpiar-perfumes");

function aplicarFiltrosPerfumes() {
  const estado = filtros.perfumes;
  const termino = normalizar(estado.texto);

  let lista = productos.filter(
    (producto) =>
      (!estado.marca || producto.marca === estado.marca) &&
      (!estado.letra || letraInicial(producto.nombre) === estado.letra) &&
      (!termino ||
        normalizar(producto.nombre).includes(termino) ||
        normalizar(producto.marca).includes(termino))
  );

  if (estado.letra) {
    lista = lista.slice().sort(compararNombres);
  }

  marcarActivo(chipsMarca, estado.marca);
  marcarActivo(letrasPerfumes, estado.letra);
  limpiarPerfumes.classList.toggle("visible", Boolean(estado.marca || estado.letra || estado.texto));
  resumenPerfumes.textContent = "Mostrando " + lista.length + " de " + productos.length + " perfumes";

  if (lista.length === 0) {
    contenedor.innerHTML = mensajeSinResultados(estado.texto, "perfumes");
  } else {
    renderizarProductos(lista);
  }
}

/* Productos Varios: texto + categoría + letra inicial */

const chipsCategoria = document.getElementById("chips-categoria");
const letrasOtros = document.getElementById("letras-otros");
const resumenOtros = document.getElementById("resumen-otros");
const limpiarOtros = document.getElementById("limpiar-otros");

function textoBuscableVario(producto) {
  const colores = tieneVariantes(producto) ? producto.variantes.map((v) => v.nombre).join(" ") : "";
  return normalizar(producto.nombre + " " + producto.categorias.join(" ") + " " + colores);
}

function aplicarFiltrosVarios() {
  const estado = filtros.otros;
  const termino = normalizar(estado.texto);

  let lista = variosMezclados.filter(
    (producto) =>
      (!estado.categoria || producto.categorias.includes(estado.categoria)) &&
      (!estado.letra || letraInicial(producto.nombre) === estado.letra) &&
      (!termino || textoBuscableVario(producto).includes(termino))
  );

  if (estado.letra) {
    lista = lista.slice().sort(compararNombres);
  }

  marcarActivo(chipsCategoria, estado.categoria);
  marcarActivo(letrasOtros, estado.letra);
  limpiarOtros.classList.toggle("visible", Boolean(estado.categoria || estado.letra || estado.texto));
  resumenOtros.textContent = "Mostrando " + lista.length + " de " + productosVarios.length + " productos";

  if (lista.length === 0) {
    contenedorVarios.innerHTML = mensajeSinResultados(estado.texto, "productos");
  } else {
    renderizarVarios(lista);
  }
}

function aplicarFiltros(pestana) {
  if (pestana === "otros") {
    aplicarFiltrosVarios();
  } else {
    aplicarFiltrosPerfumes();
  }
}

function iniciarFiltros() {
  const marcas = Array.from(new Set(productos.map((p) => p.marca))).sort((a, b) =>
    a.localeCompare(b, "es", { sensitivity: "base" })
  );
  construirChips(
    chipsMarca,
    marcas.map((marca) => ({
      valor: marca,
      etiqueta: marca,
      cantidad: productos.filter((p) => p.marca === marca).length
    })),
    (valor) => {
      filtros.perfumes.marca = valor;
      aplicarFiltrosPerfumes();
    }
  );
  construirLetras(letrasPerfumes, productos.map((p) => p.nombre), (valor) => {
    filtros.perfumes.letra = filtros.perfumes.letra === valor ? null : valor;
    aplicarFiltrosPerfumes();
  });

  construirChips(
    chipsCategoria,
    CATEGORIAS_VARIOS.map((categoria) => ({
      valor: categoria,
      etiqueta: categoria,
      cantidad: productosVarios.filter((p) => p.categorias.includes(categoria)).length
    })),
    (valor) => {
      filtros.otros.categoria = valor;
      aplicarFiltrosVarios();
    }
  );
  construirLetras(letrasOtros, productosVarios.map((p) => p.nombre), (valor) => {
    filtros.otros.letra = filtros.otros.letra === valor ? null : valor;
    aplicarFiltrosVarios();
  });
}

function limpiarFiltros(pestana) {
  const estado = filtros[pestana];
  Object.keys(estado).forEach((clave) => {
    estado[clave] = clave === "texto" ? "" : null;
  });
  if (pestana === pestanaActiva) {
    buscador.value = "";
    botonLimpiar.classList.remove("visible");
  }
  aplicarFiltros(pestana);
}

limpiarPerfumes.addEventListener("click", () => limpiarFiltros("perfumes"));
limpiarOtros.addEventListener("click", () => limpiarFiltros("otros"));

buscador.addEventListener("input", () => {
  const texto = buscador.value.trim();
  botonLimpiar.classList.toggle("visible", texto.length > 0);
  filtros[pestanaActiva].texto = texto;
  aplicarFiltros(pestanaActiva);
});

botonLimpiar.addEventListener("click", () => {
  buscador.value = "";
  botonLimpiar.classList.remove("visible");
  filtros[pestanaActiva].texto = "";
  aplicarFiltros(pestanaActiva);
  buscador.focus();
});

function cambiarBusquedaDePestana(pestana) {
  pestanaActiva = pestana;
  buscador.placeholder = PLACEHOLDERS[pestana] || PLACEHOLDERS.perfumes;
  buscador.value = filtros[pestana].texto;
  botonLimpiar.classList.toggle("visible", buscador.value.length > 0);
}

try {
  iniciarFiltros();
  aplicarFiltrosPerfumes();
  console.info("[Kenshua] Catálogo cargado: " + productos.length + " productos.");
} catch (error) {
  console.error("[Kenshua] Error al renderizar el catálogo:", error);
  document.getElementById("productos").innerHTML =
    '<p class="sin-js">No fue posible cargar el catálogo. Intenta recargar la página.</p>';
}

try {
  aplicarFiltrosVarios();
  console.info("[Kenshua] Productos varios cargados: " + productosVarios.length + " productos.");
} catch (error) {
  console.error("[Kenshua] Error al renderizar productos varios:", error);
  contenedorVarios.innerHTML =
    '<p class="sin-js">No fue posible cargar los productos. Intenta recargar la página.</p>';
}

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
  mostrarModal({
    imagen: producto.imagen,
    alt: producto.nombre + " de " + producto.marca,
    tipo: "perfume",
    etiqueta: producto.marca,
    nombre: producto.nombre,
    precio: formatearPrecio(producto.precio),
    descripcion: producto.descripcion,
    mensaje: "Hola, me interesa el perfume " + producto.nombre
  });
}

function mostrarModal(datos) {
  elementoAnterior = document.activeElement;

  modalImagen.onerror = function () {
    reemplazarImagen(this);
  };
  modalImagen.dataset.tipo = datos.tipo;
  modalImagen.src = datos.imagen;
  modalImagen.alt = datos.alt;
  modalMarca.textContent = datos.etiqueta;
  modalNombre.textContent = datos.nombre;
  modalPrecio.textContent = datos.precio;
  modalDescripcion.textContent = datos.descripcion;
  modalPedir.href = enlaceWhatsApp(datos.mensaje);

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
    cambiarBusquedaDePestana(boton.dataset.tab);
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
    { threshold: 0 }
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
