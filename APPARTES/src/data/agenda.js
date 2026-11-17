// AGENDA — para publicar una fecha, agregue un objeto a la lista.
// Los eventos pasan solos a "Eventos anteriores" cuando su fecha ya quedó atrás.
//
//   fecha:   "AAAA-MM-DD"            (obligatorio)  ej. "2026-12-05"
//   titulo:  nombre del evento       (obligatorio)
//   tipo:    "Concierto" | "Aparición cultural" | "Taller" | lo que corresponda
//   hora:    "3:00 p.m."             (opcional)
//   lugar:   "Salón Multiusos, La Paz de San Ramón"  (opcional)
//   detalle: una o dos frases        (opcional)
//   href:    enlace a más información (opcional)
export const eventos = [
  {
    fecha: "2026-09-26",
    titulo: "Festival Viva La Paz 2026",
    tipo: "Concierto",
    hora: "3:00 p.m.",
    lugar: "Salón Multiusos, La Paz de San Ramón",
    detalle: "Concierto dentro del Festival Viva La Paz.",
  },
  {
    fecha: "2027-01-15",
    titulo: "Fiestas Cívicas de Palmares 2027",
    tipo: "Concierto",
    hora: "7:00 p.m.",
    lugar: "Galería de arte, fiestas cívicas de Palmares",
    detalle: "Concierto dentro de las Fiestas Cívicas de Palmares.",
  },
  {
    fecha: "2026-11-26",
    titulo: "Agenda Navideña 2026",
    tipo: "Banda",
    hora: "5:00 p.m.",
    lugar: "Escuela de Zaragoza, Palmares",
    detalle: "Son de Occidente",
  },
  {
    fecha: "2026-12-3",
    titulo: "Agenda Navideña 2026",
    tipo: "Banda",
    hora: "4:00 p.m.",
    lugar: "El Roble, Puntarenas",
    detalle: "Son de Occidente",
  },
  {
    fecha: "2026-12-5",
    titulo: "Agenda Navideña 2026",
    tipo: "Banda",
    hora: "5:00 p.m.",
    lugar: "Volio, San Ramón",
    detalle: "Son de Occidente",
  },
  {
    fecha: "2026-12-6",
    titulo: "Agenda Navideña 2026",
    tipo: "Banda",
    hora: "4:00 p.m.",
    lugar: "Barrio San José, Alajuela",
    detalle: "Son de Occidente",
  },
  {
    fecha: "2026-12-9",
    titulo: "Agenda Navideña 2026",
    tipo: "Banda",
    hora: "7:00 p.m.",
    lugar: "Concierto Navideño, Palmares",
    detalle: "Son de Occidente",
  },
];
