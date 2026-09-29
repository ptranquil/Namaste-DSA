class MinPriorityQueue {
    constructor(config) {
        this.priority = config.priority;
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    enqueue(element) {
        this.heap.push(element);
        this._bubbleUp();
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const top = this.heap[0];
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this._bubbleDown();
        }

        return { element: top };
    }

    _bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.priority(this.heap[i]) < this.priority(this.heap[parent])) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    _bubbleDown() {
        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < this.heap.length &&
                this.priority(this.heap[left]) < this.priority(this.heap[smallest])) {
                smallest = left;
            }

            if (right < this.heap.length &&
                this.priority(this.heap[right]) < this.priority(this.heap[smallest])) {
                smallest = right;
            }

            if (smallest !== i) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else {
                break;
            }
        }
    }
}

// Prims algorithm to find the minimum spanning tree
function primsMST(graph, n){
    let visited = new Array(n).fill(false);
    let pq = new MinPriorityQueue({ priority: (x) => x[1]});

    pq.enqueue([0,0]);
    
    visitedNode = 0;
    let mstCount = 0;
    while(!pq.isEmpty()){
        let [node, weight] = pq.dequeue().element;
        if(visited[node]) continue;
        
        visited[node] = true;
        visitedNode++;
        mstCount+=weight;
        
        for(let [neighbor, neighborWeight] of graph[node]){
            if(!visited[neighbor]){
                pq.enqueue([neighbor, neighborWeight])
            }
        }
    }
    return mstCount;
}

// const graph = [
//     [[1,4], [2,2], [3,5]],
//     [[0,4], [3,1]],
//     [[0,2], [3,3]],
//     [[1,1], [2,3]]
// ]

const graph = [
    [[1, 2], [3, 1], [4, 4]],
    [[0, 2], [2, 3], [3, 3], [5, 7]],
    [[1, 3], [3, 5], [5, 8]],
    [[0, 1], [1, 3], [2, 5], [4, 9]],
    [[0, 4], [3, 9]],
    [[1, 7], [2, 8]]
]


console.log(primsMST(graph, 6))

