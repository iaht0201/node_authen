const { model } = require("../db/connect_gemini");

const geminiController = {
  generateResponse: async (req, res) => {
    const history = [];

    try {
      const { prompt } = req.body;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);

      history.push(text);
      console.log(history);

      res.send({ response: text });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = { geminiController };
