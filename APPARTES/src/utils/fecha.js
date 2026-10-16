const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];
const MESES_CORTOS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "set", "oct", "nov", "dic"];
const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// "2026-09-26" → Date local. (new Date("2026-09-26") se interpreta en UTC y en Costa Rica mostraría el día anterior.)
export function parseFecha(iso) {
  const [y, m, d] = String(iso).split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function inicioDelDia(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// "sábado 26 de setiembre de 2026"
export function formatFechaLarga(iso) {
  const f = parseFecha(iso);
  return `${DIAS[f.getDay()]} ${f.getDate()} de ${MESES[f.getMonth()]} de ${f.getFullYear()}`;
}

// "26 de setiembre de 2026"
export function formatFecha(iso) {
  const f = parseFecha(iso);
  return `${f.getDate()} de ${MESES[f.getMonth()]} de ${f.getFullYear()}`;
}

// { dia: "26", mes: "set" }
export function diaYMes(iso) {
  const f = parseFecha(iso);
  return { dia: String(f.getDate()), mes: MESES_CORTOS[f.getMonth()] };
}
