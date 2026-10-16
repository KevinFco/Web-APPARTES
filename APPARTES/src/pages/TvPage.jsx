import { useRef, useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import EmptyState from "../components/EmptyState";
import { canalUrl, videos } from "../data/tv";
import { youtubeId } from "../utils/youtube";

const botonCanal =
  "inline-block rounded-full border-2 border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-colors duration-200 hover:bg-gold hover:text-ink";

export default function TvPage() {
  const [activo, setActivo] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const reproductor = useRef(null);

  // Solo se muestran los videos con un enlace de YouTube válido
  const lista = videos.map((v) => ({ ...v, id: youtubeId(v.url) })).filter((v) => v.id);
  const actual = lista[activo] ?? lista[0];

  function elegir(i) {
    setActivo(i);
    setAutoplay(true);
    reproductor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <title>APPARTES — APPARTES TV</title>
      <PageHeader title="APPARTES TV" subtitle="Videos de APPARTES en YouTube." />

      <Section>
        {lista.length === 0 ? (
          <EmptyState
            titulo="Aún no hay videos publicados"
            texto="Muy pronto podrá ver aquí los conciertos y presentaciones de APPARTES."
          >
            {canalUrl && (
              <a href={canalUrl} target="_blank" rel="noreferrer" className={botonCanal}>
                Visitar el canal en YouTube →
              </a>
            )}
          </EmptyState>
        ) : (
          <>
            <div ref={reproductor} className="scroll-mt-24">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-black">
                <iframe
                  key={actual.id}
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${actual.id}?rel=0${autoplay ? "&autoplay=1" : ""}`}
                  title={actual.titulo || "Video de APPARTES"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex flex-wrap items-start justify-between gap-5">
                <div>
                  {actual.titulo && <h2 className="mb-2 font-display text-[22px] font-semibold text-white">{actual.titulo}</h2>}
                  {actual.descripcion && <p className="max-w-[60ch] text-[16px] text-muted">{actual.descripcion}</p>}
                </div>
                {canalUrl && (
                  <a href={canalUrl} target="_blank" rel="noreferrer" className={botonCanal}>
                    Ver el canal →
                  </a>
                )}
              </div>
            </div>

            {lista.length > 1 && (
              <div className="mt-14 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                {lista.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => elegir(i)}
                    aria-pressed={v === actual}
                    className={`group overflow-hidden rounded-xl border bg-ink-soft text-left transition-colors duration-200 hover:border-gold ${
                      v === actual ? "border-gold" : "border-line"
                    }`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                    <span className="block p-4 font-display text-[15px] font-medium text-white">
                      {v.titulo || "Video de APPARTES"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}
