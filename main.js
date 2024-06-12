//Challenge 1
function alwaysHungry(arr) {
    let isHungry = true;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            isHungry = false;
        }
    }
    if (isHungry) {
        console.log("I'm hungy");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//Challenge 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Challenge 3
function betterThanAverage(arr) {
    var sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    var count = 0;
    for (let i=0; i<arr.length; i++) {
        if (avg < arr[i]) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Challenge 4
function reverse(arr) {
    let reversedArr = [];
    for (i=arr.length-1; i>=0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//Challenge 5
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (i=0; i<n-2; i++) {
        var nextNum = fibArr[i] + fibArr[i+1];
        fibArr.push(nextNum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);