import Head from "next/head";

export default function Article4() {
  return (
    <>
      <Head>
        <title>Article 4 - My Blog</title>
        <meta property="og:title" content="Article 4 - My Blog" />
        <meta property="og:description" content="This is the fourth blog post" />
        <meta
          property="og:image"
          content="https://iridescent-cendol-52ab03.netlify.app/shutterstock_706176499.jpg"
        />
        <meta
          property="og:url"
          content="https://iridescent-cendol-52ab03.netlify.app/blog/article4"
        />
      </Head>
      <h1>Article 4</h1>
      <p>Welcome to the fourth blog article!</p>
      <img src="https://iridescent-cendol-52ab03.netlify.app/shutterstock_706176499.jpg" alt="Article 4 Image" width="300" />
    </>
  );
}
