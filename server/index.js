import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    projects: z
      .array(
        z.object({
          project: z.string(),
          description: z.string(),
          reference: z.string(),
        })
      )
      .describe("Give me project name, reference and Description"),
  })
);
export const analyze_data = async (input) => {
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Answer the users question as best as possible.\n{format_instructions}\n{question}"
    ),
    new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    }),
    parser,
  ]);
  const response = await chain.invoke({
    question: input,
    format_instructions: parser.getFormatInstructions(),
  });
  console.log(response);
};
analyze_data(
  "I have one year of experience working as a front end developer. my tech stack is react. Can you suggest me some projects with references to improve my skills"
);
