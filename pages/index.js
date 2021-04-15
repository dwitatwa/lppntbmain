import Head from "next/head";
import s from "../styles/Landing.module.css";
import News from "../components/News";
import Video from "../components/Video";
import CarouselApp from "../components/CarouselApp";

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Lembaga Pengembangan Pendidikan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.carousel}>
        <div className={s.background}></div>
        <div className={s.wrapper}>
          <CarouselApp />
        </div>
      </div>

      <div className={s.berita_kegiatan}>
        <h1>Berita dan Kegiatan Terbaru</h1>
        <div className={s.row_berita}>
          <News />
          <News />
          <News />
          <News />
        </div>
        <div className={s.row_berita}>
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>

      <div className={s.video_section}>
        <div className={s.background_video}></div>
        <div className={s.video_lpp}>
          <h1>Video LPPNTB</h1>
          <div className={s.row_video}>
            <Video vid="VyUtrC58WvI" />
            <Video vid="_5jlhbGGTMo" />
          </div>
          <div className={s.row_video}>
            <Video vid="RQO8t_TJPkA" />
            <Video vid="bEH1FZV2VUQ" />
          </div>
        </div>
      </div>
    </div>
  );
}
