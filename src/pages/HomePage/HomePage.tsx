import React, { useMemo, useState } from "react";
import "./HomePage.less";

import SocialBits from "components/SocialBits";
import TypingTexts from "components/TypingTexts";
import ModalContact from "components/ModalContact";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import { Howl } from "howler";
import { Button } from "antd";

interface Props {}
const HomePage: React.FC<Props> = () => {
  const [modal, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audio = useMemo(
    () =>
      new Howl({
        src: "https://firebasestorage.googleapis.com/v0/b/xis-foto.appspot.com/o/pessoal-wev%2FALISON_SpaceEcho.mp3?alt=media&token=69830414-f3c9-4451-a5cd-b9a837639701",
        onplay: () => setPlaying(true),
        onpause: () => setPlaying(false),
        loop: true,
      }),
    []
  );

  return (
    <>
      <div className="main-content">
        <div className="awesome-intro" onClick={() => setModal(true)}>
          <h1>{!modal ? "PLAY IT!" : "🤔"}</h1>
        </div>
        <TypingTexts />
        <div className="about-socials">
          <SocialBits />
        </div>
        <div className="main-graph">
          <div className={`graph ${playing ? "animation" : ""}`} />
        </div>
      </div>
      <ModalContact onClose={(value) => setModal(value)} modal={modal} />
      <Button
        disabled={playing}
        onClick={() => audio.play()}
        icon={<PlayCircleOutlined />}
      />
      <Button
        disabled={!playing}
        onClick={() => audio.pause()}
        icon={<PauseCircleOutlined />}
      />
    </>
  );
};

export default HomePage;
