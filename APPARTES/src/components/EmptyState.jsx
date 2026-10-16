export default function EmptyState({ titulo, texto, children }) {
  return (
    <div className="rounded-xl border border-dashed border-line p-10 text-center max-[560px]:p-6">
      <h3 className="mb-2 font-display text-lg font-semibold text-white">{titulo}</h3>
      <p className="mx-auto max-w-[48ch] text-[15px] text-muted">{texto}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
