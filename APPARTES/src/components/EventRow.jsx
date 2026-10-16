import { diaYMes, formatFechaLarga } from "../utils/fecha";

export default function EventRow({ evento, pasado = false }) {
  const { dia, mes } = diaYMes(evento.fecha);
  const meta = [formatFechaLarga(evento.fecha), evento.hora, evento.lugar].filter(Boolean).join(" · ");

  return (
    <article
      className={`grid grid-cols-[84px_1fr] gap-6 border-b border-line py-7 max-[560px]:grid-cols-[64px_1fr] max-[560px]:gap-4 ${
        pasado ? "opacity-65" : ""
      }`}
    >
      <div className="border-r border-line pr-4 text-center">
        <div className="font-display text-[34px] leading-none font-bold text-gold">{dia}</div>
        <div className="mt-1 text-sm text-muted">{mes}</div>
      </div>
      <div>
        {evento.tipo && (
          <span className="mb-2 inline-block rounded-full border border-gold px-3 py-0.5 text-xs font-semibold text-gold">
            {evento.tipo}
          </span>
        )}
        <h3 className="mb-1 font-display text-lg font-medium text-white">{evento.titulo}</h3>
        <p className="text-[14.5px] text-muted">{meta}</p>
        {evento.detalle && <p className="mt-2 max-w-[60ch] text-[15px] text-ivory">{evento.detalle}</p>}
        {evento.href && (
          <a
            href={evento.href}
            className="mt-3 inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold"
          >
            Más información →
          </a>
        )}
      </div>
    </article>
  );
}
