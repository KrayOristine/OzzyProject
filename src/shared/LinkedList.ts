import * as wex from "./WarEX";

/*
 * Ozzzzymaniac Introduce you a holy List
 * This is a linked list that have implemented useful feature like loop and more
 * Be warned that it only able to run in TSTL context
 */

export class ListNode<T> {
    private _head?: LinkedList<T>; // null value meaning that this node is no longer references to any list
    private _value: T; // Data value
    public next?: ListNode<T>;
    public prev?: ListNode<T>;

    get head() {return this._head;}
    get value() {return this._value};

    private constructor(head: LinkedList<T>, data: T) {
        this._head = head;
        this._value = data;
    }

    public addAfter(data: T): ListNode<T> {
        if (this._head == null) error("[LinkedList] - The ListNode can't add data if it don't belong to any LinkedList", 2);

        return this._head.addAfter(data, this);
    }

    public addAfterEx(node: ListNode<T>): ListNode<T> {
        if (this._head == null) error("[LinkedList] - The ListNode can't add another node if it don't belong to any LinkedList!", 2);

        return this._head.addAfterEx(node, this);
    }

    public addBefore(data: T): ListNode<T> {
        if (this._head == null) error("[LinkedList] - The ListNode can't add data if it don't belong to any LinkedList", 2);

        return this._head.addBefore(data, this);
    }

    public addBeforeEx(node: ListNode<T>): ListNode<T> {
        if (this._head == null) error("[LinkedList] - The ListNode can't add another node if it don't belong to any LinkedList!", 2);

        return this._head.addBeforeEx(node, this);
    }

    public remove() {
        if (!this._head) error("[LinkedList]: Given node is not belong to any LinkedList", 2);
        if (this.next) this.next.prev = this.prev;
        if (this.prev) this.prev.next = this.next;
        if (this._head.first == this) this._head.first = this.next;
        if (this._head.last == this) this._head.last = this.prev;

        this.next = undefined;
        this.prev = undefined;
        this._head.count = this._head.count - 1;
        this.recycle();

        return this.value;
    }

    // Recycling
    private static _recycleStash: ListNode<any>[] = []; //LuaTable<number,ListNode<any>> = new LuaTable;

    public static create<T>(head: LinkedList<T>, data: T): ListNode<T> {
      if (this._recycleStash.length > 0) return this._recycleStash.pop()!.update(head, data);

      return new ListNode(head, data);
    }

    public static recycle(node: ListNode<any>){
        if (!wex.ArrContains(this._recycleStash, node)) this._recycleStash.push(node);
    }

    public recycle(): this {
        ListNode.recycle(this);
        return this;
    }

    public update(head: LinkedList<T>, data: T): ListNode<T> {
        this._head = head;
        this._value = data;
        return this;
    }
}

export class LinkedList<T> {
    public count: number;
    public first?: ListNode<T>;
    public last?: ListNode<T>;

    constructor(){
        this.count = 0;
    }

    public addFirst(data: T): ListNode<T>
    {
        const newNode = ListNode.create(this, data);

        if (this.first) this.first.prev = newNode;
        newNode.next =  this.first;
        this.first = newNode;

        if (this.last == null) this.last = newNode;

        this.count = this.count + 1;
        return newNode;
    }

    public addFirstEx(node: ListNode<T>): ListNode<T> {
        if (this.first != null) this.first.prev = node;
        node.next = this.first;
        this.first = node;

        if (this.last == null) this.last = node;

        this.count = this.count + 1;
        return node;
    }

    public addLast(data: T): ListNode<T> {
        const newNode =  ListNode.create(this, data);

        if (this.last) this.last.next = newNode;
        newNode.prev = this.last;
        this.last = newNode;

        this.count = this.count + 1;

        return newNode;
    }

    public addLastEx(node: ListNode<T>): ListNode<T> {

        if (this.last) this.last.next = node;
        node.prev = this.last;
        this.last = node;

        this.count++;

        return node;
    }

    public addAfter(data: T, whichNode: ListNode<T>): ListNode<T> {
        if (whichNode.head != this) error("[LinkedList]: Given node is not belong to this LinkedList!", 2);
        if (!this.first) this.addFirst(data);

        const newNode = ListNode.create(this, data)
        if (whichNode.next) newNode.next = whichNode.next.next;

        newNode.prev = whichNode;
        whichNode.next = newNode;

        this.count = this.count + 1;
        return newNode;
    }

    public addAfterEx(node: ListNode<T>, whichNode: ListNode<T>): ListNode<T> {
        if (whichNode.head != this) error("[LinkedList]: Given node is not belong to this LinkedList!", 2);
        if (!this.first) this.addFirstEx(node);
        if (whichNode.next) node.next = whichNode.next.next;

        node.prev = whichNode;
        whichNode.next = node;

        this.count = this.count + 1;
        return node;
    }

    public addBefore(data: T, whichNode: ListNode<T>): ListNode<T> {
        if (whichNode.head != this) error("[LinkedList]: Given node is not belong to this LinkedList!", 2);
        if (!whichNode.prev) return this.addFirst(data);

        const newNode = ListNode.create(this, data);
        newNode.next = whichNode;
        newNode.prev = whichNode.prev;
        whichNode.prev.next = newNode;
        whichNode.prev =  newNode;

        return newNode;
    }

    public addBeforeEx(node: ListNode<T>, whichNode: ListNode<T>): ListNode<T> {
        if (whichNode.head != this) error("[LinkedList]: Given node is not belong to this LinkedList!", 2);
        if (!whichNode.prev) return this.addFirstEx(node);

        node.next = whichNode;
        node.prev = whichNode.prev;
        whichNode.prev.next = node;
        whichNode.prev =  node;

        return node;
    }

    /**
     * Don't use this!, this is a O(n) complexity method to remove a node
     * You can simply remove the node because it way faster than using this!
     */
    public remove(data: T): T | null {
        let node = this.first;
        while (node != null){
            if (node.value == data) return node.remove();

            node = node.next;
        }
        return null;
    }
}
