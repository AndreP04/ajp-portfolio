import { Geist, Geist_Mono } from "next/font/google";
import ParticlesBackground from "./components/ParticlesBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "AJ Pretorius",
  description: "My personal portfolio",
  icons: "/icon.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white`}>
        {/* Particles Background */}
        <div className="fixed inset-0 -z-10">
          <ParticlesBackground
            particleCount={1000}
            particleSpread={10}
            particleColors={["#00b4d8", "#90e0ef", "#caf0f8"]}
            speed={0.25}
            alphaParticles={true}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
          />
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
