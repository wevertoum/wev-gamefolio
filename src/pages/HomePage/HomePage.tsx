import React, { useState } from "react";
import "./HomePage.less";

import ReactTypingEffect from "react-typing-effect";
import { Modal } from "antd";

interface Props {}
const HomePage: React.FC<Props> = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="main-content">
        <div className="awesome-intro" onClick={() => setModal(true)}>
          <h1>PLAY IT!</h1>
        </div>
        <div className="main-about">
          <h1>
            Hey
            <span role="img" aria-label="sheep">
              👋
            </span>
            <br />
            I'm Weverton
          </h1>
          <h3>
            <span role="img" aria-label="sheep">
              💻
            </span>{" "}
            I'm a front-end developer with knowledge in
          </h3>
          <h3>
            <ReactTypingEffect
              eraseSpeed={100}
              eraseDelay={500}
              speed={300}
              typingDelay={500}
              text={[
                "React JS",
                "Rest API",
                "React Native",
                "Typescript",
                "UX / UI design",
                "NoSQL Databases",
              ]}
            />
          </h3>
        </div>
        <div className="main-graph">
          <div className="graph"></div>
        </div>
      </div>
      <Modal
        centered
        okText="ok"
        cancelText="cancelar"
        visible={modal}
        onCancel={() => setModal(false)}
        onOk={() => setModal(false)}
        closable
      >
        logo logo eu termino ok, vai com calma
      </Modal>
    </>
  );
};

export default HomePage;
