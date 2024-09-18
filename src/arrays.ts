/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return numbers.filter(
        (_, index, array) => index === 0 || index === array.length - 1,
    );
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((Number: number): number => Number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //  return numbers.map((Number: string): string[] => {
    //   const parsed = parseInt(string, 10);
    // return isNaN(parsed) ? 0: parsed;
    // });
    return numbers.map((str: string) => {
        const parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str: string) => {
        const remove$ = str.replace("$", "");
        const parsed = parseInt(remove$, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((str) => !str.endsWith("?"))
        .map((str) => (str.endsWith("!") ? str.toUpperCase() : str));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const selectedColors = new Set(["red", "blue", "green"]);
    return colors.every((color: string): boolean => selectedColors.has(color));
    // const findColor = colors.every(
    // (color: string): boolean =>
    //     color === "red" || color === "blue" || color === "green",
    // );
    //  if (colors.length === 0) {
    return false;
    //  }
    //  return findColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    const equation = addends.join("+");
    if (addends.length === 0) {
        return "0=0";
    }
    return `${sum}=${equation}`;
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
    // Find the index of the first negative number
    const negativeIndex = values.findIndex((num) => num < 0);
    // sum of numbers before negative number
    const sum_before_negative = values
        .slice(0, negativeIndex)
        .reduce((Total, num) => Total + num, 0);
    // sum of everything
    const total_sum = values.reduce((Total, num) => Total + num, 0);
    // IF no negative number append total to the end
    if (negativeIndex === -1) {
        return [...values, total_sum];
    }
    const result = [
        ...values.slice(0, negativeIndex + 1), // Copy numbers up to and including the first negative
        sum_before_negative, // Insert the sum
        ...values.slice(negativeIndex + 1), // Copy the rest of the numbers
    ];

    return result;
}
