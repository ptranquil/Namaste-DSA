class UnionFind{
    constructor(N){
        this.parent = new Array(N).fill(0).map((_,i) => i)
        this.rank = new Array(N).fill(0);
    }

    find(x){
        if(this.parent[x] != x){
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x];
    }

    union(x,y){
        let rootX = this.find(x);
        let rootY = this.find(y);

        // check if x and y have same parent
        if(rootX === rootY) return false;

        if(this.rank[rootX] > this.rank[rootY]){
            this.parent[rootY] = rootX;
        } else if(this.rank[rootY] > this.rank[rootX]){
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++
        }
        return true;
    }   
}

function krushkal(edges){
    edges.sort((a,b) => a[2]-b[2]);
    let N = edges.length;
    let mstCost = 0;
    const uf = new UnionFind(N)
    for(let [u,v,w] of edges){
        if(uf.union(u,v)){
            mstCost+=w
        }
    }
    return mstCost;
}

const edges = [
    [0,1,1], [0,2,8],
    [1,2,9],
    [2,3,2], [2,4,7], [2,5,6],
    [3,4,3],
    [4,5,10]
]

// const edges = [
//     [0,1,4], [0,2,4], [1,2,2],
//     [2,3,3], [2,5,2], [2,4,4],
//     [3,4,3], [5,4,3]
// ]

console.log(krushkal(edges));
