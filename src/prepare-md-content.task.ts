import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";

export class PrepareMdContentTask extends AbstractHandler {
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        const progressBar = this.progressBar('preparing MD', questions.length);

        for(const [index, question] of questions.entries()){
            const currentTopicLink = `[${question.question}](./${question.folderPath}/${question.fileName})`;
            let previousTopicLink = '';

            if(index > 0) {
                const previousQuestion = questions[index - 1];
                previousTopicLink = `[${previousQuestion.question}](./${previousQuestion.folderPath}/${previousQuestion.fileName})`;

                if (previousQuestion?.answer) {
                    previousQuestion.answer = previousQuestion.answer.replace(
                        '{{NEXT_TOPIC}}',
                        currentTopicLink
                    );
                }
            }

            question.answer = `#### {{QUESTION}}\n\n{{CONTENT}}\n\n| Попереднє питання | Наступне питання |\n|---|---|\n| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |`
                .replace('{{QUESTION}}', question.question || '')
                .replace('{{CONTENT}}', question.answer || '')
                .replace('{{PREV_TOPIC}}', previousTopicLink);
            progressBar.tick();
        }

        return super.handle(questions);
    }
}
