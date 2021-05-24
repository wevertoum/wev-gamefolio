import React from "react";
import "./FadeLoading.less";

import { LoadingOutlined } from "@ant-design/icons";
interface Props {
  loading: boolean;
  message?: string;
  dark?: boolean;
}
const FadeLoading = function ({ loading, message, dark }: Props) {
  if (loading) {
    return (
      <section className={`fade-loading ${dark ? "dark" : ""}`}>
        <LoadingOutlined className="loading" />
        <div className="message">{message}</div>
      </section>
    );
  } else return <></>;
};

export default FadeLoading;
