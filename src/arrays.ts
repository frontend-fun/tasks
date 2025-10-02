/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray[i] = numbers[i] * 3;
    }
    return newArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let parsed = parseInt(numbers[i]);
        if (isNaN(parsed)) {
            newArray[i] = 0;
        } else {
            newArray[i] = parsed;
        }
    }
    return newArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        let noDollar = amounts[i].replace("$", "");
        let parsed = parseInt(noDollar);
        if (isNaN(parsed)) {
            newArray[i] = 0;
        } else {
            newArray[i] = parsed;
        }
    }
    return newArray;
}

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newArray: string[] = [];
    let index = 0;
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].endsWith("!")) {
            newArray[index] = messages[i].toUpperCase();
            index++;
        }
        if (messages[i].endsWith("?")) {
            continue;
        }
        if (!messages[i].endsWith("!") && !messages[i].endsWith("?")) {
            newArray[index] = messages[i];
            index++;
        }
    }
    if (newArray.length > 0) {
        return newArray;
    }
    return [];
}

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    for (let i = 0; i < colors.length; i++) {
        if ( colors[i] !== "red" && colors[i] !== "blue" && colors[i] !== "green") {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum = 0;
    let expression = "";
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
        if (i === addends.length - 1) {
            expression += addends[i];
        }
        else {
            expression += addends[i] + "+";
        }
    }
    return sum + "=" + expression;
}
/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newArray: number[] = [];
    let sum = 0;
    let foundNegative = false;
    for (let i = 0; i < values.length; i++) {
        if (!foundNegative) {
            if (values[i] < 0) {
                newArray.push(values[i]);
                newArray.push(sum);
                foundNegative = true;
            } else {
                sum += values[i];
                newArray.push(values[i]);
            }
        } else {
            newArray.push(values[i]);
        }
    }
    if (!foundNegative) {
        newArray.push(sum);
        return newArray;
    }
    if (newArray.length > 0) {
        return newArray;
    }
    return [];
}
