class MyArray {

    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this;
    }

    pop() { 
        delete this.data[this.length-1];
        this.length--;
        return this;
    }

    remove(index) {
        
    }
}

let lists = new MyArray();
console.log(lists.push(1));
console.log(lists.push(3));
console.log(lists.push(5));
console.log(lists.pop());
console.log(lists.pop());