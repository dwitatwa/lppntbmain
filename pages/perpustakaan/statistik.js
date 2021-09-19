import React from "react";
import s from "./statistik.module.css";
import CountryCard from "../../components/CountryCard";
import KabupatenCard from "../../components/KabupatenCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";

export default function Statistik() {
  return (
    <div>
      <Header />
      <Head>
        <title>Sebaran Penerima Beasiswa NTB</title>
      </Head>
      <div className={s.main}>
        <div className={s.background}></div>

        <div className={s.container}>
          <div className={s.title}>
            <h1>Sebaran Penerima Beasiswa NTB 2018-2021</h1>
          </div>
          <div
            className={s.jumlah_total}
            style={{ borderBottom: "1px solid rgb(226, 225, 225)" }}
          >
            <h2>
              JUMLAH AWARDEE BEASISWA NTB KATEGORI A,B DAN C PER 1 SEPTEMBER
              2021 ADALAH <br /> <b style={{ color: "#fdb900" }}>595 ORANG</b>
            </h2>
          </div>
          <div className={s.jumlah_total}>
            Jumlah Awardee Beasiswa NTB Kategori A & B per 1 September 2021 :{" "}
            <b>454 Orang</b>
            <div>Berikut sebarannya</div>
          </div>
          <div className={s.sebaran_negara}>
            {/* <h1>Berdasarkan Negara</h1> */}
            <div className={s.row_negara}>
              <CountryCard
                src="/flag/poland.svg"
                title="Polandia"
                jumlah={137}
              />
              <CountryCard src="/flag/russia.svg" title="Rusia" jumlah={4} />
              <CountryCard src="/flag/china.svg" title="Cina" jumlah={28} />
              <CountryCard
                src="/flag/malaysia.svg"
                title="Malaysia"
                jumlah={254}
              />
            </div>
            <div className={s.row_negara}>
              <CountryCard src="/flag/taiwan.svg" title="Taiwan" jumlah={9} />
              <CountryCard src="/flag/czech.svg" title="Ceko" jumlah={7} />
              <CountryCard
                src="/flag/hungary.svg"
                title="Hungaria"
                jumlah={1}
              />
              <CountryCard src="/flag/sudan.svg" title="Sudan" jumlah={14} />
            </div>
          </div>
          <div className={s.sebaran_daerah}>
            {/* <h1>Berdasarkan Daerah</h1> */}
            <div className={s.row_daerah}>
              <KabupatenCard
                src="/kabupaten/mataram.png"
                title="Mataram"
                jml={85}
              />
              <KabupatenCard
                src="/kabupaten/lobar.png"
                title="Lombok Barat"
                jml={62}
              />
              <KabupatenCard
                src="/kabupaten/loteng.png"
                title="Lombok Tengah"
                jml={58}
              />
              <KabupatenCard
                src="/kabupaten/klu.png"
                title="Lombok Utara"
                jml={8}
              />
              <KabupatenCard
                src="/kabupaten/lotim.png"
                title="Lombok Timur"
                jml={98}
              />
              <KabupatenCard src="/kabupaten/bima.png" title="Bima" jml={25} />
              <KabupatenCard
                src="/kabupaten/kota_bima.png"
                title="Kota Bima"
                jml={15}
              />
              <KabupatenCard
                src="/kabupaten/sumbawa.png"
                title="Sumbawa"
                jml={68}
              />
              <KabupatenCard
                src="/kabupaten/sumbawa_barat.png"
                title="Sumbawa Barat"
                jml={21}
              />
              <KabupatenCard
                src="/kabupaten/dompu.png"
                title="Dompu"
                jml={14}
              />
            </div>
          </div>
          <div className={s.jumlah_total}>
            Jumlah Awardee Beasiswa NTB Kategori C per 1 September 2021 :{" "}
            <b>141 Orang</b>
            <div>Berikut sebarannya</div>
          </div>
          <div className={s.sebaran_negara}>
            {/* <h1>Berdasarkan Negara</h1> */}
            <div className={s.row_negara}>
              <CountryCard
                src="/flag/poland.svg"
                title="Polandia"
                jumlah={25}
              />
              <CountryCard src="/flag/korea.svg" title="Korea" jumlah={35} />
              <CountryCard
                src="/flag/thailand.svg"
                title="Thailand"
                jumlah={8}
              />
              <CountryCard
                src="/flag/malaysia.svg"
                title="Malaysia"
                jumlah={58}
              />
            </div>
            <div className={s.row_negara} style={{ flex: "flex-start" }}>
              <CountryCard src="/flag/taiwan.svg" title="Taiwan" jumlah={9} />
              <CountryCard
                src="/flag/austallia.svg"
                title="Australia"
                jumlah={5}
              />
              <CountryCard src="/flag/china.svg" title="China" jumlah={1} />
            </div>
          </div>
          <div className={s.jumlah_total}>
            Jumlah Alumni Beasiswa NTB per 1 September 2021 :<b> 170 Orang</b>
            <div>Berikut sebarannya</div>
          </div>
          <div className={s.sebaran_alumni}>
            {/* <h1>Berdasarkan Daerah</h1> */}
            <div className={s.row_daerah}>
              <KabupatenCard
                src="/kabupaten/mataram.png"
                title="Mataram"
                jml={22}
              />
              <KabupatenCard
                src="/kabupaten/lobar.png"
                title="Lombok Barat"
                jml={18}
              />
              <KabupatenCard
                src="/kabupaten/loteng.png"
                title="Lombok Tengah"
                jml={15}
              />
              <KabupatenCard
                src="/kabupaten/klu.png"
                title="Lombok Utara"
                jml={5}
              />
              <KabupatenCard
                src="/kabupaten/lotim.png"
                title="Lombok Timur"
                jml={34}
              />
              <KabupatenCard src="/kabupaten/bima.png" title="Bima" jml={20} />
              <KabupatenCard
                src="/kabupaten/kota_bima.png"
                title="Kota Bima"
                jml={7}
              />
              <KabupatenCard
                src="/kabupaten/sumbawa.png"
                title="Sumbawa"
                jml={29}
              />
              <KabupatenCard
                src="/kabupaten/sumbawa_barat.png"
                title="Sumbawa Barat"
                jml={10}
              />
              <KabupatenCard
                src="/kabupaten/dompu.png"
                title="Dompu"
                jml={10}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
