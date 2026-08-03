## Insert into heap

- Always ensure your heap is a binary tree
- All Parent value should be less than children

# Approach for MIN heap
- Put the element at the last 
- Check the parent of the inserted element using parent formula
- if the parent is greater then swap the value and repeat the process untill parent index is >= 0 for 0 based indexing or >=1 for 1 based indexing

# Approach for MAX heap
- Put the element at the last 
- Check the parent of the inserted element using parent formula
- if the parent is smaller then swap the value and repeat the process untill parent index is >= 0 for 0 based indexing or >=1 for 1 based indexing

## The whole process of moving the value up is called as `HEAPIFY` or `HEAPIFY UP` for min HEAP and `HEAPIFY DOWN` for max heap
## The process of restructuring the element in a complte binary tree is called a `HEAPIFY` 

