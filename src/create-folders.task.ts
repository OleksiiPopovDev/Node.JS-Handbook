import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";

export class CreateFoldersTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        question.folderPath = path.join(
            'ua',
            this.formatFileName(question.level!),
            this.formatFileName(question.topic!)
        );
        if (!fs.existsSync(question.folderPath)) {
            fs.mkdirSync(question.folderPath, {recursive: true});
            this.progressBar?.interrupt(`Folder created successfully:\t${question.folderPath}`);
        }

        return super.handle(question);
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
