import { AbstractHandler } from "./handler.abstract.js";
import { QuestionDto } from "./question.dto.js";
import fs from "fs";
import path from "path";

export class UpdateReadmeTask extends AbstractHandler {
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        const progressBar = this.progressBar('updating link', questions.length);
        const mdFilePath = path.resolve('README.md');
        const fileContent = fs.readFileSync(mdFilePath, 'utf-8');

        const lines = fileContent.split('\n');

        const updatedLines = lines.map((line) => {
            for (const question of questions) {
                if (line.includes(question.question ?? '')) {
                    const regex = /^(\d+\.|\*)\s(.+?)$/gm.exec(question.question ?? '');
                    if (!regex) {
                        return line;
                    }
                    const newLink = `${regex[1]} [${regex[2]}](./${question.folderPath}/${question.fileName})`;
                    return line.replace(question.question ?? '', newLink);
                }
            }
            return line;
        });

        fs.writeFileSync(mdFilePath, updatedLines.join('\n'), 'utf-8');
        progressBar.tick();

        return super.handle(questions);
    }
}
