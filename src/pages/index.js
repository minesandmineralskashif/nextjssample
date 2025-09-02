import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Site</title>
        <meta property="og:title" content="My Next.js Site" />
        <meta property="og:description" content="Welcome to my site" />
        <meta
          property="og:image"
          content="https://iridescent-cendol-52ab03.netlify.app/home.png"
        />
        <meta
          property="og:url"
          content="https://iridescent-cendol-52ab03.netlify.app"
        />
      </Head>
      <h1>Homepage</h1>
      <p>This is the homepage.</p>
      <img src="https://iridescent-cendol-52ab03.netlify.app/home.png" alt="Homepage Image" width="300" />
    </>
  );
}
