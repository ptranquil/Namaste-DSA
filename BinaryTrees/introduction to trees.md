# 🌳 Trees — Quick Revision Notes

## 1. Introduction

* A **Tree** is a **non-linear, hierarchical data structure**.
* A tree consists of **nodes** connected by **edges**.
* A node can have **0 or more children** but **at most 1 parent**.
* The topmost node is called the **Root**.
* The **Root has no parent**.
* There is **exactly one unique path** between any two nodes in a tree.
* A tree with `N` nodes always has **`N - 1` edges**.
* Trees do **not contain cycles**.

### Example

```text
              A          ← Root
            /   \
           B     C       ← Children of A
          / \     \
         D   E     F     ← Leaf Nodes
```

---

# 2. Why Do We Use Trees?

Not all data is naturally represented using linear structures such as **arrays, strings, or linked lists**.

Trees are useful when data has a **hierarchical relationship**.

### Common Examples

* **File System**
* **HTML DOM**
* **React Virtual DOM**
* **Database / Geographic Hierarchy**
* **Organization Hierarchy**
* **Hierarchical Data**

### Example — File System

```text
Root
├── Documents
│   ├── Resume.pdf
│   └── Notes.txt
└── Pictures
    └── Photo.jpg
```

### Example — Geographic Hierarchy

```text
Asia
└── India
    └── Maharashtra
        └── Mumbai
            └── Andheri
```

---

# 3. Types of Trees

## 3.1 General Tree

* A node can have **any number of children**.

```text
        A
      / | \
     B  C  D
       / \
      E   F
```

---

## 3.2 Binary Tree

* Each node can have **at most 2 children**.
* These are called:

  * `Left Child`
  * `Right Child`

```text
        A
       / \
      B   C
     /
    D
```

A node can have:

* `0` children
* `1` child
* `2` children

---

## 3.3 Binary Search Tree (BST)

A Binary Tree that follows the ordering property:

```text
Left Subtree < Root < Right Subtree
```

Example:

```text
        8
       / \
      4   12
     / \  / \
    2  6 10 14
```

For every node:

```text
All values in Left Subtree < Node
All values in Right Subtree > Node
```

> Duplicate handling depends on the implementation. Some BSTs allow duplicates with a defined rule, while others do not.

### Average Time Complexity

| Operation |    Average |
| --------- | ---------: |
| Search    | `O(log N)` |
| Insert    | `O(log N)` |
| Delete    | `O(log N)` |

### Worst Case

If the BST becomes skewed:

```text
1
 \
  2
   \
    3
     \
      4
```

Then:

```text
Search = O(N)
Insert = O(N)
Delete = O(N)
```

---

## 3.4 Complete Binary Tree

A binary tree where:

* All levels are completely filled **except possibly the last level**.
* The last level is filled **from left to right**.

```text
        1
       / \
      2   3
     / \  /
    4  5 6
```

> **Heap** is commonly implemented using a Complete Binary Tree.

---

## 3.5 Full Binary Tree

A binary tree where every node has either:

* `0` children, or
* `2` children

No node has exactly **1 child**.

```text
        1
       / \
      2   3
     / \
    4   5
```

---

## 3.6 Perfect Binary Tree

A binary tree where:

* Every internal node has exactly **2 children**.
* All leaf nodes are at the **same level**.

```text
          1
        /   \
       2     3
      / \   / \
     4   5 6   7
```

For height `h` (root at height `0`):

```text
Total Nodes = 2^(h + 1) - 1
```

---

## 3.7 Balanced Binary Tree

A binary tree where the height is approximately:

```text
O(log N)
```

The tree is kept relatively balanced so that operations remain efficient.

Examples:

* AVL Tree
* Red-Black Tree

> A balanced tree does **not necessarily mean** that every node has exactly equal left and right subtree heights.

---

# 4. Tree Terminology / Acronyms

## Root

The **topmost node** of a tree.

```text
        A ← Root
       / \
      B   C
```

A tree has exactly **one root**.

---

## Parent

A node that has one or more child nodes.

```text
      A
     / \
    B   C
```

`A` is the parent of `B` and `C`.

The root can also be a parent.

---

## Child

A node directly connected below another node.

```text
      A
     / \
    B   C
```

`B` and `C` are children of `A`.

A leaf node is also a child if it has a parent.

---

## Siblings

Nodes that share the **same parent**.

```text
      A
     / \
    B   C
```

`B` and `C` are siblings.

---

## Leaf Node

A node with **no children**.

```text
        A
       / \
      B   C
         /
        D
```

Leaf nodes:

```text
B, D
```

---

## Internal Node / Non-Leaf Node

A node that has **at least one child**.

In the above example:

```text
A, C
```

are internal nodes.

---

## Level

The number of edges from the root to a node.

Root starts at:

```text
Level = 0
```

Example:

```text
          A          Level 0
        /   \
       B     C       Level 1
      / \
     D   E           Level 2
```

---

## Depth

The number of edges from the **root to a specific node**.

```text
Depth(A) = 0
Depth(B) = 1
Depth(D) = 2
```

> **Depth and Level** are often used interchangeably in basic tree discussions.

---

## Height

The number of edges on the **longest path from a node to a leaf**.

For the entire tree:

```text
Height(Tree) = Height(Root)
```

Example:

```text
          A          Height = 2
        /   \
       B     C
      / \
     D   E
```

```text
Height(A) = 2
Height(B) = 1
Height(D) = 0
```

> Some definitions count height in **nodes** instead of edges. Always check the convention being used.

---

## Subtree

A node along with all of its descendants forms a **subtree**.

```text
        A
       / \
      B   C
     / \
    D   E
```

The subtree rooted at `B` is:

```text
      B
     / \
    D   E
```

---

## Ancestor

Any node that exists on the path from the root to a given node.

```text
        A
       /
      B
     /
    C
```

For `C`:

```text
A and B = Ancestors
```

---

## Descendant

Any node that exists below a given node.

For `A`:

```text
B and C = Descendants
```

---

# 5. Tree Representation in JavaScript

A binary tree node can be represented using:

```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

Example:

```text
        10
       /  \
      5    15
```

JavaScript:

```javascript
const root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(15);
```

Accessing values:

```javascript
root.val              // 10

root.left.val         // 5
root.right.val        // 15
```

---

# 6. Tree Traversals

Traversal means **visiting every node in a tree in a specific order**.

There are two major categories:

```text
Tree Traversals
│
├── DFS (Depth First Search)
│   ├── Preorder
│   ├── Inorder
│   └── Postorder
│
└── BFS (Breadth First Search)
    └── Level Order
```

---

# 6.1 DFS — Depth First Search

DFS explores **as deep as possible** before moving to the next branch.

DFS has 3 main traversal techniques:

* **Preorder**
* **Inorder**
* **Postorder**

Consider this tree:

```text
                         1
                       /   \
                      2     3
                     / \   / \
                    4   5 6   7
                   / \     \
                  8   9     10
```

---

## A. Preorder Traversal

```text
Root → Left → Right
```

### Steps

For every node:

```text
1. Visit Root
2. Traverse Left Subtree
3. Traverse Right Subtree
```

### Example

```text
                         1
                       /   \
                      2     3
                     / \   / \
                    4   5 6   7
                   / \     \
                  8   9     10

Preorder:

1 → 2 → 4 → 8 → 9 → 5 → 3 → 6 → 10 → 7
```

### Memory Trick 🧠

> **Pre** = Process the node **before** its children.

```text
Root
 ↓
Left
 ↓
Right
```

### Common Use Cases

* Creating a copy of a tree
* Serializing a tree
* Prefix expression evaluation

---

## B. Inorder Traversal

```text
Left → Root → Right
```

### Steps

For every node:

```text
1. Traverse Left Subtree
2. Visit Root
3. Traverse Right Subtree
```

### Example

```text
                         1
                       /   \
                      2     3
                     / \   / \
                    4   5 6   7
                   / \     \
                  8   9     10

Inorder:

8 → 4 → 9 → 2 → 5 → 1 → 6 → 10 → 3 → 7
```

### Memory Trick 🧠

> **In** = Process the node **in between** Left and Right.

```text
Left
 ↓
Root
 ↓
Right
```

### ⭐ Important BST Rule

**Inorder traversal of a BST gives values in sorted order.**

Example:

```text
        5
       / \
      3   7
     / \   \
    1   4   8
```

Inorder:

```text
1 → 3 → 4 → 5 → 7 → 8
```

Therefore:

> **BST + Inorder = Sorted Order**

This is one of the **most important tree concepts for interviews**.

---

## C. Postorder Traversal

```text
Left → Right → Root
```

### Steps

For every node:

```text
1. Traverse Left Subtree
2. Traverse Right Subtree
3. Visit Root
```

### Example

```text
                         1
                       /   \
                      2     3
                     / \   / \
                    4   5 6   7
                   / \     \
                  8   9     10

Postorder:

8 → 9 → 4 → 5 → 2 → 10 → 6 → 7 → 3 → 1
```

### Memory Trick 🧠

> **Post** = Process the node **after** its children.

```text
Left
 ↓
Right
 ↓
Root
```

### Common Use Cases

* Deleting a tree
* Calculating tree properties
* Evaluating postfix expressions
* Processing child dependencies before parent

---

# 6.2 BFS — Breadth First Search

BFS explores the tree **level by level**.

It is also called:

> **Level Order Traversal**

Consider:

```text
                         1              Level 0
                       /   \
                      2     3            Level 1
                     / \   / \
                    4   5 6   7           Level 2
                   / \     \
                  8   9     10             Level 3
```

### Traversal

```text
Level 0 → 1

Level 1 → 2 → 3

Level 2 → 4 → 5 → 6 → 7

Level 3 → 8 → 9 → 10
```

### Final Result

```text
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10
```

### Implementation

BFS generally uses a **Queue**:

```text
Queue
  ↓
First In → First Out (FIFO)
```

Basic idea:

```javascript
function levelOrder(root) {
    if (root === null) return [];

    const queue = [root];
    const result = [];
    let front = 0;

    while (front < queue.length) {
        const node = queue[front++];

        result.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return result;
}
```

> In JavaScript, using `shift()` repeatedly can be inefficient for large queues because elements need to be re-indexed. A pointer such as `front` is preferred.

---

# 6.3 DFS vs BFS — Quick Comparison

| Traversal   | Type | Order               | Data Structure    |
| ----------- | ---- | ------------------- | ----------------- |
| Preorder    | DFS  | Root → Left → Right | Recursion / Stack |
| Inorder     | DFS  | Left → Root → Right | Recursion / Stack |
| Postorder   | DFS  | Left → Right → Root | Recursion / Stack |
| Level Order | BFS  | Level by Level      | Queue             |

---

## Easy Memory Trick 🧠

```text
PREORDER
Root comes PRE (first)
→ Root → Left → Right

INORDER
Root comes IN (middle)
→ Left → Root → Right

POSTORDER
Root comes POST (last)
→ Left → Right → Root

LEVEL ORDER
Visit LEVEL by LEVEL
→ BFS + Queue
```

---

# 6.4 Traversal Complexity

For all standard tree traversals:

```text
Time Complexity = O(N)
```

### Space Complexity

```text
DFS → O(H)
BFS → O(W)
```

Where:

* `N` = Number of nodes
* `H` = Height of tree
* `W` = Maximum width of tree

### Important

For a **balanced tree**:

```text
H = O(log N)
```

For a **skewed tree**:

```text
H = O(N)
```

---

## ⭐ Interview Tip

If the problem says:

```text
"Process nodes level by level"
```

Think:

```text
BFS + Queue
```

If the problem asks you to recursively process:

```text
Left Subtree
+
Right Subtree
```

Think:

```text
DFS + Recursion
```

---

# 7. Important Tree Facts

```text
N Nodes → N - 1 Edges
```

For a binary tree:

```text
Maximum Children of a Node = 2
```

Maximum nodes at level `L`:

```text
2^L
```

Maximum nodes in a binary tree of height `H`:

```text
2^(H + 1) - 1
```

Minimum possible height for `N` nodes in a binary tree:

```text
O(log N)
```

Worst-case height:

```text
O(N)
```

---

# 8. Key Interview Rule ⭐

> **Trees and Recursion go hand in hand.**

Most tree problems can be solved by thinking:

```text
1. Solve the problem for the current node.
2. Recursively solve the left subtree.
3. Recursively solve the right subtree.
4. Combine the results.
```

Basic recursive structure:

```javascript
function traverse(root) {
    if (root === null) {
        return;
    }

    // Process current node

    traverse(root.left);

    traverse(root.right);
}
```

The key question in tree recursion is:

> **"What should my function return for the current node?"**

Once this is clear, many tree problems become easier to solve.

---

# ⭐ Quick Revision Summary

```text
Tree
│
├── Non-linear + Hierarchical
├── Root → Topmost node
├── Parent → Node above
├── Child → Node below
├── Sibling → Same parent
├── Leaf → No children
├── Internal Node → Has at least 1 child
├── Depth → Root → Node
├── Height → Node → Deepest Leaf
├── Subtree → Node + Descendants
│
├── General Tree → N children
├── Binary Tree → Max 2 children
├── BST → Left < Root < Right
├── Complete → Last level left-to-right
├── Full → 0 or 2 children
├── Perfect → Full + same leaf level
└── Balanced → Height ≈ O(log N)

Traversals:
│
├── DFS
│   ├── Preorder  → Root → Left → Right
│   ├── Inorder   → Left → Root → Right
│   └── Postorder → Left → Right → Root
│
└── BFS
    └── Level Order → Level by Level

Key Rules:
├── BST + Inorder = Sorted Order
├── DFS → Recursion / Stack
├── BFS → Queue
└── Tree Problems → Think Recursion
```
