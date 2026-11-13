import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#222831] text-[#EEEEEE]">
      <div className="section-shell flex flex-col gap-5 py-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Armando Cardona Lara.</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em]">
          Diseñado y desarrollado con intención
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-semibold text-[#EEEEEE] transition-colors hover:text-[#DFD0B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFD0B8]"
        >
          Volver arriba <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
