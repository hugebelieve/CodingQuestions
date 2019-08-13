import render from './render.js';

var diffAttr = (oldAttr, newAttr) => {
    let allPatches = [];
    Object.entries(newAttr).forEach(([k,v])=>{
        if(!oldAttr[k] || oldAttr[k]!==v){
            allPatches.push(($rootNode)=>{
                if(k=="innerHTML"){
                    $rootNode.innerHTML = v;
                }else{
                    $rootNode.setAttribute(k,v);
                }
                return $rootNode;
            });
        }
        if(oldAttr[k]){
            delete oldAttr[k];
        }
    });
    
    //remove old remaining
    Object.entries(oldAttr).forEach(([k,v])=>{ //present ones have already been removed now from object
        allPatches.push(($rootNode)=>{
            $rootNode.removeAttribute(k);
            return $rootNode;
        });
    });

    return ($rootNode) => {
        allPatches.forEach((patch)=>{
            patch($rootNode);
        });
        return $rootNode;
    }
}

var diffChildren = (oldChildren, newChildren) => {
    let childPatches = [];
    oldChildren.forEach((child,index)=>{
        childPatches.push(diff(child, newChildren[index])); //if newChildren[index] is undefined it will get removed from DOM
    });

    let addPatched = [];
    for(const additional of newChildren.slice(oldChildren.length) ){
        addPatched.push(($rootNode)=>{
            let newElem = render(additional);
            $rootNode.appendChild(newElem);
            return $rootNode;
        });
    };

    return ($parent)=>{

        $parent.childNodes.forEach(($child, index)=>{
            let patchFunction = childPatches[index]; // a patch function received from diff

            if(patchFunction) //safeguard when innerHTML is considered by DOM as textNode
                patchFunction($child); //patch on that child element as if it is root
            else{
                if($child.nodeName!="#text")
                    $child.remove(); //extra may present because of slow loading
            }
        });

        addPatched.forEach((patch)=>{
            patch($parent);
        });

        return $parent;
    }
}

var diff = (oldNode, newNode)=>{

    if(!newNode){
        return ($rootNode)=>{
            $rootNode.remove();
            return undefined;
        }
    }

    if(typeof oldNode === "string" || typeof newNode === "string"){
        if(oldNode !== newNode){
            return $rootNode => {
                $rootNode = render(newNode);
                return $rootNode;
            };
        }else{
            return $rootNode => undefined;
        }
    }

    if(oldNode.tagName !== newNode.tagName){
        return ($rootNode)=>{
            let newDom = render(newNode);
            $rootNode.replaceWith(newDom);
            return newDom;
        }
    }
    
    // diff attributes
    let diffAttrFunction = diffAttr(oldNode.attr, newNode.attr);

    // diff children
    let diffChildrenFunc = diffChildren(oldNode.children, newNode.children);


    return ($rootNode) =>{ //called this function as well in return of diffChildren
        diffAttrFunction($rootNode);
        diffChildrenFunc($rootNode);
        return $rootNode;
    }
}

export default diff;