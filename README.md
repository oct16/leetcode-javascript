# LeetCode JavaScript 解题思路（1-100）

[1: Two Sum [Easy]](https://leetcode.com/problems/two-sum/) [🙈](1.two-sum.js)

> O(n)的办法是利用Map缓存, key = target - nums\[index], val = index

[2: Add Two Numbers [Medium]](https://leetcode.com/problems/add-two-numbers/) [🙈](2.add-two-numbers.js)

> 类似十进制的运算，从后面往前撸，大于9要进一位，麻烦的是要在链表中计算

[3: Longest Substring Without Repeating Characters [Medium]](https://leetcode.com/problems/longest-substring-without-repeating-characters/) [🙈](3.longest-substring-without-repeating-characters.js)

> O(n)遍历一个字符串, 如果不重复放到temp里，比较长度


[4: Median of Two Sorted Arrays [Hard]](https://leetcode.com/problems/median-of-two-sorted-arrays/) [🙈](4.median-of-two-sorted-arrays.js)


[Longest Palindromic Substring [Medium]]


[6: ZigZag Conversion [Medium]]


[7: Reverse Integer [Easy]]


[8: String to Integer (atoi) [Medium]]


[9: Palindrome Number [Easy]]


[10: Regular Expression Matching [Hard]]


[11: Container With Most Water [Medium]]


[12: Integer to Roman [Medium]]


[13: Roman to Integer [Easy]]


[14: Longest Common Prefix [Easy]]


[15: 3Sum [Medium]]


[16: 3Sum Closest [Medium]]


[17: Letter Combinations of a Phone Number [Medium]]


[18: 4Sum [Medium]]


[19: Remove Nth Node From End of List [Medium]]


[20: Valid Parentheses [Easy]]


[21: Merge Two Sorted Lists [Easy]]


[22: Generate Parentheses [Medium]]


[23: Merge k Sorted Lists [Hard]]


[24: Swap Nodes in Pairs [Medium]]


[25: Reverse Nodes in k-Group [Hard]]


[26: Remove Duplicates from Sorted Array [Easy]]


[27: Remove Element [Easy]]


[28: Implement strStr [Easy]]


[29: Divide Two Integers [Medium]]


[30: Substring with Concatenation of All Words [Hard]]


[31: Next Permutation [Medium]]


[32: Longest Valid Parentheses [Hard]]


[33: Search in Rotated Sorted Array [Medium]]


[34: Find First and Last Position of Element in Sorted Array [Medium]]


[35: Search Insert Position [Easy]]


[36: Valid Sudoku [Medium]]


[37: Sudoku Solver [Hard]]


[38: Count and Say [Easy]](https://leetcode.com/problems/count-and-say/) [🙈](38.count-and-say.js)

> 难点不是题目算法，是题目的理解上，结果找了中文版才醍醐灌顶
> 其实就是用上一次的结果来计算，其中，第一个是量词/频次，第二个是值
> 1 就是1 = 1
> 2 一个1 = 11
> 3 两个1 = 21
> 4 一个2和一个1 = 1211
> 5 一个1一个2两个1 = 111221  ... 以此类推 ...
> emm,,, 递归就可以了

[39: Combination Sum [Medium]]


[40: Combination Sum II [Medium]]


[41: First Missing Positive [Hard]]


[42: Trapping Rain Water [Hard]]


[43: Multiply Strings [Medium]]


[44: Wildcard Matching [Hard]]


[45: Jump Game II [Hard]]


[46: Permutations [Medium]]


[47: Permutations II [Medium]]


[48: Rotate Image [Medium]]


[49: Group Anagrams [Medium]]


[50: Pow(x, n) [Medium]]


[51: N-Queens [Hard]]


[52: N-Queens II [Hard]]


[53: Maximum Subarray [Easy]]


[54: Spiral Matrix [Medium]]


[55: Jump Game [Medium]]


[56: Merge Intervals [Medium]]


[57: Insert Interval [Hard]]


[58: Length of Last Word [Easy]]


[59: Spiral Matrix II [Medium]]


[60: Permutation Sequence [Medium]]


[61: Rotate List [Medium]]


[62: Unique Paths [Medium]]


[63: Unique Paths II [Medium]]


[64: Minimum Path Sum [Medium]]


[65: Valid Number [Hard]]


[66: Plus One [Easy]]


[67: Add Binary [Easy]]


[68: Text Justification [Hard]]


[69: Sqrt(x) [Easy]]


[70: Climbing Stairs [Easy]]


[71: Simplify Path [Medium]]


[72: Edit Distance [Hard]]


[73: Set Matrix Zeroes [Medium]]


[74: Search a 2D Matrix [Medium]]


[75: Sort Colors [Medium]]


[76: Minimum Window Substring [Hard]]


[77: Combinations [Medium]]


[78: Subsets [Medium]]


[79: Word Search [Medium]]


[80: Remove Duplicates from Sorted Array II [Medium]]


[81: Search in Rotated Sorted Array II [Medium]]


[82: Remove Duplicates from Sorted List II [Medium]]


[83: Remove Duplicates from Sorted List [Easy]]


[84: Largest Rectangle in Histogram [Hard]]


[85: Maximal Rectangle [Hard]]


[86: Partition List [Medium]]


[87: Scramble String [Hard]]


[88: Merge Sorted Array [Easy]]


[89: Gray Code [Medium]]


[90: Subsets II [Medium]]


[91: Decode Ways [Medium]]


[92: Reverse Linked List II [Medium]]


[93: Restore IP Addresses [Medium]]


[94: Binary Tree Inorder Traversal [Medium]]


[95: Unique Binary Search Trees II [Medium]]


[96: Unique Binary Search Trees [Medium]]


[97: Interleaving String [Hard]]


[98: Validate Binary Search Tree [Medium]]


[99: Recover Binary Search Tree [Hard]]


[100: Same Tree [Easy]]


