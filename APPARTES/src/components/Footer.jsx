import Container from "./Container";
import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-wrap justify-between gap-5">
        <div className="font-display text-[17px] font-bold text-white">APPARTES</div>
        <div className="flex flex-wrap gap-[26px] text-sm text-muted">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
