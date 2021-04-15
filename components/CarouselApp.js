import s from "../styles/Carousel.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import { CarouselData } from "./CarouselData";
import Button from "@material-ui/core/Button";

const CarouselApp = () => {
  const [current, setCurrent] = useState(0);
  let timer;

  const nextItem = () => {
    setCurrent(current === CarouselData.length - 1 ? 0 : current + 1);
  };
  const prevItem = () => {
    setCurrent(current === 0 ? CarouselData.length - 1 : current - 1);
  };

  // timer = setTimeout(() => {
  //   setCurrent(current === CarouselData.length - 1 ? 0 : current + 1);
  // }, 4000);

  // const pauseTimeout = () => {
  //   clearTimeout(timer);
  // };

  // const resumeTimeout = () => {
  //   timer = setTimeout(() => {
  //     setCurrent(current === CarouselData.length - 1 ? 0 : current + 1);
  //   }, 4000);
  // };

  return (
    <div className={s.container}>
      <div onClick={prevItem}>
        <ArrowBackIcon className={s.backward} />
      </div>
      <div onClick={nextItem}>
        <ArrowForwardIcon className={s.forward} />
      </div>
      <div className={s.item_container}>
        {CarouselData.map((item, index) => (
          <div
            className={
              index === current ? `${s.item} ${s.item_active}` : `${s.item}`
            }
            key={index}
          >
            {index === current && (
              <div
                className={s.itemshow_container}
                // onMouseEnter={pauseTimeout}
                // onMouseLeave={resumeTimeout}
              >
                <img src={item.src} alt="" />
                <div className={s.item_show_detail}>
                  <div>
                    <h1>{item.h1}</h1>
                    <p>{item.p}</p>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={s.daftar}
                    >
                      Daftar
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={s.selengkapnya}
                    >
                      Selengkapnya
                    </Button>
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
