import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";
import prompts from "./prompts.json" assert { type: "json" };
import BBPromise from "bluebird";

export class TranslateQuestionsTask extends AbstractHandler{
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        const progressBar = this.progressBar('translating', questions.length);

        const translatedQuestions = await BBPromise.map(questions, async (question) => {
            const folderPath = path.join(
                this.formatFileName(question.level!),
                this.formatFileName(question.topic!)
            );
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, {recursive: true});
                console.log('Folder created successfully:', folderPath);
            }

            try {
                const translationQuery = await this.llamaQuery(prompts.translation.replace(
                    '{{QUESTION}}',
                    question.question || ''
                ));
                question.fileName = `${this.formatFileName(translationQuery.data.message.content)}.md`;
            } catch (error) {
                console.error('Error:', error);
            }

            progressBar.tick();
            return question;

        }, {
            concurrency: 5,
        });

        return super.handle(translatedQuestions);
    }

    private formatFileName = (input: string): string => {
        return input
            .replace(/^\d+\.\s*/, '')
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase();
    };
}
