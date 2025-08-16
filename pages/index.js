import Head from "next/head";
import { getBaseUrl } from "../helper/url.js";
import { buildHomeMeta } from "../helper/siteMeta.js";

export default function Home({ meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
      </Head>
      <h1>Homepage</h1>
      <p>This is the homepage.</p>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const baseUrl = getBaseUrl(req);
  const meta = buildHomeMeta(baseUrl);
  return { props: { meta } };
}
