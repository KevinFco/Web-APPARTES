const ID = /^[\w-]{11}$/;

// Acepta un enlace de YouTube (watch, youtu.be, embed, shorts, live) o directamente el ID de 11 caracteres
export function youtubeId(entrada = "") {
  const s = String(entrada).trim();
  if (ID.test(s)) return s;
  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^(www|m)\./, "");
    let candidato = null;
    if (host === "youtu.be") {
      candidato = u.pathname.slice(1).split("/")[0];
    } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      candidato = u.searchParams.get("v");
      if (!candidato) {
        const m = u.pathname.match(/^\/(?:embed|shorts|live|v)\/([\w-]{11})/);
        candidato = m ? m[1] : null;
      }
    }
    return candidato && ID.test(candidato) ? candidato : null;
  } catch {
    return null;
  }
}
