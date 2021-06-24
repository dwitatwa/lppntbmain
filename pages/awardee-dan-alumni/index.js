import React from "react";
import s from "./awardee.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const tentang = () => {
  return (
    <div>
      <Header />
      <div className={s.base}>
        <Head>
          <title>LPPNTB - Awardee dan Alumni</title>
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>
              <i>Coming Soon</i>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default tentang;
