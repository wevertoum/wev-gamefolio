import React, { useCallback, useState } from "react";
require("./ModalContact.less");

import { Form, message, Modal } from "antd";
import FormContact from "../FormContact";
import FadeLoading from "components/FadeLoading";
import { usePostMessage } from "hooks/network/postMessage";

interface Props {
  modal: boolean;
  onClose: (modal: boolean) => void;
}

const ModalContact: React.FC<Props> = ({ modal, onClose }) => {
  const postMessage = usePostMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = useCallback(
    async (values: Models.Message) => {
      try {
        setLoading(true);
        await postMessage(values);
        form.resetFields();
        Modal.success({
          content: "Success!",
          onOk: () => onClose(false),
          centered: true,
          okButtonProps: {
            type: "dashed",
          },
        });
      } catch (err) {
        message.error("Error :/");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [form, onClose, postMessage]
  );

  return (
    <>
      <FadeLoading loading={loading} />
      <Modal
        centered
        okText="send"
        cancelText="cancel"
        visible={modal}
        onCancel={() => onClose(false)}
        onOk={() => form.submit()}
        closable
        title="Send me a message!"
      >
        <FormContact form={form} onFinish={onFinish} />
      </Modal>
    </>
  );
};

export default ModalContact;
