import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";

export class CreateFoldersTask extends AbstractHandler {
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        for (const question of questions) {
            question.folderPath =  path.join(
                this.formatFileName(question.level!),
                this.formatFileName(question.topic!)
            );
            if (!fs.existsSync(question.folderPath)) {
                fs.mkdirSync(question.folderPath, {recursive: true});
                console.log('Folder created successfully:', question.folderPath);
            }
        }

        return super.handle(questions);
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
