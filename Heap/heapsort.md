## Heap Sort Algorithm

### Steps

1. Convert the given array into a **Max Heap**.
2. The largest element is now at the root (index `0`).
3. Swap the root with the last element of the heap.
4. Reduce the heap size by `1` (ignore the last element since it is now in its correct sorted position).
5. Perform **Heapify Down** on the new root to restore the Max Heap property.
6. Repeat Steps **3–5** until the heap size becomes `1`.

---

### Example

```text
Input:
[4, 10, 3, 5, 1]

Step 1: Build Max Heap
[10, 5, 3, 4, 1]

Step 2: Swap root with last
[1, 5, 3, 4, 10]

Step 3: Heapify Down
[5, 4, 3, 1, 10]

Repeat...

Final Output:
[1, 3, 4, 5, 10]
```

---

## Complexity

| Operation | Time |
|-----------|------|
| Build Max Heap | **O(N)** |
| Heapify (per iteration) | **O(log N)** |
| Total Heap Sort | **O(N log N)** |

### Space Complexity

```text
O(1)
```

(In-place sorting algorithm)

---

## Important Points

- Build a **Max Heap** for **ascending order**.
- Build a **Min Heap** for **descending order** (less common).
- Heap Sort is **in-place**.
- Heap Sort is **not stable** (equal elements may change their relative order).