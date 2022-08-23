import { AppProps } from "next/app";
import "../styles/globals.css";
// import "../styles/materialicon.css";
function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
