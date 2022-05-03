import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import s from "../../styles/program/BeasiswaNTB.module.css";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import GetAppIcon from "@material-ui/icons/GetApp";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const image1 = await client.getAsset("42YrEK1dzYcVSozCJJk65Z");
  const image2 = await client.getAsset("4CrXP5MblGRENE4IwtvJNH");
  return {
    props: {
      image1,
      image2,
    },
  };
}

const rumahBahasa = ({ image1, image2 }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header />
      <div className={s.base}>
        <Head>
          <title>Rumah Bahasa</title>
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Rumah Bahasa NTB</h1>
          </div>
          <div className={s.information}>
            <h1>Pengumuman Peserta Rumah Bahasa 2022</h1>
            <div>
              Halo Sobat Rumah Bahasa,
              Kabar yang ditunggu-tunggu akhirnya tiba,
              Yuk buruan cek nama kalian. Bagi yang lulus, jangan lupa mengisi formulir validasi melalui link dibawah ya. Bagi yang belum lulus, jangan berkecil hati coba lagi di batch berikutnya. Tetap semangat sobat MinSa semuanya
              <Button
                variant="contained"
                color="primary"
                size="small"
                href="https://drive.google.com/file/d/1wVvcaDElW5zpvW34CpgHxbIaQbKyP0bS/view?usp=sharing"
                target="_blank"
                disableElevation
              >
                List Nama Peserta yang Lulus &nbsp; <VisibilityIcon />
              </Button>
            </div>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href="https://lppntb.com/CalonpesertaIELTS"
              target="_blank"
              disableElevation
              style={{ margin: "5px" }}
            >
              <CheckCircleIcon fontSize="small" /> &nbsp; Validasi Peserta IELTS
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href="http://bntb.site/ValidasipesertaRB"
              target="_blank"
              disableElevation
              style={{ margin: "5px" }}
            >
              <CheckCircleIcon fontSize="small" /> &nbsp; Validasi Peserta TOEFL, GE & ESP 
            </Button>
          </div>
          {/* <div className={s.information}>
            <h1>Daftar Nama Tutor Rumah Bahasa Batch V Tahun 2021</h1>
            <div>
              Untuk melihat daftar nama silahkan klik pada tombol dibawah ini
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              href="https://drive.google.com/file/d/1aKIcHi-XxgqvKM9wVaXej3WpVWtGu-EF/view?usp=sharing"
              target="_blank"
              disableElevation
            >
              Lihat Disini &nbsp; <VisibilityIcon />
            </Button>
          </div> */}
          <div className={s.card}>
            <div className={s.accordion_container}>
              <Accordion
                // expanded={expanded === "panel1"}
                expanded={true}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={s.accordion_title}>
                    Tentang Rumah Bahasa NTB
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Rumah Bahasa merupakan program dari LPPNTB yang dibentuk
                    untuk mendukung terjalannya program Beasiswa NTB. Dengan
                    berkolaborasi dengan Dinas Pendidikan dan Kebudayaan NTB,
                    Rumah Bahasa memberikan pelatihan peningkatan dan penguatan
                    kapasitas berbahasa asing bagi masyarakat NTB. Tujuan
                    peningkatan bahasa asing dimaksudkan untuk membuka peluang
                    bagi yang ingin melanjutkan sekolah ke luar negeri maupun
                    untuk keperluan peningkatan kapasitas pada tempat kerja.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                // expanded={expanded === "panel2"}
                expanded={true}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <div className={s.accordion_title}>
                    Pendaftaran dan Seleksi
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={s.jenis_beasiswa}>
                    <div>
                      Hal - hal yang perlu diperhatikan pada saat melakukan
                      pendaftaran :
                    </div>
                    <ol>
                      <li>
                        <b>Sertifikat Bahasa</b> <br /> Calon peserta Rumah
                        Bahasa harus mempersiapkan Sertifikat Bahasa yang
                        dimilikinya pada saat melakukan pendaftaran, karena
                        dengan sertifikat bahasa yang dimiliki saat ini akan
                        menjadi tolak ukur apakah calon peserta tersebut layak
                        mengikuti program Rumah Bahasa atau tidak
                      </li>
                      <li>
                        <b>Syarat Wajib</b> <br /> Untuk menjadi peserta Rumah
                        Bahasa, ada persyaratan wajib yang harus diikuti oleh
                        calon peserta. Yaitu, untuk menjadi peserta Rumah Bahasa
                        Pada kelas IELTS, calon peserta harus memiliki
                        sertifikat IELTS dengan band minimal 5.0, sedangkan
                        untuk menjadi peserta Rumah Bahasa pada kelas TOEFL,
                        calon peserta harus memiliki sertifikat TOEFL dengan
                        skor minimal 400
                      </li>
                      <li>
                        <b>Ijazah/SKL/KRS</b> <br /> Calon peserta Rumah Bahasa
                        harus mempersiapkan Ijazah / Surat Keterangan lulus /
                        Kartu Rancangan Studi terakhir yang dimilikinya sebagai
                        berkas pendukung saat melakukan pendaftaran
                      </li>
                      <li>
                        <b>Alasan Yang Kuat</b> <br /> Calon Peserta Rumah
                        Bahasa harus memiliki alasan yang kuat pada saat
                        melakukan pendaftaran, yang meyakinkan Tim Rumah Bahasa
                        kalau Calon Peserta tersebut layak menjadi Peserta Rumah
                        Bahasa
                      </li>
                      <li>
                        <b>
                          Calon Peserta Rumah Bahasa Yang Diterima, Bukan
                          Merupakan Peserta Rumah Bahasa Pada Tahun Sebelumnya
                        </b>
                      </li>
                    </ol>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                // expanded={expanded === "panel3"}
                expanded={true}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={s.accordion_title}>
                    Timeline Program Rumah Bahasa Batch VI Tahun 2022
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={s.image_rb}>
                  <Image
                    src={"https:" + image1.fields.file.url}
                    alt=""
                    width={image1.fields.file.details.image.width}
                    height={image1.fields.file.details.image.height}
                  />
                  <Image
                    src={"https:" + image2.fields.file.url}
                    alt=""
                    width={image1.fields.file.details.image.width}
                    height={image2.fields.file.details.image.height}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                // expanded={expanded === "panel4"}
                expanded={true}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={s.accordion_title}>
                    E-Sertifikat Tes
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <ul>
                      <li>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          href="https://drive.google.com/drive/folders/1KfooVITjYMjh_WwxZRXSN3oyNbJnNCMN?usp=sharing"
                          target="_blank"
                          disableElevation
                        >
                          IELTS PREDIKSI JUNI 2021 &nbsp; <VisibilityIcon />
                        </Button>
                      </li>
                      <li>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          href="https://drive.google.com/drive/folders/1R81QQkpPzQNMC1OycD3kPCsfXVbXJ9UY?usp=sharing"
                          target="_blank"
                          disableElevation
                        >
                          TOEFL PREDIKSI JUNI 2021 &nbsp; <VisibilityIcon />
                        </Button>
                      </li>
                    </ul>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default rumahBahasa;
