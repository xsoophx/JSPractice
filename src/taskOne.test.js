const task = require("./taskOne");

// Beispiel:
test('should print hello world', () => {
    expect(task.printHallo()).toBe('Hallo Welt!');
});

// 1.
test('should double the number', () => {
    expect(taskOne.double(2)).toBe(4);
});

// 2.
test('should sum two numbers', () => {
    expect(taskOne.sumOf(1, 2)).toBe(3);
});

// 3.
test('should return length of string', () => {
    expect(taskOne.lengthOfString('Hallo')).toBe(5);
});

// 4.
test('should test even or odd number', () => {
    expect(taskOne.isEven(2)).toBe(true);
    expect(taskOne.isEven(3)).toBe(false);
});

// 5.
test('should return name', () => {
    expect(taskOne.printName('Max')).toBe('Hallo, Max');
});

// 6.
test('should return average of list', () => {
    expect(taskOne.average([1, 2, 3])).toBe(2);
});

// 7.
test('should return sorted list', () => {
    expect(taskOne.sort([3, 2, 1])).toEqual([1, 2, 3]);
});

// 8.
test('should return true if list contains number', () => {
    expect(taskOne.contains([1, 2, 3], 2)).toBe(true);
});

// 9.
test('should return longest word', () => {
    expect(taskOne.longestWord(['Hallo', 'Welt'])).toBe('Hallo');
});

// 10.
test('should fill array with ten numbers', () => {
    expect(taskOne.fillWithTenNumbers().length).toBe(10);
});

// 11.
test('should fill array with random numbers', () => {
    expect(taskOne.fillWithTenRandomNumbers(42).length).toBe(42);
});

// 12.
test('should return min and max', () => {
    expect(taskOne.minMax([1, 2, 3])).toEqual([1, 3]);
});

// 13.
test('should calculate factorial', () => {
    expect(taskOne.factorial(5)).toBe(120);
});

// 14.
test('should calculate fibonacci', () => {
    expect(taskOne.fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

// 15.
test('should return square of number', () => {
    expect(taskOne.squares()).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
});

// 16
test('should reverse string', () => {
    expect(taskOne.reverseString('Hallo')).toBe('ollaH');
});

// 17
test('should return true if string is palindrome', () => {
    expect(taskOne.isPalindrome('otto')).toBe(true);
    expect(taskOne.isPalindrome('hallo')).toBe(false);
});

// 18
test('should count vowels in string', () => {
    expect(taskOne.countVowels('Gabelstapler')).toBe(4);
});

// 19
test('should return pascal triangle', () => {
    expect(taskOne.pascalTriangle(5)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ]);
});

// 20
test('should sort list ascending and descending', () => {
    expect(taskOne.sortAscendingDescending([21, 237, 53, 1, 2, -3])).toEqual([
        -3, 1, 2, 21, 53, 237
    ]);
});

// 21
test('should test if a number is prime', () => {
    expect(taskOne.isPrime(7)).toBe(true);
    expect(taskOne.isPrime(8)).toBe(false);
});

// 22
test('should calculate sum of all numbers in list', () => {
    expect(taskOne.sum([1, 2, 3])).toBe(6);
});

// 23
test('should return a duplicate of a list', () => {
    expect(taskOne.duplicateList([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
});

// 24
test('should check of two arrays are identical', () => {
    expect(taskOne.areIdentical([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(taskOne.areIdentical([1, 2, 3], [1, 2, 4])).toBe(false);
});

// 25
test('should print reversed array', () => {
    expect(taskOne.reversedList([1, 2, 3])).toEqual([3, 2, 1]);
});

// 26
test('should find second smallest and second largest number in array', () => {
    expect(taskOne.findSecondSmallestAndSecondLargest([1, 2, 3])).toEqual([2, 2]);
});

// 27
test('should copy two arrays into one', () => {
    expect(taskOne.copyArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

// 28
test('should find common elements in two lists', () => {
    expect(taskOne.findCommonElements([1, 2, 3, 4, 5], [1, 2, 3, 6, 7])).toEqual([1, 2, 3]);
});

// 29
test('should test if a number is odd', () => {
    expect(taskOne.isOdd(3)).toBe(true);
    expect(taskOne.isOdd(4)).toBe(false);
});

