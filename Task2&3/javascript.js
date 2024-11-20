//task 2
function calculateSumAndAverage(numbers) {
    
    // Check if the array is empty
    if (numbers.length === 0) {
        return { sum: 0, average: 0 };
    }

    // Calculate the total sum using reduce
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average
    const average = sum / numbers.length;

    return { sum, average };
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbers);
console.log(Sum: ${result.sum}, Average: ${result.average});
//task 3
function removeDuplicates(strings) {
    // Use a Set to store unique values
    const uniqueStrings = new Set(strings);
    
    // Convert the Set back to an array
    return Array.from(uniqueStrings);
}

// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
const uniqueArray = removeDuplicates(strings);
console.log(uniqueArray); // Output: ["apple", "banana", "orange", "kiwi"]
