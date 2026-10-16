import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { publicaciones, tiposPublicacion } from "../data/revista";
import { formatFecha } from "../utils/fecha";

const volver = (
  <Link to="/revista" className="inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold">
    ← Volver a la revista
  </Link>
);

export default function ArticuloPage() {
  const { slug } = useParams();
  const pub = publicaciones.find((p) => p.slug === slug);

  if (!pub) {
    return (
      <>
        <title>APPARTES — Publicación no encontrada</title>
        <PageHeader title="Publicación no encontrada" subtitle="Esta publicación no existe o fue retirada." />
        <Section>{volver}</Section>
      </>
    );
  }

  const tipo = tiposPublicacion.find((t) => t.valor === pub.tipo)?.etiqueta;

  return (
    <>
      <title>{`${pub.titulo} — APPARTES`}</title>
      <PageHeader kicker={tipo} title={pub.titulo} titleClassName="max-w-[26ch]" />

      <Section>
        <article className="max-w-[68ch]">
          <p className="mb-8 text-sm text-muted">
            {[pub.autor, formatFecha(pub.fecha)].filter(Boolean).join(" · ")}
          </p>
          {pub.imagen && (
            <img src={pub.imagen} alt="" className="mb-10 aspect-[16/9] w-full rounded-xl object-cover" />
          )}
          <div className="flex flex-col gap-5 text-[18px] leading-[1.7] text-ivory">
            {pub.contenido.map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
          </div>
        </article>
        <div className="mt-14">{volver}</div>
      </Section>
    </>
  );
}
