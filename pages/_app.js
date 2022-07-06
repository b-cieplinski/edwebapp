import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"

const progress = new ProgressBar({
  size: 4,
  color: "#ecb731",
  className:'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


function MyApp({ Component, pageProps }) {
  return <div className="bg-gradient-to-t from-gray-100 via-stone-50 to-gray-100 md:bg-gradient-to-t md:from-gray-100 md:via-neutral-200 md:to-gray-100"><Component {...pageProps} /></div>
}

export default MyApp
