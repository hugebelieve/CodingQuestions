// Search in an unsorted array ---------------------------------------------
// 1. Linear search O(n) complexity

// Search in an sorted array ---------------------------------------------
// 1. binary search O(log n)
// 2. Jump Search O(sqrt n) - take a jump value 4 and jump until value is greater than 55 then go back linear for previous 4

// Graph ---------------------------------------------
// 1. Breadth First Search (BFS)
// 1. Depth First Search (DFS)

// Count Range Sum ---------------------------------------------
// running Cache
// index        0  1  2
// nums:      [ 1, 2, 3 ]
// cache:  [ 0, 1, 3, 6 ]   index 3 of the cache becomes nums[2] + runningSumCache[2]
// Cindex    0  1  2  3

// Create Largest Number ---------------------------------------------
// Sort the given number array with last digit check
// 342 & 34 then 2>4 
// update instead of this check all digits 3>3, 4>4, **2>4** and continue

// Cycle In Array ---------------------------------------------
// with value as index in the same array
// Rabbit and Tortoise pointer and see if they meet

// Cycle In Directed Graph ---------------------------------------------
// Keep 3 sets, freshSet -> progressSet -> completeSet
// If you find current exploringVertex in the progress Set then Cycle is there
// Because this means exploring Index started from a vertex
// And depth first search took us to the same index again

// Trie Data Structure ---------------------------------------------
// Used for word search and saving in optimum way

// Dijikstra algo ---------------------------------------------
// Find shortest path from the node (works on both directed and non-directed graph)
// Works on Greedy like Breadth First Search
// Make three DS 1. Map for parent, 2. Map for distance, 3. map + heap
// (Map + Heap) to get the key from Map with smallest value
// Remove from 3rd DS with smallest value

// Intersection between arrays ---------------------------------------------
// Sort in ascending
// now keep three pointer in each array
// if match update all pointer
// if not matched check smallest among all three pointers
// Increase Pointer with smallest values only

// Sorted Heap of length 3 ---------------------------------------------
// Create an array
// While inserting check if right position for item to be inserted by looping all
// Better O(n) then sorting of O(nlogn)

// Largest Rectangle in a Histogram ---------------------------------------------
// Stack with index in until you reach a block whose next one is ness then self
// Always global pointer that is moving over the array index
// Then check each item in stack and compute with (global_pointer-item_index +1)*height
// Move the value of area to global max
// While moving to next element in stack check if now the (global_pointer+1) value is still less
// Continue till full global pointer is reached
// Then at last loop through all remaining in stack

// Lexicographic order ---------------------------------------------
// Make sure all are in ascending first
// 1. get the max index i which value is less than next
// 2. get the max index j which p[i]<p[j]
// 3. swap i and j
// 4. reverse i+1 to end

// Maximum of all sub-arrays of size k ---------------------------------------------
// https://www.youtube.com/watch?v=5VDQxLAlfu0
// Simple complexity can be O(n*k)
// Deque DS can bring it down to O(n)
// Replace with id next is max
// If next is less append
// Also while append check if first element can stay by checking its index comparing with currentIndex-
// Then continue doing it

// Minimum spanning tree ---------------------------------------------
// Sort edges in non decreasing order
// Disjoint sets of each vertices - [pointer,rank]
// Check each edge and form union if vertex of this edge is disjoint set
// While union of disjoint set Result will have that as path
// Ignore if vertex of edge is in same set

// Sliding Window
// https://www.youtube.com/watch?v=kh-RHRd4KZ4
// 2 ways
// window length is fixed so we get the formula last_window + array[i] - array[i-k]
// window length is to be find running sum to be used then
// (check if running sum is exceeding finalSum increase i(1st pointer) or is less then sum increase j(2nd pointer))