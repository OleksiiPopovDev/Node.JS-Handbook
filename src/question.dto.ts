import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    question?: string;

    @IsString()
    @IsNotEmpty()
    level?: string;

    @IsString()
    @IsNotEmpty()
    topic?: string;

    @IsString()
    @IsOptional()
    fileName?: string;

    @IsString()
    @IsOptional()
    answer?: string;
}
