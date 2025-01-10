import {QuestionDto} from "./question.dto.js";
import path from "path";
import fs from "fs";

export class ParseQuestionsService {
    public run(hasLink: boolean = false): QuestionDto[] {
        const filePath = path.resolve('README.md');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');

        return hasLink ? this.findQuestionsWithLinks(lines) : this.findQuestionsWithoutLinks(lines);
    }

    private findQuestionsWithLinks(lines: string[]): QuestionDto[] {
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
            if (this.isQuestion(line) && this.hasLink(line) && developerLevel && questionTopic) {
                const splitQuestionLink = line.trim().match(/(\d+\.|\*)\s\[(.+?)\]\((.+?)\)/) ?? [];
                const [, , question, link] = splitQuestionLink;

                const parsedPath = path.parse(link);

                questions.push({
                    question: question,
                    folderPath: parsedPath.dir,
                    fileName: parsedPath.base,
                    level: developerLevel,
                    topic: questionTopic,
                });

            }
        }

        return questions;
    }

    private findQuestionsWithoutLinks(lines: string[]): QuestionDto[] {
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

        return questions;
    }

    private isQuestion = (line: string): boolean => /^\s*(\d+\.)|\*/gm.test(line.trim());

    private isTitle = (line: string): boolean => /^#{2} \w+/.test(line.trim());

    private isSubTitle = (line: string): boolean => /^#{3} \w+/.test(line.trim());

    private hasLink = (line: string): boolean => /\[.*?\]\(.*?\)/.test(line);
}
