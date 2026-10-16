import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { banda } from "../data/content";

export default function BandaPage() {
  return (
    <>
      <title>{`APPARTES — ${banda.title}`}</title>
      <PageHeader kicker={banda.kicker} title={banda.title} />

      <Section>
        <p className="mb-14 max-w-[60ch] text-[19px] text-ivory">{banda.text}</p>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {banda.datos.map((d) => (
            <div key={d.etiqueta} className="rounded-xl border border-line bg-ink-soft p-6">
              <div className="mb-2 text-sm text-muted">{d.etiqueta}</div>
              <div
                className={`font-display font-semibold ${
                  d.destacado ? "text-[40px] leading-none text-gold" : "text-[17px] text-white"
                }`}
              >
                {d.valor}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/comunidad"
          className="mt-12 inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold"
        >
          ← Ver toda la comunidad artística
        </Link>
      </Section>
    </>
  );
}
