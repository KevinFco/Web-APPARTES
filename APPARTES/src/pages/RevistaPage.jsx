import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FilterTabs from "../components/FilterTabs";
import EmptyState from "../components/EmptyState";
import { publicaciones, tiposPublicacion } from "../data/revista";
import { formatFecha, parseFecha } from "../utils/fecha";

export default function RevistaPage() {
  const [filtro, setFiltro] = useState("todos");

  const ordenadas = [...publicaciones].sort((a, b) => parseFecha(b.fecha) - parseFecha(a.fecha));
  const visibles = filtro === "todos" ? ordenadas : ordenadas.filter((p) => p.tipo === filtro);
  const opciones = [
    { valor: "todos", etiqueta: "Todas" },
    ...tiposPublicacion.map((t) => ({ valor: t.valor, etiqueta: t.plural })),
  ];
  const etiquetaDe = (valor) => tiposPublicacion.find((t) => t.valor === valor)?.etiqueta ?? "";

  return (
    <>
      <title>APPARTES — Revista Cultural</title>
      <PageHeader
        title="Revista Cultural"
        subtitle="Artículos, entrevistas e investigaciones culturales."
      />

      <Section>
        {publicaciones.length === 0 ? (
          <EmptyState
            titulo="Aún no hay publicaciones"
            texto="Muy pronto encontrará aquí artículos, entrevistas e investigaciones sobre la cultura de Palmares y la región."
          />
        ) : (
          <>
            <FilterTabs opciones={opciones} valor={filtro} onChange={setFiltro} etiqueta="Filtrar por tipo" />

            {visibles.length === 0 ? (
              <p className="text-muted">No hay publicaciones en esta categoría todavía.</p>
            ) : (
              <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
                {visibles.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/revista/${p.slug}`}
                    className="flex flex-col overflow-hidden rounded-xl border border-line bg-ink-soft transition-colors duration-200 hover:border-gold"
                  >
                    {p.imagen && (
                      <img src={p.imagen} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <span className="mb-3 self-start rounded-full border border-gold px-3 py-0.5 text-xs font-semibold text-gold">
                        {etiquetaDe(p.tipo)}
                      </span>
                      <h2 className="mb-2.5 font-display text-xl font-semibold text-white">{p.titulo}</h2>
                      <p className="mb-5 text-[15px] text-muted">{p.resumen}</p>
                      <div className="mt-auto flex items-center justify-between gap-4 text-sm">
                        <span className="text-muted">
                          {[p.autor, formatFecha(p.fecha)].filter(Boolean).join(" · ")}
                        </span>
                        <span className="font-semibold whitespace-nowrap text-gold">Leer →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}
