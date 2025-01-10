import {AbstractHandler} from "./handler.abstract.js";
import {QuestionDto} from "./question.dto.js";

export class PrepareMdContentTask extends AbstractHandler {
    public async handle(question: QuestionDto): Promise<QuestionDto> {
        question.answer = `#### {{QUESTION}}\n\n{{CONTENT}}\n\n| Back | Forward |\n|---|---|\n| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |`
            .replace('{{QUESTION}}', question.question || '')
            .replace('{{CONTENT}}', question.answer || '');

        return super.handle(question);
    }
}
