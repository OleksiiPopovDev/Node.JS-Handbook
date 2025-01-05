import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import BBPromise from "bluebird";
import path from "path";
import fs from "fs";

;

export class CreateMdFilesTask extends AbstractHandler {
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        const progressBar = this.progressBar('creating MD', questions.length);

        await BBPromise.map(questions, async (question) => {
            const filePath = path.join(question.folderPath ?? '', question.fileName!);

            try {
                fs.writeFileSync(filePath, question.answer ?? '', 'utf8');
            } catch (err) {
                if (err instanceof Error) {
                    progressBar.interrupt(`Error writing file: ${err.message}`);
                }
            }

            progressBar.tick();
        }, {
            concurrency: 1,
        });

        return super.handle(questions);
    }
}
