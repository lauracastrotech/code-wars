const LinkedList = require("../src/linked_list");

let linkedList = null;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

describe("tests for inserting a node before another node.", function() {
  it("", function() {
    LinkedList.assertEquals(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
    LinkedList.assertEquals(push(null, 1).next, null, "Should be able to create a new linked list with push().");
    LinkedList.assertEquals(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
    LinkedList.assertEquals(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
  });
});

describe("tests for building a linked list.", function() {
  it("", function() {
    LinkedList.assertEquals(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
    LinkedList.assertEquals(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
    LinkedList.assertEquals(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
    LinkedList.assertEquals(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");
  });
});
});