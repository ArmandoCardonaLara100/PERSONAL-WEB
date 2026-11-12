import type { StaticImageData } from "next/image";
import arqcaImage from "../../public/images/projects/arqca.png";
import crdnImage from "../../public/images/projects/crdn.png";
import leilaniImage from "../../public/images/projects/leilani.png";
import psiConnectImage from "../../public/images/projects/psiconnect.png";
import tradeDataImage from "../../public/images/projects/tradedata.png";
import sparkyImage from "../../public/images/sparkyCL.png";

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  layout: "featured" | "standard";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "TRADEDATA",
    category: "Trading analytics platform",
    description:
      "A private trading journal and probability workbench that turns raw operations into performance statistics, equity and drawdown analysis, calendar views, and Monte Carlo simulations.",
    image: tradeDataImage,
    imageAlt:
      "TRADEDATA landing page showing the trading analytics dashboard preview",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    highlights: ["Trading journal", "Performance analytics", "Monte Carlo simulation"],
    liveUrl: "https://www.tradingdata.tech",
    githubUrl: "https://github.com/ArmandoCardonaLara100/TRADEDATA",
    layout: "featured",
  },
  {
    number: "02",
    name: "ARQCA Arquitectura",
    category: "Architectural portfolio",
    description:
      "A visual portfolio for an architecture practice, designed around built work, detailed project galleries, services, and direct client contact across responsive layouts.",
    image: arqcaImage,
    imageAlt:
      "ARQCA architecture portfolio homepage with a contemporary residence",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    highlights: ["Project galleries", "Responsive presentation", "Static performance"],
    liveUrl: "https://www.arqcaarquitectura.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/ARQCA",
    layout: "standard",
  },
  {
    number: "03",
    name: "PsiConnect",
    category: "Mental-health practice platform",
    description:
      "A public practice website paired with a secure therapist and patient portal for clinical records, private file exchange, role-based access, and real-time updates.",
    image: psiConnectImage,
    imageAlt:
      "PsiConnect public practice website for psychotherapist Claudia Yanet Lara Gómez",
    stack: ["Next.js", "TypeScript", "Supabase", "Drizzle ORM", "Auth.js"],
    highlights: ["Secure patient portal", "Clinical records", "Realtime updates"],
    liveUrl: "https://psicologaclaudialago.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/CLAUDIA-YANET",
    layout: "standard",
  },
  {
    number: "04",
    name: "CRDN Arquitectura Comercial",
    category: "Commercial architecture website",
    description:
      "An editorial website for a retail and commercial design studio, combining project case studies, service pathways, insights, and a conversion-focused contact experience.",
    image: crdnImage,
    imageAlt:
      "CRDN commercial architecture website with an editorial typography-led hero",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
    highlights: ["Editorial system", "Case-study presentation", "Accessible interactions"],
    liveUrl: "https://www.crdnarquitecturacomercial.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/CRDN",
    layout: "featured",
  },
  {
    number: "05",
    name: "Sparky.CL",
    category: "Business operations platform",
    description:
      "A role-aware operations system for managing clients, products, service tickets, debts, invoices, cash closeouts, and PDF records from one responsive workspace.",
    image: sparkyImage,
    imageAlt: "Sparky.CL business management dashboard",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod"],
    highlights: ["Client and ticket management", "PDF billing", "Role-based access"],
    githubUrl: "https://github.com/ArmandoCardonaLara100/SPARKY-CL",
    layout: "standard",
  },
  {
    number: "06",
    name: "Leilani",
    category: "Private interactive experience",
    description:
      "A password-gated, media-rich digital keepsake built as a responsive narrative experience with personal galleries, video, and carefully choreographed interactions.",
    image: leilaniImage,
    imageAlt: "Leilani password-gated interactive letter experience",
    stack: ["HTML", "CSS", "JavaScript", "Responsive media"],
    highlights: ["Gated access", "Photo and video galleries", "Mobile-first experience"],
    liveUrl: "https://leilani-rust.vercel.app",
    layout: "standard",
  },
];
