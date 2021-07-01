import s from "../styles/Video.module.css";

const Video = ({ vid, width, height }) => {
  return (
    <div>
      <div className={s.container}>
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube-nocookie.com/embed/${vid}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
