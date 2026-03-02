/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        numbers = numbers.filter(
            (_number: number): boolean =>
                _number === numbers[0] ||
                _number === numbers[numbers.length - 1],
        );
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((_number: number): number =>
        _number ? 3 * _number : _number,
    );
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let _numbers = numbers.map((str: string): number => parseInt(str));
    _numbers = _numbers.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num,
    );
    return _numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let _Numbers = amounts.map((str: string): string =>
        str[0] === "$" ? str.replace("$", "") : str,
    );
    let _numbers = _Numbers.map((str: string): number => parseInt(str));
    _numbers = _numbers.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num,
    );
    return _numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let _messages = messages.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str,
    );
    _messages = _messages.filter(
        (str: string): boolean => str[str.length - 1] !== "?",
    );
    return _messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: number = 0;
    words = words.filter((str: string): boolean => str.length < 4);
    shortWords = words.length;
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    let isRGB = colors.map((str: string): boolean =>
        str === "red" || str === "blue" || str === "green" ? true : false,
    );
    if (isRGB.every((t) => t)) {
        return true;
    }
    return false;
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
    let sum: number = addends.reduce((a, b) => {
        return a + b;
    }, 0);
    let _arr: string = addends.toString();
    let arr: string = _arr.split(",").join("+");
    /*
    let arr = addends.map((num: number): string =>
        addends[addends.length - 1] ? `${num} +` : `${num}`,
    );
    arr = arr.map((str: string): string =>
        str.includes(",") ? str.replaceAll(",", "") : str,
    );
    */
    let stringSum: string = sum.toString();
    return stringSum + "=" + arr;
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
    let firstNegative: number = values.findIndex((v) => v < 0);
    if (firstNegative === -1) {
        let sum: number = values.reduce((acc, v) => acc + v, 0);
        return [...values, sum];
    }
    let sum: number = values
        .slice(0, firstNegative)
        .reduce((acc, v) => acc + v, 0);
    return [
        ...values.slice(0, firstNegative + 1),
        sum,
        ...values.slice(firstNegative + 1),
    ];
}
