class PriorityQueue{

    constructor(){
        this.pq = [];
    }

    enqueue(value, priority){
        if(!this.pq.length){
            this.pq.push({value, priority});
            return;
        }
        
        this.pq.push({value, priority});
        this.heapifyUp();
    }

    heapifyUp(){
        let idx = this.pq.length-1;
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);

            if(this.pq[parentIdx].priority < this.pq[idx].priority){
                [this.pq[parentIdx], this.pq[idx]] = [this.pq[idx], this.pq[parentIdx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    dequeue(){

        if(this.pq.length === 0) return null;
        if(this.pq.length === 1) return this.pq.pop();

        const top = this.pq[0];
        this.pq[0] = this.pq.pop();
        this.heapifyDown(0);
        return top;
    }

    heapifyDown(i){
        let n = this.pq.length;
        while(true){
            let max = i;

            let leftIdx = 2 * i + 1;
            let rightIdx = 2 * i + 2;

            if(leftIdx < n && this.pq[leftIdx].priority > this.pq[max].priority){
                max = leftIdx;
            }
            if(rightIdx < n && this.pq[rightIdx].priority > this.pq[max].priority){
                max = rightIdx;
            }

            if(max === i) break;

            [this.pq[i], this.pq[max]] = [this.pq[max], this.pq[i]];
            i = max;
        }
    }

    isEmpty(){
        return this.pq.length === 0;
    }

    size(){
        return this.pq.length;
    }

    peek(){
        if(!this.pq.length) return;
        return this.pq[this.pq.length-1]
    }
}


const pq = new PriorityQueue();
pq.enqueue("Headache", 1);
pq.enqueue("Heart Attack", 4);
pq.enqueue("Fever", 2);
pq.enqueue("Accident", 3);

console.log(pq.pq)

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.pq)
pq.enqueue("Heart Attack", 4);
console.log(pq.pq)
console.log(pq.dequeue());
console.log(pq.pq)