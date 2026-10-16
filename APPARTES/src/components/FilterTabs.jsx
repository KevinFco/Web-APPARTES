export default function FilterTabs({ opciones, valor, onChange, etiqueta = "Filtrar" }) {
  return (
    <div role="group" aria-label={etiqueta} className="mb-10 flex flex-wrap gap-2.5">
      {opciones.map((o) => {
        const activo = valor === o.valor;
        return (
          <button
            key={o.valor}
            type="button"
            aria-pressed={activo}
            onClick={() => onChange(o.valor)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              activo ? "border-gold bg-gold text-ink" : "border-line text-ivory hover:border-gold hover:text-gold"
            }`}
          >
            {o.etiqueta}
          </button>
        );
      })}
    </div>
  );
}
