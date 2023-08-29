class Stack {
    stack = [];

    isEmpty() {
        return this.stack.length === 0;
        // return this.size() === 0;
    }

    size() {
        return this.stack.length;
    }

    // 栈顶
    peek() {
        return this.stack[this.stack.length - 1];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        return this.isEmpty() ? null : this.stack.pop();
    }
}

let stack = new Stack();
console.log('isEmpty:'+ stack.isEmpty());

stack.push(1);
stack.push(3);
stack.push(5);

console.log('isEmpty:'+ stack.isEmpty());

console.log('stack.size:' + stack.size());
console.log('stack.peek:' + stack.peek());

console.log('stack.pop:'+stack.pop());
console.log('stack.pop:'+stack.pop());
console.log('stack.pop:'+stack.pop());
console.log('stack.pop:'+stack.pop());