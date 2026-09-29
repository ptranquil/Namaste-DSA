/**
Floyd Warshall Algorithm:
The Floyd–Warshall algorithm works by maintaining a two-dimensional array that represents the distances between nodes. Initially, this array is filled using only the direct edges between nodes. Then, the algorithm gradually updates these distances by checking if shorter paths exist through intermediate nodes.

This algorithm works for both the directed and undirected weighted graphs and can handle graphs with both positive and negative weight edges.

Note: It does not work for the graphs with negative cycles (where the sum of the edges in a cycle is negative). 

*/
function floydWarshal(edges, V) {
    // Matrix Formation
    let dist = Array.from({ length: V }, (_, i) =>
        Array.from({ length: V }, (_, j) => i === j ? 0 : Infinity)
    )

    for (let [i, j, w] of edges) {
        dist[i][j] = w
    }
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                dist[i][j] = Math.min(
                    dist[i][j],
                    dist[i][k] + dist[k][j]
                )
            }
        }
    }
    return dist;
}

const edges = [
    [0, 1, 2],
    [1, 0, 7],
    [1, 2, 3],
    [2, 1, 8],
    [2, 3, 2],
    [3, 0, 1],
    [3, 1, 5]
]
console.log(floydWarshal(edges, 4))

/**
TC: O(N^3)
SC: O(N^2) 
where n is the no of vertices
 */