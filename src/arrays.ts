/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let c =
        numbers.length == 0 ? []
        : numbers.length == 1 ? [numbers[0], numbers[0]]
        : numbers.length >= 2 ? [numbers[0], numbers[numbers.length - 1]]
        : [];
    return c;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((numbers: string): number => parseInt(numbers) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => parseInt(amount.replace("$", "")) || 0);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let quiet = messages.filter((message: string) =>
        message.endsWith("?") ? "" : message,
    );
    let shouting = quiet.map((message: string) =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortwords = words.filter((word: string) => word.length < 4);
    let count = shortwords.length;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (rgb: string): boolean =>
            rgb == "red" || rgb == "green" || rgb == "blue",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum =
        addends.length == 0 ? "0=0"
        : addends.length == 1 ? addends[0] + "=" + addends[0]
        : addends.length > 1 ?
            addends.reduce((add, total) => add + total) +
            "=" +
            addends.join("+")
        :   "";
    return sum;
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
    let negative = values.findIndex((value: number) => value < 0);
    let getpositive =
        negative !== -1 ?
            values.slice(0, negative).reduce((total, num) => total + num, 0)
        :   values.reduce((current, num) => current + num, 0);

    return negative !== -1 ?
            [
                ...values.slice(0, negative + 1),
                getpositive,
                ...values.slice(negative + 1),
            ]
        :   [...values, getpositive];
}
