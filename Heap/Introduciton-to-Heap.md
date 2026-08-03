# 🌳 Heap — Quick Revision

A **Heap** is a specialized **Complete Binary Tree** that satisfies the **Heap Property**.

There are two types:

* **Min Heap**
* **Max Heap**

---

# 1. Complete Binary Tree

A Complete Binary Tree is a binary tree where:

* Every level is completely filled **except possibly the last level**.
* The last level is filled **from left to right**.

Example:

```text
        10
       /  \
      20   30
     / \   /
    40 50 60
```

✅ Complete Binary Tree

---

# 2. Heap Property

A Heap only guarantees the relationship between a **parent** and its **children**.

It **does NOT** maintain sorted order.

---

# 3. Min Heap

### Property

```text
Parent ≤ Children
```

Example:

```text
        5
      /   \
     8     9
    / \   /
   12 15 20
```

Properties:

* Smallest element is always at the root.
* Every parent is smaller than or equal to its children.

### Complexity

```text
Peek Minimum : O(1)
Insert       : O(log N)
Delete Min   : O(log N)
```

---

# 4. Max Heap

### Property

```text
Parent ≥ Children
```

Example:

```text
        20
      /    \
     15     18
    / \     /
   10 12   14
```

Properties:

* Largest element is always at the root.
* Every parent is greater than or equal to its children.

### Complexity

```text
Peek Maximum : O(1)
Insert       : O(log N)
Delete Max   : O(log N)
```

---

# 5. Heap vs BST

| Heap                         | BST                              |
| ---------------------------- | -------------------------------- |
| Complete Binary Tree         | Binary Search Tree               |
| Parent follows Heap Property | Left < Root < Right              |
| Fast Min/Max retrieval       | Fast Searching                   |
| Root is Min/Max              | Inorder gives sorted order       |
| Searching is O(N)            | Searching is O(log N) (balanced) |

---

# 6. Array Representation

Heaps are usually stored in an **array**, not with node pointers.

Example:

```text
        10
       /  \
      20   30
     / \   /
    40 50 60
```

Array:

```text
[10, 20, 30, 40, 50, 60]
```

Index formulas (0-based indexing):

```text
Parent(i) = Math.floor((i - 1) / 2)

Left Child  = 2 * i + 1

Right Child = 2 * i + 2
```

Index formulas (1-based indexing):

```text
Parent(i) = Math.floor(i / 2)

Left Child  = 2 * i

Right Child = 2 * i + 1
```

These formulas are very important.

---

# 7. Heap Operations

### Insert

* Insert at the last position.
* Perform **Heapify Up (Bubble Up)** until the Heap Property is restored.

Time:

```text
O(log N)
```

---

### Delete Root

* Replace the root with the last element.
* Remove the last element.
* Perform **Heapify Down (Bubble Down)** until the Heap Property is restored.

Time:

```text
O(log N)
```

---

### Peek

Simply return the root.

Time:

```text
O(1)
```

---

# 8. Traversal

❌ Heap traversals are **not sorted**.

```text
Inorder  ≠ Sorted
Preorder ≠ Sorted
Postorder ≠ Sorted
```

Only the root is guaranteed to be the minimum (Min Heap) or maximum (Max Heap).

---

# 9. Common Applications

* Priority Queue ⭐⭐⭐
* Dijkstra's Algorithm
* Prim's Algorithm
* Top K Frequent Elements
* Kth Largest / Smallest Element
* Merge K Sorted Lists
* Heap Sort

---

# 10. Time Complexity

| Operation      | Time     |
| -------------- | -------- |
| Peek Min / Max | O(1)     |
| Insert         | O(log N) |
| Delete Root    | O(log N) |
| Search         | O(N)     |
| Build Heap     | O(N)     |

---

# 🧠 Heap Quick Revision

```text
Heap
│
├── Complete Binary Tree
│
├── Min Heap
│   ├── Parent ≤ Children
│   └── Root = Minimum
│
├── Max Heap
│   ├── Parent ≥ Children
│   └── Root = Maximum
│
├── Stored as Array
│   ├── Parent = (i-1)/2
│   ├── Left = 2i+1
│   └── Right = 2i+2
│
├── Operations
│   ├── Peek      → O(1)
│   ├── Insert    → O(log N)
│   ├── Delete    → O(log N)
│   └── Build     → O(N)
│
└── Main Use
    └── Priority Queue
```

# ⭐ Interview Points

1. A Heap is a **Complete Binary Tree**.
2. **Min Heap:** Parent ≤ Children.
3. **Max Heap:** Parent ≥ Children.
4. **Root always stores the Min/Max element.**
5. Heaps are typically implemented using an **array**.
6. **Searching is O(N)** because only the parent-child relationship is maintained.
7. **Insert/Delete = O(log N)** due to Heapify Up/Down.
8. **Peek = O(1)**.
9. **Build Heap = O(N)** (commonly asked in interviews).
10. **Priority Queue is the most common application of a Heap.**
