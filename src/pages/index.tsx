/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
require("./Home.less");

import MainContent from "components/MainContent";
import ModalContact from "components/ModalContact";
import PageContainer from "components/PageContainer";
import MusicContext from "contexts/MusicContext";

interface Props {}
const Home: React.FC<Props> = () => {
  const { playingMusic, audio } = useContext(MusicContext);
  const [modal, setModal] = useState(false);

  return (
    <PageContainer
      pageTitle="Weverton Developer 🧑🏾‍💻"
      metadata={{
        name: "i'm a software developer called Weverton Rodrigues",
        content: "This is my personal website",
      }}
    >
      <MainContent
        audio={audio}
        onPlay={() => {
          setModal(true);
        }}
        playingMusic={playingMusic}
      />
      <div className="main-graph">
        <div className="graph" />
      </div>
      <ModalContact onClose={(value) => setModal(value)} modal={modal} />
    </PageContainer>
  );
};

export default Home;
