// Source - https://www.youtube.com/watch?v=P_YMAJWEK3Q

//Input - tree- 
//                  (4)
//                 /   \
//               (3)    (6)
//               /      / \
//              (1)   (5)  (8)


// Output - find 5

class Node{
    constructor(value,left,right,rootN){
        this.value = value;
        this.left = left;
        this.right = right;
        this.rootN = rootN;
        if(rootN){
            this.level = this.rootN.level+1;
        }
    }
}

class BinaryTree{
    addItem(value){
        if(!this.rootN){
            this.rootN = new Node(value);
            this.rootN.level = 1;
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

    search(value){
        let current = this.rootN;

        while(true){
            if(value==current.value){
                return current;
            }
    
            if(value<current.value){
                current = current.left;
            }
    
            if(value>current.value){
                current = current.right;
            }
        }
    }
}

var breadthFirstSearch = function({input,x}){
    let tree = new BinaryTree();
    input.forEach(element => {
        tree.addItem(element);
    });
    let findedNode = tree.search(x);
    return "Value is " + findedNode.value + "; Level is " + findedNode.level;
}

module.exports = {
    runAlgo: breadthFirstSearch
}

// time complexity
// here constant we have to loop all values
// Space complexity is below
// O(log(n))