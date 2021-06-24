import React from "react";
import News from "../../components/News";
import s from "./Berita.module.css";
import { createClient } from "contentful";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "beritaDanKegiatan",
    limit: 4,
  });

  return {
    props: {
      data: res.items,
      data_total: res.total,
      spaceID: process.env.CONTENTFUL_SPACE_ID,
      token: process.env.CONTENTFUL_ACCESS_KEY,
    },
  };
}

const space = process.env.CONTENTFUL_SPACE_ID;

export default function beritaKegiatan({ data, data_total, spaceID, token }) {
  const [berita, setBerita] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMoreBerita = async () => {
    const clnt = createClient({
      space: spaceID,
      accessToken: token,
    });
    const res = await clnt.getEntries({
      content_type: "beritaDanKegiatan",
      skip: berita.length,
      limit: 4,
    });
    setBerita((berita) => [...berita, ...res.items]);
  };

  useEffect(() => {
    setHasMore(data_total > berita.length ? true : false);
  }, [berita]);

  return (
    <div>
      <Header />
      <div className={s.container}>
        <Head>
          <title>Berita dan Kegiatan</title>
        </Head>
        <div className={s.title}>
          <h1>Berita dan Kegiatan</h1>
        </div>
        <InfiniteScroll
          dataLength={berita.length}
          next={getMoreBerita}
          hasMore={hasMore}
          loader={<h1>Loading . . . </h1>}
          className={s.list_berita_container}
        >
          {berita.map((item) => (
            <div key={item.sys.id}>
              <News
                title={item.fields.judul}
                preview={item.fields.preview}
                slug={item.fields.slug}
                image={item.fields.cover.fields.file.url}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
}
