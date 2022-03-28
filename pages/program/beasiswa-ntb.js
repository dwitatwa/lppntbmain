import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import s from "../../styles/program/BeasiswaNTB.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";

const beasiswaNTB = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Header />
      <div className={s.base}>
        <Head>
          <title>Beasiswa NTB</title>
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Beasiswa NTB</h1>
          </div>
          <div className={s.information}>
            <h1>
              Pendaftaran Beasiswa NTB Tujuan Asia dan Eropa Tahun 2022
            </h1>
            <br />        
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href="http://bntb.site/PendaftaranBeasiswaNTB-2022"
              target="_blank"
              disableElevation
            >
              Daftar Disini
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              size="small"
              href="https://drive.google.com/file/d/1k4_jUZidyYKDpf76gnYYHXNsDmgu-r0C/view?usp=sharing"
              target="_blank"
              disableElevation
            >
              Lihat Booklet Pendaftaran &nbsp; <VisibilityIcon />
            </Button>
          </div>
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
                    Tentang Beasiswa NTB
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Beasiswa NTB adalah program unggulan Pemerintah Provinsi
                    Nusa Tenggara Barat melalui LPPNTB yang bertujuan untuk
                    meningkatkan kualitas sumber daya manusia yang ada di daerah
                    Nusa Tenggara Barat. Beasiswa NTB merupakan program
                    pengiriman 1000 Cendekia Gemilang, dimana putra dan putri
                    Nusa Tenggara Barat yang berprestasi akan dikirim dan
                    dibiayai ke luar negeri untuk melanjutkan studinya, baik itu
                    untuk jenjang S1, S2 maupun S3.
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
                    Jenis - Jenis Beasiswa NTB
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={s.jenis_beasiswa}>
                    <ol>
                      <li>
                        <b>Kategori A</b> <br /> merupakan beasiswa NTB yang
                        dibiayai secara penuh (Fully Funded). Komponen yang
                        dibayai pada kategori ini adalah :
                        <ul className={s.komponen_biaya}>
                          <li>Tuition Fee</li>
                          <li>Living Allowance (LA)</li>
                          <li>Settlement Allowance (SA)</li>
                          <li>Visa Application Fee</li>
                          <li>Health Insurance</li>
                          <li>Flight ( Round Trip )</li>
                        </ul>
                      </li>
                      <li>
                        <b>Kategori B</b> <br /> merupakan beasiswa NTB yang
                        dibiayai secara sebagian (Partial Funded). Komponen yang
                        dibayai oleh LPPNTB pada kategori ini adalah salah satu
                        atau sebagian dari Kategori A
                      </li>
                      <li>
                        <b>Kategori C</b> <br /> merupakan beasiswa NTB untuk
                        Short Course, Internship, dan program pengembangan diri
                        yang pendanaannya bisa partial funded atau fully funded.
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
                    Pendaftaran dan Seleksi
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>
                      <b> Pendaftaran Online</b> <br /> Calon Awardee
                      mendaftarkan diri melalu website resmi LPPNTB
                      https://lppntb.com, maupun melalui link yang sudah
                      disediakan langsung oleh tim Beasiswa NTB.
                    </li>
                    <li>
                      <b> Seleksi Berkas</b> <br /> Setiap berkas yang diupload
                      pada form pendaftaran diseleksi dan divalidasi. Calon
                      awardee yang lulus seleksi berkas diumumkan melalui laman
                      resmi LPPNTB untuk melanjutkan ke tahap Seleksi Wawancara.
                    </li>
                    <li>
                      <b> Seleksi Wawancara</b> <br /> Calon awardee yang lulus
                      seleksi wawancara diumumkan melalui laman resmi LPPNTB dan
                      dinyatakan sebagai Awardee Beasiswa NTB..
                    </li>
                    <li>
                      <b> Penempatan Kampus</b> <br /> Awardee Beasiswa NTB
                      tujuan Malaysia wajib mengikuti tes MUET, jika belum punya
                      IELTS atau TOEFL IBT. Jika Awardee sudah memenuhi
                      persyaratan kampus tujuan pada tahap 2, awardee lanjut ke
                      tahap 5. Jika belum memenuhi persyaratan kampus, awardee
                      diberikan waktu maksimal 1 (satu) tahun untuk melengkapi
                      persyaratan sebelum lanjut ke tahap 5.
                    </li>
                    <li>
                      <b> Persiapan Keberangkatan</b> <br /> Persiapan yang
                      dilakukan adalah:
                      <ul>
                        <li>Pendaftaran ke kampus tujuan</li>
                        <li>Pre-Departure Training</li>
                        <li>Pengurusan Visa dan tiket</li>
                      </ul>
                    </li>
                    <li>
                      <b>Pemberangkatan</b>
                    </li>
                  </ol>
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
                    Persyaratan Umum
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <ol>
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
                          <li>TOEFL ITP : 450</li>
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
                    </ol>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                // expanded={expanded === "panel5"}
                expanded={true}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={s.accordion_title}>
                    Berkas - Berkas
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
                      <b>Paspor (Tidak Wajib)</b>,&nbsp;{" "}
                      <i>Scan halaman depan</i>
                    </li>
                    <li>
                      <b>Sertifikat Bahasa</b>,&nbsp;
                      <i>TOEFL ITP / TOEIC / IELTS / MUET / TOEFL IBT</i>
                    </li>
                  </ol>
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

export default beasiswaNTB;
