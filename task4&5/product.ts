//task4
// Step 1: Define the Product interface
interface Product {
    name: string;
    price: number;
}

// Step 2: Implement the function to calculate total price
function calculateTotalPrice(products: Product[]): number {
    let totalPrice = 0;

    // Iterate through each product and sum up the prices
    for (const product of products) {
        totalPrice += product.price;
    }

    return totalPrice;
}

// Example usage:
const products: Product[] = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 },
];

const total = calculateTotalPrice(products);
console.log(Total Price: $${total.toFixed(2)}); // Output: Total Price: $2.50
//task5
// Function to validate an email address
function isValidEmail(email: string): boolean {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    // Test the email against the regex
    return emailRegex.test(email);
}

// Example usage:
const testEmails = [
    "user@example.com",
    "user.name@domain.co",
    "user@sub.domain.com",
    "invalid-email@domain",
    "user@.com",
    "@domain.com",
    "user@domain..com"
];

testEmails.forEach(email => {
    console.log(${email}: ${isValidEmail(email)});
});
/*function Definition:

• The function isValidEmail takes a single parameter email of type string and returns a boolean.

2. Regular Expression:

   • The regex pattern used is: 
     
     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
     

   • This pattern checks for:

     • A sequence of characters (letters, digits, and certain special characters) before the @ symbol.

     • A domain name after the @ symbol, which can include letters, digits, hyphens, and dots.

     • A top-level domain (TLD) after the last dot, which must be at least two characters long.

3. Testing the Email:

   • The function uses the test method of the regex to check if the provided email matches the pattern.

4. Example Usage:

   • An array of test emails is defined to demonstrate the function's usage.

   • Each email is tested, and the results are logged to the console.

This implementation provides a basic validation for email addresses and can be expanded or modified based on more specific requirements as needed.

// product.ts

/**
 * This TypeScript file contains a function to validate email addresses.
 * The function isValidEmail uses a regular expression to check if the provided
 * email string conforms to a standard email format.
 *
 * Usage:
 * 1. Ensure you have Node.js and TypeScript installed on your machine.
 * 2. Save this code in a file named product.ts.
 * 3. Open your terminal and navigate to the directory where product.ts is located.
 * 4. Compile the TypeScript file to JavaScript using the following command:
 * 
 *     tsc product.ts
 * 5. This will generate a product.js file in the same directory.
 * 6. Run the generated JavaScript file with Node.js:
 *      node product.js
 *    
 *
 * The output will show whether each test email is valid or not based on the validation function.
 */
/*
// Function to validate an email address
function isValidEmail(email: string): boolean {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    // Test the email against the regex
    return emailRegex.test(email);
}

// Example usage:
const testEmails = [
    "user@example.com",
    "user.name@domain.co",
    "user@sub.domain.com",
    "invalid-email@domain",
    "user@.com",
    "@domain.com",
    "user@domain..com"
];

testEmails.forEach(email => {
    console.log(${email}: ${isValidEmail(email)});
});


▎Explanation of the Code:

1. File Header Comment: 

   • The header comment explains what the file does and provides usage instructions.

2. Functionality:

   • The isValidEmail function checks if a given email string matches a defined regular expression pattern for valid emails.

3. Instructions for Running the Code:

   • Prerequisites: Ensure that Node.js and TypeScript are installed.

   • Save the code in a file named product.ts.

   • Use the terminal to navigate to the directory containing the file.

   • Compile the TypeScript code into JavaScript using the TypeScript Compiler (tsc).

   • Execute the compiled JavaScript code using Node.js.

By following these instructions, users can easily understand how to work with the TypeScript code and see its output in action.
