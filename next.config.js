const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  lessVarsFilePath: "./src/styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    loader: "akamai",
    path: "",
  },

  webpack(config) {
    return config;
  },
});
