import Container from "./Container";

export default function PageHeader({ kicker, title, subtitle, titleClassName = "max-w-[18ch]" }) {
  return (
    <section className="pt-[72px] pb-14">
      <Container>
        {kicker && (
          <div className="mb-[18px] font-display text-sm font-semibold tracking-[0.04em] text-gold">{kicker}</div>
        )}
        <h1
          className={`font-display text-[clamp(34px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.01em] text-white ${titleClassName}`}
        >
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-[56ch] text-[18px] text-muted">{subtitle}</p>}
      </Container>
    </section>
  );
}
