#!/usr/bin/env node

import { Command } from 'commander';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { QuestionDto } from './question.dto';
import prompts from './prompts.json' assert { type: "json" };

const program = new Command();

const isQuestion = (line: string): boolean => /^\s*(\d+\.)|\*/gm.test(line.trim());

const isTitle = (line: string): boolean => /^#{2} \w+/.test(line.trim());

const isSubTitle = (line: string): boolean => /^#{3} \w+/.test(line.trim());

const hasLink = (line: string): boolean => /\[.*?\]\(.*?\)/.test(line);

const findQuestionsWithoutLinks = (filePath: string): QuestionDto[] => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let developerLevel: string | null = null;
    let questionTopic: string | null = null;

    return lines
        .map((line) => {
            if (isTitle(line)) {
                developerLevel = line.replace('#', '').trim();
                return null;
            }
            if (isSubTitle(line)) {
                questionTopic = line.replace('#', '').trim();
                return null;
            }
            if (isQuestion(line) && !hasLink(line)) {
                return {
                    question: line.trim(),
                    level: developerLevel,
                    topic: questionTopic,
                } as QuestionDto;
            }
            return null;
        })
        .filter(Boolean).splice(0, 2) as QuestionDto[];
};

const formatFileName = (input: string): string => {
    return input
        .replace(/^\d+\.\s*/, '')
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
};

const llamaQuery = async (prompt: string) => {
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

program
    // .command('greet <name>')
    .description('Greet a user')
    .action(async (name: string) => {
        console.log(`Hello, ${name}!`);

        const mdFilePath = path.resolve('README.md');

        const questions = findQuestionsWithoutLinks(mdFilePath);

        for (const question of questions) {
            const folderPath = path.join(
                formatFileName(question.level!),
                formatFileName(question.topic!)
            );
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, {recursive: true});
                console.log('Folder created successfully:', folderPath);
            }

            try {
                const translationQuery = await llamaQuery(prompts.translation.replace(
                    '{{QUESTION}}',
                    question.question || ''
                ));
                question.fileName = `${formatFileName(translationQuery.data.message.content)}.md`;

                const answerQuery = await llamaQuery(prompts.answer.replace(
                    '{{QUESTION}}',
                    question.question || ''
                ));
                question.answer = answerQuery.data.message.content;
                console.warn('Done');
            } catch (error) {
                console.error('Error:', error);
            }

            const content = `#### {{QUESTION}}\n\n{{CONTENT}}\n\n| Попереднє питання | Наступне питання |\n|---|---|\n| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |`
                .replace('{{QUESTION}}', question.question || '')
                .replace('{{CONTENT}}', question.answer || '');

            const filePath = path.join(folderPath, question.fileName!);
            fs.writeFileSync(filePath, content, 'utf8');

            console.log('123');
            // return question;
        }

        console.warn('All questions processed.');
    });

program.parse(process.argv);
