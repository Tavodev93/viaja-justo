import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* SCRIPT DE WOMPI */}
        <Script
          src="https://checkout.wompi.co/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}