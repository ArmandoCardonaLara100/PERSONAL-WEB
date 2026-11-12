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
  title: "Armando Cardona Lara | Web & Software Developer",
  description:
    "Portfolio of Armando Cardona Lara, a web and software developer creating responsive websites, data platforms, and practical digital products.",
  keywords: [
    "Armando Cardona Lara",
    "Web Developer",
    "Software Developer",
    "Next.js Developer",
    "Portfolio",
    "Mexico",
  ],
  authors: [{ name: "Armando Cardona Lara" }],
  creator: "Armando Cardona Lara",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Armando Cardona Lara | Web & Software Developer",
    description:
      "Responsive websites, web applications, and software platforms built with clarity, performance, and purpose.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Armando Cardona Lara — Portfolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armando Cardona Lara | Web & Software Developer",
    description:
      "Responsive websites, web applications, and software platforms built with clarity, performance, and purpose.",
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
      lang="en"
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
