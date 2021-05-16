import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import s from "../styles/Country.module.css";

const CountryCard = ({ src, title, jumlah }) => {
  return (
    <div>
      <Card variant="outlined" className={s.card}>
        <CardActionArea>
          <CardContent className={s.content_container}>
            <img src={src} width="80" />
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {jumlah} Awardee
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CountryCard;
