import {QuestionDto} from "./question.dto";
import OpenAI from "openai";
import {AbstractHandler} from "./handler.abstract.js";

const openai = new OpenAI({apiKey: ''});

export class AnswerQuestionsTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-2024-08-06",
                messages: [
                    {role: "system", content: "Відповідай лише українською мовою та в форматі markdown"},
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
