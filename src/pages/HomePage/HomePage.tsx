import React, { useCallback, useState } from "react";
import "./HomePage.less";

import ReactTypingEffect from "react-typing-effect";
import { Form, message, Modal } from "antd";
import SocialBits from "components/SocialBits";
import FormContact from "components/FormContact";
import { usePostMessage } from "hooks/networking/postMessage";
import FadeLoading from "components/FadeLoading";

interface Props {}
const HomePage: React.FC<Props> = () => {
  const postMessage = usePostMessage();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = useCallback(
    async (values: Models.Message) => {
      try {
        setLoading(true);
        await postMessage(values);
        form.resetFields();
        Modal.success({
          content: "Mensagem enviada com sucesso!",
          onOk: () => setModal(false),
          centered: true,
          okButtonProps: {
            type: "dashed",
          },
        });
      } catch (err) {
        message.error("Erro ao enviar mensagem :/");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [form, postMessage]
  );

  return (
    <>
      <FadeLoading loading={loading} />
      <div className="main-content">
        <div className="awesome-intro" onClick={() => setModal(true)}>
          <h1>{!modal ? "PLAY IT!" : "🤔"}</h1>
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
        <div className="about-socials">
          <SocialBits />
        </div>
        <div className="main-graph">
          <div className="graph"></div>
        </div>
      </div>
      <Modal
        centered
        okText="Enviar"
        cancelText="cancelar"
        visible={modal}
        onCancel={() => setModal(false)}
        onOk={() => form.submit()}
        closable
        title="Send me a message!"
      >
        <FormContact form={form} onFinish={onFinish} />
      </Modal>
    </>
  );
};

export default HomePage;
