import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import getAnswerAi from "utils/openAi/getAnswerAi";
require("./AiChat.less");

interface Props {}
interface Message {
  text: string;
  type: "user" | "bot";
}

const AiChat: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (values: { answer: string }) => {
    try {
      setLoading(true);
      await getAnswerAi(values.answer).then((text) => {
        if (text && text.length > 0) {
          setMessages((old) => [
            ...old,
            {
              text,
              type: "bot",
            },
          ]);
        }
        form.resetFields();
      });
    } catch (error) {
      message.error("Erro ao enviar mensagem");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`message ${message.type === "bot" ? "bot" : "user"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <Form
        form={form}
        onFinish={(values) => {
          sendMessage(values);
          setMessages((old) => [
            ...old,
            {
              text: values.answer,
              type: "user",
            },
          ]);
        }}
      >
        <Form.Item
          name="answer"
          rules={[{ required: true, message: "Pfv digite algo!" }]}
        >
          <Input.TextArea
            rows={5}
            autoFocus
            placeholder="Manda a braba"
            disabled={loading}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            backgroundColor: "#f0f2f5",
            padding: 10,
            width: "fit-content",
            borderRadius: 16,
          }}
        >
          {loading ? (
            <div style={{ marginLeft: 10 }}>
              <LoadingOutlined spin /> Digitando...
            </div>
          ) : (
            <Button type="primary" htmlType="submit" loading={loading}>
              Send
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default AiChat;
