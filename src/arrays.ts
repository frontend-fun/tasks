/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const first_last_book = numbers.filter((number, index) => index === 0 || index === numbers.length - 1);
    if (numbers.length === 0) {
        return [];
    }

    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }


    return first_last_book;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled_numbers = numbers.map((number) => number * 3);
    return tripled_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
        const converted_numbers = numbers.map(str => {
             const parsed = parseInt(str);
            return isNaN(parsed) ? 0 : parsed;
        });
    return converted_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
        const converted_amounts = amounts.map(str => {
            const cleaned = str.startsWith('$') ? str.slice(1) : str;
            const parsed = parseInt(cleaned);
            return isNaN(parsed) ? 0 : parsed;
        });
    return converted_amounts;
}
 

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
        const shouted_messages = messages.map(str => {
            if (str.endsWith("!")) {
                return str.toUpperCase();
            } else if (str.endsWith("?")) {
                return null;
            } else {
                return str;
            }
        }).filter(str => str !== null) as string[];
    return shouted_messages;
}
 

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words = words.filter(word => word.length < 4);
    return short_words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const valid_colors = ['red', 'blue', 'green'];
    return colors.reduce((allValid, color) => allValid && valid_colors.includes(color), true);
    
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
    const sum = addends.reduce((total, num) => total + num, 0);
    const expression = addends.join("+");
    return `${sum}=${expression}`;
   
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
    let sum = 0;
    let negativeFound = false;

    const result = values.reduce((acc, num) => {
        acc.push(num);
        if (!negativeFound && num < 0) {
            acc.push(sum);
            negativeFound = true;
        } else if (!negativeFound) {
            sum += num; 
        }
        
        return acc;
    }, [] as number[]);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!negativeFound) {
        result.push(sum);
        }
    
    return result;
}
