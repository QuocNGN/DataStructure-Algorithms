/**
 * - insertTail(newData)
 * - insertBeforePosition(newData, position)
 */

export function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head; 
      head = newNode;
    }
    return head;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  }

  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
        const tail = getTail();
        tail.next = newNode;
    }

    return head;
  }

  function insertBeforePosition(newData, position) {
    return head;
  }

  return {
    insertHead,
    printList,
    insertTail,
    insertBeforePosition,
  };
}
