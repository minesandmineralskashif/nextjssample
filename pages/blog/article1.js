import Head from "next/head";

export default function Article1() {
  return (
    <>
      <Head>
        <title>Article 1 - My Blog</title>
        <meta property="og:title" content="Article 1 - My Blog" />
        <meta property="og:description" content="This is the first blog post" />
        <meta
          property="og:image"
          content="https://YOUR_DOMAIN/images/article1.jpeg"
        />
        <meta property="og:url" content="https://YOUR_DOMAIN/blog/article1" />
      </Head>
      <h1>Article 1</h1>
      <p>Welcome to the first blog article!</p>
    </>
  );
}
