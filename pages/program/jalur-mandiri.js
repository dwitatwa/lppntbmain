import React from "react";
import s from "./mandiri.module.css";
import { createClient } from "contentful";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "@material-ui/core/Button";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const vistula = await client.getAsset("1hnmFNyzNq2LJNhjmG483x");
  const nicolaus = await client.getAsset("7y92wNVcAfYiJP3EvbxyUD");

  return {
    props: {
      vistula,
      nicolaus,
    },
  };
}

export default function jalurMandiri({ vistula, nicolaus }) {
  return (
    <div>
      <Header />
      <div className={s.main}>
        <Head>
          <title>Jalur Mandiri</title>
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Jalur Mandiri (Non Beasiswa) </h1>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3>Apa itu Jalur Mandiri ?</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <p>
              Program Jalur Mandiri (Non Beasiswa) merupakan program baru dari
              LPPNTB yang memberikan kesempatan kepada seluruh rakyat Indonesia
              untuk melanjutkan studi jenjang S2 ke luar negeri melalui
              kerjasama yang sudah dilakukan oleh LPPNTB dengan Negara dan
              Kampus terkait. Program ini merupakan program <b>Non Beasiswa</b>,
              akan tetapi Mahasiswa tetap mendapatkan <i>privilege</i> yang
              diberikan sesuai dengan MoU antara LPPNTB dengan Negara atau
              Kampus terkait.
            </p>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3>Apa yang akan didapatkan?</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            Yang akan didapatkan oleh Mahasiswa melalui program ini adalah :
            <ol>
              <li>Bantuan saat pendaftaran ke kampus</li>
              <li>Bantuan dalam pembuatan Visa</li>
              <li>
                Persiapan keberangkatan seperti Bimbingan Teknik (BimTek) dan
                Pre Departure Training (PDT)
              </li>
              <li>
                Privilege yang sama dengan Awardee yang melalui jalur Beasiswa
              </li>
            </ol>
          </div>
          <div
            className={`${s.content} ${s.content_negara}`}
            style={{ marginBottom: "20px" }}
          >
            <h3>Negara dan Kampus Tujuan</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <p>
              Negara yang dituju dengan program Jalur Mandiri adalah Polandia
              yang merupakan negara <i>Centre of Europe</i>. Dengan posisi
              Polandia yang berada di tengah diantara negara - negara Eropa
              membuat kemungkinan untuk mendapat kesempatan, pengalaman, dan
              pengetahuan dalam dunia akademik maupun non akademik menjadi
              sangat besar. Salah satu program yang paling dicari oleh
              International Students di negara Eropa adalah program{" "}
              <i>Erasmus</i>. Program Erasmus (singkatan dari European Region
              Action Scheme for the Mobility of University Students) merupakan
              program pertukaran mahasiswa di Eropa yang didirikan pada tahun
              1987, dimana dengan program ini International Students bisa
              mendapatkan kesempatan belajar di beberapa negara Eropa.
            </p>
            <div className={s.res_table}>
              <table className={`${s.table} ${s.table_tuition}`}>
                <thead>
                  <tr className={s.tr}>
                    <th className={s.th}>Universitas</th>
                    <th className={s.th}>Jurusan yang dibuka</th>
                    <th className={s.th}>Catatan</th>
                    <th className={s.th}>Biaya Pendidikan dan Administrasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={s.tr}>
                    <td className={s.td} rowSpan="2">
                      <img src={"https:" + vistula.fields.file.url} alt="" />
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li>Computer Engineering</li>
                        Sub Major di Computer Engineering:
                        <ol>
                          <li>
                            Design and Applications of Wireless Networks For
                            Internet of Things.
                          </li>
                          <li>
                            Design and Applications of Mobile Applications
                          </li>
                          <li>
                            Cybersecurity and Reliability of Information and
                            Industrial Systems
                          </li>
                          <li>
                            Applied Data Science in Collaboration With Magnimind
                            Academy From Silicon Valley.
                          </li>
                        </ol>
                      </ul>
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li>
                          Program Computer Engineering (Master) sudah termasuk
                          Magang di perusahaan yang berada di Vistula.
                        </li>
                        <li>
                          Mahasiswa tetap mendapatkan Kesempatan untuk mengikuti
                          Program Erasmus.
                        </li>
                        <li>
                          Mendapatkan Sertifikat Langsung dari Silicon Valley
                          untuk Data Science
                        </li>
                      </ul>
                    </td>
                    <td className={s.td} rowSpan="2">
                      <ul>
                        <li style={{ marginBottom: "20px" }}>
                          Tuition Fee yang tertera di Booklet merupakan biaya at
                          cost. Sedangkan yang melalui LPPNTB adalah:
                          <ul>
                            <li>
                              Registration Fee : <b>200 EUR</b>{" "}
                            </li>
                            <li>
                              Tuition Fee/Year : <b>2000 EUR</b>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Biaya Administrasi (Sekali Bayar) :{" "}
                          <b>Rp. 5.000.000,- </b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td}>
                      <ul>
                        <li>Energy Management</li>
                      </ul>
                    </td>
                    <td className={s.td} style={{ textAlign: "center" }}>
                      ---
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td} rowSpan="4">
                      <img src={"https:" + nicolaus.fields.file.url} alt="" />
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li>International Economics and Finance</li>
                        <li>Bussines Administration</li>
                        <li>Tourism and Sport Management</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          Untuk double degree business administrasi maksimal 10
                          orang melalui seleksi kampus
                        </li>
                        <li>
                          International Economics and Finance{" "}
                          <i>Triple Degree</i> mensyaratkan semester pertama di
                          Polandia, semester kedua di Itali, semester ketiga di
                          Prancis dan semester keempat di Polandia, namun karena
                          lamanya proses karta pobytu yang menjadi persyaratan
                          di Itali membuat program Triple Degree jarang diambil
                          oleh International Students, namun demikian kesempatan
                          mendapatkan program Erasmus selama satu atau dua
                          semester tetap terbuka lebar
                        </li>
                        <li>
                          Khusus untuk yang discount 50% akan dikenakan pajak
                          oleh pemerintah Polandia sebesar 340 zloty yang
                          pembayarannya akan dikenakan pada tahun ajaran kedua
                        </li>
                      </ul>
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li style={{ marginBottom: "20px" }}>
                          Besaran Tuition Fee per tahun berdasarkan kuota
                          Mahasiswa yang diterima oleh NCU dari LPPNTB :
                          <ul>
                            <li>
                              {" "}
                              Jika &le; 9 : <b>4320 EUR</b>
                            </li>
                            <li>
                              {" "}
                              Jika &ge; 10 dan &le; 15 : <b>3024 EUR</b>
                            </li>
                            <li>
                              Jika &ge; 16 : <b>2160 EUR</b>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Biaya Administrasi (Sekali Bayar) :{" "}
                          <b>Rp. 5.000.000,- </b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td}>
                      <ul>
                        <li>International Politics and Diplomacy</li>
                      </ul>
                    </td>
                    <td className={s.td} style={{ textAlign: "center" }}>
                      ---
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li style={{ marginBottom: "20px" }}>
                          <b>1500 EUR</b> per tahun. Khusus untuk Intake Oktober
                          2021 tution fee yang dibayarkan adalah 1200 EUR.
                        </li>
                        <li>
                          Biaya Administrasi (Sekali Bayar) :{" "}
                          <b>Rp. 5.000.000,- </b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td}>
                      <ul>
                        <li>English Studies</li>
                      </ul>
                    </td>
                    <td className={s.td} style={{ textAlign: "center" }}>
                      Maksimal Mahasiswa yang bisa diterima adalah 7 Orang
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li style={{ marginBottom: "20px" }}>
                          <b>1354 EUR</b> per tahun.
                        </li>
                        <li>
                          Biaya Administrasi (Sekali Bayar) :{" "}
                          <b>Rp. 5.000.000,- </b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td}>
                      <ul>
                        <li>Chemistry</li>
                      </ul>
                    </td>
                    <td className={s.td} style={{ textAlign: "center" }}>
                      ---
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li style={{ marginBottom: "20px" }}>
                          Besaran Tuition Fee per tahun berdasarkan kuota
                          Mahasiswa yang diterima oleh NCU dari LPPNTB :
                          <ul>
                            <li>
                              {" "}
                              Jika &le; 8 : <b>3910 EUR</b>
                            </li>
                            <li>
                              {" "}
                              Jika &ge; 9 dan &le; 16 : <b>2932,50 EUR</b>
                            </li>
                            <li>
                              Jika &ge; 17 : <b>2346 EUR</b>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Biaya Administrasi (Sekali Bayar) :{" "}
                          <b>Rp. 5.000.000,- </b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={s.content}
            style={{ marginBottom: "20px", paddingBottom: "40px" }}
          >
            <h3>Biaya lain yang perlu dipersiapkan</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <div>
              <ol>
                <li>
                  Biaya hidup perbulan kurang lebih <b>Rp. 8.000.000,- </b>{" "}
                </li>
                <li>
                  Biaya keberangkatan sekitar <b>Rp. 10.000.000,-</b> sampai{" "}
                  <b>Rp. 15.000.000,- </b>
                </li>
                <li>
                  Biaya Pembuatan Visa <b> Rp. 1.500.000,- </b>
                </li>
              </ol>
            </div>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3>Pendaftaran Program Jalur Mandiri</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            Pendaftaran untuk program ini dilakukan melalui online paling lambat
            tanggal <b>15 Juli 2021</b> untuk Intake Oktober 2021.
            <br /> Untuk Pendaftaran, silahkan{" "}
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTOHwHQ1n0_xGnCKBCGoTvfSqRsx6gCa8E7hPVGI2-om1W_g/viewform?usp=sf_link"
              target="_blank"
              variant="contained"
              color="primary"
              size="small"
              disableElevation
            >
              KLIK DISINI
            </Button>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3>Persyaratan</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            Persyaratan yang harus dipenuhi oleh calon Mahasiswa :
            <ol>
              <li>
                Memiliki sertifikat bahasa dengan minimal CEFR B2 (IELTS 5.5 /
                MUET Band 4.5/TOEFL ITP 543).
              </li>
              <li>
                Memiliki Ijazah S1 yang linier dengan bidang yang ingin diambil.
              </li>
              <li>
                Untuk Computer Engineering, Mahasiswa harus merupakan lulusan
                dari Computer Engineering atau bidang yang berhubungan dengan
                Computer Engingeering seperti Data Science, Teknik Informatika
                dan lain - lain.
              </li>
              <li>
                Jika Ijazah menggunakan Bahasa Indonesia atau selain Bahasa
                Inggris, maka perlu diterjemahkan kedalam Bahasa Inggris (
                <i>Sworn Translation</i>).
              </li>
              <li>
                Memiliki asuransi kesehatan dan kecelakaan dengan jumlah minimal
                100.000 USD (dipenuhi 1 tahun setelah keberangkatan).
              </li>
            </ol>
          </div>
          <div className={s.content} style={{ marginBottom: "20px" }}>
            <h3>Booklet Informasi</h3>
            <hr style={{ border: "1px solid rgb(225,225,225)" }} />
            <ul>
              <li>
                Booklet Informasi Jurusan Computer Engineering, Vistula
                University{" "}
                <a
                  href="https://drive.google.com/file/d/15prCkvqyDbJjOLVcJF0oTG1wZXezupqz/view?usp=sharing"
                  style={{
                    color: "#0e2b5c",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  Download Disini
                </a>
              </li>
              <li>
                Booklet Informasi Jurusan Energy Managament, Vistula University{" "}
                <a
                  href="https://drive.google.com/file/d/1j4ruH1dD8AQIWrQasnxpKXMAgx6E4d8h/view?usp=sharing"
                  style={{
                    color: "#0e2b5c",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  Download Disini
                </a>
              </li>
              <li>
                Booklet Informasi Fakultas Economic Sciences and Management, NCU{" "}
                <a
                  href="https://drive.google.com/file/d/1Po0_JVRfUbiByMYG4t681UYHR5PtqPJO/view?usp=sharing"
                  style={{
                    color: "#0e2b5c",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  Download Disini
                </a>
              </li>
              {/* <li>
                Informasi untuk Jurusan International Politics and Diplomacy,
                NCU{" "}
                <a
                  href="https://drive.google.com/file/d/1bu9A8ew86w794EFE2QgnUcwA_vDY0Xyh/view?usp=sharing"
                  style={{
                    color: "#0e2b5c",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  Download Disini
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
