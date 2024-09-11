import { NextApiRequest, NextApiResponse } from "next";
const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  orgId: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      const reply = completion.choices[0].message.content;
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
