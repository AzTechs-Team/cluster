import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

interface MetaSettings {
  title?: string;
  og_title?: string;
  twitter_title?: string;
  description?: string;
  og_description?: string;
  twitter_description?: string;
  keywords?: string;
  og_image?: string;
}

const Meta = (meta: MetaSettings) => {
  return (
    <Head>
      <meta name="theme-color" content="#FFFFFF" />

      <title>{"Cluster"}</title>
      {meta.og_title && <meta name="og:title" property="og:title" content={"Cluster"} />}
      {meta.twitter_title && <meta name="twitter:title" content={"Cluster"} />}

      {meta.description && <meta name="description" content={"Community portal for University"} />}
      {meta.og_description && <meta name="og:description" content={"Community portal for University"} />}
      {meta.twitter_description && <meta name="twitter:description" content={"Community portal for University"} />}

      {meta.keywords && <meta name="keywords" content={"Cluster, Community, University, Events"} />}

      {/* <meta name="og:image" content={""} /> */}
    </Head>
  );
};

export default Meta;
