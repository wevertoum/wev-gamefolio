import { Button, Tabs, Tag } from "antd";
import PageContainer from "components/PageContainer";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { portfolioItems } from "utils/portfolioItems";
import { useRouter } from "next/dist/client/router";
import {
  LinkOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import MusicContext from "contexts/MusicContext";

require("./Projects.less");

interface Props {}
const Projects: React.FC<Props> = () => {
  const [selected, setSelected] = useState(0);
  const { audio, playingMusic } = useContext(MusicContext);
  const router = useRouter();

  return (
    <PageContainer
      pageTitle="Projects from Weverton Developer 🧑🏾‍💻"
      metadata={{
        name: "Projects from Weverton rodrigues software developer",
        content: "Some projects that i have developed",
      }}
    >
      <Button
        size="small"
        type="default"
        style={{
          fontSize: 10,
          position: "absolute",
          top: 10,
          left: 10,
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        {"<"}
      </Button>

      <Button
        style={{
          fontSize: 10,
          position: "absolute",
          top: 10,
          right: 10,
        }}
        size="small"
        onClick={() => {
          if (!playingMusic) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
        icon={playingMusic ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
      />

      <div className="projects-description">
        <h1>Projects</h1>
        <p>
          Here, you can view some of the software projects that i have
          developed. I hope you find them interesting.
        </p>
      </div>
      <div className="projects-tabs">
        <Tabs
          activeKey={selected.toString()}
          onChange={(key) => {
            setSelected(Number(key));
          }}
        >
          {portfolioItems.map((item, index) => (
            <Tabs.TabPane
              tab={
                <div
                  className={`custom-tab-title 
              ${selected === index ? "selected" : ""}`}
                >
                  {item.label}
                </div>
              }
              key={index}
            >
              <div className="project-container">
                <div className="project-description">
                  <div className="text-container">
                    <h2>{item.label}</h2>
                    <p>{item.description}</p>
                  </div>
                  {item.stack && (
                    <div className="stack-container">
                      <h3>Stack</h3>
                      {item.stack.map((item, i) => (
                        <Tag color="blue" key={i}>
                          #{item}
                        </Tag>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <div className="url-container">
                      <a
                        title="access project"
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkOutlined /> Access project
                      </a>
                    </div>
                  )}
                </div>
                <div className="project-image">
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <Image
                      src={item.image}
                      width={600}
                      height={600}
                      alt={item.label}
                      objectFit="cover"
                    />
                  </a>
                </div>
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default Projects;
