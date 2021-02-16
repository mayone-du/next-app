import Head from "next/head";
import { Header } from "../components/header/Header"

const Home = () => {
  const siteTitle = "イラストレーターRanze | LINEスタンプ・イラスト制作";
  const metaDescription = "Ranze公式HP";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <h1>{siteTitle}</h1>
    </>
  )
}

export default Home;