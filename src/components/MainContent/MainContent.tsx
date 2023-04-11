import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SocialBits from "components/SocialBits";
import TypingTexts from "components/TypingTexts";
import { Howl } from "howler";
import { useRouter } from "next/dist/client/router";
import React from "react";
require("./MainContent.less");

interface Props {
  onPlay: () => void;
  playingMusic: boolean;
  audio: Howl;
}
const MainContent: React.FC<Props> = ({ onPlay, playingMusic, audio }) => {
  const router = useRouter();
  return (
    <div className="body">
      <div className="body-content">
        <div className="content-play">
          <div className="awesome-intro" onClick={() => onPlay()}>
            <h1>CONTACT</h1>{" "}
          </div>
          <div
            className="my-projects-button"
            onClick={() => {
              router.push("/projects");
            }}
          >
            some projects by me
          </div>
        </div>
        <TypingTexts />
        <div className="about-socials">
          <SocialBits />
        </div>
        <div className="button-control">
          <Button
            size="middle"
            onClick={() => {
              if (!playingMusic) {
                audio.play();
              } else {
                audio.pause();
              }
            }}
            icon={
              playingMusic ? <PauseCircleOutlined /> : <PlayCircleOutlined />
            }
          >
            {playingMusic ? "pause music" : "play music"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
