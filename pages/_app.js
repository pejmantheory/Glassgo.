// pages/_app.js
import '../styles/globals.css'; // Ensure this path correctly points to your global styles file.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
