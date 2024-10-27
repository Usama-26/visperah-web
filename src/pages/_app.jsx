import "@/styles/globals.css";
import { futuraBoldBT, futuraMD, inter, jetbrains_mono } from "./fonts/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${jetbrains_mono.variable} ${futuraMD.variable} ${futuraBoldBT.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
