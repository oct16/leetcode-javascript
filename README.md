# LeetCode JavaScript 解题思路（1-1312）

[1: Two Sum 🍀[Easy]](https://leetcode.com/problems/two-sum/) [🙈](1.two-sum.js)

> 利用Map缓存, key = target - nums\[index], val = index

[2: Add Two Numbers 🎃[Medium]](https://leetcode.com/problems/add-two-numbers/) [🙈](2.add-two-numbers.js)

> 类似十进制的运算, 从后面往前撸, 大于9要进一位, 麻烦的是要在链表中计算

[3: Longest Substring Without Repeating Characters 🎃[Medium]](https://leetcode.com/problems/longest-substring-without-repeating-characters/) [🙈](3.longest-substring-without-repeating-characters.js)

> 遍历一个字符串, 如果不重复放到temp里, 比较长度

[4: Median of Two Sorted Arrays 🍉[Hard]](https://leetcode.com/problems/median-of-two-sorted-arrays/) [🙈](4.median-of-two-sorted-arrays.js)


[5: Longest Palindromic Substring 🎃[Medium]](https://leetcode.com/problems/longest-palindromic-substring/) ] [🙈](5.longest-palindromic-substring.js)

> 设定left, right两个index, 当s[left] === s[right], 则是回文, 向外侧递增, 当 right - left > s.length - index 循环可以退出
> 另外pivot有两种情况, 如果s长度是偶数就没有pivot

[6: ZigZag Conversion 🎃[Medium]](https://leetcode.com/problems/zigzag-conversion/) [🙈](6.zig-zag-conversion.js) 

ZigZag有如下规律, 当n=3的时候Y坐标为[0,1,2,1], 当n=4的时候Y坐标为[0,1,2,3,2,1], 按照这个规律像俄罗斯方块一样累加再拼接即可
```
A      (A)  新的循环...
B   F  (B)     (F)
C E    (C) (E)
D      (D)
```

[7: Reverse Integer 🍀[Easy]](https://leetcode.com/problems/reverse-integer/) [🙈](7.reverse-integer.js)

> 处理一下正负号的情况再反转就好了

[8: String to Integer (atoi) 🎃[Medium]](https://leetcode.com/problems/string-to-integer-atoi/) [🙈](8.string-to-integer-atoi.js)

> 用parseInt方法处理, 数字范围在INT_MAX在 [2 ** 32 -1, -(2 ** 32)] 之间

[9: Palindrome Number 🍀[Easy]](https://leetcode.com/problems/palindrome-number/) [🙈](9.palindrome-number.js)

> 简易的办法是转成数组后reverse, 如果等于本身就是回文, 另一个办法是遍历从两边(0, length - 1)向内开始遍历, 参考[longest-palindromic-substring](5.longest-palindromic-substring.js)

[10: Regular Expression Matching 🍉[Hard]]


[11: Container With Most Water 🎃[Medium]](https://leetcode.com/problems/container-with-most-water/) [🙈](11.container-with-most-water.js) 

> 类型求最大面积, x坐标=索引距离, y坐标=两根柱子最小值, 从两边向内收缩即可

[12: Integer to Roman 🎃[Medium]](https://leetcode.com/problems/integer-to-roman/) [🙈](12.integer-to-roman.js)

> 主要处理1459四个特殊数字，持续累加，参考[代码](12.integer-to-roman.js)

[13: Roman to Integer 🍀[Easy]](https://leetcode.com/problems/roman-to-integer/) [🙈](13.roman-to-integer.js) 

> 从右到左遍历, 如果一下个目标比当前值大就累加, 否则减去该值

[14: Longest Common Prefix 🍀[Easy]](https://leetcode.com/problems/longest-common-prefix/) [🙈](14.longest-common-prefix.js)  

> 子数组按顺序相互对比就可以了

[15: 3Sum 🎃[Medium]](https://leetcode.com/problems/3sum/) [🙈](15.3-sum.js)

> 首先进行排序, 三个游标j = 0; k = j + 1; l = length -1, 其中jl向内走, 如果重叠了进位, 把三个数相加与target对比

[16: 3Sum Closest 🎃[Medium]](https://leetcode.com/problems/3sum-closest/) [🙈](16.3-sum-closest.js)

> 核心思想和上题基本一致, 用Math.abs(sum - target)计算距离, 存closest的值

[17: Letter Combinations of a Phone Number 🎃[Medium]](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) [🙈](17.letter-combinations-of-a-phone-number.js)

> 先求出数字到字母数组的映射关系, 然后返回多数组的排列组合即可

[18: 4Sum 🎃[Medium]](https://leetcode.com/problems/4sum/) [🙈](18.4-sum.js)

> 比[3Sum](https://leetcode.com/problems/3sum/)再多一层遍历


[19: Remove Nth Node From End of List 🎃[Medium]](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) [answer](19.remove-nth-node-from-end-of-list.js)

> 保存一个referenceArray的引用, 遍历完成后找到目标，通过prev.next = prev.next.next即可删除

[20: Valid Parentheses 🍀[Easy]](https://leetcode.com/problems/valid-parentheses/) [🙈](20.valid-parentheses.js)

> {[()]}是对称性的, 所以两两之后等于5, 声明一个数组, 遍历时如果和为5就pop, 否则push

[21: Merge Two Sorted Lists 🍀[Easy]](https://leetcode.com/problems/merge-two-sorted-lists/) [🙈](21.merge-two-sorted-lists.js)

> 先拆开转成两个数组, 再sort后拼装就可以了

[22: Generate Parentheses 🎃[Medium]](https://leetcode.com/problems/generate-parentheses/) [answer](22.generate-parentheses.js)

> 直接的思路是全排序去重，其中左'(' 与 右')' 是固定的，可以减少一部分复杂度，[更简单的方法](22.generate-parentheses.js) 是不断的拼接递归，直到左右计数器剩余为0退出，由于必须是‘)’结尾，需要设条件right > left

[23: Merge k Sorted Lists 🍉[Hard]]

[24: Swap Nodes in Pairs 🎃[Medium]]


[25: Reverse Nodes in k-Group 🍉[Hard]]


[26: Remove Duplicates from Sorted Array 🍀[Easy]](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)  [🙈](26.remove-duplicates-from-sorted-array.js)

> 遍历时用当前值和前一个值对比, 如果不相等, 用当前值替换掉前一个值, ++计数器, 结果等于nums.length - 计数器

[27: Remove Element 🍀[Easy]](https://leetcode.com/problems/remove-element/) [🙈](27.remove-element.js)

> 类似dom操作removeChild方法, 对数组操作用splice(i, 1)删除即可

[28: Implement strStr 🍀[Easy]](https://leetcode.com/problems/implement-strstr/) [🙈](28.implement-str-str.js)

> 返回indexOf

[29: Divide Two Integers 🎃[Medium]](https://leetcode.com/problems/divide-two-integers/) [🙈](29.divide-two-integers.js)

> 不能用乘除摩来实现除的方法, 所以用二分查找和 >> << 位运算实现

[30: Substring with Concatenation of All Words 🍉[Hard]]


[31: Next Permutation 🎃[Medium]]


[32: Longest Valid Parentheses 🍉[Hard]]


[33: Search in Rotated Sorted Array 🎃[Medium]]


[34: Find First and Last Position of Element in Sorted Array 🎃[Medium]]


[35: Search Insert Position 🍀[Easy]](https://leetcode.com/problems/search-insert-position/) [🙈](35.search-insert-position.js) 

> 用二分查找找到目标, low <= target <= high

[36: Valid Sudoku 🎃[Medium]]


[37: Sudoku Solver 🍉[Hard]]


[38: Count and Say 🍀[Easy]](https://leetcode.com/problems/count-and-say/) [🙈](38.count-and-say.js)

> 难点不是题目算法, 是题目的理解上, 结果找了中文版才醍醐灌顶
> 其实就是用上一次的结果来计算, 其中, 第一个是量词/频次, 第二个是值
> 1 就是1 = 1
> 2 一个1 = 11
> 3 两个1 = 21
> 4 一个2和一个1 = 1211
> 5 一个1一个2两个1 = 111221  ... 以此类推 ...
> emm,,, 递归就可以了

[39: Combination Sum 🎃[Medium]]


[40: Combination Sum II 🎃[Medium]]


[41: First Missing Positive 🍉[Hard]]


[42: Trapping Rain Water 🍉[Hard]]


[43: Multiply Strings 🎃[Medium]]


[44: Wildcard Matching 🍉[Hard]]


[45: Jump Game II 🍉[Hard]]


[46: Permutations 🎃[Medium]]


[47: Permutations II 🎃[Medium]]


[48: Rotate Image 🎃[Medium]]


[49: Group Anagrams 🎃[Medium]]


[50: Pow(x, n) 🎃[Medium]]


[51: N-Queens 🍉[Hard]]


[52: N-Queens II 🍉[Hard]]


[53: Maximum Subarray 🍀[Easy]](https://leetcode.com/problems/maximum-subarray/) [🙈](53.maximum-subarray.js)

> 遍历比较i和i-1的大小, 用最大值替换i, 记录最大的max值

[54: Spiral Matrix 🎃[Medium]]


[55: Jump Game 🎃[Medium]]


[56: Merge Intervals 🎃[Medium]]


[57: Insert Interval 🍉[Hard]]


[58: Length of Last Word 🍀[Easy]](https://leetcode.com/problems/length-of-last-word/) [🙈](58.length-of-last-word.js)

> 用正则效率太低, 另一个办法是逆序遍历, 当不为空的时候累加长度, 再遇到空格退出

[59: Spiral Matrix II 🎃[Medium]]


[60: Permutation Sequence 🎃[Medium]]


[61: Rotate List 🎃[Medium]]


[62: Unique Paths 🎃[Medium]]


[63: Unique Paths II 🎃[Medium]]


[64: Minimum Path Sum 🎃[Medium]]


[65: Valid Number 🍉[Hard]]


[66: Plus One 🍀[Easy]](https://leetcode.com/problems/plus-one/) [🙈](66.plus-one.js) 

> 逆序遍历, 如果+1大于9则要进位

[67: Add Binary 🍀[Easy]](https://leetcode.com/problems/add-binary/) [🙈](67.add-binary.js) 

> 和上题类似, 只不过是二进制

[68: Text Justification 🍉[Hard]]


[69: Sqrt(x) 🍀[Easy]](https://leetcode.com/problems/sqrtx/) [🙈](69.sqrt-x.js)

> 也是一个二分查找, 范围是 [0, Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER))]之间,  退出条件是 high - low <= 1, 所以floor的low + high的中间值为结果

[70: Climbing Stairs 🍀[Easy]](https://leetcode.com/problems/climbing-stairs/) [🙈](70.climbing-stairs.js)

> 很经典的上台阶问题, 网上的讨论已经非常多了, 本质是一个斐波拉契数列的经典实例, 后值等于当前值加前一个值的和"n = (n-1）(n-2)", 由于递归的时候会重复计算, 所以加上缓存可以解决性能问题

[71: Simplify Path 🎃[Medium]]


[72: Edit Distance 🍉[Hard]]


[73: Set Matrix Zeroes 🎃[Medium]]


[74: Search a 2D Matrix 🎃[Medium]]


[75: Sort Colors 🎃[Medium]]


[76: Minimum Window Substring 🍉[Hard]]


[77: Combinations 🎃[Medium]]


[78: Subsets 🎃[Medium]]


[79: Word Search 🎃[Medium]]


[80: Remove Duplicates from Sorted Array II 🎃[Medium]]


[81: Search in Rotated Sorted Array II 🎃[Medium]]


[82: Remove Duplicates from Sorted List II 🎃[Medium]]


[83: Remove Duplicates from Sorted List 🍀[Easy]](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) [🙈](83.remove-duplicates-from-sorted-list.js)

> 遍历list，用当前和下一个对比，如果相同则跳过即可

[84: Largest Rectangle in Histogram 🍉[Hard]]


[85: Maximal Rectangle 🍉[Hard]]


[86: Partition List 🎃[Medium]]


[87: Scramble String 🍉[Hard]]


[88: Merge Sorted Array 🍀[Easy]](https://leetcode.com/problems/merge-sorted-array/) [🙈](88.merge-sorted-array.js)

> 逆序遍历nums1, 由于后面有占位符长度===nums2，而且连个数组都是排序过的，可以直接两边对比最大值，填充最大的在nums1的index上

[89: Gray Code 🎃[Medium]]


[90: Subsets II 🎃[Medium]]


[91: Decode Ways 🎃[Medium]]


[92: Reverse Linked List II 🎃[Medium]]


[93: Restore IP Addresses 🎃[Medium]]


[94: Binary Tree Inorder Traversal 🎃[Medium]]


[95: Unique Binary Search Trees II 🎃[Medium]]


[96: Unique Binary Search Trees 🎃[Medium]]


[97: Interleaving String 🍉[Hard]]


[98: Validate Binary Search Tree 🎃[Medium]]


[99: Recover Binary Search Tree 🍉[Hard]]


[100: Same Tree 🍀[Easy]](https://leetcode.com/problems/same-tree/) [🙈](100.same-tree.js)

> 递归遍历树，对比左右节点即可

[101: Symmetric Tree 🍀[Easy]]

[102: Binary Tree Level Order Traversal 🎃[Medium]]

[103: Binary Tree Zigzag Level Order Traversal 🎃[Medium]]

[104: Maximum Depth of Binary Tree 🍀[Easy]]

[105: Construct Binary Tree from Preorder and Inorder Traversal 🎃[Medium]]

[106: Construct Binary Tree from Inorder and Postorder Traversal 🎃[Medium]]

[107: Binary Tree Level Order Traversal II 🍀[Easy]]

[108: Convert Sorted Array to Binary Search Tree 🍀[Easy]]

[109: Convert Sorted List to Binary Search Tree 🎃[Medium]]

[110: Balanced Binary Tree 🍀[Easy]]

[111: Minimum Depth of Binary Tree 🍀[Easy]]

[112: Path Sum 🍀[Easy]]

[113: Path Sum II 🎃[Medium]]

[114: Flatten Binary Tree to Linked List 🎃[Medium]]

[115: Distinct Subsequences 🍉[Hard]]

[116: Populating Next Right Pointers in Each Node 🎃[Medium]]

[117: Populating Next Right Pointers in Each Node II 🎃[Medium]]

[118: Pascal's Triangle 🍀[Easy]]

[119: Pascal's Triangle II 🍀[Easy]]

[120: Triangle 🎃[Medium]]

[121: Best Time to Buy and Sell Stock 🍀[Easy]]

[122: Best Time to Buy and Sell Stock II 🍀[Easy]]

[123: Best Time to Buy and Sell Stock III 🍉[Hard]]

[124: Binary Tree Maximum Path Sum 🍉[Hard]]

[125: Valid Palindrome 🍀[Easy]]

[126: Word Ladder II 🍉[Hard]]

[127: Word Ladder 🎃[Medium]]

[128: Longest Consecutive Sequence 🍉[Hard]]

[129: Sum Root to Leaf Numbers 🎃[Medium]]

[130: Surrounded Regions 🎃[Medium]]

[131: Palindrome Partitioning 🎃[Medium]]

[132: Palindrome Partitioning II 🍉[Hard]]

[133: Clone Graph 🎃[Medium]]

[134: Gas Station 🎃[Medium]]

[135: Candy 🍉[Hard]]

[136: Single Number 🍀[Easy]]

[137: Single Number II 🎃[Medium]]

[138: Copy List with Random Pointer 🎃[Medium]]

[139: Word Break 🎃[Medium]]

[140: Word Break II 🍉[Hard]]

[141: Linked List Cycle 🍀[Easy]]

[142: Linked List Cycle II 🎃[Medium]]

[143: Reorder List 🎃[Medium]]

[144: Binary Tree Preorder Traversal 🎃[Medium]]

[145: Binary Tree Postorder Traversal 🍉[Hard]]

[146: LRU Cache 🎃[Medium]]

[147: Insertion Sort List 🎃[Medium]]

[148: Sort List 🎃[Medium]]

[149: Max Points on a Line 🍉[Hard]]

[150: Evaluate Reverse Polish Notation 🎃[Medium]]

[151: Reverse Words in a String 🎃[Medium]]

[152: Maximum Product Subarray 🎃[Medium]]

[153: Find Minimum in Rotated Sorted Array 🎃[Medium]]

[154: Find Minimum in Rotated Sorted Array II 🍉[Hard]]

[155: Min Stack 🍀[Easy]]

[156: Binary Tree Upside Down 🎃[Medium]]

[157: Read N Characters Given Read4 🍀[Easy]]

[158: Read N Characters Given Read4 II - Call multiple times 🍉[Hard]]

[159: Longest Substring with At Most Two Distinct Characters 🎃[Medium]]

[160: Intersection of Two Linked Lists 🍀[Easy]]

[161: One Edit Distance 🎃[Medium]]

[162: Find Peak Element 🎃[Medium]]

[163: Missing Ranges 🎃[Medium]]

[164: Maximum Gap 🍉[Hard]]

[165: Compare Version Numbers 🎃[Medium]]

[166: Fraction to Recurring Decimal 🎃[Medium]]

[167: Two Sum II - Input array is sorted 🍀[Easy]]

[168: Excel Sheet Column Title 🍀[Easy]]

[169: Majority Element 🍀[Easy]]

[170: Two Sum III - Data structure design 🍀[Easy]]

[171: Excel Sheet Column Number 🍀[Easy]]

[172: Factorial Trailing Zeroes 🍀[Easy]]

[173: Binary Search Tree Iterator 🎃[Medium]]

[174: Dungeon Game 🍉[Hard]]

[175: Combine Two Tables 🍀[Easy]]

[176: Second Highest Salary 🍀[Easy]]

[177: Nth Highest Salary 🎃[Medium]]

[178: Rank Scores 🎃[Medium]]

[179: Largest Number 🎃[Medium]]

[180: Consecutive Numbers 🎃[Medium]]

[181: Employees Earning More Than Their Managers 🍀[Easy]]

[182: Duplicate Emails 🍀[Easy]]

[183: Customers Who Never Order 🍀[Easy]]

[184: Department Highest Salary 🎃[Medium]]

[185: Department Top Three Salaries 🍉[Hard]]

[186: Reverse Words in a String II 🎃[Medium]]

[187: Repeated DNA Sequences 🎃[Medium]]

[188: Best Time to Buy and Sell Stock IV 🍉[Hard]]

[189: Rotate Array 🍀[Easy]]

[190: Reverse Bits 🍀[Easy]]

[191: Number of 1 Bits 🍀[Easy]]

[192: Word Frequency 🎃[Medium]]

[193: Valid Phone Numbers 🍀[Easy]]

[194: Transpose File 🎃[Medium]]

[195: Tenth Line 🍀[Easy]]

[196: Delete Duplicate Emails 🍀[Easy]]

[197: Rising Temperature 🍀[Easy]]

[198: House Robber 🍀[Easy]]

[199: Binary Tree Right Side View 🎃[Medium]]

[200: Number of Islands 🎃[Medium]]

[201: Bitwise AND of Numbers Range 🎃[Medium]]

[202: Happy Number 🍀[Easy]]

[203: Remove Linked List Elements 🍀[Easy]]

[204: Count Primes 🍀[Easy]]

[205: Isomorphic Strings 🍀[Easy]]

[206: Reverse Linked List 🍀[Easy]]

[207: Course Schedule 🎃[Medium]]

[208: Implement Trie (Prefix Tree) 🎃[Medium]]

[209: Minimum Size Subarray Sum 🎃[Medium]]

[210: Course Schedule II 🎃[Medium]]

[211: Add and Search Word - Data structure design 🎃[Medium]]

[212: Word Search II 🍉[Hard]]

[213: House Robber II 🎃[Medium]]

[214: Shortest Palindrome 🍉[Hard]]

[215: Kth Largest Element in an Array 🎃[Medium]]

[216: Combination Sum III 🎃[Medium]]

[217: Contains Duplicate 🍀[Easy]]

[218: The Skyline Problem 🍉[Hard]]

[219: Contains Duplicate II 🍀[Easy]]

[220: Contains Duplicate III 🎃[Medium]]

[221: Maximal Square 🎃[Medium]]

[222: Count Complete Tree Nodes 🎃[Medium]]

[223: Rectangle Area 🎃[Medium]]

[224: Basic Calculator 🍉[Hard]]

[225: Implement Stack using Queues 🍀[Easy]]

[226: Invert Binary Tree 🍀[Easy]]

[227: Basic Calculator II 🎃[Medium]]

[228: Summary Ranges 🎃[Medium]]

[229: Majority Element II 🎃[Medium]]

[230: Kth Smallest Element in a BST 🎃[Medium]]

[231: Power of Two 🍀[Easy]]

[232: Implement Queue using Stacks 🍀[Easy]]

[233: Number of Digit One 🍉[Hard]]

[234: Palindrome Linked List 🍀[Easy]]

[235: Lowest Common Ancestor of a Binary Search Tree 🍀[Easy]]

[236: Lowest Common Ancestor of a Binary Tree 🎃[Medium]]

[237: Delete Node in a Linked List 🍀[Easy]]

[238: Product of Array Except Self 🎃[Medium]]

[239: Sliding Window Maximum 🍉[Hard]]

[240: Search a 2D Matrix II 🎃[Medium]]

[241: Different Ways to Add Parentheses 🎃[Medium]]

[242: Valid Anagram 🍀[Easy]]

[243: Shortest Word Distance 🍀[Easy]]

[244: Shortest Word Distance II 🎃[Medium]]

[245: Shortest Word Distance III 🎃[Medium]]

[246: Strobogrammatic Number 🍀[Easy]]

[247: Strobogrammatic Number II 🎃[Medium]]

[248: Strobogrammatic Number III 🍉[Hard]]

[249: Group Shifted Strings 🎃[Medium]]

[250: Count Univalue Subtrees 🎃[Medium]]

[251: Flatten 2D Vector 🎃[Medium]]

[252: Meeting Rooms 🍀[Easy]]

[253: Meeting Rooms II 🎃[Medium]]

[254: Factor Combinations 🎃[Medium]]

[255: Verify Preorder Sequence in Binary Search Tree 🎃[Medium]]

[256: Paint House 🍀[Easy]]

[257: Binary Tree Paths 🍀[Easy]]

[258: Add Digits 🍀[Easy]]

[259: 3Sum Smaller 🎃[Medium]]

[260: Single Number III 🎃[Medium]]

[261: Graph Valid Tree 🎃[Medium]]

[262: Trips and Users 🍉[Hard]]

[263: Ugly Number 🍀[Easy]]

[264: Ugly Number II 🎃[Medium]]

[265: Paint House II 🍉[Hard]]

[266: Palindrome Permutation 🍀[Easy]]

[267: Palindrome Permutation II 🎃[Medium]]

[268: Missing Number 🍀[Easy]]

[269: Alien Dictionary 🍉[Hard]]

[270: Closest Binary Search Tree Value 🍀[Easy]]

[271: Encode and Decode Strings 🎃[Medium]]

[272: Closest Binary Search Tree Value II 🍉[Hard]]

[273: Integer to English Words 🍉[Hard]]

[274: H-Index 🎃[Medium]]

[275: H-Index II 🎃[Medium]]

[276: Paint Fence 🍀[Easy]]

[277: Find the Celebrity 🎃[Medium]]

[278: First Bad Version 🍀[Easy]]

[279: Perfect Squares 🎃[Medium]]

[280: Wiggle Sort 🎃[Medium]]

[281: Zigzag Iterator 🎃[Medium]]

[282: Expression Add Operators 🍉[Hard]]

[283: Move Zeroes 🍀[Easy]]

[284: Peeking Iterator 🎃[Medium]]

[285: Inorder Successor in BST 🎃[Medium]]

[286: Walls and Gates 🎃[Medium]]

[287: Find the Duplicate Number 🎃[Medium]]

[288: Unique Word Abbreviation 🎃[Medium]]

[289: Game of Life 🎃[Medium]]

[290: Word Pattern 🍀[Easy]]

[291: Word Pattern II 🍉[Hard]]

[292: Nim Game 🍀[Easy]]

[293: Flip Game 🍀[Easy]]

[294: Flip Game II 🎃[Medium]]

[295: Find Median from Data Stream 🍉[Hard]]

[296: Best Meeting Point 🍉[Hard]]

[297: Serialize and Deserialize Binary Tree 🍉[Hard]]

[298: Binary Tree Longest Consecutive Sequence 🎃[Medium]]

[299: Bulls and Cows 🍀[Easy]]

[300: Longest Increasing Subsequence 🎃[Medium]]
	
[Remo301: ve Invalid Parentheses 🍉[Hard]]

[302: Smallest Rectangle Enclosing Black Pixels 🍉[Hard]]

[303: Range Sum Query - Immutable 🍀[Easy]]

[304: Range Sum Query 2D - Immutable 🎃[Medium]]

[305: Number of Islands II 🍉[Hard]]

[306: Additive Number 🎃[Medium]]

[307: Range Sum Query - Mutable 🎃[Medium]]

[308: Range Sum Query 2D - Mutable 🍉[Hard]]

[309: Best Time to Buy and Sell Stock with Cooldown 🎃[Medium]]

[310: Minimum Height Trees 🎃[Medium]]

[311: Sparse Matrix Multiplication 🎃[Medium]]

[312: Burst Balloons 🍉[Hard]]

[313: Super Ugly Number 🎃[Medium]]

[314: Binary Tree Vertical Order Traversal 🎃[Medium]]

[315: Count of Smaller Numbers After Self 🍉[Hard]]

[316: Remove Duplicate Letters 🍉[Hard]]

[317: Shortest Distance from All Buildings 🍉[Hard]]

[318: Maximum Product of Word Lengths 🎃[Medium]]

[319: Bulb Switcher 🎃[Medium]]

[320: Generalized Abbreviation 🎃[Medium]]

[321: Create Maximum Number 🍉[Hard]]

[322: Coin Change 🎃[Medium]]

[323: Number of Connected Components in an Undirected Graph 🎃[Medium]]

[324: Wiggle Sort II 🎃[Medium]]

[325: Maximum Size Subarray Sum Equals k 🎃[Medium]]

[326: Power of Three 🍀[Easy]]

[327: Count of Range Sum 🍉[Hard]]

[328: Odd Even Linked List 🎃[Medium]]

[329: Longest Increasing Path in a Matrix 🍉[Hard]]

[330: Patching Array 🍉[Hard]]

[331: Verify Preorder Serialization of a Binary Tree 🎃[Medium]]

[332: Reconstruct Itinerary 🎃[Medium]]

[333: Largest BST Subtree 🎃[Medium]]

[334: Increasing Triplet Subsequence 🎃[Medium]]

[335: Self Crossing 🍉[Hard]]

[336: Palindrome Pairs 🍉[Hard]]

[337: House Robber III 🎃[Medium]]

[338: Counting Bits 🎃[Medium]]

[339: Nested List Weight Sum 🍀[Easy]]

[340: Longest Substring with At Most K Distinct Characters 🍉[Hard]]

[341: Flatten Nested List Iterator 🎃[Medium]]

[342: Power of Four 🍀[Easy]]

[343: Integer Break 🎃[Medium]]

[344: Reverse String 🍀[Easy]]

[345: Reverse Vowels of a String 🍀[Easy]]

[346: Moving Average from Data Stream 🍀[Easy]]

[347: Top K Frequent Elements 🎃[Medium]]

[348: Design Tic-Tac-Toe 🎃[Medium]]

[349: Intersection of Two Arrays 🍀[Easy]]

[350: Intersection of Two Arrays II 🍀[Easy]]

[351: Android Unlock Patterns 🎃[Medium]]

[352: Data Stream as Disjoint Intervals 🍉[Hard]]

[353: Design Snake Game 🎃[Medium]]

[354: Russian Doll Envelopes 🍉[Hard]]

[355: Design Twitter 🎃[Medium]]

[356: Line Reflection 🎃[Medium]]

[357: Count Numbers with Unique Digits 🎃[Medium]]

[358: Rearrange String k Distance Apart 🍉[Hard]]

[359: Logger Rate Limiter 🍀[Easy]]

[360: Sort Transformed Array 🎃[Medium]]

[361: Bomb Enemy 🎃[Medium]]

[362: Design Hit Counter 🎃[Medium]]

[363: Max Sum of Rectangle No Larger Than K 🍉[Hard]]

[364: Nested List Weight Sum II 🎃[Medium]]

[365: Water and Jug Problem 🎃[Medium]]

[366: Find Leaves of Binary Tree 🎃[Medium]]

[367: Valid Perfect Square 🍀[Easy]]

[368: Largest Divisible Subset 🎃[Medium]]

[369: Plus One Linked List 🎃[Medium]]

[370: Range Addition 🎃[Medium]]

[371: Sum of Two Integers 🍀[Easy]]

[372: Super Pow 🎃[Medium]]

[373: Find K Pairs with Smallest Sums 🎃[Medium]]

[374: Guess Number Higher or Lower 🍀[Easy]]

[375: Guess Number Higher or Lower II 🎃[Medium]]

[376: Wiggle Subsequence 🎃[Medium]]

[377: Combination Sum IV 🎃[Medium]]

[378: Kth Smallest Element in a Sorted Matrix 🎃[Medium]]

[379: Design Phone Directory 🎃[Medium]]

[380: Insert Delete GetRandom O(1) 🎃[Medium]]

[381: Insert Delete GetRandom O(1) - Duplicates allowed 🍉[Hard]]

[382: Linked List Random Node 🎃[Medium]]

[383: Ransom Note 🍀[Easy]]

[384: Shuffle an Array 🎃[Medium]]

[385: Mini Parser 🎃[Medium]]

[386: Lexicographical Numbers 🎃[Medium]]

[387: First Unique Character in a String 🍀[Easy]]

[388: Longest Absolute File Path 🎃[Medium]]

[389: Find the Difference 🍀[Easy]]

[390: Elimination Game 🎃[Medium]]

[391: Perfect Rectangle 🍉[Hard]]

[392: Is Subsequence 🍀[Easy]]

[393: UTF-8 Validation 🎃[Medium]]

[394: Decode String 🎃[Medium]]

[395: Longest Substring with At Least K Repeating Characters 🎃[Medium]]

[396: Rotate Function 🎃[Medium]]

[397: Integer Replacement 🎃[Medium]]

[398: Random Pick Index 🎃[Medium]]

[399: Evaluate Division 🎃[Medium]]

[400: Nth Digit 	]]
	
[Bina401: ry Watch 🍀[Easy]]

[402: Remove K Digits 🎃[Medium]]

[403: Frog Jump 🍉[Hard]]

[404: Sum of Left Leaves 🍀[Easy]]

[405: Convert a Number to Hexadecimal 🍀[Easy]]

[406: Queue Reconstruction by Height 🎃[Medium]]

[407: Trapping Rain Water II 🍉[Hard]]

[408: Valid Word Abbreviation 🍀[Easy]]

[409: Longest Palindrome 🍀[Easy]]

[410: Split Array Largest Sum 🍉[Hard]]

[411: Minimum Unique Word Abbreviation 🍉[Hard]]

[412: Fizz Buzz 🍀[Easy]]

[413: Arithmetic Slices 🎃[Medium]]

[414: Third Maximum Number 🍀[Easy]]

[415: Add Strings 🍀[Easy]]

[416: Partition Equal Subset Sum 🎃[Medium]]

[417: Pacific Atlantic Water Flow 🎃[Medium]]

[418: Sentence Screen Fitting 🎃[Medium]]

[419: Battleships in a Board 🎃[Medium]]

[420: Strong Password Checker 🍉[Hard]]

[421: Maximum XOR of Two Numbers in an Array 🎃[Medium]]

[422: Valid Word Square 🍀[Easy]]

[423: Reconstruct Original Digits from English 🎃[Medium]]

[424: Longest Repeating Character Replacement 🎃[Medium]]

[425: Word Squares 🍉[Hard]]

[426: Convert Binary Search Tree to Sorted Doubly Linked List 🎃[Medium]]

[427: Construct Quad Tree 🎃[Medium]]

[428: Serialize and Deserialize N-ary Tree 🍉[Hard]]

[429: N-ary Tree Level Order Traversal 🎃[Medium]]

[430: Flatten a Multilevel Doubly Linked List 🎃[Medium]]

[431: Encode N-ary Tree to Binary Tree 🍉[Hard]]

[432: All O`one Data Structure 🍉[Hard]]

[433: Minimum Genetic Mutation 🎃[Medium]]

[434: Number of Segments in a String 🍀[Easy]]

[435: Non-overlapping Intervals 🎃[Medium]]

[436: Find Right Interval 🎃[Medium]]

[437: Path Sum III 🍀[Easy]]

[438: Find All Anagrams in a String 🎃[Medium]]

[439: Ternary Expression Parser 🎃[Medium]]

[440: K-th Smallest in Lexicographical Order 🍉[Hard]]

[441: Arranging Coins 🍀[Easy]]

[442: Find All Duplicates in an Array 🎃[Medium]]

[443: String Compression 🍀[Easy]]

[444: Sequence Reconstruction 🎃[Medium]]

[445: Add Two Numbers II 🎃[Medium]]

[446: Arithmetic Slices II - Subsequence 🍉[Hard]]

[447: Number of Boomerangs 🍀[Easy]]

[448: Find All Numbers Disappeared in an Array 🍀[Easy]]

[449: Serialize and Deserialize BST 🎃[Medium]]

[450: Delete Node in a BST 🎃[Medium]]

[451: Sort Characters By Frequency 🎃[Medium]]

[452: Minimum Number of Arrows to Burst Balloons 🎃[Medium]]

[453: Minimum Moves to Equal Array Elements 🍀[Easy]]

[454: 4Sum II 🎃[Medium]]

[455: Assign Cookies 🍀[Easy]]

[456: 132 Pattern 🎃[Medium]]

[457: Circular Array Loop 🎃[Medium]]

[458: Poor Pigs 🍉[Hard]]

[459: Repeated Substring Pattern 🍀[Easy]]

[460: LFU Cache 🍉[Hard]]

[461: Hamming Distance 🍀[Easy]]

[462: Minimum Moves to Equal Array Elements II 🎃[Medium]]

[463: Island Perimeter 🍀[Easy]]

[464: Can I Win 🎃[Medium]]

[465: Optimal Account Balancing 🍉[Hard]]

[466: Count The Repetitions 🍉[Hard]]

[467: Unique Substrings in Wraparound String 🎃[Medium]]

[468: Validate IP Address 🎃[Medium]]

[469: Convex Polygon 🎃[Medium]]

[470: Implement Rand10() Using Rand7() 🎃[Medium]]

[471: Encode String with Shortest Length 🍉[Hard]]

[472: Concatenated Words 🍉[Hard]]

[473: Matchsticks to Square 🎃[Medium]]

[474: Ones and Zeroes 🎃[Medium]]

[475: Heaters 🍀[Easy]]

[476: Number Complement 🍀[Easy]]

[477: Total Hamming Distance 🎃[Medium]]

[478: Generate Random Point in a Circle 🎃[Medium]]

[479: Largest Palindrome Product 🍉[Hard]]

[480: Sliding Window Median 🍉[Hard]]

[481: Magical String 🎃[Medium]]

[482: License Key Formatting 🍀[Easy]]

[483: Smallest Good Base 🍉[Hard]]

[484: Find Permutation 🎃[Medium]]

[485: Max Consecutive Ones 🍀[Easy]]

[486: Predict the Winner 🎃[Medium]]

[487: Max Consecutive Ones II 🎃[Medium]]

[488: Zuma Game 🍉[Hard]]

[489: Robot Room Cleaner 🍉[Hard]]

[490: The Maze 🎃[Medium]]

[491: Increasing Subsequences 🎃[Medium]]

[492: Construct the Rectangle 🍀[Easy]]

[493: Reverse Pairs 🍉[Hard]]

[494: Target Sum 🎃[Medium]]

[495: Teemo Attacking 🎃[Medium]]

[496: Next Greater Element I 🍀[Easy]]

[497: Random Point in Non-overlapping Rectangles 🎃[Medium]]

[498: Diagonal Traverse 🎃[Medium]]

[499: The Maze III 🍉[Hard]]

[500: Keyboard Row 🍀[Easy]]
	
[Find501:  Mode in Binary Search Tree 🍀[Easy]]

[502: IPO 🍉[Hard]]

[503: Next Greater Element II 🎃[Medium]]

[504: Base 7 🍀[Easy]]

[505: The Maze II 🎃[Medium]]

[506: Relative Ranks 🍀[Easy]]

[507: Perfect Number 🍀[Easy]]

[508: Most Frequent Subtree Sum 🎃[Medium]]

[509: Fibonacci Number 🍀[Easy]]

[510: Inorder Successor in BST II 🎃[Medium]]

[511: Game Play Analysis I 🍀[Easy]]

[512: Game Play Analysis II 🍀[Easy]]

[513: Find Bottom Left Tree Value 🎃[Medium]]

[514: Freedom Trail 🍉[Hard]]

[515: Find Largest Value in Each Tree Row 🎃[Medium]]

[516: Longest Palindromic Subsequence 🎃[Medium]]

[517: Super Washing Machines 🍉[Hard]]

[518: Coin Change 2 🎃[Medium]]

[519: Random Flip Matrix 🎃[Medium]]

[520: Detect Capital 🍀[Easy]]

[521: Longest Uncommon Subsequence I  🍀[Easy]]

[522: Longest Uncommon Subsequence II 🎃[Medium]]

[523: Continuous Subarray Sum 🎃[Medium]]

[524: Longest Word in Dictionary through Deleting 🎃[Medium]]

[525: Contiguous Array 🎃[Medium]]

[526: Beautiful Arrangement 🎃[Medium]]

[527: Word Abbreviation 🍉[Hard]]

[528: Random Pick with Weight 🎃[Medium]]

[529: Minesweeper 🎃[Medium]]

[530: Minimum Absolute Difference in BST 🍀[Easy]]

[531: Lonely Pixel I 🎃[Medium]]

[532: K-diff Pairs in an Array 🍀[Easy]]

[533: Lonely Pixel II 🎃[Medium]]

[534: Game Play Analysis III 🎃[Medium]]

[535: Encode and Decode TinyURL 🎃[Medium]]

[536: Construct Binary Tree from String 🎃[Medium]]

[537: Complex Number Multiplication 🎃[Medium]]

[538: Convert BST to Greater Tree 🍀[Easy]]

[539: Minimum Time Difference 🎃[Medium]]

[540: Single Element in a Sorted Array 🎃[Medium]]

[541: Reverse String II 🍀[Easy]]

[542: 01 Matrix 🎃[Medium]]

[543: Diameter of Binary Tree 🍀[Easy]]

[544: Output Contest Matches 🎃[Medium]]

[545: Boundary of Binary Tree 🎃[Medium]]

[546: Remove Boxes 🍉[Hard]]

[547: Friend Circles 🎃[Medium]]

[548: Split Array with Equal Sum 🎃[Medium]]

[549: Binary Tree Longest Consecutive Sequence II 🎃[Medium]]

[550: Game Play Analysis IV 🎃[Medium]]

[551: Student Attendance Record I 🍀[Easy]]

[552: Student Attendance Record II 🍉[Hard]]

[553: Optimal Division 🎃[Medium]]

[554: Brick Wall 🎃[Medium]]

[555: Split Concatenated Strings 🎃[Medium]]

[556: Next Greater Element III 🎃[Medium]]

[557: Reverse Words in a String III 🍀[Easy]]

[558: Quad Tree Intersection 🍀[Easy]]

[559: Maximum Depth of N-ary Tree 🍀[Easy]]

[560: Subarray Sum Equals K 🎃[Medium]]

[561: Array Partition I 🍀[Easy]]

[562: Longest Line of Consecutive One in Matrix 🎃[Medium]]

[563: Binary Tree Tilt 🍀[Easy]]

[564: Find the Closest Palindrome 🍉[Hard]]

[565: Array Nesting 🎃[Medium]]

[566: Reshape the Matrix 🍀[Easy]]

[567: Permutation in String 🎃[Medium]]

[568: Maximum Vacation Days 🍉[Hard]]

[569: Median Employee Salary 🍉[Hard]]

[570: Managers with at Least 5 Direct Reports 🎃[Medium]]

[571: Find Median Given Frequency of Numbers 🍉[Hard]]

[572: Subtree of Another Tree 🍀[Easy]]

[573: Squirrel Simulation 🎃[Medium]]

[574: Winning Candidate 🎃[Medium]]

[575: Distribute Candies 🍀[Easy]]

[576: Out of Boundary Paths 🎃[Medium]]

[577: Employee Bonus 🍀[Easy]]

[578: Get Highest Answer Rate Question 🎃[Medium]]

[579: Find Cumulative Salary of an Employee 🍉[Hard]]

[580: Count Student Number in Departments 🎃[Medium]]

[581: Shortest Unsorted Continuous Subarray 🍀[Easy]]

[582: Kill Process 🎃[Medium]]

[583: Delete Operation for Two Strings 🎃[Medium]]

[584: Find Customer Referee 🍀[Easy]]

[585: Investments in 2016 🎃[Medium]]

[586: Customer Placing the Largest Number of Orders 🍀[Easy]]

[587: Erect the Fence 🍉[Hard]]

[588: Design In-Memory File System 🍉[Hard]]

[589: N-ary Tree Preorder Traversal 🍀[Easy]]

[590: N-ary Tree Postorder Traversal 🍀[Easy]]

[591: Tag Validator 🍉[Hard]]

[592: Fraction Addition and Subtraction 🎃[Medium]]

[593: Valid Square 🎃[Medium]]

[594: Longest Harmonious Subsequence 🍀[Easy]]

[595: Big Countries 🍀[Easy]]

[596: Classes More Than 5 Students 🍀[Easy]]

[597: Friend Requests I: Overall Acceptance Rate 🍀[Easy]]

[598: Range Addition II 🍀[Easy]]

[599: Minimum Index Sum of Two Lists 🍀[Easy]]

[600: Non-negative Integers without Consecutive Ones 🍉[Hard]]
	
[Huma601: n Traffic of Stadium 🍉[Hard]]

[602: Friend Requests II: Who Has the Most Friends 🎃[Medium]]

[603: Consecutive Available Seats 🍀[Easy]]

[604: Design Compressed String Iterator 🍀[Easy]]

[605: Can Place Flowers 🍀[Easy]]

[606: Construct String from Binary Tree 🍀[Easy]]

[607: Sales Person 🍀[Easy]]

[608: Tree Node 🎃[Medium]]

[609: Find Duplicate File in System 🎃[Medium]]

[610: Triangle Judgement 🍀[Easy]]

[611: Valid Triangle Number 🎃[Medium]]

[612: Shortest Distance in a Plane 🎃[Medium]]

[613: Shortest Distance in a Line 🍀[Easy]]

[614: Second Degree Follower 🎃[Medium]]

[615: Average Salary: Departments VS Company 🍉[Hard]]

[616: Add Bold Tag in String 🎃[Medium]]

[617: Merge Two Binary Trees 🍀[Easy]]

[618: Students Report By Geography 🍉[Hard]]

[619: Biggest Single Number 🍀[Easy]]

[620: Not Boring Movies 🍀[Easy]]

[621: Task Scheduler 🎃[Medium]]

[622: Design Circular Queue 🎃[Medium]]

[623: Add One Row to Tree 🎃[Medium]]

[624: Maximum Distance in Arrays 🍀[Easy]]

[625: Minimum Factorization 🎃[Medium]]

[626: Exchange Seats 🎃[Medium]]

[627: Swap Salary 🍀[Easy]]

[628: Maximum Product of Three Numbers 🍀[Easy]]

[629: K Inverse Pairs Array 🍉[Hard]]

[630: Course Schedule III 🍉[Hard]]

[631: Design Excel Sum Formula 🍉[Hard]]

[632: Smallest Range Covering Elements from K Lists 🍉[Hard]]

[633: Sum of Square Numbers 🍀[Easy]]

[634: Find the Derangement of An Array 🎃[Medium]]

[635: Design Log Storage System 🎃[Medium]]

[636: Exclusive Time of Functions 🎃[Medium]]

[637: Average of Levels in Binary Tree 🍀[Easy]]

[638: Shopping Offers 🎃[Medium]]

[639: Decode Ways II 🍉[Hard]]

[640: Solve the Equation 🎃[Medium]]

[641: Design Circular Deque 🎃[Medium]]

[642: Design Search Autocomplete System 🍉[Hard]]

[643: Maximum Average Subarray I 🍀[Easy]]

[644: Maximum Average Subarray II 🍉[Hard]]

[645: Set Mismatch 🍀[Easy]]

[646: Maximum Length of Pair Chain 🎃[Medium]]

[647: Palindromic Substrings 🎃[Medium]]

[648: Replace Words 🎃[Medium]]

[649: Dota2 Senate 🎃[Medium]]

[650: 2 Keys Keyboard 🎃[Medium]]

[651: 4 Keys Keyboard 🎃[Medium]]

[652: Find Duplicate Subtrees 🎃[Medium]]

[653: Two Sum IV - Input is a BST 🍀[Easy]]

[654: Maximum Binary Tree 🎃[Medium]]

[655: Print Binary Tree 🎃[Medium]]

[656: Coin Path 🍉[Hard]]

[657: Robot Return to Origin 🍀[Easy]]

[658: Find K Closest Elements 🎃[Medium]]

[659: Split Array into Consecutive Subsequences 🎃[Medium]]

[660: Remove 9 🍉[Hard]]

[661: Image Smoother 🍀[Easy]]

[662: Maximum Width of Binary Tree 🎃[Medium]]

[663: Equal Tree Partition 🎃[Medium]]

[664: Strange Printer 🍉[Hard]]

[665: Non-decreasing Array 🍀[Easy]]

[666: Path Sum IV 🎃[Medium]]

[667: Beautiful Arrangement II 🎃[Medium]]

[668: Kth Smallest Number in Multiplication Table 🍉[Hard]]

[669: Trim a Binary Search Tree 🍀[Easy]]

[670: Maximum Swap 🎃[Medium]]

[671: Second Minimum Node In a Binary Tree 🍀[Easy]]

[672: Bulb Switcher II 🎃[Medium]]

[673: Number of Longest Increasing Subsequence 🎃[Medium]]

[674: Longest Continuous Increasing Subsequence 🍀[Easy]]

[675: Cut Off Trees for Golf Event 🍉[Hard]]

[676: Implement Magic Dictionary 🎃[Medium]]

[677: Map Sum Pairs 🎃[Medium]]

[678: Valid Parenthesis String 🎃[Medium]]

[679: 24 Game 🍉[Hard]]

[680: Valid Palindrome II 🍀[Easy]]

[681: Next Closest Time 🎃[Medium]]

[682: Baseball Game 🍀[Easy]]

[683: K Empty Slots 🍉[Hard]]

[684: Redundant Connection 🎃[Medium]]

[685: Redundant Connection II 🍉[Hard]]

[686: Repeated String Match 🍀[Easy]]

[687: Longest Univalue Path 🍀[Easy]]

[688: Knight Probability in Chessboard 🎃[Medium]]

[689: Maximum Sum of 3 Non-Overlapping Subarrays 🍉[Hard]]

[690: Employee Importance 🍀[Easy]]

[691: Stickers to Spell Word 🍉[Hard]]

[692: Top K Frequent Words 🎃[Medium]]

[693: Binary Number with Alternating Bits 🍀[Easy]]

[694: Number of Distinct Islands 🎃[Medium]]

[695: Max Area of Island 🎃[Medium]]

[696: Count Binary Substrings 🍀[Easy]]

[697: Degree of an Array 🍀[Easy]]

[698: Partition to K Equal Sum Subsets 🎃[Medium]]

[699: Falling Squares 🍉[Hard]]

[700: Search in a Binary Search Tree 	]]
	
[Inse701: rt into a Binary Search Tree 🎃[Medium]]

[702: Search in a Sorted Array of Unknown Size 🎃[Medium]]

[703: Kth Largest Element in a Stream 🍀[Easy]]

[704: Binary Search 🍀[Easy]]

[705: Design HashSet 🍀[Easy]]

[706: Design HashMap 🍀[Easy]]

[707: Design Linked List 🎃[Medium]]

[708: Insert into a Sorted Circular Linked List 🎃[Medium]]

[709: To Lower Case 🍀[Easy]]

[710: Random Pick with Blacklist 🍉[Hard]]

[711: Number of Distinct Islands II 🍉[Hard]]

[712: Minimum ASCII Delete Sum for Two Strings 🎃[Medium]]

[713: Subarray Product Less Than K 🎃[Medium]]

[714: Best Time to Buy and Sell Stock with Transaction Fee 🎃[Medium]]

[715: Range Module 🍉[Hard]]

[716: Max Stack 🍀[Easy]]

[717: 1-bit and 2-bit Characters 🍀[Easy]]

[718: Maximum Length of Repeated Subarray 🎃[Medium]]

[719: Find K-th Smallest Pair Distance 🍉[Hard]]

[720: Longest Word in Dictionary 🍀[Easy]]

[721: Accounts Merge 🎃[Medium]]

[722: Remove Comments 🎃[Medium]]

[723: Candy Crush 🎃[Medium]]

[724: Find Pivot Index 🍀[Easy]]

[725: Split Linked List in Parts 🎃[Medium]]

[726: Number of Atoms 🍉[Hard]]

[727: Minimum Window Subsequence 🍉[Hard]]

[728: Self Dividing Numbers 🍀[Easy]]

[729: My Calendar I 🎃[Medium]]

[730: Count Different Palindromic Subsequences 🍉[Hard]]

[731: My Calendar II 🎃[Medium]]

[732: My Calendar III 🍉[Hard]]

[733: Flood Fill 🍀[Easy]]

[734: Sentence Similarity 🍀[Easy]]

[735: Asteroid Collision 🎃[Medium]]

[736: Parse Lisp Expression 🍉[Hard]]

[737: Sentence Similarity II 🎃[Medium]]

[738: Monotone Increasing Digits 🎃[Medium]]

[739: Daily Temperatures 🎃[Medium]]

[740: Delete and Earn 🎃[Medium]]

[741: Cherry Pickup 🍉[Hard]]

[742: Closest Leaf in a Binary Tree 🎃[Medium]]

[743: Network Delay Time 🎃[Medium]]

[744: Find Smallest Letter Greater Than Target 🍀[Easy]]

[745: Prefix and Suffix Search 🍉[Hard]]

[746: Min Cost Climbing Stairs 🍀[Easy]]

[747: Largest Number At Least Twice of Others 🍀[Easy]]

[748: Shortest Completing Word 🍀[Easy]]

[749: Contain Virus 🍉[Hard]]

[750: Number Of Corner Rectangles 🎃[Medium]]

[751: IP to CIDR 🍀[Easy]]

[752: Open the Lock 🎃[Medium]]

[753: Cracking the Safe 🍉[Hard]]

[754: Reach a Number 🎃[Medium]]

[755: Pour Water 🎃[Medium]]

[756: Pyramid Transition Matrix 🎃[Medium]]

[757: Set Intersection Size At Least Two 🍉[Hard]]

[758: Bold Words in String 🍀[Easy]]

[759: Employee Free Time 🍉[Hard]]

[760: Find Anagram Mappings 🍀[Easy]]

[761: Special Binary String 🍉[Hard]]

[762: Prime Number of Set Bits in Binary Representation 🍀[Easy]]

[763: Partition Labels 🎃[Medium]]

[764: Largest Plus Sign 🎃[Medium]]

[765: Couples Holding Hands 🍉[Hard]]

[766: Toeplitz Matrix 🍀[Easy]]

[767: Reorganize String 🎃[Medium]]

[768: Max Chunks To Make Sorted II 🍉[Hard]]

[769: Max Chunks To Make Sorted 🎃[Medium]]

[770: Basic Calculator IV 🍉[Hard]]

[771: Jewels and Stones 🍀[Easy]]

[772: Basic Calculator III 🍉[Hard]]

[773: Sliding Puzzle 🍉[Hard]]

[774: Minimize Max Distance to Gas Station 🍉[Hard]]

[775: Global and Local Inversions 🎃[Medium]]

[776: Split BST 🎃[Medium]]

[777: Swap Adjacent in LR String 🎃[Medium]]

[778: Swim in Rising Water 🍉[Hard]]

[779: K-th Symbol in Grammar 🎃[Medium]]

[780: Reaching Points 🍉[Hard]]

[781: Rabbits in Forest 🎃[Medium]]

[782: Transform to Chessboard 🍉[Hard]]

[783: Minimum Distance Between BST Nodes 🍀[Easy]]

[784: Letter Case Permutation 🍀[Easy]]

[785: Is Graph Bipartite? 🎃[Medium]]

[786: K-th Smallest Prime Fraction 🍉[Hard]]

[787: Cheapest Flights Within K Stops 🎃[Medium]]

[788: Rotated Digits 🍀[Easy]]

[789: Escape The Ghosts 🎃[Medium]]

[790: Domino and Tromino Tiling 🎃[Medium]]

[791: Custom Sort String 🎃[Medium]]

[792: Number of Matching Subsequences 🎃[Medium]]

[793: Preimage Size of Factorial Zeroes Function 🍉[Hard]]

[794: Valid Tic-Tac-Toe State 🎃[Medium]]

[795: Number of Subarrays with Bounded Maximum 🎃[Medium]]

[796: Rotate String 🍀[Easy]]

[797: All Paths From Source to Target 🎃[Medium]]

[798: Smallest Rotation with Highest Score 🍉[Hard]]

[799: Champagne Tower 🎃[Medium]]

[800: Similar RGB Color 🍀[Easy]]
	
[Mini801: mum Swaps To Make Sequences Increasing 🎃[Medium]]

[802: Find Eventual Safe States 🎃[Medium]]

[803: Bricks Falling When Hit 🍉[Hard]]

[804: Unique Morse Code Words 🍀[Easy]]

[805: Split Array With Same Average 🍉[Hard]]

[806: Number of Lines To Write String 🍀[Easy]]

[807: Max Increase to Keep City Skyline 🎃[Medium]]

[808: Soup Servings 🎃[Medium]]

[809: Expressive Words 🎃[Medium]]

[810: Chalkboard XOR Game 🍉[Hard]]

[811: Subdomain Visit Count 🍀[Easy]]

[812: Largest Triangle Area 🍀[Easy]]

[813: Largest Sum of Averages 🎃[Medium]]

[814: Binary Tree Pruning 🎃[Medium]]

[815: Bus Routes 🍉[Hard]]

[816: Ambiguous Coordinates 🎃[Medium]]

[817: Linked List Components 🎃[Medium]]

[818: Race Car 🍉[Hard]]

[819: Most Common Word 🍀[Easy]]

[820: Short Encoding of Words 🎃[Medium]]

[821: Shortest Distance to a Character 🍀[Easy]]

[822: Card Flipping Game 🎃[Medium]]

[823: Binary Trees With Factors 🎃[Medium]]

[824: Goat Latin 🍀[Easy]]

[825: Friends Of Appropriate Ages 🎃[Medium]]

[826: Most Profit Assigning Work 🎃[Medium]]

[827: Making A Large Island 🍉[Hard]]

[828: Unique Letter String 🍉[Hard]]

[829: Consecutive Numbers Sum 🍉[Hard]]

[830: Positions of Large Groups 🍀[Easy]]

[831: Masking Personal Information 🎃[Medium]]

[832: Flipping an Image 🍀[Easy]]

[833: Find And Replace in String 🎃[Medium]]

[834: Sum of Distances in Tree 🍉[Hard]]

[835: Image Overlap 🎃[Medium]]

[836: Rectangle Overlap 🍀[Easy]]

[837: New 21 Game 🎃[Medium]]

[838: Push Dominoes 🎃[Medium]]

[839: Similar String Groups 🍉[Hard]]

[840: Magic Squares In Grid 🍀[Easy]]

[841: Keys and Rooms 🎃[Medium]]

[842: Split Array into Fibonacci Sequence 🎃[Medium]]

[843: Guess the Word 🍉[Hard]]

[844: Backspace String Compare 🍀[Easy]]

[845: Longest Mountain in Array 🎃[Medium]]

[846: Hand of Straights 🎃[Medium]]

[847: Shortest Path Visiting All Nodes 🍉[Hard]]

[848: Shifting Letters 🎃[Medium]]

[849: Maximize Distance to Closest Person 🍀[Easy]]

[850: Rectangle Area II 🍉[Hard]]

[851: Loud and Rich 🎃[Medium]]

[852: Peak Index in a Mountain Array 🍀[Easy]]

[853: Car Fleet 🎃[Medium]]

[854: K-Similar Strings 🍉[Hard]]

[855: Exam Room 🎃[Medium]]

[856: Score of Parentheses 🎃[Medium]]

[857: Minimum Cost to Hire K Workers 🍉[Hard]]

[858: Mirror Reflection 🎃[Medium]]

[859: Buddy Strings 🍀[Easy]]

[860: Lemonade Change 🍀[Easy]]

[861: Score After Flipping Matrix 🎃[Medium]]

[862: Shortest Subarray with Sum at Least K 🍉[Hard]]

[863: All Nodes Distance K in Binary Tree 🎃[Medium]]

[864: Shortest Path to Get All Keys 🍉[Hard]]

[865: Smallest Subtree with all the Deepest Nodes 🎃[Medium]]

[866: Prime Palindrome 🎃[Medium]]

[867: Transpose Matrix 🍀[Easy]]

[868: Binary Gap 🍀[Easy]]

[869: Reordered Power of 2 🎃[Medium]]

[870: Advantage Shuffle 🎃[Medium]]

[871: Minimum Number of Refueling Stops 🍉[Hard]]

[872: Leaf-Similar Trees 🍀[Easy]]

[873: Length of Longest Fibonacci Subsequence 🎃[Medium]]

[874: Walking Robot Simulation 🍀[Easy]]

[875: Koko Eating Bananas 🎃[Medium]]

[876: Middle of the Linked List 🍀[Easy]]

[877: Stone Game 🎃[Medium]]

[878: Nth Magical Number 🍉[Hard]]

[879: Profitable Schemes 🍉[Hard]]

[880: Decoded String at Index 🎃[Medium]]

[881: Boats to Save People 🎃[Medium]]

[882: Reachable Nodes In Subdivided Graph 🍉[Hard]]

[883: Projection Area of 3D Shapes 🍀[Easy]]

[884: Uncommon Words from Two Sentences 🍀[Easy]]

[885: Spiral Matrix III 🎃[Medium]]

[886: Possible Bipartition 🎃[Medium]]

[887: Super Egg Drop 🍉[Hard]]

[888: Fair Candy Swap 🍀[Easy]]

[889: Construct Binary Tree from Preorder and Postorder Traversal 🎃[Medium]]

[890: Find and Replace Pattern 🎃[Medium]]

[891: Sum of Subsequence Widths 🍉[Hard]]

[892: Surface Area of 3D Shapes 🍀[Easy]]

[893: Groups of Special-Equivalent Strings 🍀[Easy]]

[894: All Possible Full Binary Trees 🎃[Medium]]

[895: Maximum Frequency Stack 🍉[Hard]]

[896: Monotonic Array 🍀[Easy]]

[897: Increasing Order Search Tree 🍀[Easy]]

[898: Bitwise ORs of Subarrays 🎃[Medium]]

[899: Orderly Queue 🍉[Hard]]

[900: RLE Iterator 	]]

[901: Online Stock Span 🎃[Medium]]

[902: Numbers At Most N Given Digit Set 🍉[Hard]]

[903: Valid Permutations for DI Sequence 🍉[Hard]]

[904: Fruit Into Baskets 🎃[Medium]]

[905: Sort Array By Parity 🍀[Easy]]

[906: Super Palindromes 🍉[Hard]]

[907: Sum of Subarray Minimums 🎃[Medium]]

[908: Smallest Range I 🍀[Easy]]

[909: Snakes and Ladders 🎃[Medium]]

[910: Smallest Range II 🎃[Medium]]

[911: Online Election 🎃[Medium]]

[912: Sort an Array 🎃[Medium]]

[913: Cat and Mouse 🍉[Hard]]

[914: X of a Kind in a Deck of Cards 🍀[Easy]]

[915: Partition Array into Disjoint Intervals 🎃[Medium]]

[916: Word Subsets 🎃[Medium]]

[917: Reverse Only Letters 🍀[Easy]]

[918: Maximum Sum Circular Subarray 🎃[Medium]]

[919: Complete Binary Tree Inserter 🎃[Medium]]

[920: Number of Music Playlists 🍉[Hard]]

[921: Minimum Add to Make Parentheses Valid 🎃[Medium]]

[922: Sort Array By Parity II 🍀[Easy]]

[923: 3Sum With Multiplicity 🎃[Medium]]

[924: Minimize Malware Spread 🍉[Hard]]

[925: Long Pressed Name 🍀[Easy]]

[926: Flip String to Monotone Increasing 🎃[Medium]]

[927: Three Equal Parts 🍉[Hard]]

[928: Minimize Malware Spread II 🍉[Hard]]

[929: Unique Email Addresses 🍀[Easy]]

[930: Binary Subarrays With Sum 🎃[Medium]]

[931: Minimum Falling Path Sum 🎃[Medium]]

[932: Beautiful Array 🎃[Medium]]

[933: Number of Recent Calls 🍀[Easy]]

[934: Shortest Bridge 🎃[Medium]]

[935: Knight Dialer 🎃[Medium]]

[936: Stamping The Sequence 🍉[Hard]]

[937: Reorder Data in Log Files 🍀[Easy]]

[938: Range Sum of BST 🍀[Easy]]

[939: Minimum Area Rectangle 🎃[Medium]]

[940: Distinct Subsequences II 🍉[Hard]]

[941: Valid Mountain Array 🍀[Easy]]

[942: DI String Match 🍀[Easy]]

[943: Find the Shortest Superstring 🍉[Hard]]

[944: Delete Columns to Make Sorted 🍀[Easy]]

[945: Minimum Increment to Make Array Unique 🎃[Medium]]

[946: Validate Stack Sequences 🎃[Medium]]

[947: Most Stones Removed with Same Row or Column 🎃[Medium]]

[948: Bag of Tokens 🎃[Medium]]

[949: Largest Time for Given Digits 🍀[Easy]]

[950: Reveal Cards In Increasing Order 🎃[Medium]]

[951: Flip Equivalent Binary Trees 🎃[Medium]]

[952: Largest Component Size by Common Factor 🍉[Hard]]

[953: Verifying an Alien Dictionary 🍀[Easy]]

[954: Array of Doubled Pairs 🎃[Medium]]

[955: Delete Columns to Make Sorted II 🎃[Medium]]

[956: Tallest Billboard 🍉[Hard]]

[957: Prison Cells After N Days 🎃[Medium]]

[958: Check Completeness of a Binary Tree 🎃[Medium]]

[959: Regions Cut By Slashes 🎃[Medium]]

[960: Delete Columns to Make Sorted III 🍉[Hard]]

[961: N-Repeated Element in Size 2N Array 🍀[Easy]]

[962: Maximum Width Ramp 🎃[Medium]]

[963: Minimum Area Rectangle II 🎃[Medium]]

[964: Least Operators to Express Number 🍉[Hard]]

[965: Univalued Binary Tree 🍀[Easy]]

[966: Vowel Spellchecker 🎃[Medium]]

[967: Numbers With Same Consecutive Differences 🎃[Medium]]

[968: Binary Tree Cameras 🍉[Hard]]

[969: Pancake Sorting 🎃[Medium]]

[970: Powerful Integers 🍀[Easy]]

[971: Flip Binary Tree To Match Preorder Traversal 🎃[Medium]]

[972: Equal Rational Numbers 🍉[Hard]]

[973: K Closest Points to Origin 🎃[Medium]]

[974: Subarray Sums Divisible by K 🎃[Medium]]

[975: Odd Even Jump 🍉[Hard]]

[976: Largest Perimeter Triangle 🍀[Easy]]

[977: Squares of a Sorted Array 🍀[Easy]]

[978: Longest Turbulent Subarray 🎃[Medium]]

[979: Distribute Coins in Binary Tree 🎃[Medium]]

[980: Unique Paths III 🍉[Hard]]

[981: Time Based Key-Value Store 🎃[Medium]]

[982: Triples with Bitwise AND Equal To Zero 🍉[Hard]]

[983: Minimum Cost For Tickets 🎃[Medium]]

[984: String Without AAA or BBB 🎃[Medium]]

[985: Sum of Even Numbers After Queries 🍀[Easy]]

[986: Interval List Intersections 🎃[Medium]]

[987: Vertical Order Traversal of a Binary Tree 🎃[Medium]]

[988: Smallest String Starting From Leaf 🎃[Medium]]

[989: Add to Array-Form of Integer 🍀[Easy]]

[990: Satisfiability of Equality Equations 🎃[Medium]]

[991: Broken Calculator 🎃[Medium]]

[992: Subarrays with K Different Integers 🍉[Hard]]

[993: Cousins in Binary Tree 🍀[Easy]]

[994: Rotting Oranges 🍀[Easy]]

[995: Minimum Number of K Consecutive Bit Flips 🍉[Hard]]

[996: Number of Squareful Arrays 🍉[Hard]]

[997: Find the Town Judge 🍀[Easy]]

[998: Maximum Binary Tree II 🎃[Medium]]

[999: Available Captures for Rook 🍀[Easy]]

[1000: Minimum Cost to Merge Stones 🍉[Hard]]
	
[Grid1001:  Illumination 🍉[Hard]]

[1002: Find Common Characters 🍀[Easy]]

[1003: Check If Word Is Valid After Substitutions 🎃[Medium]]

[1004: Max Consecutive Ones III 🎃[Medium]]

[1005: Maximize Sum Of Array After K Negations 🍀[Easy]]

[1006: Clumsy Factorial 🎃[Medium]]

[1007: Minimum Domino Rotations For Equal Row 🎃[Medium]]

[1008: Construct Binary Search Tree from Preorder Traversal 🎃[Medium]]

[1009: Complement of Base 10 Integer 🍀[Easy]]

[1010: Pairs of Songs With Total Durations Divisible by 60 🍀[Easy]]

[1011: Capacity To Ship Packages Within D Days 🎃[Medium]]

[1012: Numbers With Repeated Digits 🍉[Hard]]

[1013: Partition Array Into Three Parts With Equal Sum 🍀[Easy]]

[1014: Best Sightseeing Pair 🎃[Medium]]

[1015: Smallest Integer Divisible by K 🎃[Medium]]

[1016: Binary String With Substrings Representing 1 To N 🎃[Medium]]

[1017: Convert to Base -2 🎃[Medium]]

[1018: Binary Prefix Divisible By 5 🍀[Easy]]

[1019: Next Greater Node In Linked List 🎃[Medium]]

[1020: Number of Enclaves 🎃[Medium]]

[1021: Remove Outermost Parentheses 🍀[Easy]]

[1022: Sum of Root To Leaf Binary Numbers 🍀[Easy]]

[1023: Camelcase Matching 🎃[Medium]]

[1024: Video Stitching 🎃[Medium]]

[1025: Divisor Game 🍀[Easy]]

[1026: Maximum Difference Between Node and Ancestor 🎃[Medium]]

[1027: Longest Arithmetic Sequence 🎃[Medium]]

[1028: Recover a Tree From Preorder Traversal 🍉[Hard]]

[1029: Two City Scheduling 🍀[Easy]]

[1030: Matrix Cells in Distance Order 🍀[Easy]]

[1031: Maximum Sum of Two Non-Overlapping Subarrays 🎃[Medium]]

[1032: Stream of Characters 🍉[Hard]]

[1033: Moving Stones Until Consecutive 🍀[Easy]]

[1034: Coloring A Border 🎃[Medium]]

[1035: Uncrossed Lines 🎃[Medium]]

[1036: Escape a Large Maze 🍉[Hard]]

[1037: Valid Boomerang 🍀[Easy]]

[1038: Binary Search Tree to Greater Sum Tree 🎃[Medium]]

[1039: Minimum Score Triangulation of Polygon 🎃[Medium]]

[1040: Moving Stones Until Consecutive II 🎃[Medium]]

[1041: Robot Bounded In Circle 🎃[Medium]]

[1042: Flower Planting With No Adjacent 🍀[Easy]]

[1043: Partition Array for Maximum Sum 🎃[Medium]]

[1044: Longest Duplicate Substring 🍉[Hard]]

[1045: Customers Who Bought All Products 🎃[Medium]]

[1046: Last Stone Weight 🍀[Easy]]

[1047: Remove All Adjacent Duplicates In String 🍀[Easy]]

[1048: Longest String Chain 🎃[Medium]]

[1049: Last Stone Weight II 🎃[Medium]]

[1050: Actors and Directors Who Cooperated At Least Three Times 🍀[Easy]]

[1051: Height Checker 🍀[Easy]]

[1052: Grumpy Bookstore Owner 🎃[Medium]]

[1053: Previous Permutation With One Swap 🎃[Medium]]

[1054: Distant Barcodes 🎃[Medium]]

[1055: Shortest Way to Form String 🎃[Medium]]

[1056: Confusing Number 🍀[Easy]]

[1057: Campus Bikes 🎃[Medium]]

[1058: Minimize Rounding Error to Meet Target 🎃[Medium]]

[1059: All Paths from Source Lead to Destination 🎃[Medium]]

[1060: Missing Element in Sorted Array 🎃[Medium]]

[1061: Lexicographically Smallest Equivalent String 🎃[Medium]]

[1062: Longest Repeating Substring 🎃[Medium]]

[1063: Number of Valid Subarrays 🍉[Hard]]

[1064: Fixed Point 🍀[Easy]]

[1065: Index Pairs of a String 🍀[Easy]]

[1066: Campus Bikes II 🎃[Medium]]

[1067: Digit Count in Range 🍉[Hard]]

[1068: Product Sales Analysis I 🍀[Easy]]

[1069: Product Sales Analysis II 🍀[Easy]]

[1070: Product Sales Analysis III 🎃[Medium]]

[1071: Greatest Common Divisor of Strings 🍀[Easy]]

[1072: Flip Columns For Maximum Number of Equal Rows 🎃[Medium]]

[1073: Adding Two Negabinary Numbers 🎃[Medium]]

[1074: Number of Submatrices That Sum to Target 🍉[Hard]]

[1075: Project Employees I 🍀[Easy]]

[1076: Project Employees II 🍀[Easy]]

[1077: Project Employees III 🎃[Medium]]

[1078: Occurrences After Bigram 🍀[Easy]]

[1079: Letter Tile Possibilities 🎃[Medium]]

[1080: Insufficient Nodes in Root to Leaf Paths 🎃[Medium]]

[1081: Smallest Subsequence of Distinct Characters 🎃[Medium]]

[1082: Sales Analysis I 🍀[Easy]]

[1083: Sales Analysis II 🍀[Easy]]

[1084: Sales Analysis III 🍀[Easy]]

[1085: Sum of Digits in the Minimum Number 🍀[Easy]]

[1086: High Five 🍀[Easy]]

[1087: Brace Expansion 🎃[Medium]]

[1088: Confusing Number II 🍉[Hard]]

[1089: Duplicate Zeros 🍀[Easy]]

[1090: Largest Values From Labels 🎃[Medium]]

[1091: Shortest Path in Binary Matrix 🎃[Medium]]

[1092: Shortest Common Supersequence  🍉[Hard]]

[1093: Statistics from a Large Sample 🎃[Medium]]

[1094: Car Pooling 🎃[Medium]]

[1095: Find in Mountain Array 🍉[Hard]]

[1096: Brace Expansion II 🍉[Hard]]

[1097: Game Play Analysis V 🍉[Hard]]

[1098: Unpopular Books 🎃[Medium]]

[1099: Two Sum Less Than K 🍀[Easy]]

[1100: Find K-Length Substrings With No Repeated Characters 🎃[Medium]]
	
[The 1101: Earliest Moment When Everyone Become Friends 🎃[Medium]]

[1102: Path With Maximum Minimum Value 🎃[Medium]]

[1103: Distribute Candies to People 🍀[Easy]]

[1104: Path In Zigzag Labelled Binary Tree 🎃[Medium]]

[1105: Filling Bookcase Shelves 🎃[Medium]]

[1106: Parsing A Boolean Expression 🍉[Hard]]

[1107: New Users Daily Count 🎃[Medium]]

[1108: Defanging an IP Address 🍀[Easy]]

[1109: Corporate Flight Bookings 🎃[Medium]]

[1110: Delete Nodes And Return Forest 🎃[Medium]]

[1111: Maximum Nesting Depth of Two Valid Parentheses Strings 🎃[Medium]]

[1112: Highest Grade For Each Student 🎃[Medium]]

[1113: Reported Posts 🍀[Easy]]

[1114: Print in Order 🍀[Easy]]

[1115: Print FooBar Alternately 🎃[Medium]]

[1116: Print Zero Even Odd 🎃[Medium]]

[1117: Building H2O 🎃[Medium]]

[1118: Number of Days in a Month 🍀[Easy]]

[1119: Remove Vowels from a String 🍀[Easy]]

[1120: Maximum Average Subtree 🎃[Medium]]

[1121: Divide Array Into Increasing Sequences 🍉[Hard]]

[1122: Relative Sort Array 🍀[Easy]]

[1123: Lowest Common Ancestor of Deepest Leaves 🎃[Medium]]

[1124: Longest Well-Performing Interval 🎃[Medium]]

[1125: Smallest Sufficient Team 🍉[Hard]]

[1126: Active Businesses 🎃[Medium]]

[1127: User Purchase Platform 🍉[Hard]]

[1128: Number of Equivalent Domino Pairs 🍀[Easy]]

[1129: Shortest Path with Alternating Colors 🎃[Medium]]

[1130: Minimum Cost Tree From Leaf Values 🎃[Medium]]

[1131: Maximum of Absolute Value Expression 🎃[Medium]]

[1132: Reported Posts II 🎃[Medium]]

[1133: Largest Unique Number 🍀[Easy]]

[1134: Armstrong Number 🍀[Easy]]

[1135: Connecting Cities With Minimum Cost 🎃[Medium]]

[1136: Parallel Courses 🍉[Hard]]

[1137: N-th Tribonacci Number 🍀[Easy]]

[1138: Alphabet Board Path 🎃[Medium]]

[1139: Largest 1-Bordered Square 🎃[Medium]]

[1140: Stone Game II 🎃[Medium]]

[1141: User Activity for the Past 30 Days I 🍀[Easy]]

[1142: User Activity for the Past 30 Days II 🍀[Easy]]

[1143: Longest Common Subsequence 🎃[Medium]]

[1144: Decrease Elements To Make Array Zigzag 🎃[Medium]]

[1145: Binary Tree Coloring Game 🎃[Medium]]

[1146: Snapshot Array 🎃[Medium]]

[1147: Longest Chunked Palindrome Decomposition 🍉[Hard]]

[1148: Article Views I 🍀[Easy]]

[1149: Article Views II 🎃[Medium]]

[1150: Check If a Number Is Majority Element in a Sorted Array 🍀[Easy]]

[1151: Minimum Swaps to Group All 1's Together 🎃[Medium]]

[1152: Analyze User Website Visit Pattern 🎃[Medium]]

[1153: String Transforms Into Another String 🍉[Hard]]

[1154: Day of the Year 🍀[Easy]]

[1155: Number of Dice Rolls With Target Sum 🎃[Medium]]

[1156: Swap For Longest Repeated Character Substring 🎃[Medium]]

[1157: Online Majority Element In Subarray 🍉[Hard]]

[1158: Market Analysis I 🎃[Medium]]

[1159: Market Analysis II 🍉[Hard]]

[1160: Find Words That Can Be Formed by Characters 🍀[Easy]]

[1161: Maximum Level Sum of a Binary Tree 🎃[Medium]]

[1162: As Far from Land as Possible 🎃[Medium]]

[1163: Last Substring in Lexicographical Order 🍉[Hard]]

[1164: Product Price at a Given Date 🎃[Medium]]

[1165: Single-Row Keyboard 🍀[Easy]]

[1166: Design File System 🎃[Medium]]

[1167: Minimum Cost to Connect Sticks 🎃[Medium]]

[1168: Optimize Water Distribution in a Village 🍉[Hard]]

[1169: Invalid Transactions 🎃[Medium]]

[1170: Compare Strings by Frequency of the Smallest Character 🍀[Easy]]

[1171: Remove Zero Sum Consecutive Nodes from Linked List 🎃[Medium]]

[1172: Dinner Plate Stacks 🍉[Hard]]

[1173: Immediate Food Delivery I 🍀[Easy]]

[1174: Immediate Food Delivery II 🎃[Medium]]

[1175: Prime Arrangements 🍀[Easy]]

[1176: Diet Plan Performance 🍀[Easy]]

[1177: Can Make Palindrome from Substring 🎃[Medium]]

[1178: Number of Valid Words for Each Puzzle 🍉[Hard]]

[1179: Reformat Department Table 🍀[Easy]]

[1180: Count Substrings with Only One Distinct Letter 🍀[Easy]]

[1181: Before and After Puzzle 🎃[Medium]]

[1182: Shortest Distance to Target Color 🎃[Medium]]

[1183: Maximum Number of Ones 🍉[Hard]]

[1184: Distance Between Bus Stops 🍀[Easy]]

[1185: Day of the Week 🍀[Easy]]

[1186: Maximum Subarray Sum with One Deletion 🎃[Medium]]

[1187: Make Array Strictly Increasing 🍉[Hard]]

[1188: Design Bounded Blocking Queue 🎃[Medium]]

[1189: Maximum Number of Balloons 🍀[Easy]]

[1190: Reverse Substrings Between Each Pair of Parentheses 🎃[Medium]]

[1191: K-Concatenation Maximum Sum 🎃[Medium]]

[1192: Critical Connections in a Network 🍉[Hard]]

[1193: Monthly Transactions I 🎃[Medium]]

[1194: Tournament Winners 🍉[Hard]]

[1195: Fizz Buzz Multithreaded 🎃[Medium]]

[1196: How Many Apples Can You Put into the Basket 🍀[Easy]]

[1197: Minimum Knight Moves 🎃[Medium]]

[1198: Find Smallest Common Element in All Rows 🎃[Medium]]

[1199: Minimum Time to Build Blocks 🍉[Hard]]

[1200: Minimum Absolute Difference 🍀[Easy]]

[1201: Ugly Number III 🎃[Medium]]

[1202: Smallest String With Swaps 🎃[Medium]]

[1203: Sort Items by Groups Respecting Dependencies 🍉[Hard]]

[1204: Last Person to Fit in the Elevator 🎃[Medium]]

[1205: Monthly Transactions II 🎃[Medium]]

[1206: Design Skiplist 🍉[Hard]]

[1207: Unique Number of Occurrences 🍀[Easy]]

[1208: Get Equal Substrings Within Budget 🎃[Medium]]

[1209: Remove All Adjacent Duplicates in String II 🎃[Medium]]

[1210: Minimum Moves to Reach Target with Rotations 🍉[Hard]]

[1211: Queries Quality and Percentage 🍀[Easy]]

[1212: Team Scores in Football Tournament 🎃[Medium]]

[1213: Intersection of Three Sorted Arrays 🍀[Easy]]

[1214: Two Sum BSTs 🎃[Medium]]

[1215: Stepping Numbers 🎃[Medium]]

[1216: Valid Palindrome III 🍉[Hard]]

[1217: Play with Chips 🍀[Easy]]

[1218: Longest Arithmetic Subsequence of Given Difference 🎃[Medium]]

[1219: Path with Maximum Gold 🎃[Medium]]

[1220: Count Vowels Permutation 🍉[Hard]]

[1221: Split a String in Balanced Strings 🍀[Easy]]

[1222: Queens That Can Attack the King 🎃[Medium]]

[1223: Dice Roll Simulation 🎃[Medium]]

[1224: Maximum Equal Frequency 🍉[Hard]]

[1225: Report Contiguous Dates 🍉[Hard]]

[1226: The Dining Philosophers 🎃[Medium]]

[1227: Airplane Seat Assignment Probability 🎃[Medium]]

[1228: Missing Number In Arithmetic Progression 🍀[Easy]]

[1229: Meeting Scheduler 🎃[Medium]]

[1230: Toss Strange Coins 🎃[Medium]]

[1231: Divide Chocolate 🍉[Hard]]

[1232: Check If It Is a Straight Line 🍀[Easy]]

[1233: Remove Sub-Folders from the Filesystem 🎃[Medium]]

[1234: Replace the Substring for Balanced String 🎃[Medium]]

[1235: Maximum Profit in Job Scheduling 🍉[Hard]]

[1236: Web Crawler 🎃[Medium]]

[1237: Find Positive Integer Solution for a Given Equation 🍀[Easy]]

[1238: Circular Permutation in Binary Representation 🎃[Medium]]

[1239: Maximum Length of a Concatenated String with Unique Characters 🎃[Medium]]

[1240: Tiling a Rectangle with the Fewest Squares 🍉[Hard]]

[1241: Number of Comments per Post 🍀[Easy]]

[1242: Web Crawler Multithreaded 🎃[Medium]]

[1243: Array Transformation 🍀[Easy]]

[1244: Design A Leaderboard 🎃[Medium]]

[1245: Tree Diameter 🎃[Medium]]

[1246: Palindrome Removal 🍉[Hard]]

[1247: Minimum Swaps to Make Strings Equal 🎃[Medium]]

[1248: Count Number of Nice Subarrays 🎃[Medium]]

[1249: Minimum Remove to Make Valid Parentheses 🎃[Medium]]

[1250: Check If It Is a Good Array 🍉[Hard]]

[1251: Average Selling Price 🍀[Easy]]

[1252: Cells with Odd Values in a Matrix 🍀[Easy]]

[1253: Reconstruct a 2-Row Binary Matrix 🎃[Medium]]

[1254: Number of Closed Islands 🎃[Medium]]

[1255: Maximum Score Words Formed by Letters 🍉[Hard]]

[1256: Encode Number 🎃[Medium]]

[1257: Smallest Common Region 🎃[Medium]]

[1258: Synonymous Sentences 🎃[Medium]]

[1259: Handshakes That Don't Cross 🍉[Hard]]

[1260: Shift 2D Grid 🍀[Easy]]

[1261: Find Elements in a Contaminated Binary Tree 🎃[Medium]]

[1262: Greatest Sum Divisible by Three 🎃[Medium]]

[1263: Minimum Moves to Move a Box to Their Target Location 🍉[Hard]]

[1264: Page Recommendations 🎃[Medium]]

[1265: Print Immutable Linked List in Reverse 🎃[Medium]]

[1266: Minimum Time Visiting All Points 🍀[Easy]]

[1267: Count Servers that Communicate 🎃[Medium]]

[1268: Search Suggestions System 🎃[Medium]]

[1269: Number of Ways to Stay in the Same Place After Some Steps 🍉[Hard]]

[1270: All People Report to the Given Manager 🎃[Medium]]

[1271: Hexspeak 🍀[Easy]]

[1272: Remove Interval 🎃[Medium]]

[1273: Delete Tree Nodes 🎃[Medium]]

[1274: Number of Ships in a Rectangle 🍉[Hard]]

[1275: Find Winner on a Tic Tac Toe Game 🍀[Easy]]

[1276: Number of Burgers with No Waste of Ingredients 🎃[Medium]]

[1277: Count Square Submatrices with All Ones 🎃[Medium]]

[1278: Palindrome Partitioning III 🍉[Hard]]

[1279: Traffic Light Controlled Intersection 🍀[Easy]]

[1280: Students and Examinations 🍀[Easy]]

[1281: Subtract the Product and Sum of Digits of an Integer 🍀[Easy]]

[1282: Group the People Given the Group Size They Belong To 🎃[Medium]]

[1283: Find the Smallest Divisor Given a Threshold 🎃[Medium]]

[1284: Minimum Number of Flips to Convert Binary Matrix to Zero Matrix 🍉[Hard]]

[1285: Find the Start and End Number of Continuous Ranges 🎃[Medium]]

[1286: Iterator for Combination 🎃[Medium]]

[1287: Element Appearing More Than 25% In Sorted Array 🍀[Easy]]

[1288: Remove Covered Intervals 🎃[Medium]]

[1289: Minimum Falling Path Sum II 🍉[Hard]]

[1290: Convert Binary Number in a Linked List to Integer 🍀[Easy]]

[1291: Sequential Digits 🎃[Medium]]

[1292: Maximum Side Length of a Square with Sum Less than or Equal to Threshold 🎃[Medium]]

[1293: Shortest Path in a Grid with Obstacles Elimination 🍉[Hard]]

[1294: Weather Type in Each Country 🍀[Easy]]

[1295: Find Numbers with Even Number of Digits 🍀[Easy]]

[1296: Divide Array in Sets of K Consecutive Numbers 🎃[Medium]]

[1297: Maximum Number of Occurrences of a Substring 🎃[Medium]]

[1298: Maximum Candies You Can Get from Boxes 🍉[Hard]]

[1299: Replace Elements with Greatest Element on Right Side 🍀[Easy]]

[1300: Sum of Mutated Array Closest to Target 🎃[Medium]]

[1301: Number of Paths with Max Score 🍉[Hard]]

[1302: Deepest Leaves Sum 🎃[Medium]]

[1303: Find the Team Size 🍀[Easy]]

[1304: Find N Unique Integers Sum up to Zero 🍀[Easy]]

[1305: All Elements in Two Binary Search Trees 🎃[Medium]]

[1306: Jump Game III 🎃[Medium]]

[1307: Verbal Arithmetic Puzzle 🍉[Hard]]

[1308: Running Total for Different Genders 🎃[Medium]]

[1309: Decrypt String from Alphabet to Integer Mapping 🍀[Easy]]

[1310: XOR Queries of a Subarray 🎃[Medium]]

[1311: Get Watched Videos by Your Friends 🎃[Medium]]

[1312: Minimum Insertion Steps to Make a String Palindrome 🍉[Hard]]
