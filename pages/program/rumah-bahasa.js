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
    <div className={s.base}>
      <Head>
        <title>Rumah Bahasa</title>
      </Head>
      <div className={s.background}></div>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Rumah Bahasa NTB</h1>
        </div>
        <div className={s.card}>
          <div className={s.accordion_container}>
            <Accordion
              expanded={expanded === "panel1"}
              // expanded={true}
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
                  Rumah Bahasa merupakan program dari LPPNTB yang dibentuk untuk
                  mendukung terjalannya program Beasiswa NTB. Dengan
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
              expanded={expanded === "panel2"}
              // expanded={true}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className={s.accordion_title}>Pendaftaran dan Seleksi</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className={s.jenis_beasiswa}>
                  <div>
                    Hal - hal yang perlu diperhatikan pada saat melakukan
                    pendaftaran :
                  </div>
                  <ol>
                    <li>
                      <b>Sertifikat Bahasa</b> <br /> Calon peserta Rumah Bahasa
                      harus mempersiapkan Sertifikat Bahasa yang dimilikinya
                      pada saat melakukan pendaftaran, karena dengan sertifikat
                      bahasa yang dimiliki saat ini akan menjadi tolak ukur
                      apakah calon peserta tersebut layak mengikuti program
                      Rumah Bahasa atau tidak
                    </li>
                    <li>
                      <b>Syarat Wajib</b> <br /> Untuk menjadi peserta Rumah
                      Bahasa, ada persyaratan wajib yang harus diikuti oleh
                      calon peserta. Yaitu, untuk menjadi peserta Rumah Bahasa
                      Pada kelas IELTS, calon peserta harus memiliki sertifikat
                      IELTS dengan band minimal 5.0, sedangkan untuk menjadi
                      peserta Rumah Bahasa pada kelas TOEFL, calon peserta harus
                      memiliki sertifikat TOEFL dengan skor minimal 400
                    </li>
                    <li>
                      <b>Ijazah/SKL/KRS</b> <br /> Calon peserta Rumah Bahasa
                      harus mempersiapkan Ijazah / Surat Keterangan lulus /
                      Kartu Rancangan Studi terakhir yang dimilikinya sebagai
                      berkas pendukung saat melakukan pendaftaran
                    </li>
                    <li>
                      <b>Alasan Yang Kuat</b> <br /> Calon Peserta Rumah Bahasa
                      harus memiliki alasan yang kuat pada saat melakukan
                      pendaftaran, yang meyakinkan Tim Rumah Bahasa kalau Calon
                      Peserta tersebut layak menjadi Peserta Rumah Bahasa
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
              expanded={expanded === "panel3"}
              // expanded={true}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={s.accordion_title}>
                  Timeline Program Rumah Bahasa Batch V Tahun 2021
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
                  width={image2.fields.file.details.image.width}
                  height={image2.fields.file.details.image.height}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              // expanded={true}
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
                  {/* <ol>
                    <li>
                      Memiliki KTP NTB, atau berdomisili paling kurang 2 (dua)
                      tahun di NTB, atau Diaspora NTB yang dibuktikan dengan
                      surat pernyataan keluarga yang adalah penduduk NTB (
                      Khusus untuk Beasiswa Kategori B )
                    </li>
                    <li>Ijazah dan Transkrip Nilai Terakhir (Legalisir)</li>
                    <li>
                      Surat Rekomendasi dari Dosen, Institusi, atau Tokoh
                      Masyarakat
                    </li>
                    <li>
                      Sertifikat Bahasa, Skor/Band minimal :
                      <ul>
                        <li>TOEFL ITP : 500</li>
                        <li>IELTS : 5.0</li>
                        <li>TOEIC : 600</li>
                        <li>TOEFL IBT : 50</li>
                      </ul>
                    </li>
                    <li>Curriculum Vitae (dalam bahasa inggris)</li>
                    <li>
                      Study Plan (dalam bahasa inggris, maksimal satu halaman)
                    </li>
                    <li>
                      Motivation Letter (dalam bahasa inggris, maksimal satu
                      halaman)
                    </li>
                    <li>
                      Surat Keterangan Sehat dari Puskesmas atau Rumah Sakit
                    </li>
                    <li>
                      Jika sudah mendapatkan gelar S2, tidak boleh mendaftar
                      untuk jenjang pendidikan yang sama
                    </li>
                  </ol> */}
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion
              expanded={expanded === "panel5"}
              // expanded={true}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={s.accordion_title}>
                  Pengumuman Peserta Rumah Bahasa Batch IV Yang Lolos Seleksi
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol className={s.list_berkas}>
                  <li>
                    <b>Ijazah</b>,&nbsp; <i>Scan, Legalisir</i>
                  </li>
                  <li>
                    <b>Transkrip Nilai</b>,&nbsp; <i>Scan</i>
                  </li>
                  <li>
                    <b>Surat Keterangan Domisili</b>,&nbsp; <i>Scan</i>
                  </li>
                  <li>
                    <b>Surat Rekomendasi</b>,&nbsp; <i>Scan</i>
                  </li>
                  <li>
                    <b>Curriculum Vitae</b>,&nbsp;
                    <i>Dalam Bahasa Inggris, Satu halaman</i>
                  </li>
                  <li>
                    <b>Study Plan</b>,&nbsp;
                    <i> Dalam Bahasa Inggris, Satu halaman</i>
                  </li>
                  <li>
                    <b>Motivation Letter</b>,&nbsp;
                    <i>Dalam Bahasa Inggris, Satu halaman</i>
                  </li>
                  <li>
                    <b>Paspor (Tidak Wajib)</b>,&nbsp; <i>Scan halaman depan</i>
                  </li>
                  <li>
                    <b>Sertifikat Bahasa</b>,&nbsp;
                    <i>TOEFL ITP / TOEIC / IELTS / MUET / TOEFL IBT</i>
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default rumahBahasa;
