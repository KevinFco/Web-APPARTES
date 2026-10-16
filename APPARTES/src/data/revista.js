export const tiposPublicacion = [
  { valor: "articulo", etiqueta: "Artículo", plural: "Artículos" },
  { valor: "entrevista", etiqueta: "Entrevista", plural: "Entrevistas" },
  { valor: "investigacion", etiqueta: "Investigación", plural: "Investigaciones" },
];

// REVISTA — para publicar, agregue un objeto a la lista (el más reciente se muestra primero).
//
// {
//   slug: "entrevista-director-banda",     // dirección de la página: /revista/entrevista-director-banda (sin espacios ni tildes)
//   tipo: "entrevista",                    // "articulo" | "entrevista" | "investigacion"
//   titulo: "Título de la publicación",
//   resumen: "Una o dos frases que aparecen en la tarjeta.",
//   autor: "Nombre del autor",
//   fecha: "2026-11-02",                   // AAAA-MM-DD
//   imagen: "/revista/portada.jpg",        // opcional; el archivo va en la carpeta public/revista/
//   contenido: [
//     "Primer párrafo.",
//     "Segundo párrafo.",
//   ],
// },
export const publicaciones = [];
