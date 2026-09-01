# Backtracking

## What is Backtracking?

Backtracking is a **DFS-based technique** used to explore all possible choices and find valid solutions.

### Mental Model

```text
Choose
  ↓
Explore
  ↓
Undo
```

The **undo** step is what makes it backtracking.

---

## How to Recognize Backtracking?

Think **Backtracking** when the problem asks for:

* All possible solutions
* All combinations
* All permutations
* All subsets
* Generate valid arrangements
* Generate all possible paths
* Choose / skip elements
* Try a choice and revert if it doesn't work
* Find every valid configuration

### Common Keywords

```text
"all possible"
"generate all"
"return all"
"combinations"
"permutations"
"subsets"
"arrangements"
"choose"
"construct"
```

---

## Basic Template

```javascript
function backtrack(path) {

    // Base case
    if (/* solution complete */) {
        result.push([...path]);
        return;
    }

    for (/* every possible choice */) {

        // Choose
        path.push(choice);

        // Explore
        backtrack(path);

        // Undo
        path.pop();
    }
}
```

---

## The 3 Questions

When solving a backtracking problem, ask:

### 1. What are my choices?

```text
At this position, what can I choose?
```

### 2. When is the solution complete?

```text
What is my base condition?
```

### 3. How do I undo my choice?

```text
What needs to be restored after recursion?
```

---

## Common Backtracking Patterns

### Subsets

At every element:

```text
Take
Don't Take
```

```javascript
backtrack(i + 1);
```

---

### Combinations

Choose from the remaining elements:

```javascript
for (let i = start; i < n; i++) {
    path.push(nums[i]);
    backtrack(i + 1);
    path.pop();
}
```

---

### Permutations

Choose **any unused element**:

```javascript
for (let i = 0; i < n; i++) {
    if (used[i]) continue;

    used[i] = true;
    path.push(nums[i]);

    backtrack();

    path.pop();
    used[i] = false;
}
```

---

### N-Queens

Choose a position row-by-row:

```text
Choose → Check constraints → Explore → Undo
```

Usually use `Set`s to track:

```text
Columns
Left Diagonals
Right Diagonals
```

---

## Handling Duplicates

Usually:

```text
Sort first
```

### Subsets / Combinations

Skip duplicates at the **same recursion level**:

```javascript
if (i > start && nums[i] === nums[i - 1]) {
    continue;
}
```

### Permutations

Common condition:

```javascript
if (
    i > 0 &&
    nums[i] === nums[i - 1] &&
    !used[i - 1]
) {
    continue;
}
```

---

## Backtracking vs Recursion

**Recursion** is the mechanism.

**Backtracking** is:

> Recursion + making a choice + undoing that choice.

Example:

```javascript
path.push(x);     // Choose
backtrack();      // Explore
path.pop();       // Undo
```

---

## Quick Recognition

```text
All possible?
      ↓
Backtracking

Subset?
      ↓
Take / Don't Take

Combination?
      ↓
Start Index

Permutation?
      ↓
Used Array / Frequency Map

Duplicates?
      ↓
Sort + Skip Duplicate

Constraint problem?
      ↓
Choose → Validate → Explore → Undo
```

### Golden Rule

> **If you need to explore multiple possible choices and restore the previous state after exploring a choice, think BACKTRACKING.**
