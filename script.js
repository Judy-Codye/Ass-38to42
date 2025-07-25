

// Assignment Ch No 38-44 

// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

//Question.1

//  Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 

// Ans-1

// function power(a, b) {
//   var result = 1;
//   for (var i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }


// console.log(power(2, 3)); 


// Question.2

//  Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, … 

// Ans.2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is a Leap Year");
//     } else {
//         console.log(year + " is not a Leap Year");
//     }
// }


// var inputYear = prompt("Enter a year:");
// isLeapYear(parseInt(inputYear));

// Question.3

// If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by

// area = √S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 


// Ans.3

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }


// function calculateArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }


// var a = 5, b = 6, c = 7;
// var area = calculateArea(a, b, c);
// console.log("Area of triangle:", area.toFixed(2));


// Question.4

//Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these 
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction. 



// Ans.4

// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3, totalMarks) {
//     var obtained = m1 + m2 + m3;
//     return (obtained / totalMarks) * 100;
// }

// function mainFunction(m1, m2, m3, totalMarks) {
//     var average = calculateAverage(m1, m2, m3);
//     var percentage = calculatePercentage(m1, m2, m3, totalMarks);

//     console.log("Average Marks: " + average.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
// }

// Question.5
 
// You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 

// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }


// console.log(myIndexOf("hello", "e")); 
// console.log(myIndexOf("hello", "l")); 
// console.log(myIndexOf("hello", "z")); 


// Question.6
 
// Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.


// Ans.6

// function deleteVowels(sentence) {
//     if (sentence.length > 25) {
//         return "Sentence too long.";
//     }
//     return sentence.replace(/[aeiouAEIOU]/g, "");
// }


// console.log(deleteVowels("This is a simple test.")); 


// Question.7
 
// Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 
// “Pleases read this application and give me gratuity” 
// Such occurrences are ea, ea, ui. 

// Ans.7

// function countSuccessiveVowels(text) {
//     var count = 0;
//     var vowels = "aeiouAEIOU";

//     for (var i = 0; i < text.length - 1; i++) {
//         var first = text[i];
//         var second = text[i + 1];

//         switch (true) {
//             case (vowels.includes(first) && vowels.includes(second)):
//                 count++;
//                 break;
//         }
//     }

//     console.log("Number of successive vowel pairs:", count);
// }


// countSuccessiveVowels("Pleases read this application and give me gratuity");

// Question.8

// The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 

// Ans.8


// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }


// function convertDistance(km) {
//     console.log("Distance in meters: " + convertToMeters(km));
//     console.log("Distance in feet: " + convertToFeet(km));
//     console.log("Distance in inches: " + convertToInches(km));
//     console.log("Distance in centimeters: " + convertToCentimeters(km));
// }

// var distanceKm = 2; 
// convertDistance(distanceKm);


// Question.9

// Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour. 

// Ans.9

// function calculateOvertime(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12;

//     if (hoursWorked > regularHours) {
//         var overtimeHours = hoursWorked - regularHours;
//         var overtimePay = overtimeHours * overtimeRate;
//         console.log("Overtime Pay: Rs. " + overtimePay);
//     } else {
//         console.log("No overtime. Overtime Pay: Rs. 0");
//     }
// }


// calculateOvertime(45);  
// calculateOvertime(38);  


// Question.10

// A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer. 


function calculateNotes(amount) {
    
    var rupees = amount * 100;

    var hundreds = Math.floor(rupees / 100);
    rupees = rupees % 100;

    var fifties = Math.floor(rupees / 50);
    rupees = rupees % 50;

    var tens = Math.floor(rupees / 10);

    console.log("100 rupee notes: " + hundreds);
    console.log("50 rupee notes: " + fifties);
    console.log("10 rupee notes: " + tens);
}

calculateNotes(7); 
