import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Dropdown from "./Dropdown";
import MenuIcon from "@material-ui/icons/Menu";
import s from "../styles/Header.module.css";
import Link from "next/link";

export default function DrawerMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={s.base_drawer}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={s.drawer_menu}>
        <Button
          className={s.menu_firstmenu}
          onClick={toggleDrawer(anchor, false)}
        >
          <Link href="/tentang">
            <a>Tentang</a>
          </Link>
        </Button>
        <Button className={s.menu_dropdown}>
          <Dropdown title="Program">
            <Link href="/program/beasiswa-ntb">
              <a onClick={toggleDrawer(anchor, false)}>Beasiswa NTB</a>
            </Link>
            <Link href="/program/rumah-bahasa">
              <a onClick={toggleDrawer(anchor, false)}>Rumah Bahasa</a>
            </Link>
            <Link href="/program/jalur-mandiri">
              <a onClick={toggleDrawer(anchor, false)}>Jalur Mandiri</a>
            </Link>
          </Dropdown>
        </Button>
        <Button className={s.menu_other} onClick={toggleDrawer(anchor, false)}>
          <Link href="/berita-dan-kegiatan">
            <a>Berita dan Kegiatan</a>
          </Link>
        </Button>
        <Button className={s.menu_dropdown}>
          <Dropdown title="Informasi">
            <Link href="/perpustakaan/statistik">
              <a onClick={toggleDrawer(anchor, false)}>
                Statistik Penerima Beasiswa NTB
              </a>
            </Link>
            <Link href="/perpustakaan/booklet">
              <a onClick={toggleDrawer(anchor, false)}>Booklet Beasiswa NTB</a>
            </Link>
          </Dropdown>
        </Button>
        <Button
          className={s.menu_notdrop}
          onClick={toggleDrawer(anchor, false)}
        >
          <Link href="/awardee-dan-alumni">
            <a>Awardee dan Alumni</a>
          </Link>
        </Button>
        <Button
          className={s.menu_notdrop}
          onClick={toggleDrawer(anchor, false)}
        >
          <Link href="/kontak">
            <a>Kontak Kami</a>
          </Link>
        </Button>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)} className={s.menu_btn}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
