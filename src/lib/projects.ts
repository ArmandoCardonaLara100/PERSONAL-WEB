import type { StaticImageData } from "next/image";
import arqcaImage from "../../public/images/projects/arqca.png";
import crdnImage from "../../public/images/projects/crdn.png";
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
    category: "Plataforma de análisis de trading",
    description:
      "Un diario privado de trading y espacio de análisis de probabilidades que convierte las operaciones en estadísticas de rendimiento, análisis de capital y drawdown, vistas de calendario y simulaciones de Monte Carlo.",
    image: tradeDataImage,
    imageAlt:
      "Página principal de TRADEDATA mostrando la vista previa del panel de análisis de trading",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    highlights: ["Diario de trading", "Análisis de rendimiento", "Simulación de Monte Carlo"],
    liveUrl: "https://www.tradingdata.tech",
    githubUrl: "https://github.com/ArmandoCardonaLara100/TRADEDATA",
    layout: "featured",
  },
  {
    number: "02",
    name: "ARQCA Arquitectura",
    category: "Portafolio de arquitectura",
    description:
      "Un portafolio visual para un estudio de arquitectura, diseñado alrededor de obras realizadas, galerías detalladas de proyectos, servicios y contacto directo con clientes en estructuras responsivas.",
    image: arqcaImage,
    imageAlt:
      "Página principal del portafolio de arquitectura ARQCA con una residencia contemporánea",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    highlights: ["Galerías de proyectos", "Presentación responsiva", "Rendimiento estático"],
    liveUrl: "https://www.arqcaarquitectura.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/ARQCA",
    layout: "standard",
  },
  {
    number: "03",
    name: "PsiConnect",
    category: "Plataforma para práctica de salud mental",
    description:
      "Un sitio público para una práctica profesional acompañado de un portal seguro para terapeutas y pacientes, con expedientes clínicos, intercambio privado de archivos, acceso por roles y actualizaciones en tiempo real.",
    image: psiConnectImage,
    imageAlt:
      "Sitio público de PsiConnect para la psicoterapeuta Claudia Yanet Lara Gómez",
    stack: ["Next.js", "TypeScript", "Supabase", "Drizzle ORM", "Auth.js"],
    highlights: ["Portal seguro para pacientes", "Expedientes clínicos", "Actualizaciones en tiempo real"],
    liveUrl: "https://psicologaclaudialago.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/CLAUDIA-YANET",
    layout: "standard",
  },
  {
    number: "04",
    name: "CRDN Arquitectura Comercial",
    category: "Sitio de arquitectura comercial",
    description:
      "Un sitio editorial para un estudio de diseño comercial y retail que combina casos de estudio, rutas de servicio, artículos y una experiencia de contacto orientada a la conversión.",
    image: crdnImage,
    imageAlt:
      "Sitio de arquitectura comercial CRDN con un encabezado editorial guiado por la tipografía",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
    highlights: ["Sistema editorial", "Presentación de casos de estudio", "Interacciones accesibles"],
    liveUrl: "https://www.crdnarquitecturacomercial.com",
    githubUrl: "https://github.com/ArmandoCardonaLara100/CRDN",
    layout: "featured",
  },
  {
    number: "05",
    name: "Sparky.CL",
    category: "Plataforma de operaciones empresariales",
    description:
      "Un sistema de operaciones con roles para gestionar clientes, productos, tickets de servicio, deudas, facturas, cierres de caja y registros PDF desde un solo espacio de trabajo responsivo.",
    image: sparkyImage,
    imageAlt: "Panel de gestión empresarial de Sparky.CL",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod"],
    highlights: ["Gestión de clientes y tickets", "Facturación en PDF", "Acceso por roles"],
    githubUrl: "https://github.com/ArmandoCardonaLara100/SPARKY-CL",
    layout: "standard",
  },
];
