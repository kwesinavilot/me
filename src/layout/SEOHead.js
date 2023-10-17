import Head from 'next/head'

export function SEOHead ({ title, description, keywords }) {
    return (
        <Head>
            <title>{`${title} | Breath Accra - Ensuring Accra Breathes Right`}</title>
            <link rel="icon" type="image/x-icon" href="https://breatheaccra.org/components/logo-lungs-light.png"></link>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Breathe Accra" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={`${title} | Breath Accra - Ensuring Accra Breathes Right`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://breathaccra.com/about/" />
            <meta property="og:image" content="https://breatheaccra.org/components/logo-round.png" />
            <meta property="og:image:alt" content="Breath Accra Logo" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={`${title} | Breath Accra - Ensuring Accra Breathes Right`} />
            <meta property="twitter:description" content={description} />
            <meta property="og:image" content="https://breatheaccra.org/components/logo-round.png" />
            <meta property="twitter:image:alt" content="Breath Accra Logo" />
        </Head>
    )
}
