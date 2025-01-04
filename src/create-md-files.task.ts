import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import BBPromise from "bluebird";
import path from "path";
import fs from "fs";

;

export class CreateMdFilesTask extends AbstractHandler {
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        await BBPromise.map(questions, async (question) => {
            const content = `#### {{QUESTION}}\n\n{{CONTENT}}\n\n| Попереднє питання | Наступне питання |\n|---|---|\n| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |`
                .replace('{{QUESTION}}', question.question || '')
                .replace('{{CONTENT}}', question.answer || '');

            const filePath = path.join(question.folderPath ?? '', question.fileName!);
            fs.writeFileSync(filePath, content, 'utf8');

        }, {
            concurrency: 10,
        });

        return super.handle(questions);
    }
}
