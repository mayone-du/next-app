import Head from "next/head";
import { Header } from "../components/header/Header";


const Home = () => {
  const siteTitle = "some practice";
  const metaDescription = "meta description";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <h1>Next.js, TypeScript, CSS Practice</h1>
    </>
  )
}

export default Home;