class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.head = null;
        this.tail =null;
        // console.log(`capacity: ${this.capacity}`)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        console.log(`get : this.head: ${this.head?.key}`)
        console.log(`this.tail: ${this.tail?.key}`)
        if(this.map.has(key)) {
            let node = this.map.get(key)
            if(this.tail !== node && this.map.size > 1) {
                if(this.head === node) {
                    this.head = this.head.next;
                    this.head.prev = null
                }
                else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
                node.next=null;
                node.prev= this.tail;
                this.tail.next = node;
                this.tail=node;
            }
            return this.map.get(key).val;
        }
        else return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        console.log(`put : this.head: ${this.head?.key}`)
        console.log(`this.tail: ${this.tail?.key}`)
        if(this.map.has(key)) {
            let node= this.map.get(key);
            node.val = value;
            if(this.tail !== node && this.map.size > 1) {
                if(this.head === node) {
                    this.head = this.head.next;
                    this.head.prev = null
                }
                else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
                node.next=null;
                node.prev= this.tail;
                this.tail.next = node;
                this.tail=node;
            }
        }
        else {
            let node = new Node(key, value)
            if(this.map.size === 0) {
                this.head = node;
                this.tail = node;
            }
            else {
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
            }
            if(this.capacity === this.map.size) {
                console.log('capacity over')
                this.map.delete(this.head.key);
                console.log(`this.head: ${this.head?.key}`)
                console.log(`this.tail: ${this.tail?.key}`)
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.map.set(key, node);
        }
    }
}
