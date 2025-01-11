import {QuestionDto} from "./question.dto";
import {AbstractHandler} from "./handler.abstract.js";
import OpenAI from "openai";
import prompts from "./prompts.json" assert {type: "json"};

const openai = new OpenAI({apiKey: 'OPEN_AI_API_KEY'});

export class AnswerQuestionsTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-2024-08-06",
                messages: [
                    {role: "system", content: prompts.answer.replaceAll('{{TOPIC}}', question.topic ?? '{{TOPIC}}')},
                    {
                        role: "user",
                        content: question.question || '',
                    },
                ],
            });
            question.answer = response?.choices[0]?.message.content || '';
        } catch (error) {
            console.error('Error:', error);
        }

        return super.handle(question);
    }
}
