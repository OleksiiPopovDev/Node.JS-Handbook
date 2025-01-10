import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";

;

export class CreateMdFilesTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        try {
            const filePath = path.join(question.folderPath ?? '', question.fileName!);
            fs.writeFileSync(filePath, question.answer ?? '', 'utf8');
            this.progressBar?.interrupt(`File created successfully:\t${filePath}`);
        } catch (err) {
            if (err instanceof Error) {
                this.progressBar?.interrupt(`Error writing file: ${err.message}`);
            }
        }

        return super.handle(question);
    }
}
