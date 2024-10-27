import { JetBrains_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export const jetbrains_mono = JetBrains_Mono({
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export const futuraMD = localFont({
  src: "./FutuMd.ttf",
  variable: "--font-display",
  weight: "100 900",
});
export const futuraBoldBT = localFont({
  src: "./FutuBd.ttf",
  variable: "--font-display-bold",
  weight: "100 900",
});
