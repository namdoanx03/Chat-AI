import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
/*
kiểm soát nội dung, đảm bảo rằng các hành vi hoặc nội dung
không phù hợp (như quấy rối hoặc phát ngôn thù ghét) sẽ bị chặn.
*/
const safetySetting = [ 
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];

async function run(textInput) {
  const chatSession = model.startChat({
    generationConfig,
    safetySetting,
    history: [
      
    ],
  });

  const result = await chatSession.sendMessage(textInput);
  return result.response.text()
}

export default run