import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: SEOProps) {

  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? ' | Convert My Recipe' : ''}`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_APP_URL}/${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      { !shouldIndexPage && <meta name="robots" content="none" /> }

      { description && <meta name="description" content={description} /> }
      { pageImage && <meta name="image" content={pageImage} /> }

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="@name" />
      <meta name="twitter:creator" content="@name" /> */}
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />

      <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_APP_URL}/node_modules/bootstrap/dist/css/bootstrap.min.css`}></link>
    </Head>
  );
}
