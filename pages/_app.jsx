import '../styles/global.css'
import Script from "next/script";

export default function App({ Component, pageProps }) {
    return (
    <>
    <Script
    strategy='lazyOnload' 
    src={`https://www.googletagmanager.com/gtag/js?id=G-4CRNPPMX4L`}/>

    <Script strategy='lazyOnload'>
    {
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4CRNPPMX4L');
        `
    }
    </Script>

    <Component {...pageProps} />
    </>
    )
}