import openAiConfig from "./openAiConfig";

const getAnswerAi = async (answer: string) => {
  const response = await openAiConfig.createCompletion({
    model: "text-davinci-002",
    prompt: `(Responda tudo com "weverton" no final): ${answer}`,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });

  return response.data.choices[0].text;
};

export default getAnswerAi;
