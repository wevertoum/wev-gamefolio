import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TypingTexts.less";

interface Props {}
const TypingTexts: React.FC<Props> = () => {
  return (
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
        I'm a developer with knowledge in
      </h3>
      <h3>
        <ReactTypingEffect
          eraseSpeed={100}
          eraseDelay={500}
          speed={300}
          typingDelay={500}
          text={[
            "Next JS",
            "React JS",
            "Rest API",
            "React Native",
            "Architecture",
            "Typescript",
            "UX / UI design",
          ]}
        />
      </h3>
    </div>
  );
};

export default TypingTexts;
