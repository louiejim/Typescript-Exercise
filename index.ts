console.log("NUMBER 2");

function isvalid(isnb: string): boolean {
  isnb = isnb.replace(/\s/, "").toUpperCase(); //Checking via Regex
  //Remove any spaces then upperCase

  //check if exactly 10
  if (isnb.length !== 10) {
    return false;
  }
  // check first 9 characters are digits
  let pattern = /\d/; // regex checking if digit
  for (let i = 0; i < 9; i++) {
    if (!isnb[i].match(pattern)) {
      return false;
    }
  }
  // Check if the last character is a digit or 'X'
  let pattern2 = /\d|X/;
  if (!isnb[9].match(pattern2)) {
    return false;
  }
  // Calculate the checksum
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(isnb[i]) * (i + 1);
  }
  sum += isnb[9] === "X" ? 10 * 10 : parseInt(isnb[9]) * 10;
  // Check if the sum is divisible by 11
  return sum % 11 === 0;
}

console.log("1112223339 -> " + isvalid("1112223339"));
console.log("111222333 ->  " + isvalid("111222333"));
console.log("1112223339X-> " + isvalid("1112223339X"));
console.log("1234554321->  " + isvalid("1234554321"));
console.log("1234512345-> " + isvalid("1234512345"));
console.log("048665088X-> " + isvalid("048665088X"));
console.log("X123456788-> " + isvalid("X123456788"));

console.log("NUMBER 3");

function transform(input: String): String {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const vowels = "aeiou";
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let lowerChar = char.toLowerCase();

    if (alphabet.includes(lowerChar)) {
      let index = alphabet.indexOf(lowerChar);
      let nextIndex = (index + 1) % alphabet.length;
      let newChar = alphabet[nextIndex];

      if (vowels.includes(newChar)) {
        result += newChar.toUpperCase();
      } else {
        result += newChar;
      }
    } else {
      result += char;
    }
  }

  return result;
}

console.log(transform("Cat30"));

console.log("NUMBER 4");

function move(arr: number[]) {
  let nonZeroIndex = 0;

  // Move non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeroes
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}
let array = [0, 1, 0, 3, 12];
console.log(move(array));
