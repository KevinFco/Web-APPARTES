import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { academia } from "../data/content";

export default function AcademiaPage() {
  const { contacto } = academia;
  return (
    <>
      <title>APPARTES — Academia</title>
      <PageHeader kicker="Formación abierta a la comunidad" title={academia.title} subtitle={academia.subtitle} />

      <Section>
        <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
          {academia.cursos.map((c) => (
            <article key={c.nombre} className="border-t-[5px] border-gold bg-ivory px-7 py-8 text-ink">
              <h2 className="mb-3 font-display text-xl font-semibold">{c.nombre}</h2>
              <p className="mb-5 text-base text-[#4a4c52]">{c.descripcion}</p>
              <ul className="flex flex-col gap-1.5">
                {c.temas.map((t) => (
                  <li key={t} className="relative pl-3.5 text-[14.5px] text-[#5A5D63]">
                    <span aria-hidden="true" className="absolute left-0 text-gold-deep">—</span>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-3 font-display text-[clamp(22px,2.6vw,28px)] font-semibold text-white">{contacto.titulo}</h2>
        <p className="mb-7 max-w-[50ch] text-[17px] text-muted">{contacto.texto}</p>
        <a
          href={contacto.href}
          className="inline-block rounded-full bg-gold px-[30px] py-[15px] font-semibold text-ink transition-transform duration-200 hover:scale-[1.04]"
        >
          {contacto.cta}
        </a>
      </Section>
    </>
  );
}
