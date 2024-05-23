import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Nikhil Nigam - Full Stack Developer",
  description: "Full Stack Developer based in India. I build web applications using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <Section className="mt-28">
            {children}
          </Section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
