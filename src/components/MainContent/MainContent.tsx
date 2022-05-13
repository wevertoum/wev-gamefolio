import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SocialBits from "components/SocialBits";
import TypingTexts from "components/TypingTexts";
import { Howl } from "howler";
import React from "react";
require("./MainContent.less");

interface Props {
  setPlayingGame: React.Dispatch<React.SetStateAction<boolean>>;
  playingMusic: boolean;
  audio: Howl;
}
const MainContent: React.FC<Props> = ({
  setPlayingGame,
  playingMusic,
  audio,
}) => {
  return (
    <div className="body">
      <div className="body-content">
        <div className="awesome-intro" onClick={() => setPlayingGame(true)}>
          <h1>PLAY</h1>
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
