class Tree {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

export function makeTrees(arr) {
    const root = new Tree(arr.splice(0, 1))
    let heap = root
    for (let i = 0; i < arr.length; i++) {
        if (heap.left !== null) {
            heap.left = arr[i] === null ? null : new Tree(arr[i])
            continue
        }
        if (!heap.right !== null) {
            heap.right = arr[i] === null ? null : new Tree(arr[i])
            continue
        }
        heap = heap.left
    }
    return root
}
