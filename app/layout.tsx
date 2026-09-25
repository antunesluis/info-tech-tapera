import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infotech Tapera | Celulares, eletrônicos e assistência técnica",
  description:
    "Venda de celulares, computadores e eletrônicos e assistência técnica em Tapera, RS. Visite a Infotech Tapera ou entre em contato pelo WhatsApp.",
  applicationName: "Infotech Tapera",
  openGraph: {
    title: "Infotech Tapera | Tecnologia perto de você",
    description:
      "Celulares, computadores, eletrônicos e assistência técnica em Tapera, RS.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
