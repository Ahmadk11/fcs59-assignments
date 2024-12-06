// 1.Pyramid of numbers
function printPyramid(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j;
      }
      let spaces = " ".repeat(x - i);
      console.log(spaces + row);
    }
  }
  function main() {

    let x = parseInt(prompt("Enter a number: "), 10);
    printPyramid(x);
  }
  main();
  ////////////////////////////////////////////////////

  // 2.Divisable by 3 and 5

  function findDivisibleNumbers(x) {
    for (let i = 1; i <= x; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
      }
    }
  }
  function main() {
    let x = parseInt(prompt("Enter a number: "), 10)
    findDivisibleNumbers(x);
  }
  main();
  /////////////////////////////////////////////////////

  // 3.Diamond

  function generateDiamond(rows) {
    for (let i = 1; i <= rows; i++) {
      let spaces = ' '.repeat(rows - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
    for (let i = rows - 1; i >= 1; i--) {
      let spaces = ' '.repeat(rows - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  function main() {
    let rows = parseInt(prompt("Enter the number of rows for the diamond pattern: "), 10);
    generateDiamond(rows);
  }
  main();
  ////////////////////////////////////////////////////////////

  // 4.Sum of odd numbers

  function calculateOddSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  function main() {
    let n = parseInt(prompt("Enter a number: "), 10);
    let sum = calculateOddSum(n);
    console.log(`The sum of all odd numbers up to ${n} is: ${sum}`);
  }
  main();
  /////////////////////////////////////////////////////////////

  // 5.Fibonacci

  function generateFibonacci(n) {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
  }
  function main() {
    let n = parseInt(prompt("Enter a number: "), 10);
    let fibonacciNumbers = generateFibonacci(n);
    console.log(`The first ${n} Fibonacci numbers are:`);
    console.log(fibonacciNumbers.join(", "));
  }
  main();
  //////////////////////////////////////////////////////////////

  // 6.Special rearrangement
  function special_rearrangement(nums) {
    let evens = [];
    let odds = [];
  
    for (let num of nums) {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
    }
    return [...evens, ...odds];
  }
  let nums = [5, 3, 2, 8, 1, 4, 7];
  console.log(special_rearrangement(nums)); 
  ////////////////////////////////////////////////////////////

  // 7.Peaks in array

  function find_peaks(array) {
    let peaks = [];
    if (array.length < 3) {
      return peaks;
    }
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        peaks.push(i);
      }
    }
    return peaks;
  }
  
  let array = [1, 3, 2, 4, 1, 5, 6, 4, 2, 3];
  console.log(find_peaks(array));
  //////////////////////////////////////////////////////////////

  // 8.Move zeros

  function move_zeros(numbers) {
    let lastNonZeroIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== 0) {
        numbers[lastNonZeroIndex] = numbers[i];
        if (i !== lastNonZeroIndex) {
          numbers[i] = 0;
        }
        lastNonZeroIndex++;
      }
    }
    return numbers;
  }
  
  let arr1 = [0, 1, 0, 3, 12];
  console.log(move_zeros(arr1));
  //////////////////////////////////////////////////////////////

  // 9.Missing positive

  function first_missing_positive(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        let temp = nums[i];
        nums[i] = nums[nums[i] - 1];
        nums[temp - 1] = temp;
      }
    }
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
    return n + 1;
  }
  
  console.log(first_missing_positive([3, 4, -1, 1]));
  /////////////////////////////////////////////////////////////////////////

  // 10.Rebuild sentences

  function rebuild_sentence(words, lengths) {

    let wordWithLength = words.map((word, index) => ({
      word: word,
      length: lengths[index]
    }));

    wordWithLength.sort((a, b) => a.length - b.length);
    let sentence = wordWithLength.map(item => item.word).join(' ');
    
    return sentence;
  }
  
  let words = ["is", "This", "sentence", "a"];
  let lengths = [2, 4, 8, 1];
  
  console.log(rebuild_sentence(words, lengths));
  ///////////////////////////////////////////////////////////////////////////

  //END

  
  
  
  
  
  