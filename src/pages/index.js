import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import gradient from "../../public/images/gradient.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { seoDescription, openGraphDescription } from "@/utils/seoDescription";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NextSeo
        title="tweepsbook"
        description={seoDescription}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://jetprotocol.vercel.app",
          title: "tweepsbook",
          description: { openGraphDescription },
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          siteName: "SiteName",
        }}
        twitter={{
          handle: "https://twitter.com/tweepsbookcom",
          site: "https://tweepsbook.com/",
          cardType: "summary_large_image",
        }}
      />
      <main
        className={` flex-col items-center justify-center bg-[#000] ${inter.className}`}
      >
        <div className="flex -mt-12 items-center  justify-center relative">
          <Image
            src={gradient}
            width={700}
            height={700}
            alt="gradient"
            draggable={false}
          />
          <div className="flex flex-col gap-1.5 absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-[#54C0A0] font-medium text-center">
              <p>JET PROTOCOL</p>
            </div>
            <div className="flex flex-col items-center justify-center text-6xl max-w-6xl">
              <h2 className="text-center">
                <span className={styles.main__text}>
                  the next generation of
                </span>{" "}
                <span className={styles.defi__text}>defi governance</span>
              </h2>
            </div>
            <div className="text-xl w-full text-center mt-3">
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.60)",
                }}
              >
                experience open source, transparent and efficient borrowing and
                lending on solana.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div
            className="flex items-center justify-center rounded-[100px] bg-[#64AE9D] text-black py-2 px-5 font-semibold"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.24)",
              boxShadow:
                "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
            }}
          >
            <Link href="/auth/login">
              <button>read docs</button>
            </Link>
          </div>
          <div
            className="text-white py-2 px-5 flex items-center justify-center rounded-[100px] font-semibold"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.48)",
              background: "rgba(0, 0, 0, 0.12)",
              boxShadow:
                "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
              backdropFilter: "blur(6px)",
            }}
          >
            <button>how it works</button>
          </div>
        </div>
      </main>
    </>
  );
}
