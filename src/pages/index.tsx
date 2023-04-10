/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from "react";
require("./Home.less");

import { Howl } from "howler";
import MainContent from "components/MainContent";
import { audioUrl } from "utils/constants";
import ModalContact from "components/ModalContact";
import PageContainer from "components/PageContainer";

interface Props {}
const Home: React.FC<Props> = () => {
  const [playingMusic, setPlayingMusic] = useState(false);
  const [modal, setModal] = useState(false);

  const audio = useMemo(
    () =>
      new Howl({
        src: audioUrl,
        onplay: () => setPlayingMusic(true),
        onpause: () => setPlayingMusic(false),
        loop: true,
        volume: 0.2,
      }),
    []
  );

  return (
    <PageContainer
      pageTitle="Weverton Developer 🧑🏾‍💻"
      metadata={{
        name: "i'm a software developer called Weverton Rodrigues",
        content: "This is my personal website",
      }}
    >
      <div className="luna show" />
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
