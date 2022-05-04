import React from "react";
require("./FormContact.less");

import { Form, Input } from "antd";
import { FormInstance } from "antd/lib/form";
import { MaskedInput } from "antd-mask-input";
import emailPattern from "utils/emailPattern";

interface Props {
  form: FormInstance;
  onFinish: (mensagem: Models.Message) => void;
}
const FormContact: React.FC<Props> = ({ form, onFinish }) => {
  return (
    <Form
      layout="vertical"
      form={form}
      name="contato"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item name="name" label="First and Last Name">
        <Input placeholder="Insert your subject" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email Address"
        rules={[
          {
            pattern: emailPattern,
            message: "Invalid email!",
          },
        ]}
      >
        <Input placeholder="Your best email" />
      </Form.Item>

      <Form.Item name="contact_number" label="Contact Number">
        <MaskedInput placeholder="(99)99999-9999" mask="(11)11111-1111" />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: "Pls, type a message!" }]}
      >
        <Input.TextArea placeholder="how can i help you" />
      </Form.Item>
    </Form>
  );
};

export default FormContact;
