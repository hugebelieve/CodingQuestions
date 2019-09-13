let mainData = [];
let defaultDataset = {
    id: "",
    comment: "",
    like: 0,
    reply: []
};
var debounceFunc = function(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.call(this,...args);
        },delay);
    }
}

var throttleFunc = function(fn, delay){
    let flag = true;
    return function(...args){
        if(flag){
            fn.call(this,...args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },delay);
        }
    }
}

let submitClick = throttleFunc((event)=>{
    event.stopPropagation(); //saves propagation
    let commentText = document.getElementById("comment");
    if(commentText.value==""){
        M.toast({html: 'Please enter comment first!'})
        return;
    }
    defaultDataset.comment = commentText.value;
    defaultDataset.id = mainData.length+"";
    mainData.push(defaultDataset);
    commentText.value = "";
    updateCommentSection(defaultDataset.id, document.getElementById("comment_section").firstChild, true);
}, 1000);

document.getElementById("submitButton").addEventListener('click',submitClick,true); //capturing

function updateCommentSection(id, attachNode, trueForAbove){
    let comment = navigateInDS(id);

    let template = document.getElementById("reply_show_template");
    let clone = template.content.cloneNode(true);
    let commentText = clone.querySelector("#commentText");
    let editButton = clone.querySelector("#editButton");
    let replyButton = clone.querySelector("#replyButton");
    let likeButton = clone.querySelector("#likeButton");

    commentText.innerHTML = comment.comment + " - Likes " + comment.like;
    commentText.setAttribute("id","text-"+id);
    clone.firstElementChild.setAttribute("id",id);
    editButton.setAttribute("id","edit-"+id);
    replyButton.setAttribute("id","reply-"+id);
    likeButton.setAttribute("id","like-"+id);

    if(trueForAbove){
        insertBefore(clone, attachNode);
    }else{
        insertAfter(clone, attachNode);
    }
}

function  navigateInDS(id){
    let allIndex = id.split(";");

    let result = mainData;
    allIndex.forEach(dsIndex => {
        if(result.reply){
            result = result.reply[Number(dsIndex)];
        }else{
            result = result[Number(dsIndex)];
        }
    });
    
    return result;
}

function pushInDS(comment){
    let allIndex = comment.id.split(";");
    let target = mainData;

    for(let i=0; i<allIndex.length-1; i++)
    {
        let dsIndex = allIndex[i];
        if(target.reply){
            target = target.reply;
        }else{
            target = target[Number(dsIndex)];
        }
    }
    if(target.length){
        target[Number(allIndex[allIndex.length-1])-1].reply.push(comment);
    }else{
        target.reply.push(comment);
    }
}

let commentSectionClick = (event)=>{
    event.stopPropagation();

    let target = event.target;
    let targetId = target.id;

    let [eventType, dsID] = targetId.split("-");

    switch(eventType){
        case "edit": {

            break;
        }
        case "like": {

            break;
        }
        case "reply": {
            showAddReplyUI(dsID,target);
            break;
        }
        case "submit": {
            submitAddReply(dsID,target);
            break;
        }
    }
};

document.getElementById("comment_section").addEventListener("click", commentSectionClick, true);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertAfter(newNode, referenceNode.nextSibling);
}

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let showAddReplyUI = (id, target)=>{
    let template = document.getElementById("reply_box");
    let clone = template.content.cloneNode(true);
    let commentInput = clone.querySelector("#commentInput");
    let submitButton = clone.querySelector("#submitButton");

    commentInput.setAttribute("id","input-"+id);
    clone.firstElementChild.setAttribute("id","inputBox-"+id);
    submitButton.setAttribute("id","submit-"+id);

    insertAfter(clone,target.parentNode);
}


let submitAddReply = (id, target)=>{

    let input = document.getElementById("input-"+id);
    if(input.value==""){
        M.toast({html: 'Please enter comment first!'})
        return;
    }

    let commentInDS = navigateInDS(id);

    defaultDataset.comment = input.value;
    defaultDataset.id = id+";"+commentInDS.reply.length+"";
    pushInDS(defaultDataset);

    updateCommentSection(defaultDataset.id, target.parentNode.parentNode, false);

    target.parentNode.parentNode.remove();
}