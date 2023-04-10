import React from "react";
import Head from "next/head";
require("./PageContainer.less");

interface Props {
  children: React.ReactNode;
  pageTitle: string;
  metadata: {
    name: string;
    content: string;
  };
}
const PageContainer: React.FC<Props> = ({ children, pageTitle, metadata }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name={metadata.name} content={metadata.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content">{children}</div>
    </>
  );
};

export default PageContainer;
