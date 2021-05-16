import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import s from "../styles/Kabupaten.module.css";

const KabupatenCard = ({ src, title, jml }) => {
  return (
    <div>
      <Card variant="outlined" className={s.card}>
        <CardActionArea>
          <CardContent className={s.content_container}>
            <img src={src} width="60" height="45" />
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {jml} Awardee
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default KabupatenCard;
