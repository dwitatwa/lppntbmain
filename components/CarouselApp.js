import s from "../styles/Carousel.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

const CarouselApp = ({ crs }) => {
  const [current, setCurrent] = useState(0);
  const [carouselData, setCarouselData] = useState("");

  useEffect(() => {
    setCarouselData(crs);
  }, []);

  const nextItem = () => {
    setCurrent(current === carouselData.length - 1 ? 0 : current + 1);
  };
  const prevItem = () => {
    setCurrent(current === 0 ? carouselData.length - 1 : current - 1);
  };

  return (
    <div className={s.container}>
      <div onClick={prevItem}>
        <ArrowBackIcon className={s.backward} />
      </div>
      <div onClick={nextItem}>
        <ArrowForwardIcon className={s.forward} />
      </div>
      <div className={s.item_container}>
        {crs.map((item, index) => (
          <div
            className={
              index === current ? `${s.item} ${s.item_active}` : `${s.item}`
            }
            key={index}
          >
            {index === current && (
              <div className={s.itemshow_container}>
                <img
                  src={"https:" + item.fields.image.fields.file.url}
                  alt=""
                />
                <div className={s.item_show_detail}>
                  <div>
                    <h1>{item.fields.h1}</h1>
                    <p>{item.fields.p}</p>
                  </div>
                  <div>
                    {item.fields.daftar && (
                      <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={s.daftar}
                        href={item.fields.daftar}
                        target="_blank"
                      >
                        Daftar
                      </Button>
                    )}

                    {item.fields.selengkapnya && (
                      <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={s.selengkapnya}
                        href={item.fields.selengkapnya}
                        target="_blank"
                      >
                        Selengkapnya
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselApp;
