import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Modern developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24 px-6 max-w-6xl mx-auto fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}