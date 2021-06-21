// import App from 'next/app'
import { Toaster } from 'react-hot-toast';
import 'tailwindcss/tailwind.css';
// import Default from "../containers/Default";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Toaster />
            <Component {...pageProps} />
        </>
    );
}

export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
