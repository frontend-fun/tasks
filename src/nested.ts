import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question) => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question) =>
            !(q.body === "" && q.expected === "" && q.options.length === 0),
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((q: Question) => q.id === id) ?? null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question) => q.id !== id);
}

/***
 * Consumes an array of questions and produces a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question) => q.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((sum: number, q: Question) => sum + q.points, 0);
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce(
        (sum: number, q: Question) => sum + (q.published ? q.points : 0),
        0,
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const lines = questions.map(
        (q: Question) =>
            `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
    );
    return [header, ...lines].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length <= 1) {
        return true;
    }
    const firstType = questions[0].type;
    return questions.every((q: Question) => q.type === firstType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q,
    );
}

/***
 * Change a question's type; if not multiple choice, clear options.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id !== targetId) {
            return q;
        }
        const next: Question = { ...q, type: newQuestionType };
        if (newQuestionType !== "multiple_choice_question") {
            return { ...next, options: [] };
        }
        // keep existing options if it stays multiple choice
        return next;
    });
}

/**
 * Edit/add an option for a specific question by id.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id !== targetId) {
            return q;
        }
        const oldOptions = q.options;

        // Add to end
        if (targetOptionIndex === -1) {
            return { ...q, options: [...oldOptions, newOption] };
        }

        // Replace at index (if index is in range)
        const newOptions = oldOptions.map((opt: string, i: number) =>
            i === targetOptionIndex ? newOption : opt,
        );
        return { ...q, options: newOptions };
    });
}

/***
 * Duplicate question with targetId and insert duplicate directly after it.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const index = questions.findIndex((q: Question) => q.id === targetId);
    if (index === -1) {
        return [...questions];
    }
    const original = questions[index];
    const copy = duplicateQuestion(newId, original);

    return [
        ...questions.slice(0, index + 1),
        copy,
        ...questions.slice(index + 1),
    ];
}
