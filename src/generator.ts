#!/usr/bin/env node

import {Command} from 'commander';
import {ParseQuestionsService} from "./parse-questions.service.js";
import {CreateFoldersTask} from "./create-folders.task.js";
import {TranslateQuestionsTask} from "./translate-questions.task.js";
import {AnswerQuestionsTask} from "./answer-questions.task.js";
import {PrepareMdContentTask} from "./prepare-md-content.task.js";
import {CreateMdFilesTask} from "./create-md-files.task.js";
import {UpdateReadmeService} from "./update-readme.service.js";
import {UpdateNavigationService} from "./update-navigation.service.js";
import BBPromise from "bluebird";
import {QuestionDto} from "question.dto";

const program = new Command();

program
    .description('Generate handbook from README.md')
    .action(async () => {
        const parseQuestionsService = new ParseQuestionsService();
        const updateReadmeService = new UpdateReadmeService();
        const updateNavigationService = new UpdateNavigationService();
        const questions = parseQuestionsService.run().splice(0, 20);

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
                .setNext(answerQuestionsTask)
                .setNext(prepareMdContentTask)
                .setNext(createMdFilesTask)

            const processedQuestion = await createFoldersTask.handle(question);

            createFoldersTask.progressBar?.interrupt(`Answer generated successfully:\t${processedQuestion.fileName}`);
            createFoldersTask.progressBar?.tick();
        }, {concurrency: 5});

        await updateReadmeService.run(questions);
        const questionsWithLink = parseQuestionsService.run(true)
        await updateNavigationService.run(questionsWithLink);

        console.log(`Finished processing ${questions.length} questions!`);
    });

program.parse(process.argv);
