import s from "../styles/Video.module.css";

const Video = ({ vid }) => {
  return (
    <div>
      <div className={s.container}>
        <iframe
          width="560"
          height="315"
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
