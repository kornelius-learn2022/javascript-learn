class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  tambahList(data) {
    let node = new Node(data);
    let titikSekarang;

    if (this.head == null) {
      this.head = node;
    } else {
      titikSekarang = this.head;
      while (titikSekarang.next) {
        //{data:10, next:null} = null
        titikSekarang = titikSekarang.next;
      }

      titikSekarang.next = node;
    }
    this.size++;
  }

  insertList(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Masukanlah index yang tepat");
    } else {
      let node = new Node(data);
      let titikSekarang, prev;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        titikSekarang = this.head;
        console.log(titikSekarang);
        let iterasi = 0;
        while (iterasi < index) {
          iterasi++;
          prev = titikSekarang;
          titikSekarang = titikSekarang.next;
        }
        node.next = titikSekarang;
        prev.next = node;
      }
      this.size++;
    }
  }
  printList() {
    let titikSekarang = this.head;
    let str = "";
    while (titikSekarang) {
      str += titikSekarang.data + " ";
      titikSekarang = titikSekarang.next;
    }
    console.log(str);
  }
}

const ll = new linkedList();
ll.tambahList(10);
ll.tambahList(20);
ll.tambahList(30);
ll.printList();
ll.insertList(100, 1);
ll.printList();
