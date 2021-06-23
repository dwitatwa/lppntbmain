import React from "react";
import s from "./mandiri.module.css";
import { createClient } from "contentful";
import Head from "next/head";

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
    <div className={s.main}>
      <Head>
        <title>Jalur Mandiri</title>
      </Head>
      <div className={s.background}></div>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Jalur Mandiri (Non Beasiswa)</h1>
        </div>
        <div className={s.content} style={{ marginBottom: "20px" }}>
          <h3>Apa itu Jalur Mandiri ?</h3>
          <hr style={{ border: "1px solid rgb(225,225,225)" }} />
          <p>
            Program Jalur Mandiri (Non Beasiswa) merupakan program baru dari
            LPPNTB yang memberikan kesempatan kepada seluruh rakyat Indonesia
            pada umumnya untuk melanjutkan studi ke luar negeri melalui
            kerjasama yang sudah dilakukan oleh LPPNTB dengan Negara dan Kampus
            terkait. Program ini merupakan program <b>Non Beasiswa</b>, akan
            tetapi Mahasiswa tetap mendapatkan <i>privilege</i> yang diberikan
            sesuai dengan MoU antara LPPNTB dengan Negara atau Kampus terkait.
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
              Persiapan keberangkatan seperti Bimbingan Teknik (BimTek) dan Pre
              Departure Training (PDT)
            </li>
            <li>
              Previlege yang sama dengan Awardee yang melalui jalur Beasiswa
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
            Negara yang dituju dengan program Jalur Mandiri adalah Polandia yang
            merupakan negara <i>Centre of Europe</i>. Dengan posisi Polandia
            yang berada di tengah diantara negara - negara Eropa membuat
            kemungkinan untuk mendapat kesempatan, pengalaman, dan pengetahuan
            dalam dunia akademik maupun non akademik menjadi sangat besar. Salah
            satu program yang paling dicari oleh International Students di
            negara Eropa adalah program <i>Erasmus</i>. Program Erasmus
            (singkatan dari European Region Action Scheme for the Mobility of
            University Students) merupakan program pertukaran mahasiswa di Eropa
            yang didirikan pada tahun 1987, dimana dengan program ini
            International Students bisa mendapatkan kesempatan belajar di
            beberapa negara Eropa.
          </p>
          <div className={s.res_table}>
            <table className={`${s.table} ${s.table_tuition}`}>
              <thead>
                <tr className={s.tr}>
                  <th className={s.th}>Universitas</th>
                  <th className={s.th}>Jurusan yang dibuka</th>
                  <th className={s.th}>Catatan</th>
                  <th className={s.th}>Biaya Pendidikan</th>
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
                        <li>Design and Applications of Mobile Applications</li>
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
                      <li>
                        Registration Fee : <b>200 EUR</b>{" "}
                      </li>
                      <li>
                        Tuition Fee/Year : <b>2000 EUR</b>
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
                        International Economics and Finance <i>Triple Degree</i>{" "}
                        mensyaratkan semester pertama di Polandia, semester
                        kedua di Itali, semester ketiga di Prancis dan semester
                        keempat di Polandia, namun karena lamanya proses karta
                        pobytu yang menjadi persyaratan di Itali membuat program
                        Triple Degree jarang diambil oleh International
                        Students, namun demikian kesempatan mendapatkan program
                        Erasmus selama satu atau dua semester tetap terbuka
                        lebar
                      </li>
                    </ul>
                  </td>
                  <td className={s.td}>
                    Tuition Fee dibayarkan per tahun berdasarkan jumlah
                    Mahasiswa yang diterima :
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
                  <td className={s.td} style={{ textAlign: "center" }}>
                    <b>1200 EUR</b> per tahun
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
                  <td className={s.td} style={{ textAlign: "center" }}>
                    <b>1354 EUR</b> per tahun.
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
                    Tuition Fee dibayarkan pertahun berdasarkan jumlah Mahasiswa
                    yang diterima :
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
                Biaya Administrasi (sekali bayar) sebesar{" "}
                <b>Rp. 5.000.000,- </b>
              </li>
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
          <h3>Persyaratan yang harus dipenuhi</h3>
          <hr style={{ border: "1px solid rgb(225,225,225)" }} />
          Beberapa persyaratan yang harus dipenuhi oleh calon Mahasiswa :
          <ol>
            <li>
              Memiliki sertifikat bahasa dengan minimal CEFR B2 (IELTS 5.5 atau
              MUET Band 4.5)
            </li>
            <li>
              Menyerahkan Ijazah S1 dengan bidang yang sama dengan Jurusan yang
              ingin diambil.
            </li>
            <li>
              Untuk Computer Engineering, Mahasiswa harus merupakan lulusan dari
              Computer Engineering atau bidang yang berhubungan dengan Computer
              Engingeering seperti Data Science, Teknik Informatika dan lain -
              lain.
            </li>
            <li>
              Jika Ijazah menggunakan Bahasa Indonesia atau selain Bahasa
              Inggris, maka perlu diterjemahkan kedalam Bahasa Inggris (
              <i>Sworn Translation</i>)
            </li>
            <li>
              Harus memiliki asuransi kesehatan dan kecelakaan dengan jumlah
              minimal 100.000 USD
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
