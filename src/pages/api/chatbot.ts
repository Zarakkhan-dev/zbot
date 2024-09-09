import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == "POST"){
    const {querry} = req.body;
    const response = await run(querry);
    res.status(200).json({response});
  }
}
async function run(prompt:string) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})
  const result = await model.generateContent(prompt);
  const response =  result.response;
  const text = response.text();
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold formatting
    .replace(/```([\s\S]*?)```/g, '<pre><code onClick={}>$1</code></pre>') // Code blocks
    .replace(/\n/g, '<br />') // New line to <br />
    .replace(/#/g, "") // Remove any #
    .replace(/\*/g, ""); // Remove any *

  // Return the formatted text with copyable code blocks

return formattedText;
}