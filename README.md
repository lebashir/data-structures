# Common Data Structures:

## Singly Linked List

- A data structure that contains a head, tail and length property.

- Singly Linked Lists consist of nodes, and each node has a value and a pointer to next node or null

- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.

- Unlike Arrays, Linked Lists do not contain a built in index

- List Data Structures that consist of nodes are the foundation for other data structures like Stacks and Queues


## Doubly Linked List

- Almost identical to Singly Linked Lists, except every node has another pointer to the previous node;

- Doubly Linked List take up more memory than Singly Linked Lists, however they offer more flexibility (faster search and )


## Stacks

- A stack is a LIFO data structure (Last In First Out)

- The last element added to the stack will be the first element removed from the stack

- There are several ways to implement a stack. (e.g array, linked list) - Stacks are abstract


## Queues

- A queue is a FIFO data structure (First In First Out)

- The first element added to the queue will be the first element removed from the queue

- Queues are useful for processing tasks and are foundational for more complex data structures


## Trees

- A tree is a data structure that consists of nodes in a parent/child relationship

- Unlike lists, trees are nonlinear

### Tree Terminology
- **Root** - The top node in a tree
- **Child** - A node directly connected to another node when moving away from the Root
- **Parent** = The converse notion of a child
- **Siblings** - A group of nodes with the same parent
- **Leaf** - A node with no children
- **Edge** - The connection between one node and another

### Binary Trees

Can have values of any type
Each Node can have a maximum of 2 children

## Binary Search Trees

Binary Search Trees are a special case of a binary tree. They are used to store data that is sortable.

If we take any node on the tree, all items that are less than the node are located to the left of the node.

### How BSTs Work

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

Binary search tree structure makes it easy and fast to look things up and insert things


## Tree Traversal

### There are two main ways to traverse a tree
- Breadth First Search
- Depth First Search

### Breadth First Search

- Search across the rows of parent nodes (sibling nodes)
- Go across the tree

### Depth First Search

- Go down tree vertically to search
- 3 Main Orders styles of DFS:
    - InOrder
    - PreOrder
    - PostOrder
