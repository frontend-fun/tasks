import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published,
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body.length > 0 ||
            question.expected.length > 0 ||
            question.options.length > 0,
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const foundQuestion = questions.findIndex(
        (question: Question): boolean => question.id === id,
    );
    if (foundQuestion >= 0) {
        return questions[foundQuestion];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questionRemoved = questions.filter(
        (question: Question): boolean => !(question.id == id),
    );
    return questionRemoved;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((name: Question): string => name.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = questions.map(
        (question: Question): number => question.points,
    );
    const sum = points.reduce(
        (total: number, currentNum: number) => total + currentNum,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published,
    );
    const publishedPoints = publishedQuestions.map(
        (question: Question): number => question.points,
    );
    const sum = publishedPoints.reduce(
        (total: number, currentNum: number) => total + currentNum,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`,
        )
        .join("\n");
    return `id,name,options,points,published
${questionCSV}`;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishQuestion = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true,
        }),
    );
    return publishQuestion;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const allType = questions.every(
        (question: Question): boolean => question.type === questions[0].type,
    );
    return allType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQuestions = [...questions];
    const blank = makeBlankQuestion(id, name, type);
    newQuestions.splice(newQuestions.length, 0, blank);
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id == targetId ? newName : question.name,
        }),
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question => ({
            ...question,
            options: question.id == targetId ? [] : question.options,
            type: question.id == targetId ? newQuestionType : question.type,
        }),
    );
    return newQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    if (targetOptionIndex == -1) {
        const newerQuestions = [...questions];
        const changeIndex = newerQuestions.findIndex(
            (question: Question): boolean => question.id === targetId,
        );
        const newAnswers = [...newerQuestions[changeIndex].options];
        newAnswers.splice(
            newerQuestions[changeIndex].options.length + 1,
            0,
            newOption,
        );
        const newestQuestions = newerQuestions.map(
            (question: Question): Question => ({
                ...question,
                options:
                    question.id == targetId ? newAnswers : question.options,
            }),
        );
        return newestQuestions;
    }
    const newerQuestions = [...questions];
    const changeIndex = newerQuestions.findIndex(
        (question: Question): boolean => question.id === targetId,
    );
    const newAnswers = [...newerQuestions[changeIndex].options];
    newAnswers.splice(targetOptionIndex, 1, newOption);
    const newestQuestions = newerQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: question.id == targetId ? newAnswers : question.options,
        }),
    );
    return newestQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const newQuestions = [...questions];
    const dupeIndex = newQuestions.findIndex(
        (question: Question): boolean => question.id === targetId,
    );
    const dupeQuestion = duplicateQuestion(newId, questions[dupeIndex]);
    newQuestions.splice(dupeIndex + 1, 0, dupeQuestion);
    return newQuestions;
}
