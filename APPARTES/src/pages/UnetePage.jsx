import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { comunidad, unete } from "../data/content";

const campo =
  "w-full rounded-lg border border-line bg-ink-soft px-4 py-3 text-base text-ivory placeholder:text-muted focus:border-gold";
const etiqueta = "mb-2 block text-sm font-semibold text-ivory";
const areas = [...comunidad.proyectos.map((p) => p.nombre), "Academia", "Otra"];

export default function UnetePage() {
  // idle | enviando | ok | correo | error
  const [estado, setEstado] = useState("idle");

  async function enviar(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form));

    if (unete.formEndpoint) {
      setEstado("enviando");
      try {
        const res = await fetch(unete.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(datos),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setEstado("ok");
      } catch {
        setEstado("error");
      }
      return;
    }

    // Sin servicio configurado: se abre el correo de la persona con el mensaje ya armado
    const cuerpo = [
      `Tipo de participación: ${datos.tipo}`,
      `Nombre: ${datos.nombre}`,
      datos.agrupacion && `Agrupación: ${datos.agrupacion}`,
      `Correo: ${datos.correo}`,
      datos.telefono && `Teléfono: ${datos.telefono}`,
      datos.area && `Área de interés: ${datos.area}`,
      datos.mensaje && `\nMensaje:\n${datos.mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");
    const asunto = `Solicitud para unirse a APPARTES — ${datos.tipo}`;
    window.location.href = `mailto:${unete.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    setEstado("correo");
  }

  return (
    <>
      <title>APPARTES — Únase</title>
      <PageHeader title={unete.title} subtitle={unete.subtitle} />

      <Section>
        <div className="grid grid-cols-[1.5fr_1fr] gap-15 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <form onSubmit={enviar} className="flex flex-col gap-6 [color-scheme:dark]">
            <fieldset>
              <legend className={etiqueta}>Quiero participar como</legend>
              <div className="flex flex-wrap gap-2.5">
                {unete.tipos.map((t, i) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="tipo" value={t} defaultChecked={i === 0} className="peer sr-only" />
                    <span className="inline-block rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ivory transition-colors duration-200 peer-checked:border-gold peer-checked:bg-gold peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="nombre" className={etiqueta}>Nombre completo</label>
              <input id="nombre" name="nombre" type="text" required autoComplete="name" className={campo} />
            </div>

            <div>
              <label htmlFor="agrupacion" className={etiqueta}>
                Nombre de la agrupación <span className="font-normal text-muted">(si aplica)</span>
              </label>
              <input id="agrupacion" name="agrupacion" type="text" className={campo} />
            </div>

            <div className="grid grid-cols-2 gap-6 max-[560px]:grid-cols-1">
              <div>
                <label htmlFor="correo" className={etiqueta}>Correo electrónico</label>
                <input id="correo" name="correo" type="email" required autoComplete="email" className={campo} />
              </div>
              <div>
                <label htmlFor="telefono" className={etiqueta}>
                  Teléfono <span className="font-normal text-muted">(opcional)</span>
                </label>
                <input id="telefono" name="telefono" type="tel" autoComplete="tel" className={campo} />
              </div>
            </div>

            <div>
              <label htmlFor="area" className={etiqueta}>
                Área de interés <span className="font-normal text-muted">(opcional)</span>
              </label>
              <select id="area" name="area" defaultValue="" className={campo}>
                <option value="">Seleccione…</option>
                {areas.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className={etiqueta}>
                Cuéntenos sobre usted <span className="font-normal text-muted">(opcional)</span>
              </label>
              <textarea id="mensaje" name="mensaje" rows={5} className={`${campo} resize-y`} />
            </div>

            <div>
              <button
                type="submit"
                disabled={estado === "enviando"}
                className="rounded-full bg-gold px-[30px] py-[15px] font-semibold text-ink transition-transform duration-200 hover:scale-[1.04] disabled:opacity-60 disabled:hover:scale-100"
              >
                {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
              </button>
            </div>

            <div role="status" aria-live="polite">
              {estado === "ok" && (
                <p className="text-[15px] text-gold">Gracias. Recibimos su solicitud y nos pondremos en contacto.</p>
              )}
              {estado === "correo" && (
                <p className="text-[15px] text-gold">
                  Se abrió su aplicación de correo con el mensaje listo para enviar. Si no se abrió, escriba directamente a{" "}
                  <a href={`mailto:${unete.email}`} className="underline">{unete.email}</a>.
                </p>
              )}
              {estado === "error" && (
                <p className="text-[15px] text-[#ff9b8a]">
                  No pudimos enviar el formulario. Intente de nuevo o escriba a{" "}
                  <a href={`mailto:${unete.email}`} className="underline">{unete.email}</a>.
                </p>
              )}
            </div>
          </form>

          <aside className="self-start rounded-xl border border-line bg-ink-soft p-7">
            <h2 className="mb-3 font-display text-lg font-semibold text-white">¿Prefiere escribirnos?</h2>
            <p className="mb-5 text-[15px] text-muted">
              También puede comunicarse directamente con la asociación por correo electrónico.
            </p>
            <a href={`mailto:${unete.email}`} className="border-b-2 border-gold pb-0.5 text-[15px] font-semibold text-gold">
              {unete.email}
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}
