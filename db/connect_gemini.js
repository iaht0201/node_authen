const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const configuration = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const modelId = "gemini-pro";

const generationConfig = {
  maxOutputTokens: 100,
  temperature: 0.1,
  topP: 0.1,
  topK: 16,
};
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const model = configuration.getGenerativeModel({
  model: modelId,
  generationConfig,
  safetySettings,
});
module.exports = { model };
