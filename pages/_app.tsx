import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/magnific-popup.css";
import "../styles/Home.module.css";

// import "../styles/materialicon.css";
function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
