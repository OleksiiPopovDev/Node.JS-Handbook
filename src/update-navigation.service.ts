import BBPromise from "bluebird";
import {QuestionDto} from "question.dto";
import path from "path";
import fs from "fs";

export class UpdateNavigationService {
    public async run(questionsWithLink: QuestionDto[]): Promise<void>{
        await BBPromise.map(questionsWithLink, async (question: QuestionDto, index: number): Promise<void> => {
            const filePath = path.join(question.folderPath ?? '', question.fileName!);
            const fileContent = fs.readFileSync(filePath, 'utf-8');

            const previousQuestion = questionsWithLink[index - 1] ?? null;
            const nextQuestion = questionsWithLink[index + 1] ?? null;

            const previousLink = path.join(previousQuestion?.folderPath ?? '', previousQuestion?.fileName ?? '').replace('./', '/');
            const nextLink = path.join(nextQuestion?.folderPath ?? '', nextQuestion?.fileName ?? '').replace('./', '/');

            const previousTopicLink = previousQuestion ? `[${previousQuestion.question}](/${previousLink})` : null;
            const nextTopicLink = nextQuestion ? `[${nextQuestion.question}](/${nextLink})` : null;

            const content = fileContent
                .replace('{{PREV_TOPIC}}', previousTopicLink ?? '{{PREV_TOPIC}}')
                .replace('{{NEXT_TOPIC}}', nextTopicLink ?? '{{NEXT_TOPIC}}');

            fs.writeFileSync(filePath, content, 'utf8');
        }, {concurrency: 5});
    }
}
