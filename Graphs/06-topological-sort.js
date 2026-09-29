/**
 * Topological Sort
 * https://namastedev.com/practice/topological-sort-dfs
 */

// DFS
function topologicalSort(n, adj) {

  let ans = [];
  let visited = new Set();
  function dfs(curr) {
    visited.add(curr);
    for (let neighbor of adj[curr]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    ans.push(curr);
  }

  for (let i = 0; i < n; i++){
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();

}

module.exports = { topologicalSort };



// BFS - Kahn Algorithm
function topologicalSort(n, adj) {
  // your solution here
  // create indegree
  let indegree = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let node of adj[i]) {
      indegree[node]++;
    }
  }

  let q = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.push(i)
    }
  }

  let result = [];
  while (q.length) {
    let curr = q.shift();
    result.push(curr);
    for (let neighbor of adj[curr]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        q.push(neighbor);
      }
    }
  }
  return result;
}

module.exports = { topologicalSort };