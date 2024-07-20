// 1.
function swapElements(arr = [], k) {
  arr.push(...arr.splice(k, 1, arr.pop()))
  return arr
}
// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]

// 2.
function repeatElements(arr = [], n) {
  let new_arr = []
  arr.forEach(item => {
    for (let i = 0; i < n; i++) {
      new_arr.push(item)
    }
  })
  return new_arr
}
// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]

// 3.
function sumEvenIndexedElements(arr = []) {
  let result = arr.reduce((a, b, i) => i % 2 == 0 ? a + b : a, 0)
  return result
}
// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)


// 4.
function uniqueElements(arr = []) {
  let new_arr = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
  return new_arr
}
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]


// 5.
function reverseStringsInArray(arr = ['a']) {
  let new_arr = arr.map(item => item.split("").reverse().join(""))
  return new_arr
}
// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']

// 5.
function rotateArrayLeft(arr=[], n) {
  for (let i = 0; i < n; i++){
    arr.unshift(arr.pop())
  }
  return arr
}
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]