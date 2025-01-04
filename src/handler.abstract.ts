import { QuestionDto } from "./question.dto.js";
import axios from "axios";

export interface Handler<Request = QuestionDto[], Result = QuestionDto[]> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Promise<Result>;
}

export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public async handle(questions: QuestionDto[]): Promise<QuestionDto[]> {
        if (this.nextHandler) {
            return this.nextHandler.handle(questions);
        }
        return questions;
    }

    protected llamaQuery = async (prompt: string) => {
        return axios.post(
            'http://localhost:11434/api/chat',
            {
                model: 'llama3.1:latest',
                messages: [
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                stream: false,
            }
        );
    }
}
