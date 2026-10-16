import { Link } from "react-router-dom";
import Container from "./Container";
import { join } from "../data/content";

export default function Join() {
  return (
    <section className="bg-gold py-24">
      <Container>
        <h2 className="mb-[22px] max-w-[16ch] font-display text-[clamp(30px,4.6vw,48px)] font-bold text-ink">
          {join.title}
        </h2>
        <p className="mb-8 max-w-[48ch] text-[17px] text-ink/78">{join.text}</p>
        <Link
          to="/unete"
          className="inline-block rounded-full bg-ink px-[30px] py-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.04]"
        >
          {join.cta}
        </Link>
      </Container>
    </section>
  );
}
