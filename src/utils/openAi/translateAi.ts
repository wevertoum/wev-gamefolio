import openAiConfig from "./openAiConfig";

const translateAi = async (textToTranslation: string): Promise<string> => {
  const response = await openAiConfig.createCompletion({
    model: "text-davinci-002",
    prompt: `Translate this into Portuguese: ${textToTranslation}`,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data.choices[0].text ? response.data.choices[0].text : "";
};

export default translateAi;
