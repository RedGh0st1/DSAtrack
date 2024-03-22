class HashMap {
  constructor(size) {
    this.buckets = new Array(size);
    this.size = this.buckets.length;
  }

  hash(key) {
    //1. loop through the key value
    //2. using any hashing algorithm or function or you can simply make one up
    //3. it should return a position within the size of the array
    //4. since in this example the array size is 10
    //5. your algorithm cannot exceed position bigger than 9
    //6. no matter how many times i run this algorithm, for example
    let total = 0;
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < key.length; i++) {
      total += ALPHABET.indexOf(key.charAt(i));
    }
    let bucket = total % this.size;
    return bucket;
  }
  insert(key, value) {
    let index = this.hash(key);
    console.log(index);
    //1. check if the key already exists
    //create a new node and put it in the bucket based on given postion
    // handle the collision case
    if (!this.buckets[index]) {
      let newHasHnode = new HasHNode(key, value);
      this.buckets[index] = newHasHnode;
    } else {
      let currentNode = this.buckets[index];

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new HasHNode(key, value);
    }
  }

  showMap() {
    return JSON.stringify(this.buckets);
  }
}

class HasHNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next ? next : null;
  }
}

let newHashTable = new HashMap(10);
console.log(newHashTable.insert("David", "david@gmail.com"));
