import React from "react";
import ReactTypingEffect from "react-typing-effect";
require("./TypingTexts.less");

interface Props {}
const TypingTexts: React.FC<Props> = () => {
  const title = "I'm Weverton";
  const description = "I'm a developer with knowledge in";
  return (
    <div className="main-about">
      <h1>
        Hey
        <span role="img" aria-label="sheep">
          👋
        </span>
        <br />
        {title}
      </h1>
      <h3>
        <span role="img" aria-label="sheep">
          💻
        </span>{" "}
        {description}
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
