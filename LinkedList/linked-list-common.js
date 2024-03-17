/**
 * Setup common methods for linked list
 * - getHead()
 * - getTail()
 * - getSize()
 * - findIndexByData()
 * - findWithCallBack()
 */

function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  }

  function getSize() {
    if (head == null) return null;

    let current = head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.next;
    }

    return count;
  }

  function findIndexByData(data) {
    if (head == null) return null;

    let current = head;
    let i = 0;
    while (current != null) {
        if (current.data == data) return i;
      //  go to next node
      i++;
      current = current.next;
    }

    return -1;
  }

  function findWithCallBack(callback) {
    if (head == null) return null;

    let current = head;
    let i = 0;
    while (current != null) {
        if (callback(current.data, i)) return current.data;
      //  go to next node
      i++;
      current = current.next;
    }

    return undefined;
  }

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    // otherwise, linked list has some items (object)
    newNode.next = head;
    // tham chieu toi gia tri moi
    head = newNode;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      // In ra dữ liệu của nút hiện tại.
      console.log(current.data);

      // Di chuyển current đến nút tiếp theo trong danh sách bằng cách gán current bằng current.next.
      current = current.next;
    }
  }

  return {
    insertHead,
    printList,
    getHead,
    getSize,
    getTail,
    findIndexByData,
    findWithCallBack,
  };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
// 1 -> 2 -> ... -> 5

numberLinkedList.printList();
console.log("Head: ", numberLinkedList.getHead());
console.log("Tail: ", numberLinkedList.getTail());
console.log("Size: ", numberLinkedList.getSize());

console.log("Find Index By Data: ", numberLinkedList.findIndexByData(3)); // index: 2
console.log("Find Index By Data: ", numberLinkedList.findIndexByData(6)); // -1

console.log("Find With Callback: ", numberLinkedList.findWithCallBack((x) => x % 2 == 0)) // 2
console.log("Find With Callback: ", numberLinkedList.findWithCallBack((x, idx) => x > 5)) // undefined