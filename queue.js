class Queue {
    queue = [];

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    front() {
        return this.isEmpty() ? undefined : this.queue[0];
    }

    back() {
        return this.isEmpty() ? undefined : this.queue[this.queue.length - 1];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.isEmpty() ? undefined : this.queue.shift();
    }
}

let queue = new Queue();
console.log('isEmpty:'+ queue.isEmpty());

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

console.log('isEmpty:'+ queue.isEmpty());

console.log('queue.size:' + queue.size());
console.log('queue.front:' + queue.front());
console.log('queue.back:' + queue.back());

console.log('queue.dequeue:'+queue.dequeue());
console.log('queue.dequeue:'+queue.dequeue());
console.log('queue.dequeue:'+queue.dequeue());
console.log('queue.dequeue:'+queue.dequeue());