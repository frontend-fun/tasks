/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newStart = numbers[0];
    const newEnd = numbers[numbers.length - 1];
    let newList: number[] = [];
    if (newStart >= 0 || newStart < 0) {
        newList[0] = newStart;
    }
    if (newEnd >= 0 || newStart < 0) {
        newList[1] = newEnd;
    }
    return newList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((tripleNum: number): number => tripleNum * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numberInt = numbers.map((intnum: string): number =>
        +intnum >= 0 || +intnum < 0 ? +intnum : 0,
    );
    return numberInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noMoney = amounts.map((cashless: string): string =>
        cashless.includes("$") ? cashless.slice(1) : cashless,
    );
    const numReturn = noMoney.map((num: string): number =>
        +num >= 0 || +num < 0 ? +num : 0,
    );
    return numReturn;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion = messages.map((message: string): string =>
        message.includes("?") ? "" : message,
    );
    const shoutIt = noQuestion.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message,
    );
    const noBlank = (message: string): boolean => message.length > 1;
    const shoutItOut = shoutIt.filter(noBlank);
    return shoutItOut;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortCount = words.filter((word: string): boolean => word.length < 4);
    return shortCount.length;
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
    const RGBCheck = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green",
    );
    return RGBCheck;
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
    const sum = addends.reduce(
        (total: number, currentNum: number) => total + currentNum,
        0,
    );
    const add = addends.join("+");
    const sumText = `${sum}=${add}`;
    return sumText;
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
    const newArray = [...values];
    const negativeIndex = values.findIndex(
        (value: number): boolean => value < 0,
    );
    if (negativeIndex === -1) {
        const sum = values.reduce(
            (total: number, currentNum: number) => total + currentNum,
            0,
        );
        newArray.splice(newArray.length, 0, sum);
        return newArray;
    }
    const sumArray = [...values];
    sumArray.splice(negativeIndex, newArray.length - negativeIndex);
    const sum = sumArray.reduce(
        (total: number, currentNum: number) => total + currentNum,
        0,
    );
    newArray.splice(negativeIndex + 1, 0, sum);
    return newArray;
}
