import { QuestionDto } from "./question.dto.js";
import axios from "axios";
import ProgressBar from "progress";

export interface Handler<Request = QuestionDto, Result = QuestionDto> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Promise<Result>;
}

export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public async handle(questions: QuestionDto): Promise<QuestionDto> {
        if (this.nextHandler) {
            return this.nextHandler.handle(questions);
        }
        return questions;
    }

    public progressBar: ProgressBar | null = null;

    public setProgressBar(title: string, length: number) {
        this.progressBar = new ProgressBar(`  ${title}\t[:bar] :current/:total :percent :etas`, {
            complete: '=',
            incomplete: ' ',
            width: 50,
            total: length
        })

        return this;
    }
}
