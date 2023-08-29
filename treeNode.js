class TreeNode {
    constructor(val, left, right) {
        this.val = val ? val : 0;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }
}

// 前中后序遍历
function traversePreOrder(treeNode) {
    // 访问不存在的结点（叶节点的没有左右节点），会直接停止当前函数的执行。
    if (!treeNode) {
        return;
    }

    console.log('treeNode.value:' + treeNode.value);
    this.traversePreOrder(treeNode.left);
    this.traversePreOrder(treeNode.right);
}

function traverseInOrder(treeNode) {
    if (!treeNode) {
        return;
    }

    this.traverseInOrder(treeNode.left);
    console.log('treeNode.value:' + treeNode.value);
    this.traverseInOrder(treeNode.right);
}

function traversePreOrder(treeNode) {
    if (!treeNode) {
        return;
    }

    this.traversePreOrder(treeNode.left);
    this.traversePreOrder(treeNode.right);
    console.log('treeNode.value:' + treeNode.value);
}

// 广度优先遍历，不考虑前中后序
function traverseBreadthFirst() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
        let current = queue.shift();
        result.push(current.val);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    return result;
}