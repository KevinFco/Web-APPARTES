import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import EmptyState from "../components/EmptyState";
import EventRow from "../components/EventRow";
import { eventos } from "../data/agenda";
import { separarEventos } from "../utils/eventos";

export default function AgendaPage() {
  const { proximos, pasados } = separarEventos(eventos);

  return (
    <>
      <title>APPARTES — Agenda Cultural</title>
      <PageHeader
        title="Agenda Cultural"
        subtitle="Fechas de próximos conciertos y apariciones culturales de APPARTES."
      />

      <Section>
        <SectionHeading title="Próximos eventos" />
        {proximos.length > 0 ? (
          <div className="border-t border-line">
            {proximos.map((e) => (
              <EventRow key={`${e.fecha}-${e.titulo}`} evento={e} />
            ))}
          </div>
        ) : (
          <EmptyState
            titulo="No hay eventos programados por ahora"
            texto="Cuando se confirmen nuevas fechas de conciertos o apariciones culturales, las publicaremos aquí."
          />
        )}
      </Section>

      {pasados.length > 0 && (
        <Section>
          <SectionHeading title="Eventos anteriores" />
          <div className="border-t border-line">
            {pasados.map((e) => (
              <EventRow key={`${e.fecha}-${e.titulo}`} evento={e} pasado />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
