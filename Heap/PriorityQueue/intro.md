# Priority Queue
    A priority queue serves element based on their priority irrespective on their insertion order

# Real Life E.g.
- 1:Fever
- 2:Headache
- 5:Accident

So here although accident patient is last in order but still it will have a highest priority for medicitation

# Use Case
- CPU Scheduling
- Real Time System
- Cache System
- Dijkstra Algorithm

# Implementation of pririty queue

1. Sorting
Consider an e.g. that the highest number will have the highest priority
    - Push the element 
    - Sort the queue
Sorting will ensure that the highest priority element is always at the front
The TC of this algorithm will be N(log N) because for every elemet we are sorting
So its not the efficient way to handle priority queue

2. Heap
NOTE: Heap and Priority Queue are not same
Heap is a Binart Tree Data structure and Priority Queue is an abstract data type and heap data structure is used to implement PQ

# Types of Priority Queue
1. MAX PQ: where element with higher priority will be served first (Higher value with higher priority)
1. MIN PQ: where element with lowest priority will be served first (Lower value with higher priority)