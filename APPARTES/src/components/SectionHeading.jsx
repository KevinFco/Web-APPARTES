export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <h2
        className={`max-w-[18ch] font-display text-[clamp(26px,3.4vw,34px)] font-semibold text-white ${
          subtitle ? "mb-4" : "mb-12"
        }`}
      >
        {title}
      </h2>
      {subtitle && <p className="mb-12 max-w-[56ch] text-[16.5px] text-muted">{subtitle}</p>}
    </>
  );
}
