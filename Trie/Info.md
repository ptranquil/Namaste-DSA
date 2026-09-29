# Trie

 ## What is a Trie?

 A **Trie** is a tree-like data structure used to store strings efficiently, especially when **prefix-based operations** are required.

 It is also known as a **Prefix Tree**.

 ### Key Ideas

 - Words are stored **character by character**.
- **Common prefixes are shared** between words.
- Each path from the root represents a **prefix**.
- Some nodes are marked to indicate the **end of a complete word**.

 ### Example

 Consider these words:

```
car
cat
cap
cup
cupboard
cut
cuttlr
cot
```

 A Trie allows us to efficiently answer:

 > **"Find all words that start with `ca`."**

 The Trie can directly follow:

```
root → c → a
```

 and then explore all words below that prefix.

---

 ## Why Do We Need a Trie?

 A Trie is useful when we frequently work with **prefixes of strings**.

 For example:

```
car
cat
cap
```

 All three words share the prefix:

```
ca
```

 Instead of treating every word independently, a Trie **shares the common path**:

```
    c
    |
    a
   /|\
  r t p
```

 This makes prefix-based operations efficient.

---

 ## Time Complexity

 Let:

 - `n` = length of the word
- `P` = length of the prefix

 | Operation | Time Complexity | Explanation |
| --- | --- | --- |
| Insert | **O(n)** | Visit one node per character |
| Search | **O(n)** | Check characters one by one |
| Prefix Search | **O(P)** | Traverse only the prefix |

 > **Note:** Finding _all_ words matching a prefix additionally depends on how many matching characters/nodes must be traversed.

---

 ## Space Complexity

 Trie space is approximately:

```
O(N)
```

 where `N` is the **total number of characters stored in the Trie**.

 Because common prefixes are shared, the actual number of nodes can be **less than the total number of characters across all words**.

---

 ## When to Use a Trie?

 Use a Trie when the problem involves:

 1. **Prefix-based operations**
   - Find words with a given prefix
   - Check whether a prefix exists
2. **Autocomplete**
   - Search suggestions while typing
3. **Dictionary-based problems**
   - Store and search a collection of words
4. **Word suggestions**
   - Find possible words based on a prefix
5. **Spell checking**
   - Check whether a word or prefix exists

 ### Common Examples

```
Autocomplete
Search suggestions
Dictionary
Spell checker
Word games
Prefix matching
```

---

 ## When NOT to Use a Trie?

 A Trie may not be the best choice when:

 1. **Only exact search is required**
   - A HashMap can often provide simpler and very fast lookup.
2. **Memory is a major concern**
   - Tries can have significant memory overhead because of their nodes and child references.
3. **The dataset is very small**
   - A Trie may add unnecessary complexity.

 ### Trie vs HashMap

 If the requirement is only:

```
"Does this exact word exist?"
```

 A **HashMap/HashSet** is often a better choice.

 If the requirement is:

```
"Find all words starting with 'ca'."
```

 A **Trie** is usually a better fit.

---

 ## Quick Decision Rule

```
Need exact search only?
        ↓
   HashMap / HashSet

Need prefix search?
        ↓
       Trie
```

---

 ## 🧠 One-Minute Revision

 > **Trie = Prefix Tree**

 Remember these 5 points:

 - 🌳 **Tree-like structure**
- 🔤 **Stores characters one by one**
- 🔗 **Shares common prefixes**
- ⚡ **Excellent for prefix operations**
- 💡 **Used for autocomplete, dictionaries, suggestions, and spell checking**

 ### Complexity

```
Insert        → O(n)
Search        → O(n)
Prefix Search → O(P)
Space         → O(total characters)
```

 ### Main Advantage

```
Prefix-based operations
```

 ### Main Disadvantage

```
Higher memory usage compared to HashMap/HashSet
```