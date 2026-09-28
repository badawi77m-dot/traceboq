import "./globals.css";

export const metadata = {
  title: "TraceBOQ — Drawings to a traceable Bill of Quantities",
  description: "Upload construction drawings. Get a traceable BOQ in minutes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
