#Find Minimum Depth of a Binary Tree
> keep global minLength
> Traverse tree countL = func(left)+1 ; countR = func(right)+1
> Math.min(countL,countR)

#Maximum Path Sum in a Binary Tree
> keep global maxSum object
> 4 ways
> self node
> self node + left || self node + right
> self node + left + right // not to include parent of self node
> parent + self note + left || parent + self note + right

