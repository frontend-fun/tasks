export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) return [];
    if (numbers.length === 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[numbers.length - 1]];
}

export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n: number): number => n * 3);
}

export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((s: string): number => {
        const parsed = parseInt(s, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
}

export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((s: string): number => {
        const cleaned = s.startsWith("$") ? s.slice(1) : s;
        const parsed = parseInt(cleaned, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
};

export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((msg: string): boolean => !msg.endsWith("?"))
        .map((msg: string): string =>
            msg.endsWith("!") ? msg.toUpperCase() : msg,
        );
};

export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

export function allRGB(colors: string[]): boolean {
    return colors.every((c: string): boolean =>
        ["red", "blue", "green"].includes(c),
    );
}

export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const sum = addends.reduce((acc: number, n: number) => acc + n, 0);
    return `${sum}=${addends.join("+")}`;
}

export function injectPositive(values: number[]): number[] {
    const firstNegIndex = values.findIndex((v: number) => v < 0);
    const sumBeforeNeg = values
        .slice(0, firstNegIndex === -1 ? values.length : firstNegIndex)
        .reduce((acc, n) => acc + n, 0);

    if (firstNegIndex === -1) return [...values, sumBeforeNeg];
    const before = values.slice(0, firstNegIndex + 1);
    const after = values.slice(firstNegIndex + 1);
    return [...before, sumBeforeNeg, ...after];
}
