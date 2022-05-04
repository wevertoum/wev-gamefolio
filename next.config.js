const withAntdLess = require("next-plugin-antd-less");

const debug = process.env.NODE_ENV !== "production";

module.exports = withAntdLess({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: !debug ? "/wevertoum.github.io/" : "",
  lessVarsFilePath: "./src/styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },

  webpack(config) {
    return config;
  },
});
