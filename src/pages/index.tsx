import Head from "next/head";
import History from "@/components/History/History";
import Individual from "@/components/Individual/Individual";
import Spring from "@/components/Spring/Spring";
import Intro from "@/components/Intro/Intro";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maroon</title>
        <meta name="Maroon" content="Maroon cosmetics" />
      </Head>
      <Layout mainPage>
        <Intro />
        <Spring />
        <Individual />
        <History />
      </Layout>
    </>
  );
}
