# Finding the middle element
    - The basic formula to find the mid element is (left+right)/2 e.g. in binary search
    - In some cases the left and the right value combines together to form large value which can goes out of the data typ bound
    - To handle that we can use the formula
    - left + [(right-left)/2]
    - This formula will give the same result and with this the value will never overflow
