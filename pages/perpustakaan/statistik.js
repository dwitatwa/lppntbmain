import React from "react";
import s from "./statistik.module.css";
import CountryCard from "../../components/CountryCard";
import KabupatenCard from "../../components/KabupatenCard";

export default function Statistik() {
  return (
    <div className={s.main}>
      <div className={s.background}></div>

      <div className={s.container}>
        <div className={s.title}>
          <h1>Sebaran Penerima Beasiswa NTB 2018-2020</h1>
        </div>
        <div className={s.jumlah_total}>
          Jumlah Awardee Beasiswa NTB dengan status <i> On Going</i> per 1
          Desember 2020 : <b>443 Orang</b>
          <div>Berikut sebarannya</div>
        </div>
        <div className={s.sebaran_negara}>
          {/* <h1>Berdasarkan Negara</h1> */}
          <div className={s.row_negara}>
            <CountryCard src="/flag/poland.svg" title="Polandia" jumlah={96} />
            <CountryCard src="/flag/russia.svg" title="Rusia" jumlah={4} />
            <CountryCard src="/flag/china.svg" title="Cina" jumlah={28} />
            <CountryCard
              src="/flag/malaysia.svg"
              title="Malaysia"
              jumlah={277}
            />
          </div>
          <div className={s.row_negara}>
            <CountryCard src="/flag/taiwan.svg" title="Taiwan" jumlah={10} />
            <CountryCard src="/flag/czech.svg" title="Ceko" jumlah={9} />
            <CountryCard src="/flag/hungary.svg" title="Hungaria" jumlah={8} />
            <CountryCard src="/flag/sudan.svg" title="Sudan" jumlah={18} />
          </div>
        </div>
        <div className={s.sebaran_daerah}>
          {/* <h1>Berdasarkan Daerah</h1> */}
          <div className={s.row_daerah}>
            <KabupatenCard
              src="/kabupaten/mataram.png"
              title="Mataram"
              jml={78}
            />
            <KabupatenCard
              src="/kabupaten/lobar.png"
              title="Lombok Barat"
              jml={56}
            />
            <KabupatenCard
              src="/kabupaten/loteng.png"
              title="Lombok Tengah"
              jml={62}
            />
            <KabupatenCard
              src="/kabupaten/klu.png"
              title="Lombok Utara"
              jml={7}
            />
            <KabupatenCard
              src="/kabupaten/lotim.png"
              title="Lombok Timur"
              jml={97}
            />
            <KabupatenCard src="/kabupaten/bima.png" title="Bima" jml={25} />
            <KabupatenCard
              src="/kabupaten/kota_bima.png"
              title="Kota Bima"
              jml={16}
            />
            <KabupatenCard
              src="/kabupaten/sumbawa.png"
              title="Sumbawa"
              jml={67}
            />
            <KabupatenCard
              src="/kabupaten/sumbawa_barat.png"
              title="Sumbawa Barat"
              jml={18}
            />
            <KabupatenCard src="/kabupaten/dompu.png" title="Dompu" jml={17} />
          </div>
        </div>
        <div className={s.jumlah_total}>
          Jumlah Alumni Beasiswa NTB per 1 Desember 2020 :<b> 49 Orang</b>
          <div>Berikut sebarannya</div>
        </div>
        <div className={s.sebaran_alumni}>
          {/* <h1>Berdasarkan Daerah</h1> */}
          <div className={s.row_daerah}>
            <KabupatenCard
              src="/kabupaten/mataram.png"
              title="Mataram"
              jml={9}
            />
            <KabupatenCard
              src="/kabupaten/lobar.png"
              title="Lombok Barat"
              jml={6}
            />
            <KabupatenCard
              src="/kabupaten/loteng.png"
              title="Lombok Tengah"
              jml={5}
            />
            <KabupatenCard
              src="/kabupaten/klu.png"
              title="Lombok Utara"
              jml={2}
            />
            <KabupatenCard
              src="/kabupaten/lotim.png"
              title="Lombok Timur"
              jml={7}
            />
            <KabupatenCard src="/kabupaten/bima.png" title="Bima" jml={25} />
            <KabupatenCard
              src="/kabupaten/kota_bima.png"
              title="Kota Bima"
              jml={7}
            />
            <KabupatenCard
              src="/kabupaten/sumbawa.png"
              title="Sumbawa"
              jml={6}
            />
            <KabupatenCard
              src="/kabupaten/sumbawa_barat.png"
              title="Sumbawa Barat"
              jml={3}
            />
            <KabupatenCard src="/kabupaten/dompu.png" title="Dompu" jml={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
