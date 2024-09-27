/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelsius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let firstsum: number = 0;
    let secondsum: number = 0;
    let thirdsum: number = 0;
    if (first > 0) {
        firstsum = first;
    } else {
        firstsum = 0;
    }
    if (second > 0) {
        secondsum = second;
    } else {
        secondsum = 0;
    }
    if (third > 0) {
        thirdsum = third;
    } else {
        thirdsum = 0;
    }
    return firstsum + secondsum + thirdsum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let shoutmessage: string = "";
    shoutmessage = message.toUpperCase();
    return shoutmessage + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message[message.length - 1] == "?";
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word == "YES" || word == "yes") {
        return true;
    } else if (word == "NO" || word == "no") {
        return false;
    } else {
        return null;
    }
}
