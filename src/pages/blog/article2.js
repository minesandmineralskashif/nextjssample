import Head from "next/head";

export default function Article2() {
  return (
    <>
      <Head>
        <title>Article 2 - My Blog</title>
        <meta property="og:title" content="Article 2 - My Blog" />
        <meta property="og:description" content="This is the second blog post" />
        <meta
          property="og:image"
          content="https://iridescent-cendol-52ab03.netlify.app/shutterstock_2379725861.jpg"
        />
        <meta
          property="og:url"
          content="https://iridescent-cendol-52ab03.netlify.app/blog/article2"
        />
      </Head>
      <h1>Article 2</h1>
      <p>Welcome to the second blog article!</p>
      <img src="https://iridescent-cendol-52ab03.netlify.app/shutterstock_2379725861.jpg" alt="Article 2 Image" width="300" />
    </>
  );
}
