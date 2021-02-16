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
      <h1 className="text-lg">Next.js, TypeScript, CSS Practice</h1>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            Sarah Dayan
          </div>
          <div className="text-gray-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
</figure>
    </>
  )
}

export default Home;