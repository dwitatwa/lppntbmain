import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import s from "../styles/program/BeasiswaNTB.module.css";
import asd from "../styles/Kontak.module.css";
import Head from "next/head";

const beasiswaNTB = () => {
  return (
    <div className={s.base}>
      <Head>
        <title>Beasiswa NTB</title>
      </Head>
      <div className={s.background}></div>
      <div className={s.container}>
        <div className={s.title}>
          <h1>Kontak Kami</h1>
        </div>
        <div className={asd.card_container}>
          <Card className={asd.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/kontak/Mba Asma.jpg"
              title="Asmawati, S.M."
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Asmawati, S.M.
                <span className={asd.jenis_kontak}>Beasiswa NTB</span>
              </Typography>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: asma@lppntb.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Phone: +62877-6344-2033
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hours: Sen-Jum: 10am – 5pm
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={asd.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/kontak/Mba Tya.jpg"
              title="Wayan Artesia Rastania, S.IP"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wayan Artesia Rastania, S.IP
                <span className={asd.jenis_kontak}>Rumah Bahasa NTB</span>
              </Typography>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: artesia@lppntb.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Phone: +62831-1555-3080
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hours: Sen-Jum: 10am – 5pm
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={asd.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/kontak/Mba Tuti.jpg"
              title="Sri Hastuti N.A.S., M.TESOL"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sri Hastuti N.A.S., M.TESOL
                <span className={asd.jenis_kontak}>Direksi LPPNTB</span>
              </Typography>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: srihastuti@lppntb.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Phone: +62819-9923-9207
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hours: Sen-Jum: 10am – 5pm
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={asd.card}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/kontak/Kak Am.jpg"
              title="Amrian Septepawan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Amrian Septepawan
                <span className={asd.jenis_kontak}>Media Partner</span>
              </Typography>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: septepawan@gmail.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Phone: -
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hours: Sen-Jum: 10am – 5pm
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default beasiswaNTB;
