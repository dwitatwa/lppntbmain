import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import s from "./Tentang.module.css";
import Head from "next/head";
import { createClient } from "contentful";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const image = await client.getAsset("5sKRigh78a3WHkKFfGDbsN");
  return {
    props: {
      image,
    },
  };
}

const tentang = ({ image }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Header />
      <div className={s.base}>
        <Head>
          <title>Profil LPPNTB</title>
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Tentang LPPNTB</h1>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3 style={{ textAlign: "center" }}>
              Profil Lembaga Pengembangan Pendidikan NTB
            </h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <p>
              LPPNTB adalah lembaga independen yang bergerak di bidang
              pendidikan, pelatihan, penelitian dan pengabdian kepada
              masyarakat. Keberadaannya sebagai salah satu mitra Pemerintah
              Provinsi yang membantu menyukseskan program-program Pemerintah
              Provinsi Nusa Tenggara Barat, terutama dalam bidang pendidikan dan
              pelatihan khususnya beasiswa ke luar negeri.
            </p>
            <p>
              LPPNTB didirikan berdasarkan keputusan Kemenkumham Nomor
              AHU-0001093.AH.01.07. Tahun 2019. Dalam struktur kepengurusannya,
              LPPNTB terdiri dari Direktur, Sekretaris, Bendahara dan 8 Divisi
              yaitu Divisi Kerjasama, Divisi Language & Training Centre, Divisi
              Human, Divisi Media & IT, Divisi Administrasi & Kesekretariatan,
              Divisi Umum, Divisi Administrasi Keuangan, Divisi Alumni & Media
              Partner. Struktur tim ini dibantu oleh beberapa staf dan tenaga
              teknik yang mendukung kinerja tim LPPNTB. LPPNTB membantu
              merealisasikan Program 1000 Cendekia NTB Gemilang yang merupakan
              program unggulan Pemerintah Provinsi NTB yang fokus pada
              pengembangan sumber daya manusia NTB. Salah satu program yang
              dijalankan oleh LPPNTB adalah Program Beasiswa NTB, dimana putra
              putri NTB berprestasi dikirim dan dibiayai untuk studi ke Luar
              Negeri mulai dari jenjang S1, S2 hingga S3. Sejauh ini, LPPNTB
              telah mengirim kurang lebih sebanyak 595 mahasiswa NTB ke berbagai
              negara seperti Malaysia, China, Taiwan, Polandia, Ceko, Hungaria,
              dan Rusia yang tersebar dilebih dari 15 perguruan tinggi negeri
              maupun swasta.
            </p>
            <p>
              Program Beasiswa NTB telah cukup menjadi pemantik berbagai pihak
              untuk ikut terlibat dan mendukung program ini, diantaranya
              memberikan dukungan finansial, dukungan relasi kerjasama hingga
              dukungan pemberian beasiswa kepada anak-anak NTB. Melihat
              tingginya animo masyarakat terhadap program Beasiswa NTB dan
              keinginan yang besar untuk melanjutkan studi ke luar negeri,
              Pemerintah Provinsi NTB memutuskan untuk menggunakan dana APBD
              untuk program ini pada tahun 2020. LPPNTB bekerja sama dengan
              Dinas Pendidikan dan Kebudayaan NTB dalam proses pembiayaan
              Beasiswa NTB.
            </p>
            <p>
              LPPNTB telah menjalin komunikasi dengan berbagai pihak seperti
              Scholarship Collaboration Award Australia termasuk pemerintah
              lokal mereka Northern Territory yang sudah mulai dengan program
              pelatihannya, USAID, Pemerintah China yang sudah memberikan
              Beasiswa full dan parsial, Polandia yang sudah jauh-jauh hari
              sebagai negara pertama yang menjadi milestone anak-anak NTB ke
              luar negeri untuk studi melalui Beasiswa NTB, Taiwan, Malaysia dan
              masih banyak negara lain yang mulai menawarkan kesempatan belajar
              di negara mereka.
            </p>
            <p>
              Untuk mendukung program Beasiswa NTB, LPPNTB juga mengadakan
              program Rumah Bahasa dengan berkolaborasi dengan Dinas Pendidikan
              dan Kebudayaan NTB untuk memberikan peningkatan dan penguatan
              kapasitas berbahasa asing bagi masyarakat NTB. Tujuan peningkatan
              bahasa asing dimaksudkan untuk membuka peluang bagi yang ingin
              melanjutkan sekolah ke luar negeri maupun untuk keperluan
              peningkatan kapasitas pada tempat kerja. Program yang sudah
              berjalan saat ini adalah TOEFL dan IELTS Preparation Course
              beserta tes sertifikasi bagi 600 peserta yang tersebar di 10
              Kabupaten dan Kota di Nusa Tenggara Barat. Kursus Bahasa Mandarin
              di Kota Mataram yang diberikan oleh empat tutor native speaker
              dari Tiongkok hasil kerja sama dengan Confucius Institute
              Headquarters (Hanban).
            </p>
            <p>
              LPPNTB terus meningkatkan pelayanan bagi awardee dan alumni
              Beasiswa NTB, dan bagi masyarakat NTB pada umumnya. LPPNTB juga
              terus menjajaki potensi kerja sama yang dapat menguntungkan bagi
              pengembangan sumber daya manusia di NTB secara khusus.
            </p>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3 style={{ textAlign: "center" }}>
              Visi dan Misi Lembaga Pengembangan Pendidikan NTB
            </h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <div className={s.detail}>
              <div>
                <b>Visi :</b>
                <br />
                Menjadi salah satu pusat pengembangan Sumber Daya Manusia Nusa
                Tenggara Barat melalui pendidikan, penelitian, pelatihan dan
                pengabdian kepada masyarakat
              </div>
              <br />
              <div>
                <b>Misi :</b>
                <br />
                <ol>
                  <li>Menyediakan Layanan Beasiswa studi ke luar negeri</li>
                  <li>
                    Membangun kerjasama pengembangan sumber daya manusia NTB
                    dengan berbagai pihak
                  </li>
                  <li>
                    Menyediakan layanan peningkatan pengetahuan berbahasa
                    sebagai bagian tak terpisahkan dengan program Beasiswa
                  </li>
                  <li>
                    Menyediakan program pelatihan yang berorientasi pada
                    dukungan terhadap program pemerintah Provinsi NTB
                  </li>
                  <li>
                    Menyelenggarakan program-program pengabdian kepada
                    masyarakat dengan pelibatan para penerima Beasiswa NTB dan
                    alumni
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3 style={{ textAlign: "center" }}>
              Pengurus Lembaga Pengembangan Pendidikan NTB
            </h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <div className={`${s.detail} ${s.detail_image}`}>
              <Image
                src={"https:" + image.fields.file.url}
                alt=""
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
              />
            </div>
          </div>
          <div
            className={s.content}
            style={{ marginBottom: "20px", paddingBottom: "10px" }}
          >
            <h3 style={{ textAlign: "center" }}>
              Program Lembaga Pengembangan Pendidikan NTB
            </h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <div className={s.detail}>
              <div>
                <ol>
                  <li>
                    <b>Beasiswa NTB</b> <br />
                    Beasiswa NTB adalah program unggulan Pemerintah Provinsi
                    Nusa Tenggara Barat melalui LPPNTB, bertujuan untuk
                    meningkatkan kualitas sumber daya manusia yang ada di daerah
                    Nusa Tenggara Barat. Beasiswa NTB merupakan program
                    pengiriman 1000 Cendekia Gemilang, dimana putra dan putri
                    Nusa Tenggara Barat yang berprestasi akan dikirim dan
                    dibiayai ke luar negeri untuk melanjutkan studinya, baik itu
                    untuk jenjang S1, S2 maupun S3.
                  </li>
                  <li>
                    <b>Rumah Bahasa</b> <br />
                    Rumah Bahasa merupakan program dari LPPNTB yang dibentuk
                    untuk mendukung terjalannya program Beasiswa NTB. Dengan
                    berkolaborasi dengan Dinas Pendidikan dan Kebudayaan NTB,
                    Rumah Bahasa bertujuan untuk memberikan peningkatan dan
                    penguatan kapasitas berbahasa asing bagi masyarakat NTB.
                    Tujuan peningkatan bahasa asing dimaksudkan untuk membuka
                    peluang bagi yang ingin melanjutkan sekolah ke luar negeri
                    maupun untuk keperluan peningkatan kapasitas pada tempat
                    kerja.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default tentang;
