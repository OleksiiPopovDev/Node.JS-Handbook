import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import BBPromise from "bluebird";
import prompts from "./prompts.json" assert { type: "json" };

export class AnswerQuestionsTask extends AbstractHandler{
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        const progressBar = this.progressBar('answering', questions.length);
        const answeredQuestions = await BBPromise.map(questions, async (question) => {
            try {
                const answerQuery = await this.llamaQuery(prompts.answer.replace(
                    '{{QUESTION}}',
                    question.question || ''
                ));
                question.answer = answerQuery.data.message.content;
            } catch (error) {
                console.error('Error:', error);
            }

            progressBar.tick();

            return question;
        }, {
            concurrency: 2,
        });

        return super.handle(answeredQuestions);
    }
}
