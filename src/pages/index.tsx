import React, { useCallback, useEffect, useMemo, useState } from "react";
require("./Home.less");

import { Howl } from "howler";
import Head from "next/head";
import MainContent from "components/MainContent";
import { Button } from "antd";
import Image from "next/image";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

interface Movement {
  direction: "right" | "left" | "top" | "bottom";
  moving: boolean;
}

interface Props {}
const Home: React.FC<Props> = () => {
  const [playingMusic, setPlayingMusic] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);
  const [moving, setMoving] = useState<Movement>({
    direction: "top",
    moving: false,
  });

  const audio = useMemo(
    () =>
      new Howl({
        src: "https://firebasestorage.googleapis.com/v0/b/xis-foto.appspot.com/o/pessoal-wev%2FALISON_SpaceEcho.mp3?alt=media&token=69830414-f3c9-4451-a5cd-b9a837639701",
        onplay: () => setPlayingMusic(true),
        onpause: () => setPlayingMusic(false),
        loop: true,
      }),
    []
  );

  const handleKeypress = useCallback(
    (e) => {
      if (e.keyCode === 37 && positionX <= 94 && positionX >= 4) {
        setPositionX(positionX - 2);
      } else if (e.keyCode === 39 && positionX < 90) {
        setPositionX(positionX + 2);
      } else if (e.keyCode === 38 && positionY > 0) {
        setPositionY(positionY - 4);
      } else if (e.keyCode === 40 && positionY < 78) {
        setPositionY(positionY + 4);
      }
    },
    [positionX, positionY]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => document.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  useEffect(() => {
    if (moving.moving) {
      const interval = setInterval(() => {
        if (moving.direction === "right") {
          handleKeypress({ keyCode: 39 });
        } else if (moving.direction === "left") {
          handleKeypress({ keyCode: 37 });
        } else if (moving.direction === "top") {
          handleKeypress({ keyCode: 38 });
        } else if (moving.direction === "bottom") {
          handleKeypress({ keyCode: 40 });
        }
      }, 100);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moving, positionX, positionY]);

  const carImage = useMemo(() => {
    if (positionX > 66) {
      return "right";
    } else if (positionX <= 66 && positionX > 33) {
      return "center";
    } else {
      return "left";
    }
  }, [positionX]);

  return (
    <>
      <Head>
        <title>Weverton developer</title>
        <meta name="Weverton rodrigues software developer" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content">
        {playingGame ? (
          <>
            {" "}
            <div>X: {positionX}</div>
            <div>Y: {positionY}</div>
            <div
              className="luna"
              style={{
                width: 400 - positionY,
                height: 400 - positionY,
                boxShadow: `0 0 0 ${positionX}px ##00f96f`,
                background: "linear-gradient(#ff00c8, #00f96f)",
                borderRadius: "50%",
                transition: "ease all 500ms",
                position: "absolute",
                top: 20,
                left: `${positionX + 10}%`,
                transform: ` translate(-${positionX + 40}%)`,
              }}
            ></div>
            <div
              className="game-content"
              style={{
                height: 445,
                position: "absolute",
                bottom: 0,
                zIndex: 1,
                width: "100vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="area-drive"
                style={{
                  display: "flex",
                  flex: 0.8,
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    position: "absolute",
                    top: `${positionY}%`,
                    bottom: `${100 - positionY}%`,
                    left: `${positionX}%`,
                    right: `${100 - positionX}%`,
                    overflow: "hidden",
                    transition: "all 0.1s ease-in-out",
                  }}
                >
                  <Image
                    src={`/assets/car_${carImage}.png`}
                    width={100}
                    objectFit="contain"
                    // quanto menor o positionY, menor a altura
                    height={positionY + 10}
                    alt="car"
                  />
                </div>
              </div>
              <div
                className="controls-area"
                style={{
                  display: "flex",
                  flex: 0.2,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <div
                  className="controls"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#023bf66d",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="top-bottom-btn">
                    <Button
                      disabled={positionY < 0}
                      size="large"
                      icon={<ArrowUpOutlined />}
                      onMouseDown={() =>
                        setMoving({ direction: "top", moving: true })
                      }
                      onMouseUp={() =>
                        setMoving({ direction: "top", moving: false })
                      }
                    />
                  </div>
                  <div className="right-left-btn">
                    <Button
                      disabled={positionX < 5}
                      size="large"
                      icon={<ArrowLeftOutlined />}
                      style={{
                        marginRight: 20,
                      }}
                      onMouseDown={() =>
                        setMoving({ direction: "left", moving: true })
                      }
                      onMouseUp={() =>
                        setMoving({ direction: "left", moving: false })
                      }
                    />
                    <Button
                      disabled={positionX >= 90}
                      size="large"
                      icon={<ArrowRightOutlined />}
                      style={{
                        marginLeft: 20,
                      }}
                      onMouseDown={() =>
                        setMoving({ direction: "right", moving: true })
                      }
                      onMouseUp={() =>
                        setMoving({ direction: "right", moving: false })
                      }
                    />
                  </div>
                  <div className="top-bottom-btn">
                    <Button
                      disabled={positionY >= 78}
                      size="large"
                      icon={<ArrowDownOutlined />}
                      onMouseDown={() =>
                        setMoving({ direction: "bottom", moving: true })
                      }
                      onMouseUp={() =>
                        setMoving({ direction: "bottom", moving: false })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <MainContent
            audio={audio}
            setPlayingGame={setPlayingGame}
            playingMusic={playingMusic}
          />
        )}

        <div className={`main-graph ${playingGame ? "playing" : ""}`}>
          <div
            className={`graph ${playingMusic ? "animation" : ""}  ${
              playingGame ? "playing" : ""
            }`}
          />
        </div>
      </div>
      {/* <ModalContact onClose={(value) => setModal(value)} modal={modal} /> */}
    </>
  );
};

export default Home;
