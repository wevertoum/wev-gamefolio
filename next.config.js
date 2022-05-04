const withAntdLess = require("next-plugin-antd-less");

const isProd = process.env.NODE_ENV === "production";

module.exports = withAntdLess({
  assetPrefix: isProd ? "/wevertoum.github.io/" : "",
  lessVarsFilePath: "./src/styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },

  webpack(config) {
    return config;
  },
});
