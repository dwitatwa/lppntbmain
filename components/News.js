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
import Link from "next/link";

export default function MediaCard({ title, preview, slug, image }) {
  return (
    <Card variant="outlined" className={s.card}>
      <Link
        href="/berita-dan-kegiatan/[slug]"
        as={`berita-dan-kegiatan/${slug}`}
      >
        <CardActionArea>
          <CardMedia
            className={s.card_media}
            image={`https:${image}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={s.title}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={s.preview}
            >
              {preview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link
          href="/berita-dan-kegiatan/[slug]"
          as={`berita-dan-kegiatan/${slug}`}
        >
          <Button size="small" color="primary" endIcon={<ArrowForwardIcon />}>
            Selengkapnya
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
