import "./globals.css";
import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { YEARS_EXPERIENCE } from "@/lib/constants";

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hedvig-serif",
});

export const metadata: Metadata = {
  title: "Hi, I'm Lucan",
  description: `Hi, I'm Lucan, a front-end developer with more than ${YEARS_EXPERIENCE} years experience.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hedvigLettersSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
