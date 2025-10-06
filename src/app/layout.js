import "./globals.css";

export const metadata = {
  title: "Univers 3D",
  description: "Bienvenue dans ton univers 3D interactif 🌌",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
