import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import s from "../styles/News.module.css";

export default function MediaCard() {
  return (
    <Card variant="outlined" className={s.card}>
      <CardActionArea>
        <CardMedia
          className={s.card_media}
          image="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/171738939_163875918940017_559739007116201497_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=j1QdC5_co3oAX_fQOuY&edm=AIQHJ4wAAAAA&ccb=7-4&oh=fcd14a670a5ac2c9489eaf98f12af255&oe=609A4E4E&_nc_sid=7b02f1%201080w"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contoh
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" endIcon={<ArrowForwardIcon />}>
          Selengkapnya
        </Button>
      </CardActions>
    </Card>
  );
}
