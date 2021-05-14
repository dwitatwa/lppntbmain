import React from "react";
import clsx from "clsx";
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
          href="#"
          className={s.menu_firstmenu}
          onClick={toggleDrawer(anchor, false)}
        >
          Tentang
        </Button>
        <Button className={s.menu_dropdown}>
          <Dropdown title="Program">
            <Link href="/program/beasiswa-ntb">
              <a onClick={toggleDrawer(anchor, false)}>Beasiswa NTB</a>
            </Link>
            <Link
              href="/program/rumah-bahasa"
              onClick={toggleDrawer(anchor, false)}
            >
              <a onClick={toggleDrawer(anchor, false)}>Rumah Bahasa</a>
            </Link>
          </Dropdown>
        </Button>
        <Button
          href="#"
          className={s.menu_other}
          onClick={toggleDrawer(anchor, false)}
        >
          Berita dan Kegiatan
        </Button>
        <Button className={s.menu_dropdown}>
          <Dropdown title="Perpustakan">
            <Link href="#" onClick={toggleDrawer(anchor, false)}>
              <a href="#">Statistik Penerima Beasiswa NTB</a>
            </Link>
            <Link href="#" onClick={toggleDrawer(anchor, false)}>
              <a href="#">Booklet Beasiswa NTB</a>
            </Link>
          </Dropdown>
        </Button>
        <Button href="#" className={s.menu_notdrop}>
          Awardee dan Alumni
        </Button>
        <Button href="#" className={s.menu_notdrop}>
          Kontak Kami
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
