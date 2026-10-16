import { Link } from "react-router-dom";
import Container from "./Container";
import { hero, swatches } from "../data/content";

export default function Hero() {
  return (
    <section className="pt-[90px] pb-14">
      <Container>
        <div className="mb-[18px] font-display text-sm font-semibold tracking-[0.04em] text-gold">
          {hero.kicker}
        </div>
        <h1 className="max-w-[16ch] font-display text-[clamp(38px,6vw,70px)] leading-[1.05] font-bold tracking-[-0.01em] text-white">
          {hero.title}
        </h1>
        <p className="mt-[26px] max-w-[50ch] text-[19px] text-muted">{hero.subtitle}</p>

        <div className="mt-[60px] flex h-[200px] gap-1 overflow-hidden rounded-[14px] max-[900px]:h-auto max-[900px]:flex-col">
          {swatches.map((s, i) => (
            <Link
              key={s.label}
              to={s.to}
              style={{ animationDelay: `${(i + 1) * 50}ms` }}
              className={`flex flex-1 animate-rise items-end p-4 transition-[flex-grow] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:grow-[2.2] focus-visible:-outline-offset-4 motion-reduce:animate-none max-[900px]:h-14 max-[900px]:items-center max-[900px]:px-5 max-[900px]:py-3 max-[900px]:hover:grow ${s.bg}`}
            >
              <span className={`font-display text-xs font-semibold whitespace-nowrap ${s.text}`}>{s.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
