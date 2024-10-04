/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const C = ((temperature - 32) * 5) / 9;
    return C;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let total: number = 0;
    if (first > 0) {
        total = total + first;
    }
    if (second > 0) {
        total = total + second;
    }
    if (third > 0) {
        total = total + third;
    }
    return total;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let uppercase_message: string = message.toUpperCase();
    let final_message: string = uppercase_message + "!";
    return final_message;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let last_index: string = message.charAt(message.length - 1);
    let question: boolean = last_index === "?";
    return question;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let upper_word: string = word.toUpperCase();
    if (upper_word === "YES") {
        return true;
    }
    if (upper_word === "NO") {
        return false;
    } else {
        return null;
    }
}
