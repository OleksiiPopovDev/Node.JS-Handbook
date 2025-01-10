import { QuestionDto } from "./question.dto.js";
import fs from "fs";
import path from "path";

export class UpdateReadmeService {
    public async run(questions: QuestionDto[]): Promise<void> {
        const mdFilePath = path.resolve('README.md');
        const fileContent = fs.readFileSync(mdFilePath, 'utf-8');

        const lines = fileContent.split('\n');

        const updatedLines = lines.map((line) => {
            for (let index = 0; index < questions.length; index++) {
                const question = questions[index];
                if (line.includes(question.question ?? '')) {
                    const regex = /^(\d+\.|\*)\s(.+?)$/gm.exec(question.question ?? '');
                    if (!regex) {
                        return line;
                    }
                    const newLink = `${index + 1}. [${regex[2]}](./${question.folderPath}/${question.fileName})`;
                    return line.replace(question.question ?? '', newLink);
                }
            }
            return line;
        });

        fs.writeFileSync(mdFilePath, updatedLines.join('\n'), 'utf-8');
    }
}
