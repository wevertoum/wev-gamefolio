import React from "react";
import "./FormContact.less";

import { Form, Input } from "antd";
import { FormInstance } from "antd/lib/form";
import { MaskedInput } from "antd-mask-input";

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
      <Form.Item name="assunto" label="Assunto">
        <Input placeholder="Assunto do seu contato" />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Este e-mail não é válido!",
          },
        ]}
      >
        <Input placeholder="informe aqui seu email" />
      </Form.Item>

      <Form.Item name="telefone" label="Telefone">
        <MaskedInput placeholder="(99)99999-9999" mask="(11)11111-1111" />
      </Form.Item>

      <Form.Item
        name="mensagem"
        label="Mensagem"
        rules={[{ required: true, message: "Por favor insira a mensagem!" }]}
      >
        <Input.TextArea placeholder="Em que posso te ajudar?" />
      </Form.Item>
    </Form>
  );
};

export default FormContact;
