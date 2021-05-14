import { useState, useEffect } from "react";
import s from "../styles/Header.module.css";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Image from "next/image";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Dropdown from "./Dropdown";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DrawerMenu from "./DrawerMenu";
import Link from "next/link";
import Router from "next/router";
import Nprogress from "nprogress";

const Header = () => {
  Router.events.on("routeChangeStart", (url) => {
    Nprogress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    Nprogress.done();
  });
  Router.events.on("routeChangeError", (url) => {
    Nprogress.done();
  });

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", pinHeader);
  }, []);

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

  const pinHeader = () => {
    if (window.scrollY > 88) {
      setScroll(s.turnoff);
    } else {
      setScroll(0);
    }
  };

  return (
    <div className={`${s.header_container} ${scroll}`}>
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
        <div className={s.drawer}>
          <DrawerMenu />
        </div>
      </div>
      <div className={s.header_wrapper_bottom}>
        <div className={s.header_down}>
          <div className={s.menu}>
            <Button className={s.menu_firstmenu}>
              <Link href="/tentang">
                <a>Tentang</a>
              </Link>
            </Button>
            <Button className={s.menu_dropdown}>
              <Dropdown title="Program">
                <Link href="/program/beasiswa-ntb">
                  <a href="/program/beasiswa-ntb">Beasiswa NTB</a>
                  {/* <a href="/program/rumah-bahasa">Rumah Bahasa</a> */}
                </Link>
                <Link href="/program/rumah-bahasa">
                  <a>Rumah Bahasa</a>
                </Link>
              </Dropdown>
            </Button>
            <Button className={s.menu_other}>
              <Link href="/berita-dan-kegiatan">
                <a>Berita dan Kegiatan</a>
              </Link>
            </Button>
            <Button className={s.menu_dropdown}>
              <Dropdown title="Perpustakan">
                <a href="#">Statistik Penerima Beasiswa NTB</a>
                <a href="#">Booklet Beasiswa NTB</a>
              </Dropdown>
            </Button>
            <Button href="#" className={s.menu_notdrop}>
              Awardee dan Alumni
            </Button>
            <Button href="#" className={s.menu_notdrop}>
              Kontak Kami
            </Button>
          </div>

          <div className={s.sosmed_group}>
            <LightTooltip title="@beasiswantb">
              <a href="#" className={s.sosmed}>
                <InstagramIcon className={s.icon} fontSize="small" />
              </a>
            </LightTooltip>
            <LightTooltip title="Beasiswa NTB">
              <a href="#" className={s.sosmed}>
                <FacebookIcon className={s.icon} fontSize="small" />
              </a>
            </LightTooltip>
            <LightTooltip title="Beasiswa NTB">
              <a href="#" className={s.sosmed}>
                <YouTubeIcon className={s.icon} fontSize="small" />
              </a>
            </LightTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
