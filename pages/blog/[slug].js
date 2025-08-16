// pages/blog/[slug].js
import Head from "next/head";
import { getBaseUrl } from "../../lib/url";
import { buildArticleMeta } from "../lib/siteMeta";

export default function BlogArticle({ meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>

        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="My Next.js Site" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const baseUrl = getBaseUrl(req);
  const meta = buildArticleMeta(params.slug, baseUrl);

  if (!meta) {
    // No such article → serve 404
    return { notFound: true };
  }

  return { props: { meta } };
}
