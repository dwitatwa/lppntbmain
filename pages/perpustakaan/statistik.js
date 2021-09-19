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
          <div className={s.jumlah_total}>
            Jumlah Awardee Beasiswa NTB dengan status <i> On Going</i> per 1
            September 2021 : <b>595 Orang</b>
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
              <KabupatenCard src="/kabupaten/dompu.png" title="Dompu" jml={10} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
