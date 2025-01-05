#!/usr/bin/env node

import {Command} from 'commander';
import {ParseQuestionsTask} from "./parse-questions.task.js";
import {CreateFoldersTask} from "./create-folders.task.js";
import {TranslateQuestionsTask} from "./translate-questions.task.js";
import {AnswerQuestionsTask} from "./answer-questions.task.js";
import {PrepareMdContentTask} from "./prepare-md-content.task.js";
import {CreateMdFilesTask} from "./create-md-files.task.js";
import {UpdateReadmeTask} from "./update-readme.task.js";

const program = new Command();

program
    .description('Generate handbook from README.md')
    .action(async () => {
        const parserQuestionsTask = new ParseQuestionsTask();
        const createFoldersTask = new CreateFoldersTask();
        const translateQuestionsTask = new TranslateQuestionsTask();
        const answerQuestionsTask = new AnswerQuestionsTask();
        const prepareMdContentTask = new PrepareMdContentTask();
        const createMdFilesTask = new CreateMdFilesTask();
        const updateReadmeTask = new UpdateReadmeTask();

        parserQuestionsTask
            .setNext(createFoldersTask)
            .setNext(translateQuestionsTask)
            .setNext(answerQuestionsTask)
            .setNext(prepareMdContentTask)
            .setNext(createMdFilesTask)
            .setNext(updateReadmeTask);

        const questions = await parserQuestionsTask.handle();

        console.warn('All questions processed.');
    });

program.parse(process.argv);
