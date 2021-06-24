import { useState, useEffect } from "react";
import s from "../styles/Header.module.css";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={s.header_container} style={{ position: "static" }}>
      <div className={s.header_top}>
        <div>
          <Link href="/">
            <a>
              <Image src="/logolpp.png" width={110} height={50} />
            </a>
          </Link>
        </div>
        <div className={s.hubungi_group}>
          <a href="#" className={s.hubungi}>
            <CallIcon />
            <p>08123456789</p>
          </a>
          <a href="#" className={s.hubungi}>
            <MailIcon />
            <p>info@lppntb.com</p>
          </a>
          <a href="#" className={s.hubungi}>
            <WatchLaterIcon />
            <p>Sen-Jum: 9am – 5pm</p>
          </a>
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "rgb(225,225,225)",
          border: "1px solid rgb(225,225,225)",
          margin: "0",
        }}
      />
    </div>
  );
};

export default Header;
