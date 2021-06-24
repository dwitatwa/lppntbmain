import s from "./booklet.module.css";
import Button from "@material-ui/core/Button";
import { createClient } from "contentful";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const booklet19_20 = await client.getAsset("3DqYUAHRiyqEwJmoRA2Rzo");
  const booklet_guru_nakes = await client.getAsset("6bMkYqil36cLNzB71P1Nr");
  const booklet_tahap2 = await client.getAsset("7DW3CklkmVjohUX1sD51Dk");
  return {
    props: {
      booklet19_20,
      booklet_guru_nakes,
      booklet_tahap2,
    },
  };
}

const Booklet = ({ booklet19_20, booklet_guru_nakes, booklet_tahap2 }) => {
  return (
    <div>
      <Header />
      <Head>
        <title>Buku Pedoman Beasiswa NTB</title>
      </Head>
      <div className={s.main}>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Booklet Beasiswa NTB</h1>
          </div>
          <div className={s.judul}>Tahun 2021</div>
          <div className={s.container_buku}>
            <div className={s.buku}>
              <img src="/cobook.jpeg" alt="" />
              <div className={s.content}>
                <h1>Booklet Info</h1>
                Tujuan Eropa 2021 <br />
                <span className={s.update_status}>(Update Negara Turki)</span>
                <div className={s.status}> Masih Berlaku</div>
                <Button
                  className={s.download}
                  size="small"
                  variant="outlined"
                  color="primary"
                  href="https://drive.google.com/file/d/1uUlA9gaWO8a4OnMXoyd8zdQEq8JHPJTg/view?usp=sharing"
                  target="_blank"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
          <div className={s.judul}>Tahun 2019-2020</div>
          <div className={s.container_buku}>
            <div className={s.buku}>
              <img src={"https:" + booklet19_20.fields.file.url} alt="" />
              <div className={s.content}>
                <h1>Booklet Info</h1>
                Tahun 2019-2020
                <div className={s.status_x}> Tidak Berlaku</div>
                <Button
                  className={s.download}
                  size="small"
                  variant="outlined"
                  color="primary"
                  href="https://drive.google.com/file/d/1NA-i1bDVGJ6dVYVr2jiiKpzwrCPEz0QN/view"
                  target="_blank"
                >
                  Download
                </Button>
              </div>
            </div>
            <div className={s.buku}>
              <img src={"https:" + booklet_guru_nakes.fields.file.url} alt="" />
              <div className={s.content}>
                <h1>Booklet Info</h1>
                Guru Dan Nakes
                <div className={s.status_x}> Tidak Berlaku</div>
                <Button
                  className={s.download}
                  size="small"
                  variant="outlined"
                  color="primary"
                  href="https://drive.google.com/file/d/1clbPW7EsXbT2-rFpBwqyJfErrmjeRjiM/view"
                  target="_blank"
                >
                  Download
                </Button>
              </div>
            </div>
            <div className={s.buku}>
              <img src={"https:" + booklet_tahap2.fields.file.url} alt="" />
              <div className={s.content}>
                <h1>Booklet Info</h1>
                Tahap 2<div className={s.status_x}> Tidak Berlaku</div>
                <Button
                  className={s.download}
                  size="small"
                  variant="outlined"
                  color="primary"
                  href="https://drive.google.com/file/d/1XDiP1eEr8QlcHl7wN29GKe12j8dQuM8N/view"
                  target="_blank"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booklet;
