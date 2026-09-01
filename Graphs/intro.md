# GRAPH — DATA STRUCTURE

## 1. What is a Graph?

A **Graph** is a data structure used to represent **relationships and connections between objects**.

A graph consists of:

* **Vertices (Nodes):** Represent entities or objects.
* **Edges:** Represent links or connections between vertices.

### Mathematical Representation

A graph is represented as:

**G = (V, E)**

Where:

* **V = Set of Vertices**
* **E = Set of Edges**

> **Important:** A graph can contain a node without any edge. Such a node is called an **isolated vertex/node**.

A node can be represented using a **value**, and edges represent its **connections** with other nodes.

---

# 2. Important Graph Terms

### V — Vertices

The nodes/entities in the graph.

### E — Edges

The connections between vertices.

### D — Degree

The **number of edges connected to a node**.

### P — Path

A sequence of vertices where each consecutive pair is connected by an edge.

**Example:**
A → B → C → D

### C — Cycle

A path that **starts and ends at the same vertex**.

**Example:**
A → B → C → A

### Adjacent Vertices

Two vertices are **adjacent** if there is an edge directly connecting them.

### Incident Edge

An edge is **incident on a vertex** if that edge is connected to the vertex.

---

# 3. Real-World Analogy

Graphs are useful whenever we need to represent **connections or relationships**.

### 👥 Social Networks

**Facebook friends / mutual friends**

* Vertices → Users
* Edges → Friend connections

### 🗺️ Maps

**Connection between cities**

* Vertices → Cities/Locations
* Edges → Roads
* Edge weight → Distance/time/cost

---

# 4. Types of Graphs

## 1. Undirected Graph

Examples:

* Facebook friendships
* Connection between cities

### Meaning

The relationship between nodes is **bi-directional**.

If:

**A — B**

then A is connected to B **and** B is connected to A.

### Degree

In an undirected graph:

**Degree = Number of edges connected to a node**

---

## 2. Directed Graph / Digraph

Examples:

* Instagram followers
* Web pages
* Node.js module/package dependencies

### Meaning

The relationship is **one-way** and edges have a direction.

Example:

**A → B**

This can mean:

> A follows B

It does **not necessarily mean** B follows A.

### Two Types of Degree

#### In-Degree

Number of edges **pointing into** a node.

#### Out-Degree

Number of edges **pointing outward from** a node.

Example:

**A → B**

For B:

* In-degree = 1
* Out-degree = 0

For A:

* In-degree = 0
* Out-degree = 1

---

## 3. Weighted Graph

A graph where edges have an associated **weight/value**.

The weight can represent:

* Cost
* Distance
* Time
* Price
* Capacity
* Risk
* etc.

Example:

**A —5— B**

Here, the edge between A and B has a weight of **5**.

### Real-world example

Google Maps:

**City A — 20 km — City B**

The edge weight represents the distance.

---

## 4. Unweighted Graph

A graph where all edges are treated as **equal**.

You only care about:

> **"Are these nodes connected?"**

You do **not** care about the cost/distance/time of the connection.

Example:

**A — B — C**

Every connection is simply considered an edge.

---

## 5. Cyclic Graph

A graph that contains **at least one cycle**.

Example:

**A → B → C → A**

The path returns to the starting node.

### Remember

**Cycle = Start → Travel → Return to Start**

---

## 6. Acyclic Graph

A graph that contains **no cycles**.

### DAG

**DAG = Directed Acyclic Graph**

It is:

* Directed
* Contains no cycles

### Examples

* NPM/package dependencies
* Version-control dependency relationships
* Task scheduling
* Build systems

---

# 7. Graph vs Tree

### Graph

A **Graph** is a general data structure consisting of vertices and edges.

It can have:

* Cycles
* Multiple connections
* Directed edges
* Undirected edges
* Weighted edges
* Disconnected components

### Tree

A **Tree is a special type of graph** used to represent **hierarchical data**.

It represents:

**Parent → Child relationships**

Examples:

* File systems
* Organization hierarchy
* HTML DOM
* Family hierarchy

### Important

A tree:

* Has no cycles
* Is connected
* Has exactly one path between any two nodes

An **undirected tree** is not technically a DAG because DAG means *directed* acyclic graph.

However, if we direct all tree edges from **parent → child**, the resulting structure is a **DAG**.

> **Easy way to remember:**
> **Every tree is a graph, but not every graph is a tree.**

---

# 8. Connected Graph

A graph is **connected** when every node is reachable from every other node through some path.

In simple terms:

> **Everything is reachable.**

Example:

**A — B — C — D**

You can travel from any node to another.

---

# 9. Disconnected / Unconnected Graph

A graph is **disconnected** when some nodes or groups of nodes cannot be reached from other nodes.

It can contain separate **connected components/clusters**.

Example:

**A — B — C**

**D — E**

There is no connection between the two groups.

### Real-world example

Different friend groups that have no mutual connection.

> **Note:** An isolated node is also a disconnected component by itself.

---

# 10. Important Graph Formulas

### Undirected Graph

The sum of degrees of all vertices is:

**Σ Degree = 2 × |E|**

Why?

Because every edge connects **two vertices**, so every edge contributes 2 to the total degree.

---

### Directed Graph

The total in-degree is equal to the total out-degree:

**Σ In-Degree = Σ Out-Degree = |E|**

Every directed edge:

* Adds 1 to the in-degree of one node
* Adds 1 to the out-degree of another node

---

# 11. Quick Visual Understanding

### Undirected Edge

**A — B**

No direction.

---

### Directed Edge

**A → B**

Direction is from A to B.

---

### Weighted Edge

**A —5— B**

The edge has a value/weight of 5.

---

### Isolated Node

**A**

A node can exist without any edge.

---

# 12. Summary — Real-World Examples

| Real-World Example   | Vertices | Edges             | Graph Type                    |
| -------------------- | -------- | ----------------- | ----------------------------- |
| **Facebook**         | User     | Friend connection | Undirected                    |
| **Instagram**        | User     | Follow            | Directed                      |
| **Google Maps**      | Location | Road + distance   | Weighted, Directed/Undirected |
| **NPM Dependencies** | Package  | Dependency        | DAG                           |
| **Airline Network**  | Airport  | Flight            | Weighted, Directed            |
| **Web Crawler**      | Web page | Hyperlink         | Directed                      |

---

# 🧠 FINAL REVISION

### Graph =

**Vertices + Edges**

**G = (V, E)**

### Remember:

* **Vertex/Node** → Object/entity
* **Edge** → Connection
* **Degree** → Number of connections
* **Path** → Route from one node to another
* **Cycle** → Path that returns to the starting node
* **Directed** → One-way connection
* **Undirected** → Two-way connection
* **Weighted** → Edges have values
* **Unweighted** → Edges treated equally
* **Cyclic** → Contains a cycle
* **Acyclic** → No cycle
* **Connected** → Everything is reachable
* **Disconnected** → Separate components exist
* **DAG** → Directed + Acyclic Graph
* **Tree** → Special type of graph representing hierarchy

### ⭐ Most Important Relationship

**Graph → General Structure**

**Tree → Special Type of Graph**

**DAG → Directed Graph + No Cycles**
