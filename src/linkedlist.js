/*
Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null


Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.

I'm aware that there are better ways to create linked lists (class methods, reference pointers, etc.), but not all languages have the same features. I'd like to keep the basic API consistent between language translations for this kata.
*/

function Node(data) {
    this.data = data;
    this.next = null;
    
  }
  
  function push(head, data) {
    // Update next pointer to data
    this.next = head;
    // Set head of next node to data
    head.data = data; 
  }
  
  function buildOneTwoThree() {
    // Go.
  }