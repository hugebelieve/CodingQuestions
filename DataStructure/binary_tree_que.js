// Source - https://www.youtube.com/watch?v=P_YMAJWEK3Q

//Input - tree- 
//                  (2)
//                 /   \
//               (3)    (4)
//               /      / \
//              (1)   (2)  (5)


// Output - String
//   2
//   3,4
//   1,2,5

class Node{
    constructor(value,left,right,rootN){
        this.value = value;
        this.left = left;
        this.right = right;
        this.rootN = rootN;
    }
}

class BinaryTree{
    addItem(value){
        if(!this.rootN){
            this.rootN = new Node(value);
            return;
        }
        let current = this.rootN;
        while(true){
            if(value<current.value){
                //left
                if(!current.left){
                    current.left = new Node(value,null,null,current);
                    break;
                }
                current = current.left;
            }
            
            //skip same value as that is current node
            if(value>current.value){
                //right
                if(!current.right){
                    current.right = new Node(value,null,null,current);
                    break;
                }
                current = current.right;
            }

            if(value==current.value){
                break;
            }
        }
    }
}

var breadthFirstSearch = function(input){
    let tree = new BinaryTree();
    input.forEach(element => {
        tree.addItem(element);
    });

    let rootN = tree.rootN;

    let returnString = "";

    let queA = [];
    queA.push(rootN); //first  // [] //then remove while adding //and enter while level change
    
    let currentLevel = 1;
    rootN.level = currentLevel;

    while(queA.length>0){
        let node = queA.shift();
        if(node.level>currentLevel){
            returnString += "-";
            currentLevel = node.level;
        }
        returnString += node.value;
        if(node.left){
            let left = node.left;
            left.level = node.level+1;
            queA.push(left);
        }
        if(node.right){
            let right = node.right;
            right.level = node.level+1;
            queA.push(right);
        }
    }

    return returnString;
}

module.exports = {
    runAlgo: breadthFirstSearch
}

// time complexity
// here constant we have to loop all values
// Space complexity is below
// O(n)