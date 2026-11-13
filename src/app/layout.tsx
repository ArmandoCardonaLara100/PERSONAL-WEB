import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-sigma-sandy-am3oyn5c1v.vercel.app",
  ),
  title: "Armando Cardona Lara | Desarrollador web y de software",
  description:
    "Portafolio de Armando Cardona Lara, desarrollador web y de software que crea sitios responsivos, plataformas de datos y productos digitales prácticos.",
  keywords: [
    "Armando Cardona Lara",
    "Desarrollador web",
    "Desarrollador de software",
    "Desarrollador Next.js",
    "Portafolio",
    "México",
  ],
  authors: [{ name: "Armando Cardona Lara" }],
  creator: "Armando Cardona Lara",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Armando Cardona Lara | Desarrollador web y de software",
    description:
      "Sitios responsivos, aplicaciones web y plataformas de software construidas con claridad, rendimiento y propósito.",
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Armando Cardona Lara — Portafolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armando Cardona Lara | Desarrollador web y de software",
    description:
      "Sitios responsivos, aplicaciones web y plataformas de software construidas con claridad, rendimiento y propósito.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      suppressHydrationWarning
      className={`${manrope.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
