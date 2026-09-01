# Dynamic Programming
    - It is an optimization technique used to solve problems that can be broken down into overlapping subproblems that have an optimal structure

    Overlapping subproblems: While solving a big problem we rpeadetly solve same smaller problems
    Overlapping substructure: The solution to the big problem can be onstructed from solution of smaller sub problems

DP is about storing and resuing the result of smaller subproblems instead of recalculating it again

DP is optiized recurssion

Use:
1D (Fibonacci, Climbing Stairs)
2D (Grid Problem, 01 knapsack)
Subsequences (LCS, Subset Sum)
String (Palindrome Partioning)
tree/graph (Counting Path, DP with DFS)
Bitmask DP (TSP problem, Subset)
Matrix Chain multiplication ()

DP vs Greedy
Greedy is making the best local choice and hope to reach the gobal optimal solution
DP is exploring all possibilities, store result of subprobelm and storing the result

2 ways of implementaing DP

Bottom Up 
    - Tabulation
    - Iteration
Top Down
    - Memoization
    - Recurrsion