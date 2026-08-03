# 🌳 Binary Search Tree (BST) — Quick Revision

A **Binary Search Tree (BST)** is a Binary Tree that follows a specific ordering property.

```text
For every node:

        Left Subtree < Root < Right Subtree
```

Example:

```text
              8
            /   \
           4     12
          / \    / \
         2   6  10  14
        / \      \
       1   3      11
```

For every node:

* All values in the **left subtree** are smaller.
* All values in the **right subtree** are greater.

> ⚠️ Duplicate values depend on the BST implementation. Some BSTs don't allow duplicates, while others consistently place them on one side.

---

# 1. BST Properties

### Binary Tree

Each node can have at most:

```text
2 children
├── Left
└── Right
```

### Search Property

```text
Left < Root < Right
```

This property applies **recursively to every subtree**, not just the immediate children.

Example:

```text
        8
       / \
      4   12
     / \
    2   6
```

For node `8`:

```text
Left Subtree  → 2, 4, 6
Right Subtree → 12
```

Therefore:

```text
2, 4, 6 < 8 < 12
```

---

# 2. Search in BST

The BST property allows us to eliminate half of the search space at every step in a balanced tree.

### Logic

```text
If target === root.val
    → Found

If target < root.val
    → Search Left

If target > root.val
    → Search Right
```

### Example

Search for `6`:

```text
        8
       / \
      4   12
     / \
    2   6
```

```text
6 < 8
↓
Go Left

6 > 4
↓
Go Right

6 === 6
↓
Found
```

### Recursive

```javascript
function searchBST(root, val) {
    if (!root || root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    }

    return searchBST(root.right, val);
}
```

### Complexity

```text
Average / Balanced → O(log N)
Worst Case         → O(N)
```

---

# 3. Insert into BST

To insert a value:

1. Compare the value with the current node.
2. Smaller → Go Left.
3. Greater → Go Right.
4. When you reach `null`, insert the new node.

Example: Insert `5`

```text
        8
       / \
      4   12
     / \
    2   6
```

```text
5 < 8
↓
Left

5 > 4
↓
Right

5 < 6
↓
Left

Left is NULL
↓
Insert 5
```

Result:

```text
        8
       / \
      4   12
     / \
    2   6
       /
      5
```

### Complexity

```text
Average / Balanced → O(log N)
Worst Case         → O(N)
```

---

# 4. Delete from BST

Deletion has **3 cases**.

## Case 1: Node is a Leaf

Simply remove it.

```text
Before:

    5
   / \
  3   7

Delete 3:

    5
     \
      7
```

---

## Case 2: Node Has One Child

Replace the node with its child.

```text
Before:

    5
   /
  3
 /
2

Delete 3:

    5
   /
  2
```

---

## Case 3: Node Has Two Children ⭐

Replace the node with either:

* **Inorder Successor** → Smallest value in the right subtree
* **Inorder Predecessor** → Largest value in the left subtree

Example:

```text
        8
       / \
      4   12
         /  \
        10   14
```

Delete `12`.

The inorder successor is:

```text
10
```

Replace `12` with `10`:

```text
        8
       / \
      4   10
            \
             14
```

### Complexity

```text
Average / Balanced → O(log N)
Worst Case         → O(N)
```

---

# 5. Inorder Traversal ⭐⭐⭐

One of the most important BST concepts:

```text
Inorder = Left → Root → Right
```

For a BST:

```text
Inorder Traversal = Sorted Order
```

Example:

```text
        8
       / \
      4   12
     / \  / \
    2   6 10 14
```

Inorder:

```text
2 → 4 → 6 → 8 → 10 → 12 → 14
```

### Remember

```text
BST + Inorder
      ↓
Sorted Order
```

This is extremely useful for:

* Checking if a Binary Tree is a valid BST
* Finding the Kth smallest element
* Finding values in sorted order
* BST iterator problems

---

# 6. Validate BST ⭐⭐⭐

To validate a BST, you cannot only compare a node with its immediate children.

### Wrong Approach

```text
        5
       / \
      3   7
         /
        4 ❌
```

`4 < 7`, so it looks valid locally.

But `4` is in the **right subtree of 5**, so:

```text
4 > 5
```

is required.

Therefore, the tree is invalid.

### Correct Approach

Maintain a valid range for every node.

```text
Root:
(-Infinity, +Infinity)

Left:
(-Infinity, root.val)

Right:
(root.val, +Infinity)
```

### Recursive Solution

```javascript
function isValidBST(root) {

    function validate(node, min, max) {

        if (!node) {
            return true;
        }

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            validate(node.left, min, node.val) &&
            validate(node.right, node.val, max)
        );
    }

    return validate(root, -Infinity, Infinity);
}
```

### Complexity

```text
Time  → O(N)
Space → O(H)
```

---

# 7. Kth Smallest Element ⭐⭐

Because inorder traversal of a BST gives sorted values:

```text
1st Inorder Value → 1st Smallest
2nd Inorder Value → 2nd Smallest
Kth Inorder Value  → Kth Smallest
```

Example:

```text
        5
       / \
      3   7
     / \
    1   4
```

Inorder:

```text
1 → 3 → 4 → 5 → 7
```

If:

```text
k = 3
```

Answer:

```text
4
```

### Key Idea

```text
BST
 ↓
Inorder
 ↓
Sorted Order
 ↓
Kth Element
```

---

# 8. BST Traversal Summary

| Traversal   | Order               | Important Use                   |
| ----------- | ------------------- | ------------------------------- |
| Preorder    | Root → Left → Right | Copy / Serialize                |
| Inorder     | Left → Root → Right | **Sorted BST values**           |
| Postorder   | Left → Right → Root | Delete / Process children first |
| Level Order | Level by Level      | BFS                             |

### ⭐ Most Important

```text
BST → Inorder → Sorted Order
```

---

# 9. Balanced vs Skewed BST

## Balanced BST

```text
          8
        /   \
       4     12
      / \    / \
     2   6  10  14
```

Height:

```text
O(log N)
```

Operations:

```text
Search → O(log N)
Insert → O(log N)
Delete → O(log N)
```

---

## Skewed BST

If values are inserted in sorted order:

```text
1 → 2 → 3 → 4 → 5
```

The tree can become:

```text
1
 \
  2
   \
    3
     \
      4
       \
        5
```

Now the BST behaves like a Linked List.

Height:

```text
O(N)
```

Operations:

```text
Search → O(N)
Insert → O(N)
Delete → O(N)
```

---

# 10. Self-Balancing BST

Self-balancing BSTs maintain approximately `O(log N)` height.

Common examples:

* **AVL Tree**
* **Red-Black Tree**

They use balancing techniques such as **rotations** to prevent the tree from becoming heavily skewed.

---

# 🧠 BST Quick Revision

```text
Binary Search Tree
│
├── Binary Tree
│   └── Maximum 2 children
│
├── Property
│   ├── Left < Root
│   └── Root < Right
│
├── Search
│   ├── Smaller → Left
│   └── Greater → Right
│
├── Insert
│   ├── Smaller → Left
│   └── Greater → Right
│
├── Delete
│   ├── 0 Children → Remove
│   ├── 1 Child    → Replace with Child
│   └── 2 Children → Successor / Predecessor
│
├── Inorder
│   └── Sorted Order ⭐
│
├── Validate BST
│   └── Use Min / Max Range
│
├── Kth Smallest
│   └── Kth element of Inorder
│
└── Complexity
    ├── Balanced → O(log N)
    └── Skewed   → O(N)
```

# ⭐ Most Important Things to Remember

1. **BST property applies to the entire subtree**, not just immediate children.
2. **Inorder traversal of a BST gives sorted order.**
3. **Search / Insert / Delete are `O(log N)` on average** in a balanced BST.
4. A BST can degrade to **`O(N)`** when skewed.
5. **Delete with 2 children** → use inorder successor or predecessor.
6. **Validate BST** → use a valid `min` / `max` range.
7. **Kth smallest** → `Kth` node during inorder traversal.
8. For guaranteed balanced performance, use **self-balancing BSTs** such as AVL or Red-Black Trees.
