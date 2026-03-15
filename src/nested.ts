import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let newQuestions: Question[] = questions.filter(
        (question: Question): boolean => question.published,
    );
    return newQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let newQuestions: Question[] = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            ),
    );
    return newQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    if (questions.some((n: Question) => n.id === id)) {
        let location: number = questions.findIndex(
            (question: Question): boolean => question.id === id,
        );
        return questions[location];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newQuestions: Question[] = questions.filter(
        (question: Question): boolean => question.id != id,
    );
    return newQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let questionNames: string[] = questions.map(
        (question: Question): string => question.name,
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum: number = questions.reduce(
        (num, question) => num + question.points,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let newQuestions: Question[] = questions.filter(
        (question: Question): boolean => question.published,
    );
    let sum: number = newQuestions.reduce(
        (num, question) => num + question.points,
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
    let bigList: string = questions
        .reduce(
            (list, question) =>
                list +
                question.id.toString() +
                "," +
                question.name +
                "," +
                question.options.length.toString() +
                "," +
                question.points.toString() +
                "," +
                question.published +
                "\n",
            "id,name,options,points,published\n",
        )
        .trim();
    return bigList;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answerList: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answerList;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let questionList: Question[] = questions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
    return questionList;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let questionTypes: string[] = questions.map(
        (question: Question): string => question.type,
    );
    if (questionTypes[0] === "multiple_choice_question") {
        if (
            questionTypes.some(
                (question: string): boolean =>
                    question === "short_answer_question",
            )
        ) {
            return false;
        } else {
            return true;
        }
    } else {
        if (
            questionTypes.some(
                (question: string): boolean =>
                    question === "multiple_choice_question",
            )
        )
            return false;
        else {
            return true;
        }
    }
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
    let dummyQuestions: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
    dummyQuestions.push(makeBlankQuestion(id, name, type));
    return dummyQuestions;
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
    let newQuestion: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                { ...question, options: [...question.options], name: newName }
            :   { ...question, options: [...question.options] },
    );
    return newQuestion;
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
    let newList: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                {
                    ...question,
                    options: [...question.options],
                    type: newQuestionType,
                }
            :   { ...question, options: [...question.options] },
    );
    let skimOptionsList: Question[] = newList.map(
        (question: Question): Question =>
            question.type === "short_answer_question" ?
                { ...question, options: [] }
            :   { ...question, options: [...question.options] },
    );
    return skimOptionsList;
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
    if (targetOptionIndex === -1) {
        let newList: Question[] = questions.map(
            (question: Question): Question =>
                question.id === targetId ?
                    { ...question, options: [...question.options, newOption] }
                :   { ...question, options: [...question.options] },
        );
        return newList;
    } else {
        let newList: Question[] = questions.map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options],
            }),
        );
        let temp: number = questions.findIndex(
            (question: Question): boolean => question.id === targetId,
        );
        newList[temp].options[targetOptionIndex] = newOption;
        return newList;
    }
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
    let newList: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
    let temp: number = newList.findIndex(
        (question: Question): boolean => question.id === targetId,
    );
    newList.splice(temp + 1, 0, duplicateQuestion(newId, newList[temp]));
    return newList;
}
