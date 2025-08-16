# Time Complexity:
    - It is used to measure the effeciency of an algorthm in terms of speed as the size of the input grows
    - Time complexity is not equal to the time taken by the algorithm

# Understanding log2n
    - Example is binary search
    - For ever search the array get divided into half
    - i.e. n, n/2, n/4, n/8, n/16..... until only 1 element left
    - which is equivalent to n/2^x = 1
    - so n=2^x
    - to find the value of x = log2n
    - e.g. for the array element of 8 it wll be 3 time max so log2 8 = 3 

# Big O Notation
    - Measuring the time complexity in a worst case
    - It represents the worst case time complexity of an algorithm

# Types of Time Complexities
    - O(1) - constant time comeplexity
    - O(n)
    - O(log n)
    - O(n^2)
    - O(n^3)
    - O(nlog(n))
    - O(2^n) : E.g. for a n we need to do the operation 2^n times
    - O(n!)

# Efficiency Ratings
    O(1) > O(logn) > O(n) > O(nlogn) > O(n^2) > O(n^3) > O(2^n) > O(n!) ....

# Why to ginore the numerical multiplication of n in time complexity? 
    - Constants (2n, 100n) only affect speed, not growth.
    - Big-O cares about how fast time grows when n is huge.
    - So, 2n, 5n, 100n → all just O(n).
    - Rule: Drop constants, keep only the biggest-growing term.
    - So 2n or 50n or 100n , it boils down to n
    - Similarly o(n) + O(n^2) boils down to O(n^2)
    - The time complexity always boils down to the greater value
