#!/usr/bin/env node

import {Command} from 'commander';
import {CreateFoldersTask} from "./create-folders.task.js";
import {TranslateQuestionsTask} from "./translate-questions.task.js";
import {AnswerQuestionsTask} from "./answer-questions.task.js";
import {PrepareMdContentTask} from "./prepare-md-content.task.js";
import {CreateMdFilesTask} from "./create-md-files.task.js";
import {UpdateReadmeService} from "./update-readme.service.js";
import {ParseQuestionsService} from "./parse-questions.service.js";
import BBPromise from "bluebird";
import {QuestionDto} from "question.dto";
import fs from "fs";
import path from "path";

const program = new Command();

program
    .description('Generate handbook from README.md')
    .action(async () => {
        const parseQuestionsService = new ParseQuestionsService();
        const updateReadmeService = new UpdateReadmeService();
        const questions = parseQuestionsService.run().splice(0, 50);

        const createFoldersTask = new CreateFoldersTask();
        const translateQuestionsTask = new TranslateQuestionsTask();
        const answerQuestionsTask = new AnswerQuestionsTask();
        const prepareMdContentTask = new PrepareMdContentTask();
        const createMdFilesTask = new CreateMdFilesTask();

        createFoldersTask.setProgressBar('Progress...', questions.length)
        console.log('Processing question...');

        await BBPromise.map(questions, async (question: QuestionDto): Promise<void> => {
            createFoldersTask
                .setNext(translateQuestionsTask)
                // .setNext(answerQuestionsTask)
                .setNext(prepareMdContentTask)
                .setNext(createMdFilesTask)

            const processedQuestion = await createFoldersTask.handle(question);

            createFoldersTask.progressBar?.interrupt(`File name generated successfully:\t${processedQuestion.fileName}`);
            createFoldersTask.progressBar?.tick();
        }, {concurrency: 1});

        await updateReadmeService.run(questions);
        const questionsWithLink = parseQuestionsService.run(true)

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
        }, {concurrency: 1});


        console.log(`Finished processing ${questions.length} questions!`);
    });

program.parse(process.argv);
