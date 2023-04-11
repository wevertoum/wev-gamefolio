import "antd/dist/antd.css";
require("../styles/globals.less");
import type { AppProps } from "next/app";
import React from "react";
import ptBR from "antd/lib/locale/pt_BR";
import { ConfigProvider } from "antd";
import "moment/locale/pt-br";
import { MusicContextProvider } from "contexts/MusicContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={ptBR}>
      <MusicContextProvider>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </MusicContextProvider>
    </ConfigProvider>
  );
}
export default MyApp;
