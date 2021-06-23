import React from "react";
import s from "./mandiri.module.css";
import { createClient } from "contentful";
import Head from "next/head";
import EuroIcon from "@material-ui/icons/Euro";

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
            LPPNTB yang memberikan kesempatan kepada seluruh masyarakat NTB
            khususnya dan Indonesia pada umumnya untuk melanjutkan studi ke luar
            negeri melalui kerjasama yang sudah dilakukan oleh LPPNTB dengan
            Negara dan Kampus terkait. Program ini merupakan program{" "}
            <b>Non Beasiswa</b>, akan tetapi awardee tetap mendapatkan{" "}
            <i>previlege</i> yang diberikan sesuai dengan MoU antara LPPNTB
            dengan Negara atau Kampus terkait.
          </p>
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
            satu program yang paling dicari oleh Internatioan Students di negara
            Eropa adalah program <i>Erasmus</i>. Program Erasmus (singkatan dari
            European Region Action Scheme for the Mobility of University
            Students) merupakan program pertukaran mahasiswa di Eropa yang
            didirikan pada tahun 1987, dimana dengan program ini International
            Students bisa mendapatkan kesempatan belajar di beberapa negara
            Eropa.
          </p>
          <div className={s.res_table}>
            <table className={s.table}>
              <thead>
                <tr className={s.tr}>
                  <th className={s.th}>Kampus</th>
                  <th className={s.th}>Jurusan yang dibuka</th>
                  <th className={s.th}>Catatan</th>
                </tr>
              </thead>
              <tbody>
                <tr className={s.tr}>
                  <td className={s.td}>
                    <img src={"https:" + vistula.fields.file.url} alt="" />
                  </td>
                  <td className={s.td}>
                    <ol>
                      <li>Computer Engineering</li>
                      <li>Energy Management</li>
                    </ol>
                  </td>
                  <td className={s.td}>
                    <ul>
                      <li>
                        Program Computer Engineering (Master) sudah termasuk
                        Magang
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className={s.td}>
                    <img src={"https:" + nicolaus.fields.file.url} alt="" />
                  </td>
                  <td className={s.td}>
                    <ol>
                      <li>International Economics and Finance</li>
                      <li>Bussines Administration</li>
                      <li>Tourism and Sport Management</li>
                      <li>International Politics and Diplomacy</li>
                      <li>English Studies</li>
                    </ol>
                  </td>
                  <td className={s.td}>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={s.content} style={{ marginBottom: "20px" }}>
          <h3>Apa yang akan didapatkan?</h3>
          <hr style={{ border: "1px solid rgb(225,225,225)" }} />
          Yang akan didapatkan oleh Awardee melalui program ini adalah :
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
          className={s.content}
          style={{ marginBottom: "20px", paddingBottom: "30px" }}
        >
          <h3>Biaya yang perlu dipersiapkan</h3>
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
              <li>Biaya Pendidikan (Lihat tabel dibawah)</li>
            </ol>
            <div className={s.res_table}>
              <table className={s.table}>
                <thead>
                  <tr className={s.tr}>
                    <th className={s.th}>Kampus</th>
                    <th className={s.th}>Jurusan yang dibuka</th>
                    <th className={s.th}>Biaya Pendidikan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={s.tr}>
                    <td className={s.td}>
                      <img src={"https:" + vistula.fields.file.url} alt="" />
                    </td>
                    <td className={s.td}>
                      <ol>
                        <li>Computer Engineering</li>
                        <li>Energy Management</li>
                      </ol>
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li>
                          Registration Fee : 200{" "}
                          <EuroIcon style={{ fontSize: "16px" }} />
                        </li>
                        <li>
                          Tuition Fee/Year : 3800{" "}
                          <EuroIcon style={{ fontSize: "16px" }} />
                        </li>
                        <li>
                          Tuition Fee/Semester : 2000{" "}
                          <EuroIcon style={{ fontSize: "16px" }} />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td} rowSpan="2">
                      <img src={"https:" + nicolaus.fields.file.url} alt="" />
                    </td>
                    <td className={s.td}>
                      <ol>
                        <li>International Economics and Finance</li>
                        <li>Bussines Administration</li>
                        <li>Tourism and Sport Management</li>
                      </ol>
                    </td>
                    <td className={s.td}>
                      <ul>
                        <li>
                          Untuk double degree business administrasi maksimal 10
                          orang melalui seleksi kampus
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={s.td}>
                      <ol>
                        <li>International Politics and Diplomacy</li>
                        <li>English Studies</li>
                      </ol>
                    </td>
                    <td className={s.td}>Tuition FEe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
