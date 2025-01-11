import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import prompts from "./prompts.json" assert {type: "json"};
import axios from "axios";

export class TranslateQuestionsTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        try {
            const translationQuery = await this.llamaQuery(prompts.translation.replace(
                '{{QUESTION}}',
                question.question || ''
            ));
            question.fileName = `${this.formatFileName(translationQuery.data.message.content)}.md`;
        } catch (error) {
            console.error('Error:', error);
        }

        return super.handle(question);
    }

    private llamaQuery = async (question: string) => {
        return axios.post(
            'http://localhost:11434/api/chat',
            {
                model: 'llama3.1:latest',
                messages: [
                    {
                        role: 'user',
                        content: question,
                    },
                ],
                stream: false,
            }
        );
    }

    private formatFileName = (input: string): string => {
        return input
            .replace(/\d+\.\s*/, '')
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase();
    };
}
