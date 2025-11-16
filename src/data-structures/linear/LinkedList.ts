/**
 * @file LinkedList.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2025 - ResearchIt All Rights Reserved.
 */


class Node {
    next: Node;

    value: any;

    constructor(value: any){
        this.value = value;
        this.next = null
    }
}

// Head [v, n] -> [v1, n1] -> [v2,n2] -> null Tail
class LinkedList {
    private head: Node;

    private size: number;

    constructor() {
        this.size = 0;
    }
    
    addToHead(value: any) {
        const newNode = new Node(value);
        if(this.size === 0) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size += 1;
    }

    print() {
        let current = this.head;
        while(current !== null) {
            console.log(current.value, ' -> ')
            current = current.next;
        }
        console.log(current.value)
    }
}

const linkedList = new LinkedList();
linkedList.addToHead('a');
linkedList.addToHead('b');
linkedList.addToHead('c');
console.log(linkedList);