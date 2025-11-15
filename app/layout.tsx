import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Se connecter - Office 365 (2025)",
  description: "Page de connexion style Office 365 (2025)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
