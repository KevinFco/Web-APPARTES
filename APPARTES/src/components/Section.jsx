import Container from "./Container";

export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`border-t border-line py-22 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
