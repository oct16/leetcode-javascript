/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// recursive backtracking solution
// var canJump = function(nums, position = 0) {
//     if (position === nums.length - 1) {
//         return true
//     }
//     const furthestJump = Math.min(nums[position], nums.length - 1 - position)
//     for (let nextPosition = 1; nextPosition <= furthestJump; nextPosition++) {
//         if (canJump(nums, nextPosition + position)) {
//             return true
//         }
//     }
//     return false
// }

// DP Top-down
// var canJump = function(nums) {
//     const Type = {
//         BAD: 'BAD',
//         GOOD: 'GOOD',
//         UNKNOWN: 'UNKNOWN'
//     }
//     var memo = new Array(nums.length).fill(Type.UNKNOWN)
//     memo[memo.length - 1] = Type.GOOD

//     function canJumpFromPosition(nums, position = 0) {
//         if (memo[position] !== Type.UNKNOWN) {
//             return memo[position] === Type.GOOD ? true : false
//         }
//         const furthestJump = Math.min(nums[position], nums.length - 1 - position)
//         for (let nextPosition = 1; nextPosition <= furthestJump; nextPosition++) {
//             if (canJumpFromPosition(nums, nextPosition + position)) {
//                 memo[nextPosition + position] = Type.GOOD
//                 return true
//             }
//         }
//         memo[position] = Type.BAD
//         return false
//     }

//     return canJumpFromPosition(nums)
// }

// DP Down-top
// var canJump = function(nums) {
//     const Type = {
//         BAD: 'BAD',
//         GOOD: 'GOOD',
//         UNKNOWN: 'UNKNOWN'
//     }
//     var memo = new Array(nums.length).fill(Type.UNKNOWN)
//     memo[memo.length - 1] = Type.GOOD
//     for (let i = nums.length - 2; i >= 0; i--) {
//         let furthestJump = Math.min(i + nums[i], nums.length - 1)
//         for (let j = i + 1; j <= furthestJump; j++) {
//             if (memo[j] === Type.GOOD) {
//                 memo[i] = Type.GOOD
//                 break
//             }
//         }
//     }
//     return memo[0] === Type.GOOD
// }

var canJump = function(nums) {
    let lastPos = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i
        }
    }
    return lastPos == 0
}

// @lc code=end
