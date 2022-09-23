//membuat funtion untuk mengurangi data secara berurutan
const decrementZero = (number) => {
  console.log("\n1. Result From Decrement:\n");
  for (let i = number; i >= 0; i--) {
    let tmp = "";
    for (let j = i; j >= 0; j--) {
      if (j === i) {
        tmp += j;
      } else {
        tmp += "-" + j;
      }
    }
    console.log(tmp);
  }
};
// decrementZero(10);

//Mebuat function digunakan untuk membuat segitiga setinggi n
const makeTriaglestar = (number) => {
  if (number % 2 === 1) {
    console.log("Result from Trianggle:\n");
    for (let i = 1; i <= number; i++) {
      let tmp = "";
      for (let j = i; j <= number + 2; j++) {
        if (j === number) {
          for (let k = j; k <= j + i + i - 2; k++) {
            tmp += "*";
          }
        } else {
          tmp += " ";
        }
      }
      console.log(tmp);
    }
  } else {
    console.log("Number must be odd");
  }
};
// makeTriaglestar(5);

//Membuat fizz buzz, jika angka dapat dibagi dengan 3 = fizz, dibagi 5 = buzz, dan 3 dan 5 = fizz buzz
const fizzBuzz = (n) => {
  console.log("\n3. Resul of Fizz Buzz:\n");
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log((i += " "));
    }
  }
};
// fizzBuzz(100);

//Studi case dari https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm

//Membuat reverse array atau string
const str = "Hallo Dunia";
const arr = str.split("");
let start = 0;
let end = arr.length - 1;
const reverseArray = (arr, start, end) => {
  if (start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    reverseArray(arr, start + 1, end - 1);
  }
  return arr;
};
// const covert = reverseArray(arr, start, end).join("");
// console.log(covert);

//Membuat penjumlahan dari digit angka seperti 123=5
let n = 123;
const sumDigit = (n) => {
  let sum = 0;
  while (n != 0) {
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }
  return sum;
};
// console.log(sumDigit(n));

//Membuat plindrome yang mana reverse string tetap dibaca sama seperti kodok reverse kodok
const example = "kkok";
const array_example = example.split("");

const palindrome = (word, start, end) => {
  if (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    } else {
      return palindrome(word, (start += 1), (end -= 1));
    }
  } else {
    return true;
  }
};

// console.log(palindrome(array_example, 0, array_example.length - 1));

//Menabahkan semua angka dalam array seperti contoh berikut. [1,2,3,5]=11
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
// console.log(sumArray([1, 2, 3, 5]));

//Menjumlah array prefix 2 dinemnsi seperti [[10,20,30],[5,10,20],[2,4,6]] menghasilkan [[10,20,60],[15,45,95],[17,51,107]]
array_number = [
  [10, 20, 30],
  [5, 10, 20],
  [2, 4, 6],
];

const prfixsumArray2d = (array) => {
  let i, j;
  for (j = 0; j < array.length; j++) {
    for (i = 1; i < 3; i++) {
      array[i][j] += array[i - 1][j];
    }
  }
  for (i = 0; i < array.length; i++) {
    for (j = 1; j < 3; j++) {
      array[i][j] += array[i][j - 1];
    }
  }
  return array;
};
// console.log(prfixsumArray2d(array_number));

//Membuat faktorial
const faktorialRekrusif = (n) => {
  if (n <= 0) {
    return 1;
  } else {
    return n * faktorialRekrusif(n - 1);
  }
};
let m = 4;
// console.log(faktorialRekrusif(m));
// Membuat faktorial dengan tail rekrusift
const faktorialTailrekrusif = (total, n) => {
  if (n <= 0) {
    return total;
  } else {
    return faktorialTailrekrusif(total * n, n - 1);
  }
};
//

// const data = ["[", "(", ")", "]"];

// const cekBraklet = (n, start, end) => {
//   const braklet = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };

//   if (start <= end) {
//     if (braklet[n[start]] !== n[end]) {
//       return "tidak valid";
//     }
//     cekBraklet(n, (start += 1), (end -= 1));
//   }
// };
// console.log(cekBraklet(data, 0, data.length - 1));
