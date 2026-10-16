export const LOGO_URL = "https://appartes-ssite.vercel.app/imgs/logo_appartes.png";

// Páginas del menú principal
export const navLinks = [
  { to: "/", label: "Inicio", end: true },
  { to: "/appartes", label: "APPARTES" },
  { to: "/banda", label: "Banda" },
  { to: "/comunidad", label: "Comunidad" },
  { to: "/academia", label: "Academia" },
  { to: "/revista", label: "Revista" },
  { to: "/archivo", label: "Archivo" },
  { to: "/tv", label: "TV" },
  { to: "/agenda", label: "Agenda" },
];

// Franja de muestras del hero (rampa marfil → dorado → oscuro). Cada una lleva a su página o sección.
export const swatches = [
  { label: "Inicio", to: "/", bg: "bg-ivory", text: "text-ink" },
  { label: "APPARTES", to: "/appartes", bg: "bg-[#eee0bd]", text: "text-ink" },
  { label: "Banda", to: "/banda", bg: "bg-[#e9d6a8]", text: "text-ink" },
  { label: "Comunidad", to: "/comunidad", bg: "bg-[#dfc78d]", text: "text-ink" },
  { label: "Academia", to: "/academia", bg: "bg-gold", text: "text-ink" },
  { label: "Revista", to: "/revista", bg: "bg-[#c99f4a]", text: "text-ink" },
  { label: "Archivo", to: "/archivo", bg: "bg-[#b98b35]", text: "text-ink" },
  { label: "TV", to: "/tv", bg: "bg-gold-deep", text: "text-white" },
  { label: "Agenda", to: "/agenda", bg: "bg-[#49494d]", text: "text-white" },
  { label: "Únase", to: "/unete", bg: "border border-line bg-ink-soft", text: "text-white" },
];

export const hero = {
  kicker: "Portal Cultural de Palmares",
  title: "Arte, cultura y comunidad para Palmares y Occidente.",
  subtitle:
    "La Asociación Palmareña Para las Artes impulsa el desarrollo artístico, cultural y educativo de la región, creando espacios de formación, colaboración y proyección para artistas, agrupaciones y gestores culturales.",
};

// Tarjetas de la página de Inicio hacia las páginas internas
export const homeCards = {
  title: "Conozca APPARTES",
  subtitle: "Información sobre la asociación, sus proyectos y sus actividades.",
  items: [
    { to: "/appartes", titulo: "APPARTES", texto: "Misión, visión, valores e integrantes de la junta directiva." },
    { to: "/banda", titulo: "Banda de Conciertos de Palmares", texto: "Nuestro proyecto principal, fundado en 2023." },
    { to: "/comunidad", titulo: "Comunidad Artística", texto: "Los proyectos y agrupaciones que forman parte de APPARTES." },
    { to: "/academia", titulo: "Academia", texto: "Cursos de lectura musical, teoría musical, ritmo e historia de la música." },
    { to: "/revista", titulo: "Revista Cultural", texto: "Artículos, entrevistas e investigaciones culturales." },
    { to: "/archivo", titulo: "Archivo Histórico", texto: "Fotografías, programas de conciertos, partituras y patrimonio cultural." },
    { to: "/tv", titulo: "APPARTES TV", texto: "Videos de la asociación en YouTube." },
    { to: "/agenda", titulo: "Agenda Cultural", texto: "Fechas de conciertos y apariciones culturales." },
  ],
};

export const about = {
  kicker: "Asociación Palmareña Para las Artes",
  title: "APPARTES",
  subtitle: "Plataforma cultural para Palmares y la región de Occidente.",
  fundacion: "2026",
  mision:
    "La Asociación Palmareña para las Artes (APPARTES) tiene como misión promover, fortalecer y difundir el desarrollo artístico, cultural y educativo de la comunidad, creando espacios de participación, formación, colaboración y proyección para artistas, agrupaciones y gestores culturales. Mediante iniciativas que integran la música, las artes escénicas, las artes visuales, la literatura y el patrimonio cultural, APPARTES busca enriquecer la vida de las personas y contribuir al desarrollo cultural sostenible de Palmares y la región de Occidente.",
  vision:
    "Ser la principal plataforma de articulación cultural de Palmares y la región de Occidente, reconocida por impulsar el talento artístico, preservar el patrimonio cultural, promover la educación artística y fortalecer la participación comunitaria, convirtiéndose en un referente regional de innovación, colaboración y desarrollo cultural.",
};

export const junta = [
  { rol: "Presidente", nombre: "Marcos Vinicio Ramírez Carranza" },
  { rol: "Vicepresidente", nombre: "Brayan Amado Víquez Álvarez" },
  { rol: "Secretaria", nombre: "Heisel Dixiana Villalobos Vargas" },
  { rol: "Tesorero", nombre: "Armando José Fernández Jiménez" },
  { rol: "Vocal 1", nombre: "Nazareth María Ruiz Acuña" },
  { rol: "Vocal 2", nombre: "Luis Isaac Morera Montero" },
  { rol: "Vocal 3", nombre: "Doenitz Walter Andaluz Arrieche" },
  { rol: "Fiscal", nombre: "Kenneth Francisco Araya Fernández" },
];

export const valores = [
  { nombre: "Compromiso", texto: "Responsabilidad y dedicación en favor del desarrollo artístico y cultural." },
  { nombre: "Excelencia", texto: "Calidad, disciplina y crecimiento continuo en cada actividad." },
  { nombre: "Inclusión", texto: "Participación abierta de personas y agrupaciones de toda disciplina." },
  { nombre: "Colaboración", texto: "Trabajo conjunto para fortalecer la cultura de la región." },
  { nombre: "Creatividad", texto: "Innovación y búsqueda constante de nuevas formas de expresión." },
  { nombre: "Respeto por el patrimonio", texto: "Preservación de la memoria histórica y las tradiciones locales." },
  { nombre: "Servicio a la comunidad", texto: "Acciones orientadas al bienestar cultural y educativo." },
];

export const banda = {
  kicker: "Proyecto Principal",
  title: "Banda de Conciertos de Palmares",
  text: "Fundada en 2023 por un grupo de músicos palmareños, ofrece un espacio de alto nivel donde músicos de distintas edades y trayectorias desarrollan su talento con un repertorio que va de lo sinfónico a lo popular, tradicional y latinoamericano — acercando música de calidad a toda la comunidad.",
  datos: [
    { etiqueta: "Año de fundación", valor: "2023", destacado: true },
    { etiqueta: "Repertorio", valor: "De lo sinfónico a lo popular, tradicional y latinoamericano" },
    { etiqueta: "Integrantes", valor: "Músicos de distintas edades y trayectorias" },
  ],
};

export const comunidad = {
  title: "Comunidad Artística",
  subtitle: "Proyectos y agrupaciones que forman parte de APPARTES.",
  proyectos: [
    { nombre: "Banda de Conciertos de Palmares", to: "/banda" },
    { nombre: "Nuestra Banda Juvenil" },
    { nombre: "Cimarronas" },
    { nombre: "Grupos Folclóricos" },
    { nombre: "Teatro" },
    { nombre: "Danza" },
    { nombre: "Artes Plásticas" },
    { nombre: "Pintura" },
    { nombre: "Literatura" },
    { nombre: "Idiomas" },
    { nombre: "Turismo Cultural" },
    { nombre: "Historia Local" },
  ],
};

export const academia = {
  title: "Academia APPARTES",
  subtitle: "Cursos de lectura musical, teoría musical, ritmo e historia de la música.",
  // Textos de borrador: ajústelos según el contenido real de cada curso
  cursos: [
    {
      nombre: "Lectura musical",
      descripcion: "Aprenda a leer partituras y a interpretar los símbolos de la escritura musical.",
      temas: ["Pentagrama y claves", "Figuras y silencios", "Compases", "Lectura a primera vista"],
    },
    {
      nombre: "Teoría musical",
      descripcion: "Comprenda cómo se organiza la música: escalas, intervalos, tonalidades y acordes.",
      temas: ["Escalas e intervalos", "Tonalidades", "Acordes", "Armonía básica"],
    },
    {
      nombre: "Ritmo",
      descripcion: "Desarrolle el sentido del pulso y la precisión rítmica, base de toda interpretación.",
      temas: ["Pulso y subdivisión", "Compases simples y compuestos", "Patrones rítmicos", "Ejercicios de coordinación"],
    },
    {
      nombre: "Historia de la música",
      descripcion: "Recorra los estilos, épocas y compositores que han dado forma a la música.",
      temas: ["Épocas y estilos", "Compositores representativos", "Música tradicional y popular"],
    },
  ],
  contacto: {
    titulo: "¿Le interesa un curso?",
    texto: "Escríbanos para consultar sobre los cursos de la Academia.",
    cta: "Escribir a la Academia",
    href: "mailto:info@appartes.cr?subject=Consulta%20sobre%20la%20Academia%20APPARTES",
  },
};

export const join = {
  title: "Súmese como artista, voluntario o agrupación.",
  text: "APPARTES está abierta a nuevos integrantes de toda disciplina artística de Palmares y la región de Occidente.",
  cta: "Quiero unirme",
  href: "mailto:info@appartes.cr",
};

export const unete = {
  title: "Únase a APPARTES",
  subtitle: "APPARTES está abierta a nuevos integrantes de toda disciplina artística de Palmares y la región de Occidente.",
  email: "info@appartes.cr",
  // Para recibir las solicitudes sin abrir el correo de quien escribe: cree un formulario en un servicio
  // como Formspree y pegue aquí su URL (ej. "https://formspree.io/f/xxxxxxx"). Vacío = se abre el correo.
  formEndpoint: "",
  tipos: ["Artista", "Voluntario o voluntaria", "Agrupación"],
};

export const footer = {
  links: [
    { label: "info@appartes.cr", href: "mailto:info@appartes.cr" },
    { label: "Instagram", href: "#" },
    { label: "Palmares, Costa Rica", href: "#" },
  ],
};
