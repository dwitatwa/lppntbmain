import Head from "next/head";
import s from "../styles/Landing.module.css";
import News from "../components/News";
import Video from "../components/Video";
import CarouselApp from "../components/CarouselApp";
import Image from "next/image";
import { createClient } from "contentful";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "beritaDanKegiatan",
    limit: 4,
  });

  const crs = await client.getEntries({
    content_type: "carouselData",
  });

  const kampus = await client.getEntries({
    content_type: "kampusKerjasama",
  });

  return {
    props: {
      kampus: kampus.items,
      berita: res.items,
      crs: crs.items,
    },
  };
}

export default function Home({ berita, crs, kampus }) {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Head>
          <title>Lembaga Pengembangan Pendidikan </title>
        </Head>
        <div className={s.carousel}>
          <div className={s.background}></div>
          <div className={s.wrapper}>
            <CarouselApp crs={crs} />
          </div>
        </div>

        <div className={s.berita_kegiatan}>
          <h1>Berita dan Kegiatan Terbaru</h1>
          <div className={s.row_berita}>
            {berita.map((item) => (
              <div key={item.sys.id}>
                <News
                  title={item.fields.judul}
                  preview={item.fields.preview}
                  slug={item.fields.slug}
                  image={item.fields.cover.fields.file.url}
                />
              </div>
            ))}
          </div>
          <div className={s.row_berita}></div>
        </div>

        <div className={s.video_section}>
          <div className={s.background_video}></div>
          <div className={s.video_lpp}>
            <h1>Video Beasiswa NTB</h1>
            <div className={s.row_video}>
              <Video vid="NPEkOsBEPpM" width="1200" height="630" />
            </div>
            <div className={s.row_video}>
              <Video vid="VyUtrC58WvI" width="560" height="315" />
              <Video vid="_5jlhbGGTMo" width="560" height="315" />
            </div>
            <div className={s.row_video}>
              <Video vid="RQO8t_TJPkA" width="560" height="315" />
              <Video vid="bEH1FZV2VUQ" width="560" height="315" />
            </div>
          </div>
        </div>

        <div className={s.kampus_kerjasama}>
          <div className={s.kampus_container}>
            <h1>Kampus Kerjasama</h1>
            <div className={s.row_kampus}>
              {kampus.map((item) => (
                <div className={s.kampus} key={item.sys.id}>
                  <Image
                    src={"https:" + item.fields.gambar.fields.file.url}
                    width={item.fields.gambar.fields.file.details.image.width}
                    height={item.fields.gambar.fields.file.details.image.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
