/**
 * 787. Cheapest Flights Within K Stops
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
 */

/**
Approach:

Using DFS with the Adjacency list
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = Array.from({ length: n }, () => []);
    for (let [from, to, price] of flights) {
        graph[from].push([to, price]);
    }

    let minPrice = new Array(n).fill(Infinity);
    minPrice[src] = 0;
    // src, cost, stops
    let q = [[src, 0, 0]];
    let front = 0;
    while (front < q.length) {
        let [curr, currPrice, stops] = q[front++];
        if (stops > k) continue;
        for (let [neighbor, neighborPrice] of graph[curr]) {
            let newPrice = neighborPrice + currPrice;
            if (newPrice < minPrice[neighbor]) {
                minPrice[neighbor] = newPrice;
                q.push([neighbor, newPrice, stops + 1])
            }
        }
    }

    return minPrice[dst] === Infinity ? -1 : minPrice[dst];
};