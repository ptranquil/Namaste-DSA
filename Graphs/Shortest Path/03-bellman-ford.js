/**

Bellman Ford Algorithm
- It is used to find the shorted path in a weighted graph with negative weight
- Its states that after V-1 time relaxation it will gives the shorted path
- But it fails when even after V-1 time the relxation happens and the weight changes. Usulally happens when we have negative weighted cycle


Time Complexity: O(V x E) = O(n2)
If we assume: V = n and E = n

Space Complexity: O(V)

 */

function bellmanford(edges, V, src) {
    let dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < V - 1; i++){
        let updated = false;
        for (let [u, v, w] of edges) {
            if (dist[u] != Infinity && (dist[u] + w) < dist[v]) {
                dist[v] = dist[u] + w;
                updated = true
            }
        }
        if (!updated) break;
    }

    for (let [u, v, w] of edges) {
        if (dist[u] != Infinity && (dist[u] + w) < dist[v]) {
            console.log('Negative weight cycle detected');
            return null
        }
    }
    return dist;
}
const edges = [
    // [u,v,w]
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 5],
    [1, 4, -1],
    [2, 1, -2],
    [2, 4, 1],
    [3, 2, -2],
    [3, 5, -1],
    [4, 6, 3],
    [5, 6, 3],
    
]

// const edges = [
//     [0, 1, 4],
//     [1, 2, -1],
//     [2, 3, -2],
//     [3,1,0]
// ]

let V = 7
console.log(bellmanford(edges, V, 0))