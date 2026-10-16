import Section from "./Section";
import { banda } from "../data/content";

export default function Banda() {
  return (
    <Section id="banda">
      <div className="grid grid-cols-[auto_1fr] items-center gap-9 rounded-2xl border border-line bg-ink-soft p-12 max-[900px]:grid-cols-1 max-[900px]:p-8">
        <span className="self-start rounded-full border border-gold px-4 py-1.5 font-display text-[13px] font-bold whitespace-nowrap text-gold">
          {banda.badge}
        </span>
        <div>
          <h3 className="mb-3.5 font-display text-2xl font-semibold text-white">{banda.title}</h3>
          <p className="max-w-[60ch] text-base text-muted">{banda.text}</p>
        </div>
      </div>
    </Section>
  );
}
