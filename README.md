# LeetCode JavaScript 解题思路（1-100）

[LeetCode 1: Two Sum 两数相加](https://leetcode.com/problems/two-sum/) [🙈](1.two-sum.js)

> O(n)的办法是利用Map缓存, key = target - nums\[index], val = index

[LeetCode 2: Add Two Numbers 两数相加](https://leetcode.com/problems/add-two-numbers/) [🙈](2.add-two-numbers.js)

> 类似十进制的运算，从后面往前撸，大于9要进一位，麻烦的是要在链表中计算

[LeetCode 38: Count and Say](https://leetcode.com/problems/count-and-say/description/) [🙈](38.count-and-say.js)

> 难点不是题目算法，是题目的理解上，结果找了中文版才醍醐灌顶
> 其实就是用上一次的结果来计算，其中，第一个是量词/频次，第二个是值
> 1 就是1 = 1
> 2 一个1 = 11
> 3 两个1 = 21
> 4 一个2和一个1 = 1211
> 5 一个1一个2两个1 = 111221  ... 以此类推 ...
> emm,,, 递归就可以了


