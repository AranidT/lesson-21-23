//easy
// 1
// let number = 0;
// while (number < 10){
//     number += 1
//     console.log(number)
// }

// 2
// let number = 0;
// let sum = 0;
// while (number < 100){
//     sum += number;
//     number ++;
// }
// console.log(sum)

// 3
// let number = 0;
// while (number < 20){
//     if (number % 2 === 0){
//         console.log(number)
//     } 
//     number ++
// }

// 4
// let factorial = 1
// let number = Number(prompt("Введите число: "));
// while (number > 1){
//     factorial *= number
//     number -= 1
// }
// console.log(factorial)

// 5
// let sum = 0;
// let number = Number(prompt("Введите число: "));
// while (number > 0) {
//     sum += number % 10;  
//     number = (number - (number % 10)) / 10;
// }
// console.log(sum);

// 6
// let stroka = prompt("Write something...");
// let index = 0;
// let char;
// while (index < stroka.length){
//     char = stroka[index];
//     console.log(char);
//     index++;
// }


// 7
// let number1 = 0;
// let number2 = Number(prompt("Введите число: "));
// while (number1 < number2){
//     if (number1 % 3 === 0){
//         console.log(number1)
//     }
//     number1++;
// }

// 8
// let string = prompt("Write something...");
// console.log(string.length)

// 9
// let array = [1, "apple", 4, "orange"];
// let index = 0;
// let char;
// while (index < array.length){
//     char = array[index];
//     console.log(char)
//     index++
// }


// 10
// let array = [1, 2, 3, 4];
// let index = 0;
// let sum = 0;
// while (index < array.length){
//     sum += array[index]
//     index++
// }
// console.log(sum)

// 11
// let array = [1, -10, 5, -100, 8];
// let index = 0;
// let hasNegative = false;

// while (index < array.length) {
//     if (array[index] < 0) {
//         hasNegative = true;
//         break;
//     }
//     index++;
// }
// if (hasNegative) {
//     console.log("Есть отрицательные элементы.");
// } else {
//     console.log("Все элементы положительные.");
// }

// 12
// let array = [1, 2, 3, 4];
// let index = 0;
// let sum = 0;
// while (index < array.length){
//     sum += array[index]
//     index++
// }
// let average = sum / array.length; 
// console.log(average)

// 13
// let array = [150, 5, 10, 20];
// let index = 0;
// let min = array[0];
// while(index < array.length){
//     if (array[index] < min){
//         min = array[index] 
//     }
//     index++
// }
// console.log(min)

// 14
// let array = [1, 2, 5, 4, 8];
// let index = 0;
// let chetchik1 = 0;
// let chetchik2 = 0;
// while(index < array.length){
//     if (array[index] % 2 == 0){
//         chetchik1 += 1
//     } else{
//         chetchik2 += 1
//     }
//     index++
// }
// console.log("Количество четных чисел: ", chetchik1)
// console.log("Количество нечетных чисел: ", chetchik2)

// 15
// let array = [1, -2, 10, -5, 8];
// let index = 0;
// while (index < array.length) {
//     if (array[index] < 0) {
//         array.splice(index, 1);
//     } else {
//         index++; 
//     }
// }
// console.log(array); 

// Medium
// 1
// let originalString = "Hello, World!";
// let reversedString = "";
// let index = originalString.length - 1;
// while (index >= 0) {
//     reversedString += originalString[index];
//     index--;
// }
// console.log(reversedString);

// 2
// Разве это не задачка на easy 13?

// 3
// let string = prompt("Write a something...");
// let index = 0;
// let chetchik = 0;
// while(index < string.length){
//     if ((string[index] == "a") || (string[index] == "e") || (string[index] == "i") || (string[index] == "o") || (string[index] == "u")){
//         chetchik += 1;
//     }
//     index++
// }
// console.log(chetchik)

// 4
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combinedArr = arr1.concat(arr2);
// console.log(combinedArr)

// 5
// let array = [1, 3, 4, 4, 5, 6, 6, 7];
// let uniqueArray = [];
// let index = 0;
// while (index < array.length) {
//     if (!uniqueArray.includes(array[index])) {
//         uniqueArray.push(array[index]);
//     }
//     index++;
// }
// console.log(uniqueArray); 


// 6
// let originalArray = [1, 2, 2, 1];
// let reversedArray = [];
// let index = originalArray.length - 1;
// while (index >= 0) {
//     reversedArray.push(originalArray[index]);
//     index--;
// }
// let isPalindrome = true;
// for (let i = 0; i < originalArray.length; i++) {
//     if (originalArray[i] !== reversedArray[i]) {
//         isPalindrome = false;
//         break;
//     }
// }
// if (isPalindrome) {
//     console.log("Массив является палиндромом");
// } else {
//     console.log("Массив не является палиндромом");
// }

// 7
// let originalString = "Alla";
// let reversedString = "";
// let index = originalString.length - 1;
// while (index >= 0) {
//     reversedString += originalString[index];
//     index--;
// }
// if (originalString.toLowerCase() == reversedString.toLowerCase()){
//     console.log("Строка является палиндромом")
// } else{
//     console.log("Строка не является палиндромом")
// }

// 8
// function countWords(sentence){
//     let words = sentence.trim().split(/\s+/);
//     let wordCount = 0;
//     let i = 0;
//     while(i < words.length){
//         if (words[i] !== ""){
//             wordCount++;
//         }
//         i++;
//     }

//     return wordCount;
// }
// let sentence = "Hello World!";
// let result = countWords(sentence);
// console.log(result);

// 9
// let number = 7;
// let number2 = 0
// while (number2 <= 13){
//     number2++
//     console.log(number * number2)
// }

// 10
// let number = Number(prompt("Введите число: "));
// let twoInPower = 2;
// let power = 1;
// while (twoInPower <= number){
//     twoInPower *= 2
//     power += 1
// }
// console.log(power -1, twoInPower / 2)


