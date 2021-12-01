import { createClient } from "contentful";
import Head from "next/head";
import s from "./DetailBerita.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={100}
          width={100}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
}

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
    <div>
      <Header />
      <div className={s.main}>
        <Head>
          <title>LPPNTB - {berita.fields.judul}</title>
          <meta property="og:description" content={""+berita.fields.preview+""} />
          <meta property="og:image" content={"https:" + berita.fields.cover.fields.file.url} />
        </Head>
        <div className={s.background}></div>
        <div className={s.container}>
          <h1>{berita.fields.judul}</h1>
          <div className={s.tanggal_terbit}>
            Mataram,
            {berita.fields.tanggalTerbit.split("-").reverse("").join("-")}
          </div>
          <img
            src={"https:" + berita.fields.cover.fields.file.url}
            alt=""
            width="100%"
          />
          <div className={s.isi_berita}>
            {documentToReactComponents(berita.fields.isi,renderOptions)}
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
      <Footer />
    </div>
  );
};

export default Details;
