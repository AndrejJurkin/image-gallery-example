import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Grid from "../components/Grid/Grid";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Head>
        <title>Gridfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="space-y-12">
        <div className="h-20" />
        <section className="text-center">
          <h1 className="font-serif text-7xl font-thin">
            Hi, I&apos;m Andrej!
          </h1>
          <h2 className="text-2xl text-slate-600">
            I build stuff for the internet
          </h2>
        </section>
        <Grid images={images} />
      </main>
      <Footer />
    </div>
  );
}

const images = [
  {
    id: 1,
    src: "/1-min.jpg",
    title: "Image 1",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "large",
  },
  {
    id: 3,
    src: "/3-min.jpg",
    title: "Image 3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 2,
    src: "/2-min.jpg",
    title: "Image 2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },

  {
    id: 4,
    src: "/4-min.jpg",
    title: "Image 4",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 5,
    src: "/5-min.jpg",
    title: "Image 5",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 6,
    src: "/6-min.jpg",
    title: "Image 6",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "large",
  },
  {
    id: 7,
    src: "/7-min.jpg",
    title: "Image 7",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "large",
  },
  {
    id: 8,
    src: "/8-min.jpg",
    title: "Image 8",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 9,
    src: "/9-min.jpg",
    title: "Image 9",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 1,
    src: "/1-min.jpg",
    title: "Image 1",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "large",
  },
  {
    id: 3,
    src: "/3-min.jpg",
    title: "Image 3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
  {
    id: 2,
    src: "/2-min.jpg",
    title: "Image 2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "regular",
  },
];
