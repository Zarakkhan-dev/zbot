import "@/styles/globals.css";
import "@/Component/Chatbot/chatbot.css";
import "@/Component/Login/login.css";
import "@/Component/Signup/signup.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
