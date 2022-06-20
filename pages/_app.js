// styles
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/layout.css";
import "../styles/homepage.css";
// layout
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
