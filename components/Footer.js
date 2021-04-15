import s from "../styles/Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <div className={s.container_quote}>
        <div className={s.wrapper_quote}>
          " Where there is a will, there is a way. You bring the will, we'll
          show you the way "
        </div>
      </div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.link_footer}>
            <a href="#">Buku Pedoman Beasiswa NTB</a>
            <a href="#">Awardee Beasiswa NTB</a>
            <a href="#">Berita LPPNTB</a>
            <a href="#">Kegiatan LPPNTB</a>
          </div>
          <div className={s.copyright}>
            <div className={s.copyright_title}>
              &copy; {new Date().getFullYear()} Lembaga Pengembangan Pendidikan
              NTB
            </div>
            <div>
              <Button className={s.btn_sosmed}>
                <InstagramIcon className={s.icon} fontSize="small" />
              </Button>
              <Button className={`${s.btn_sosmed} ${s.btn_sosmed_tengah}`}>
                <FacebookIcon className={s.icon} fontSize="small" />
              </Button>
              <Button className={s.btn_sosmed}>
                <YouTubeIcon className={s.icon} fontSize="small" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
