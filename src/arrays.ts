/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let arr = numbers.map((numb: number): number => 3 * numb);
    return arr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let arr = numbers.map((s: string): number =>
        isNaN(Number(s)) ? 0 : Number(s),
    );
    return arr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let arr1 = amounts.map((a: string): string =>
        a[0] == "$" ? a.slice(1) : a,
    );
    let arr2 = arr1.map((a: string): number =>
        isNaN(Number(a)) ? 0 : Number(a),
    );
    return arr2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let arr = messages.filter((a: string): boolean => a[a.length - 1] != "?");
    let arr2 = arr.map((a: string): string =>
        a[a.length - 1] == "!" ? a.toUpperCase() : a,
    );
    return arr2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let arr = words.filter((a: string): boolean => a.length < 4);
    return arr.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    return colors.every(
        (c: string): boolean => c == "blue" || c == "green" || c == "red",
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
    if (addends.length == 0) {
        return "0=0";
    }
    const arr = addends.join("+");
    let arr1 = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let arr2 = String(arr1).concat("=").concat(arr);
    return arr2;
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
    const isNegative = values.some((a: number): boolean => a < 0);
    if (!isNegative) {
        return values.concat(
            values.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0,
            ),
        );
    }
    const firstNegative = values.findIndex((a: number): boolean => a < 0);
    let temp = [...values];
    temp.splice(firstNegative);
    let withInject = temp.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let temp2 = [...values];
    temp2.splice(firstNegative + 1, 0, withInject);
    return temp2;
}
