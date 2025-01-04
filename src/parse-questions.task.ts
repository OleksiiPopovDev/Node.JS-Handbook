import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";

export class ParseQuestionsTask extends AbstractHandler {
    public async handle(): Promise<QuestionDto[]> {
        const mdFilePath = path.resolve('README.md');
        const parsedQuestions = this.findQuestionsWithoutLinks(mdFilePath);

        return super.handle(parsedQuestions);
    }

    private findQuestionsWithoutLinks(filePath: string): QuestionDto[] {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        let developerLevel: string | null = null;
        let questionTopic: string | null = null;

        const questions: QuestionDto[] = [];

        for (const line of lines) {
            if (this.isTitle(line)) {
                developerLevel = line.replace('#', '').trim();
                continue;
            }
            if (this.isSubTitle(line)) {
                questionTopic = line.replace('#', '').trim();
                continue;
            }
            if (this.isQuestion(line) && !this.hasLink(line)) {
                if (developerLevel && questionTopic) {
                    questions.push({
                        question: line.trim(),
                        level: developerLevel,
                        topic: questionTopic,
                    });
                }
            }
        }

        return questions.splice(0, 2);
    }

    private isQuestion = (line: string): boolean => /^\s*(\d+\.)|\*/gm.test(line.trim());

    private isTitle = (line: string): boolean => /^#{2} \w+/.test(line.trim());

    private isSubTitle = (line: string): boolean => /^#{3} \w+/.test(line.trim());

    private hasLink = (line: string): boolean => /\[.*?\]\(.*?\)/.test(line);
}
