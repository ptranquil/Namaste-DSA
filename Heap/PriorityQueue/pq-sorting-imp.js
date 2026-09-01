// Pririty Queue implementation using sorting + Array

class PriorityQueue{

    constructor(){
        this.pq = [];
    }

    enqueue(value, priority){
        this.pq.push({value, priority});
        this.pq.sort((a, b) => b.priority - a.priority);
    }

    dequeue(){
        return this.pq.shift();
    }

    size(){
        return this.pq.length;
    }

    isEmpty(){
        return this.pq.length === 0;
    }

    peek(){
        if(this.pq.length){
            return this.pq[this.pq.length-1]; 
        }
        return undefined;
    }

}

const pq = new PriorityQueue();
pq.enqueue('Headache',1);
pq.enqueue('Fever',2);
pq.enqueue('Accident',5);
console.log(pq.pq)
pq.dequeue();
console.log(pq.pq)
console.log(pq.size())
console.log(pq.isEmpty())
console.log(pq.peek())