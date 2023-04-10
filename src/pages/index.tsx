/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from "react";
require("./Home.less");

import { Howl } from "howler";
import Head from "next/head";
import MainContent from "components/MainContent";
import { audioUrl } from "utils/constants";
import ModalContact from "components/ModalContact";

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
    <>
      <Head>
        <title>Weverton Developer 🧑🏾‍💻</title>
        <meta name="Weverton rodrigues software developer" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content">
        <div className={`luna show`}></div>

        <MainContent
          audio={audio}
          onPlay={() => {
            setModal(true);
          }}
          playingMusic={playingMusic}
        />

        <div className={`main-graph`}>
          <div className={`graph animation`} />
        </div>
      </div>
      <ModalContact onClose={(value) => setModal(value)} modal={modal} />
    </>
  );
};

export default Home;
