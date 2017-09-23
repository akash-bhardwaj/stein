/**
 *  Priority Queue:
 *      Priority Queue is an extension of queue with following properties.
 *          1) Every item has a priority associated with it.
 *          2) An element with high priority is dequeued before an element with low priority.
 *          3) If two elements have the same priority, they are served according to their order in the queue.
 *
 *      A typical priority queue supports following operations.
 *          ➤ insert(item, priority): Inserts an item with given priority.
 *          ➤ getHighestPriority(): Returns the highest priority item.
 *          ➤ deleteHighestPriority(): Removes the highest priority item.
 *
 *      Applications of Priority Queue:
 *          1) CPU Scheduling
 *          2) Graph algorithms like Dijkstra’s shortest path algorithm, Prim’s Minimum Spanning Tree, etc
 *          3) All queue applications where priority is involved.
 *          4) Data Compression (Huffman codes)
 *          5) Find the largest M items in a stream of N items.
 *
 *      Ways to implement Priority Queue
 *          ➤ Arrays - Insertion and Deletion is expensive in order to maintain the priority.
 *          ➤ LinkedList -> Same as array. But deletion is fast.
 *          ➤ Binary Heap -> Best
 *
 */



/**
 * Binary Heap
 *      Based on the idea of Complete Binary Tree.
 *      Binary Tree -> Empty or Nodes to left and right binary tree.
 *      Complete Binary Tree -> Perfectly Balanced, except for the bottom level.
 *
 *                          o                   <- Level 0
 *                       /     \
 *                      o       o               <- Level 1
 *                    /  \     /  \
 *                   o    o   o    o            <- Level 2
 *                  / \
 *                 o    o                       <- Level 3
 *
 *            ✔︎ Perfectly Balanced, except for Level 3
 *            ✔︎ Height of a Complete Binary Tree of N node is Log N.
 *                  In above tree, there are 9 nodes ==> Log 9 = Log 3^2 = 2 Log 3. (3 Levels)
 *
 *
 *      Implementation - Array representation of the heap ordered complete binary tree.
 *      Head Ordered Binary Tree:
 *          ✬  Keys in nodes.
 *          ✬  Parent's key is greater than children's keys. This is important. ✅
 *
 *      Properties of Binary Heap:
 *          ➤ Largest key is arr[1], which is the root of the binary tree.
 *          ➤ Parent of node at 'k' index is at k/2 index. (It's integer divide. No floats)
 *          ➤ Children of a node 'k' are at index '2k' and '2k + 1', given we start indexing from 1 instead of 0. ✅
 *
 *          Consider this array:
 *              index           0   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11
 *              arr[index]     [_,  T,  S,  R,  P,  N,  O,  A,  E,  I,  H,  G]
 *
 *                                              T
 *                                          /       \
 *                                         S          R
 *                                       /   \       / \
 *                                      P      N    O    A
 *                                    / \      /\
 *                                  E    I    H  G
 *
 *
 *             What's the parent of H & G?
 *             Parent of node at 'k' is at k/2. Here k = 10(H), so parent will be at 10/2 = 5. Element at index 5 is N, which is correct!💥
 *
 *             So, we don't need actual tree to represent these data structures. Array indices are sufficient.
 *
 */
