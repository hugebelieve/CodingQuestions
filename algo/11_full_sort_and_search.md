#Binary Search
> Create 3 pointer low, high, mid
> If mid is your number print it out
> Check if mid is less than search number if yes use 2nd half or use 1st half
> Continue doing that until you divide the array exponentially into 1 element
> We get O(log n) time complexity and O(1) fixed space complexity

#Interpolation search
> Improvement over binary search, here instead of middle pointer use interpolation
> Find the interpolation pointer by using percentage position of search number
> let pos = (length)*(x-first)/(last-first)
> Time complexity O(log log n) , but worse case can be O(n) when numbers are very close

#Find in sorted pivoted array
> Create a pivot mid first using low, high
> For pivot check which part of sorted either left or right
> check if our search number can come in sorted part if yes move to sorted and do binary search
> If our number in unsorted move high to pivot and one step towards the unsorted.
> Continue the process

#Bubble sort
> Simplest sort with O(n^2) complexity
> It works with swiping the adjacent elements if not in arrangement
> Algo does this by two for loop one inside other

#Insertion sort
> Sort like playing card in hand
> Create a new array
> loop the main array and push to new array one by one in sorted
> we also loop through new array for each element to position it in new array

#Merge Sort
> Divide and conquer
> divide array into half's until you reach single ones
> the combine it from the bottom by comparing them at the same time
> finally dish out the concatenated array

#Quick Sort
> Divide and conquer
> pick one pivot can be random or last
> then segregate other element on left or right of this pivot based on condition
> take pivot on segregated element as well and then continue the same
> at last you will have one element array then combine all from left to right

#Jump Search (for sorted array)
> Find the jump step by parseInt(Math.sqrt(array.length))
> Check first element and then take the jump to 4th(example)
> Check if that element is greater then search number
> If not take nex jump if yes then move back linearly to find the number

#Largest Kth element in an array
> Use the heap of k size and loop full array
> Time complexity can be worse as O(n^2)

#Given a sorted array and a number x, find the pair in array whose sum is closest to x
> Create a Diff variable as Infinity
> Take two extreme pointers
> Compare difference with sum and update Diff variable
> also update the pointer if sum is more move left pointer and vise versa