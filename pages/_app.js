// pages/_app.js
import '../styles/global.css'; // Changed from globals.css to global.css

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
