import "../styles.css";
import "../styles/globals.css";
import "../styles/hover-min.css";
import "../styles/styles.css";

import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
