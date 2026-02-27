/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr = numbers.length > 1 ?  [numbers[0], numbers[numbers.length - 1]] : (numbers.length === 1) ? [numbers[0] ,numbers[0]] : []
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map(num => 3 * num); 
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newarr = numbers.map((num: string):number => parseInt(num) || 0) 
    return newarr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let dollars = amounts.map((amount: string): number => (parseInt(amount.replace(/\$/g, "")) ? parseInt(amount.replace(/\$/g, "")) : 0)); 
    return dollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shout = messages.map((message: string): string => (message.endsWith("!")) ? message.toUpperCase(): message).filter((message: string): boolean => (!message.endsWith("?")))
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let lenwords = words.filter((word: string): boolean => (word.length < 4))
    return lenwords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let rgb = colors.every((color: string): boolean => color === "red" || color === "green" || color === "blue")
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0 ); 
    return (sum.toString() + "=" + (addends.length > 0 ? addends.join("+") : "0"));
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
    let indx = values.findIndex((value: number): boolean => value < 0); 
    let sum = (indx === -1) ? values.reduce((currentTotal: number, num: number) => currentTotal+num, 0): values.slice(0, indx).reduce((currentTotal: number, num: number) => { return num > 0  ? currentTotal + num : currentTotal + 0; }, 0);
    let newArr = [...values]; 
    newArr.splice(indx + 1, 0, sum);
    let final = (indx === -1) ? [...values, sum]: newArr; 
    return final;
}
