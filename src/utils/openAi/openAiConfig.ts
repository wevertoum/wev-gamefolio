import { openAIApiKey } from "utils/constants";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: openAIApiKey,
});
const openAiConfig = new OpenAIApi(configuration);

export default openAiConfig;
