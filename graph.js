class Node {
    constructor(value, neighbor = []) {
        this.value = value;
        this.neighbors = neighbor;
    }
}

class Graph {
    constructor(nodes) {
        this.node = nodes;
    }
}