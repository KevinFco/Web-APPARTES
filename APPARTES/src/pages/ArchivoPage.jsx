import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FilterTabs from "../components/FilterTabs";
import EmptyState from "../components/EmptyState";
import { archivo, categoriasArchivo } from "../data/archivo";

const esImagen = (ruta = "") => /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(ruta);

function Tarjeta({ item }) {
  const categoria = categoriasArchivo.find((c) => c.valor === item.categoria)?.etiqueta;
  const enlace = "mt-auto pt-4 text-sm font-semibold text-gold";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-ink-soft">
      {item.archivo && esImagen(item.archivo) && (
        <a href={item.archivo} target="_blank" rel="noreferrer" aria-label={`Ver imagen: ${item.titulo}`}>
          <img src={item.archivo} alt={item.titulo} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </a>
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 self-start rounded-full border border-gold px-3 py-0.5 text-xs font-semibold text-gold">
          {categoria}
        </span>
        <h2 className="mb-1.5 font-display text-[17px] font-semibold text-white">{item.titulo}</h2>
        {item.anio && <p className="mb-2 text-sm text-muted">{item.anio}</p>}
        {item.descripcion && <p className="text-[14.5px] text-muted">{item.descripcion}</p>}
        {item.archivo && !esImagen(item.archivo) && (
          <a href={item.archivo} target="_blank" rel="noreferrer" className={enlace}>
            Abrir documento →
          </a>
        )}
      </div>
    </article>
  );
}

export default function ArchivoPage() {
  const [filtro, setFiltro] = useState("todos");

  const visibles = filtro === "todos" ? archivo : archivo.filter((i) => i.categoria === filtro);
  const opciones = [{ valor: "todos", etiqueta: "Todo" }, ...categoriasArchivo];

  return (
    <>
      <title>APPARTES — Archivo Histórico</title>
      <PageHeader
        title="Archivo Histórico"
        subtitle="Fotografías, programas de conciertos, partituras e información del patrimonio cultural."
      />

      <Section>
        {archivo.length === 0 ? (
          <EmptyState
            titulo="El archivo está en construcción"
            texto="Aquí se irán reuniendo fotografías, programas de conciertos, partituras y registros del patrimonio cultural de Palmares."
          />
        ) : (
          <>
            <FilterTabs opciones={opciones} valor={filtro} onChange={setFiltro} etiqueta="Filtrar por categoría" />

            {visibles.length === 0 ? (
              <p className="text-muted">No hay documentos en esta categoría todavía.</p>
            ) : (
              <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                {visibles.map((item, i) => (
                  <Tarjeta key={`${item.titulo}-${i}`} item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}
