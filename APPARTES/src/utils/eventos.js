import { inicioDelDia, parseFecha } from "./fecha";

// Separa la agenda en próximos (de hoy en adelante, el más cercano primero) y pasados (el más reciente primero)
export function separarEventos(eventos) {
  const hoy = inicioDelDia();
  const porFecha = (a, b) => parseFecha(a.fecha) - parseFecha(b.fecha);
  return {
    proximos: eventos.filter((e) => parseFecha(e.fecha) >= hoy).sort(porFecha),
    pasados: eventos.filter((e) => parseFecha(e.fecha) < hoy).sort((a, b) => porFecha(b, a)),
  };
}
