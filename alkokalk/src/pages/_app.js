// src/pages/_app.js

import "../styles/globals.css"; // Ensure the path to globals.css is correct

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
