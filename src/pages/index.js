import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Crafted by " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imagestream_logo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p className="text-3xl font-bold underline">
          {"This is the start of something beautiful."}
        </p>
      </main>
    </>
  );
}
