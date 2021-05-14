import { createClient } from "contentful";
import Head from "next/head";
import s from "./DetailBerita.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "beritaDanKegiatan",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "beritaDanKegiatan",
    "fields.slug": params.slug,
  });

  return {
    props: {
      berita: items[0],
    },
  };
}

const Details = ({ berita }) => {
  return (
    <div className={s.main}>
      <Head>
        <title>LPPNTB - {berita.fields.judul}</title>
      </Head>
      <div className={s.background}></div>
      <div className={s.container}>
        <h1>{berita.fields.judul}</h1>
        <div className={s.tanggal_terbit}>
          Mataram,
          <i>{berita.fields.tanggalTerbit.split("-").reverse("").join("-")}</i>
        </div>
        <img
          src={"https:" + berita.fields.cover.fields.file.url}
          alt=""
          width="100%"
        />
        <div className={s.isi_berita}>
          {documentToReactComponents(berita.fields.isi)}
        </div>
        <div className={s.share}>
          <span>Share :</span>
          <FacebookShareButton url={"https://lppntb.com"}>
            <FacebookIcon round={true} width="32" height="32"></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton url={"https://lppntb.com"}>
            <WhatsappIcon round={true} width="32" height="32"></WhatsappIcon>
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default Details;
