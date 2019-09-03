#Longest common subsequence
- We have to think of a table with each string in each axis
- Then we have to loop with start1 and start2 index
- start1 and start2 will be increment for all length of both strings

#Longest Increasing Sequence
- We need to start with an index
- Find longest sequence with that index
- And at same time calling other index with recur func
- Use memoization as well as recursion will call predetermined values

#Edits required to convert ‘str1’ into ‘str2’
- Loop for each index of str1
- For each letter check if equal and if equal follow below for next letter
- Give 3 calls to recur func 
> 1. Keep the replace the unmatched value
> 2. Delete the unmatched value
> 3. Insert the unmatched value
- And keep a global min to keep track of min operation at all time
- Base condition return when word matched.

#Minimum Difference Subsets
- One array divide to two so that there sum diff is minimum
- Classic recursion to be used
- recur function with sum1 and sum2 argument along with index to check
- recur function comparing two function one with index item add to sum1 and another added to sum2
- also these next called function should be called with index+1
- hence we will have a base condition of index==array.length returning Math.abs(sum1-sum2)

#Ways to cover steps
- n = 3; output - 4 types of steps
- recur function with number decreasing by one to number count
- this number decreasing is called with recur function

#Find the longest path in a matrix so all cells along the path are in increasing order with a difference of 1
- loop through all cells of matrix
- And for each cell go for depth first search in all four direction around

#Subset Sum Problem
- recur func with index+1 each time
- And carry forward sum-array[index] when sum gets to zero we get the subset array
- subset array means continuous array subset

#Knapsack Problem value[] weight[] and given w=50; find max value of sack
- recur function with returning Math.max() at end
- comparing 1. value + recur func with (index+1) 2. recur func with (index+1)
- reducing capacity of recur argument in first case
- base condition is when w==0 or index out of bound
- A base condition where weight is full in between
- Then lose that value and return recur func with (index+1)

#Boolean Parenthesization Problem
- symbol - {T, F, T} , operator - {^, &}  Output - 2; "((T ^ F) & T)" and "(T ^ (F & T))"
- When doing recur function 2 ways to proceed
- Index and (index+1) of value can be together or separate
- Evaluate and push forward every-time
- finally if symbols end and ans is true and one to global count