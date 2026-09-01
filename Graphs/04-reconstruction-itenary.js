/**
 * 332. Reconstruct Itinerary
 * https://leetcode.com/problems/reconstruct-itinerary/
 */

var findItinerary = function (tickets) {
    // we cannot use greedy as this will not explore all graph
    // Sort the adjacent list to maintain lexical order
    // keep removing edges from adj list to maintain visited

    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    // sort
    for (let node in graph) {
        graph[node].sort();
    }

    let path = []
    function dfs(curr) {
        let destinations = graph[curr] || [];
        while (destinations.length) {
            let neighbor = graph[curr].shift();
            dfs(neighbor);
        }
        path.push(curr);
    }
    dfs("JFK");
    return path.reverse();
};