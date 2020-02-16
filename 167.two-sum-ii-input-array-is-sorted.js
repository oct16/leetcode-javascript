/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         const num1 = numbers[i]
//         for (let j = i + 1; j < numbers.length; j++) {
//             const num2 = numbers[j]
//             if (num1 + num2 === target) {
//                 return [i, j].map(item => item + 1)
//             }
//             if (num1 + num2 > target) {
//                 continue
//             }
//         }
//     }

//     return null
// }
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1

    let sum
    while (((sum = numbers[i] + numbers[j]), sum !== target && i !== j)) {
        if (sum > target) {
            j--
        } else {
            i++
        }
    }
    return [i + 1, j + 1]
}
// @lc code=end
