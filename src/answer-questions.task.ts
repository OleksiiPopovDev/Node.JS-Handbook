import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";
import BBPromise from "bluebird";
import prompts from "./prompts.json" assert { type: "json" };;

export class AnswerQuestionsTask extends AbstractHandler{
    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
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

            return question;
        }, {
            concurrency: 10,
        });

        return super.handle(answeredQuestions);
    }
}
