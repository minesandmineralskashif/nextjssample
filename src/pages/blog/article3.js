import Head from "next/head";

export default function Article3() {
  return (
    <>
      <Head>
        <title>Article 3 - My Blog</title>
        <meta property="og:title" content="Article 3 - My Blog" />
        <meta property="og:description" content="This is the third blog post" />
        <meta
          property="og:image"
          content="https://iridescent-cendol-52ab03.netlify.app/shutterstock_2265038207.jpg"
        />
        <meta
          property="og:url"
          content="https://iridescent-cendol-52ab03.netlify.app/blog/article3"
        />
      </Head>
      <h1>Article 3</h1>
      <p>Welcome to the third blog article!</p>
      <img src="https://iridescent-cendol-52ab03.netlify.app/shutterstock_2265038207.jpg" alt="Article 3 Image" width="300" />
    </>
  );
}
