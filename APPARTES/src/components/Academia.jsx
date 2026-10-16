import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { academia } from "../data/content";

export default function Academia() {
  return (
    <Section id="academia">
      <SectionHeading title={academia.title} subtitle={academia.subtitle} />

      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {academia.cursos.map((curso) => (
          <div
            key={curso}
            className="rounded-[10px] border border-line px-5 py-[22px] font-display text-[15px] font-medium text-ivory transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            {curso}
          </div>
        ))}
      </div>
    </Section>
  );
}
