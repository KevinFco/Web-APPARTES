import { useState } from "react";

// Espacio para una imagen. Sin "src" (o si la ruta falla) muestra un marco reservado.
//   imagen = { src: "/banda/foto.jpg", alt: "Descripción de la foto", pie: "Texto opcional bajo la foto" }
export default function ImageSlot({ imagen, className = "" }) {
  const [fallo, setFallo] = useState(false);
  const { src, alt = "", pie } = imagen ?? {};
  const hayImagen = Boolean(src) && !fallo;

  return (
    <figure className={className}>
      {hayImagen ? (
        <img
          src={src}
          alt={alt}
          decoding="async"
          onError={() => {
            console.warn(`No se pudo cargar la imagen: ${src}. Revise que el archivo esté en la carpeta public/ y que la ruta empiece con "/".`);
            setFallo(true);
          }}
          className="aspect-[16/9] w-full rounded-2xl border border-line object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label="Espacio reservado para una imagen"
          className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-ink-soft text-center"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
            <rect x="5" y="8" width="30" height="24" rx="3" />
            <circle cx="14" cy="17" r="2.5" />
            <path d="M5 28l9-8 7 6 5-4 9 8" />
          </svg>
          <span className="text-sm text-muted">Espacio para imagen</span>
        </div>
      )}
      {hayImagen && pie && <figcaption className="mt-3 text-sm text-muted">{pie}</figcaption>}
    </figure>
  );
}
