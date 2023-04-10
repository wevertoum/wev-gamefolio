import PageContainer from "components/PageContainer";
import React from "react";
require("./Projects.less");

interface Props {}
const Projects: React.FC<Props> = () => {
  return (
    <PageContainer
      pageTitle="Projects from Weverton Developer 🧑🏾‍💻"
      metadata={{
        name: "Projects from Weverton rodrigues software developer",
        content: "Some projects that i have developed",
      }}
    >
      <div className="projects-description">
        <h1>Projects</h1>
        <p>
          Here you can see some projects that i have developed, i hope you like
          them.
        </p>
      </div>
    </PageContainer>
  );
};

export default Projects;
