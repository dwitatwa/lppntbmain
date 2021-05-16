import s from "./booklet.module.css";
import Button from "@material-ui/core/Button";

const Booklet = () => {
  return (
    <div className={s.main}>
      <div className={s.background}></div>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Booklet Beasiswa NTB</h1>
        </div>
        <div className={s.judul}>Tahun 2021</div>
        <div className={s.container_buku}>
          <div className={s.buku}>
            <img src="/cobook.jpeg" alt="" />
            <div className={s.content}>
              <h1>Booklet Info</h1>
              Tujuan Eropa 2021
              <div className={s.status}> Masih Berlaku</div>
              <Button
                className={s.download}
                size="small"
                variant="outlined"
                color="primary"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
        <div className={s.judul}>Tahun 2019-2020</div>
        <div className={s.container_buku}>
          <div className={s.buku}>
            <img src="/cobook.jpeg" alt="" />
            <div className={s.content}>
              <h1>Booklet Info</h1>
              Tahun 2019-2020
              <div className={s.status_x}> Tidak Berlaku</div>
              <Button
                className={s.download}
                size="small"
                variant="outlined"
                color="primary"
              >
                Download
              </Button>
            </div>
          </div>
          <div className={s.buku}>
            <img src="/cobook.jpeg" alt="" />
            <div className={s.content}>
              <h1>Booklet Info</h1>
              Khusus Guru 2020
              <div className={s.status_x}> Tidak Berlaku</div>
              <Button
                className={s.download}
                size="small"
                variant="outlined"
                color="primary"
              >
                Download
              </Button>
            </div>
          </div>
          <div className={s.buku}>
            <img src="/cobook.jpeg" alt="" />
            <div className={s.content}>
              <h1>Booklet Info</h1>
              Khusus Nakes 2020
              <div className={s.status_x}> Tidak Berlaku</div>
              <Button
                className={s.download}
                size="small"
                variant="outlined"
                color="primary"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklet;
