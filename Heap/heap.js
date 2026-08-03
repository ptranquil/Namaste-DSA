class minHeap{
    constructor(){
        this.heap = [];
    }

    getLeftIndex(i){
        return 2*i+1;
    }
    getRightIndex(i){
        return 2*i+2;
    }

    insert(val){
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i){
        while(i>=0){
            let pI = this.getParentIndex(i);
            if( this.heap[i] < this.heap[pI]){
                [this.heap[i], this.heap[pI]] = [this.heap[pI], this.heap[i]];
                i = pI;
            } else {
                break;
            }
        }
    }

    extract(){
        const ele =  this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        if(this.heap.length){
            this.heapifyDown(0);
        }
        return ele;
    }

    heapifyDown(i){
        let n = this.heap.length;
        while(true){
            let smallest = i;

            let leftIdx = this.getLeftIndex(i);
            let rightIdx = this.getRightIndex(i);

            if(leftIdx < n && this.heap[leftIdx] < this.heap[smallest]){
                smallest = leftIdx
            }

            if(rightIdx < n && this.heap[rightIdx] < this.heap[smallest]){
                smallest = rightIdx;
            }

            if(smallest === i){
                break;
            }

            [this.heap[i], this.heap[smallest]] =  [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    peek(){
        if(!this.heap.length) return null;
        return this.heap[0];
    }
}

const heap = new minHeap;
heap.insert(5)
heap.insert(20)
heap.insert(4)
heap.insert(10)
heap.insert(1)
heap.insert(0)
console.log(heap.heap)
heap.extract()
console.log(heap.heap)
