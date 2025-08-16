import Head from "next/head";
import { getBaseUrl } from "../../helper/url.js";
import { buildArticleMeta } from "../../helper/siteMeta.js";

export default function BlogPost({ meta, slug }) {
  if (!meta) return <p>Article not found</p>;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
      </Head>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </>
  );
}

export async function getServerSideProps({ params, req }) {
  const baseUrl = getBaseUrl(req);
  const slug = params.slug;
  const meta = buildArticleMeta(slug, baseUrl);
  return { props: { meta, slug } };
}
