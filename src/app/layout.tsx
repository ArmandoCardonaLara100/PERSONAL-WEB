import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armandocardona.dev"),
  title: "Armando Cardona Lara — Web Developer",
  description:
    "Armando Cardona Lara — an aspiring web developer building clean, modern websites and apps for businesses. Available for projects.",
  keywords: [
    "Armando Cardona Lara",
    "Web Developer",
    "Frontend Developer",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Armando Cardona Lara" }],
  openGraph: {
    title: "Armando Cardona Lara — Web Developer",
    description:
      "An aspiring web developer building clean, modern websites and apps for businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armando Cardona Lara — Web Developer",
    description:
      "An aspiring web developer building clean, modern websites and apps for businesses.",
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
      className={`${nunito.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
