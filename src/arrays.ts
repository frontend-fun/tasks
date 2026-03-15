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
    let numbers2: number[] = [numbers[0], numbers[numbers.length - 1]];
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triple = numbers.map((number: number): number => number * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newList = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num),
    );
    return newList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newList = amounts.map((amount: string): number =>
        amount[0] === "$" ? Number(amount.slice(1)) : Number(amount),
    );
    let newList2 = newList.map((thing: number): number =>
        isNaN(thing) ? 0 : thing,
    );
    return newList2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newlist: string[] = [];
    newlist = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    let newList2 = newlist.map((thing: string): string =>
        thing.endsWith("!") ? thing.toUpperCase() : thing,
    );
    return newList2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let newList = words.filter((word: string): boolean => word.length < 4);
    return newList.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let newList = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    if (newList.length === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce((accumulate, currentVal) => {
        return accumulate + currentVal;
    }, 0);
    let newList: string[] = addends.map((add: number): string =>
        add === addends[addends.length - 1] ?
            add.toString()
        :   add.toString() + "+",
    );
    let sumString: string = sum.toString() + "=";
    newList = [sumString, ...newList];
    let newString: string = newList.join("");
    if (newString === "0=") {
        return "0=0";
    } else {
        return newString;
    }
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
    let valuesClone: number[] = [...values];
    let negativeIndex = valuesClone.some((num: number) => num < 0);

    if (negativeIndex) {
        let foundIndex: number = valuesClone.findIndex(
            (num: number) => num < 0,
        );
        let sumList: number[] = valuesClone.slice(0, foundIndex);
        let sum: number = sumList.reduce((accumulate, currentValue) => {
            return accumulate + currentValue;
        }, 0);
        valuesClone.splice(foundIndex + 1, 0, sum);
        return valuesClone;
    } else {
        let sum: number = valuesClone.reduce((accumulate, currentValue) => {
            return accumulate + currentValue;
        }, 0);
        valuesClone.push(sum);
        return valuesClone;
    }
}
