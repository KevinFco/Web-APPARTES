import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

export default function NotFoundPage() {
  return (
    <>
      <title>APPARTES — Página no encontrada</title>
      <PageHeader title="Página no encontrada" subtitle="La dirección que busca no existe o fue movida." />
      <Section>
        <Link to="/" className="inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold">
          ← Volver al inicio
        </Link>
      </Section>
    </>
  );
}
