/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return []
    }
    let getCodes = function(digit) {
        const codeA = 'a'.charCodeAt()
        const gap = (digit - 2) * 3

        let codes = new Array(3).fill('').map((_, i) => codeA + gap + i)
        if (digit === 7) {
            codes.push(codes[codes.length - 1] + 1)
            return codes
        }
        if (digit === 8) {
            return codes.map(code => code + 1)
        }
        if (digit === 9) {
            codes = codes.map(code => code + 1)
            codes.push(codes[codes.length - 1] + 1)
            return codes
        }
        return codes
    }

    const order = digits
        .toString()
        .split('')
        .map(codeStr => {
            return getCodes(+codeStr)
        })

    function combinationArray(arr) {
        let results = []
        let result = []

        function group(arr, i) {
            for (let j = 0; j < arr[i].length; j++) {
                result[i] = arr[i][j]
                if (i === arr.length - 1) {
                    results.push(result.map(str => String.fromCharCode(str)).join(''))
                } else {
                    group(arr, i + 1)
                }
            }
        }
        group(arr, 0)
        return results
    }

    return combinationArray(order)
}

// @lc code=end
