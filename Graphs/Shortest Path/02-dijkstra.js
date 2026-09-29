class MinHeap {

    constructor(){
        this.heap = [];
    }

    getLeftIndex(i){
        return 2 * i + 1;
    }

    getRightIndex(i){
        return 2 * i + 2;
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2);
    }

    push(val){

        this.heap.push(val);

        let lastIndex = this.heap.length - 1;

        this.heapifyUp(lastIndex);
    }

    heapifyUp(i){

        while(i > 0){

            let pI = this.getParentIndex(i);

            // Compare DISTANCE
            if(this.heap[i][1] < this.heap[pI][1]){

                [this.heap[i], this.heap[pI]] =
                    [this.heap[pI], this.heap[i]];

                i = pI;

            } else {
                break;
            }
        }
    }

    pop(){

        if(this.heap.length === 0) return null;

        if(this.heap.length === 1){
            return this.heap.pop();
        }

        const ele = this.heap[0];

        // Move last element to root AND remove it
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return ele;
    }

    heapifyDown(i){

        let n = this.heap.length;

        while(true){

            let smallest = i;

            let leftIdx = this.getLeftIndex(i);
            let rightIdx = this.getRightIndex(i);

            if(
                leftIdx < n &&
                this.heap[leftIdx][1] < this.heap[smallest][1]
            ){
                smallest = leftIdx;
            }

            if(
                rightIdx < n &&
                this.heap[rightIdx][1] < this.heap[smallest][1]
            ){
                smallest = rightIdx;
            }

            if(smallest === i){
                break;
            }

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }

    peek(){
        if(!this.heap.length) return null;
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }
}

function dijkstra(graph, src) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MinHeap();
    pq.push([src, 0]);

    while (pq.size()) {
        let [node, nodeDist] = pq.pop();

        // check for stale value
        if (nodeDist > dist[node]) continue;

        for (let [neighbor, edgeWeight] of graph[node]) {
            let newDist = dist[node] + edgeWeight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([neighbor, newDist]);
            }
        }
    }

    return dist;
}


let graph = [
    [[1, 2], [2, 4]], //0
    [[2, 1], [3, 7]], // 1
    [[4, 3], [5, 1]], // 2
    [[6, 1]], //3
    [[3, 2], [6, 5]], //4
    [[3, 3], [6, 8]], //5
    []
]

console.log(dijkstra(graph, 0))