import Head from 'next/head'

export function SEOHead ({ title, description, keywords }) {
    return (
        <Head>
            <title>{`${title} | Andrews Kwesi Ankomahene`}</title>
            <link rel="icon" type="image/x-icon" href="./adinkrahene.png"></link>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Andrews Kwesi Ankomahene" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={`${title} | Andrews Kwesi Ankomahene`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://kwesinavilot.github.io/me/about" />
            <meta property="og:image" content="./adinkrahene.png" />
            <meta property="og:image:alt" content="Andy's Logo" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={`${title} | Andrews Kwesi Ankomahene`} />
            <meta property="twitter:description" content={description} />
            <meta property="og:image" content="./adinkrahene.png" />
            <meta property="twitter:image:alt" content="Andy's Logo" />
        </Head>
    )
}
