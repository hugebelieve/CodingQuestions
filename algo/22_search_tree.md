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

#Preorder Traversal of BST
> Preorder PLR <==
> Inorder LPR <==
> Postorder RPL

#Check whether a binary tree is a full binary tree or not
> If a binary tree node does have empty left and right sub-trees, then it is a full binary tree

#Bottom View of a Binary Tree
> Bottom view of tree which node will be visible?
> Horizontal distance is the key root_hd = 0; left_hd = 0-1; right_hd = 0+1

#Remove nodes on root to leaf paths of length < K
> Remove all left nodes with length less than K
> now move back and check if node from which this leaf was attached how we can process it again for length
> or whether it has become a leaf for deletion

#Lowest Common Ancestor in a Binary Search Tree
> Given n1 and n2 find lowest common ancestor
> n1 and n2 is less than root go to left or vise versa
> when you find that n1 and n2 are in two different sides of a given node that is the answer

#Check if a binary tree is subtree of another binary tree
> For normal traversal time complexity will be O(n) as you are loop through 2nd tree multiple times
> Find Inorder and Preorder array of both and if 2nd tree array is subarray
> for checking sub array we can convert array to string and then run .includes()

#Reverse alternate levels of a perfect binary tree
> Here traverse tree recursively and save node in hash of "level" as key
> increment level value while recurring the function
> Lasting the hap store can be used to reverse the values