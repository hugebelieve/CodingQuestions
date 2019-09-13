var allColors = ["#0675CE", "#ec008c", "#f9d342", "#ef5455", "#3d155f", "#4831d4", "#ccf381", "#f0a073"];
var _NotesParent;

document.addEventListener("DOMContentLoaded", ()=>{
    _NotesParent = document.querySelector(".notesParent");

    let filterParent = document.querySelector("[data-colorSelected]");
    let editNodeTemplate = document.getElementById("editNodeTemplate").content.querySelector("[data-colorSelected]");

    // add color to relative parent elements
    allColors.forEach((color,index)=>{
        let colorDiv = createColorDiv(color,index);
        filterParent.appendChild(colorDiv);

        colorDiv = createColorDiv(color,index); // new clone needed
        editNodeTemplate.appendChild(colorDiv);
    });

    filterParent.addEventListener("click",colorClick); // filter single event attachment
    
    // NotesParent click event attach <== Event Delegation with Event Bubbling here
    _NotesParent.addEventListener("click", _NoteParentClick);

    document.querySelector(".addButton").addEventListener("click",showAddNoteCard);

    // using debouncing for our input search bar 
    document.querySelector(".searchInput").addEventListener("keyup",debounceFunc(searchAction,300));

    loadCardFromLocal();
});


/* #Main Region */
function loadCardFromLocal(){
    let notes = Object.values(getLocalData("notes"));
    notes = notes.sort((a,b)=>a.timestamp-b.timestamp); //asc

    notes.forEach((note)=>{
        let viewCard = getViewCard(note.uid, note.note, note.colorCode);
        _NotesParent.prepend(viewCard);
    });
}

function showAddNoteCard(){
    let addCard = getActionCard("add", "ADD NOTE", "", null, null);
    addCard.style.display = "flex";
    _NotesParent.prepend(addCard);

    colorReset(addCard, 0); // reset to first color
}

function colorClickAction(index,actionOrigin){
    // take action on color change
    // actionOrigin ==> filter/edit/add

    if(actionOrigin!="filter"){
        return;
    }
    let term = document.getElementById("searchInput").value;
    mainFilterFunction(index,term);
}

function searchAction(event){
    let term = event.target.value;
    let colorIndex = document.getElementById("filterColorDiv").getAttribute("data-colorSelected");
    mainFilterFunction(colorIndex,term);
}

function mainFilterFunction(targetIndex, searchTerm){
    searchTerm = searchTerm.toLowerCase();
    let allNotesCard =  _NotesParent.children;
    let targetColorCode = allColors[targetIndex]; // undefined is none selected

    for(let i=0; i<allNotesCard.length; i++){ // loop children instead of getElementByID
        let noteElement = allNotesCard[i];

        let colorCode = "";
        if(targetColorCode){
            colorCode = getColorCodeFromStyle(noteElement);
        }
        let note = "";
        if(searchTerm!=""){
            note = noteElement.querySelector(".noteContent").innerHTML;
            note = note.toLowerCase();
        }
        
        if(note.includes(searchTerm) && // we are not considering break for search right now
                noteElement.id!="addEditNoteCard" &&
                (targetIndex<0 || colorCode==targetColorCode)){ 
            noteElement.style.display = "flex";
        }else{
            noteElement.style.display = "none";
        }
    }
}
/* endrgion */


/* #Button Action */
function _NoteParentClick(event){
    let dataNoteColor = event.target.getAttribute("data-noteColor");
    let className = event.target.className;
    if(dataNoteColor){
        // either card or color
        if(dataNoteColor=="color"){
            colorClick.call(this, event);
        }
    }else if(className.includes("saveButton")){
        saveButtonClicked.call(this,event);
    }else if(className.includes("editIcon")){
        editIconClicked.call(this,event);
    }else if(className.includes("removeIcon")){
        removeIconClicked.call(this,event);
    }
}

function colorClick(event){
    let index = Number(event.target.getAttribute("index"));
    let colorCurrentlySelected = Number(event.target.parentElement.getAttribute("data-colorSelected"));
    let actionOrigin = event.target.parentElement.getAttribute("action-origin");
    if(colorCurrentlySelected!=index){
        //select this color
        colorClickAction(index,actionOrigin);
        event.target.setAttribute("data-ifSelected","yes");
        if(colorCurrentlySelected>=0)
            event.target.parentElement.children[colorCurrentlySelected].removeAttribute("data-ifSelected");
    
        event.target.parentElement.setAttribute("data-colorSelected", index);
    }else{
        //deselect this color
        colorClickAction(-1,actionOrigin);
        event.target.removeAttribute("data-ifSelected");
        event.target.parentElement.setAttribute("data-colorSelected", -1);
    }
}

function saveButtonClicked(event){
    let parentDiv = event.target.parentElement.parentElement;
    let colorsDiv = parentDiv.querySelector("[data-colorSelected]")
    let selectedColor = colorsDiv.getAttribute("data-colorSelected");
    let colorCode = getColorCodeFromStyle(colorsDiv.children[selectedColor]);

    let noteData = parentDiv.querySelector("textarea").value;
    if(noteData==""){
        alert("Please enter some text!");
        return;
    }
    let uid = null;
    let actionType = event.target.getAttribute("action-origin");
    if(actionType=="edit"){
        uid = parentDiv.getAttribute("data-id");
    }else{
        uid = (new Date()).valueOf();
    }

    parentDiv.style.display = "none";
    saveNewNoteWithData( noteData, colorCode, uid);

    let viewCard = getViewCard(uid, noteData, colorCode);
    viewCard.style.display = "flex";
    _NotesParent.prepend(viewCard);

    // scroll to top as prepend happened
    smoothScrollToTop();
}

function editIconClicked(event){
    let uid = event.target.getAttribute("uid");
    let cardData = getLocalData("notes");
    let noteData = cardData[uid];
    let colorIndex = allColors.findIndex(color=>color==noteData.colorCode);
    if(colorIndex<0) colorIndex=0; //set default to first


    let editCard = getActionCard("edit", noteData.note.substr(0,20),
                            noteData.note, uid);
    editCard.style.display = "flex";
    insertBefore(editCard, event.target.parentElement);
    event.target.parentElement.style.display = "none";

    colorReset(editCard, colorIndex);
}

function removeIconClicked(event){
    let uid = event.target.getAttribute("uid");
    if(!uid){
        removeEditCardOnly.call(this,event);
        return;
    }
    let allNotes = getLocalData("notes");
    delete allNotes[uid];
    saveLocalData("notes", allNotes);
    event.target.parentElement.remove();
}

function removeEditCardOnly(event){
    resetCurrentEditedCard(event.target.parentElement);
    event.target.parentElement.style.display = "none";
}
/* #endregion */



/* Data Region */
function saveNewNoteWithData( note, colorCode, uid){
    let allNotes = getLocalData("notes");

    if(!uid){
        uid = (new Date()).valueOf();
    }
    allNotes[uid] = {
        uid, note, colorCode, timestamp: (new Date()).valueOf() //new timestamp for edited note
    };
    saveLocalData("notes", allNotes);
}
/* #endregion */

/* #DOM utils */
function createColorDiv(color,index){
    let clone = createClone("colorDivTemplate");
    clone.firstElementChild.style.cssText = "--main-color:"+color+";";
    clone.firstElementChild.setAttribute("index", index);
    return clone.firstElementChild;
}

function resetCurrentEditedCard(domCard){
    // reset the card currently been edited
    let currentEditCardID = domCard.getAttribute("data-id");
    if(currentEditCardID){ // means no card is currently editing
        getViewCard(currentEditCardID).style.display = "flex";
    }
}

function getActionCard(type, title, note, uid){

    let domCardID = "addEditNoteCard";
    let domCard = document.getElementById(domCardID);
    if(domCard){

        // reset the card currently been edited
        resetCurrentEditedCard(domCard);

        if(uid){
            domCard.setAttribute("data-id",uid);
        }else{
            domCard.removeAttribute("data-id");
        }
        domCard.querySelector(".saveButton").setAttribute("action-origin",type);
        domCard.querySelector(".titleText").innerHTML = title;
        domCard.querySelector(".noteInput").value = note;
        return domCard;
    }

    let templateID = "editNodeTemplate";
    let clone = createClone(templateID);
    clone.querySelector(".titleText").innerHTML = title;
    clone.querySelector(".noteInput").value = note;
    clone.firstElementChild.setAttribute("id",domCardID);
    clone.querySelector(".saveButton").setAttribute("action-origin",type);

    if(uid){
        // first edit used and card created for first time
        clone.firstElementChild.setAttribute("data-id",uid);
    }

    return clone.firstElementChild;
}

function getViewCard(uid, note, colorCode){
    let domCard = document.getElementById(uid);

    if(domCard){
        if(note){
            domCard.querySelector(".titleText").innerHTML = note.substr(0,20);
            domCard.querySelector(".noteContent").innerHTML = note.replace(/\n/g, "<br>");
            domCard.style.cssText = "--main-color:"+colorCode+";";
        }
        return domCard;
    }

    //create new view card
    let clone = createClone("viewNoteTemplate");
    clone.querySelector(".titleText").innerHTML = note.substr(0,20);
    clone.querySelector(".noteContent").innerHTML = note.replace(/\n/g, "<br>");
    clone.querySelector(".editIcon").setAttribute("uid",uid);
    clone.querySelector(".removeIcon").setAttribute("uid",uid);
    clone.firstElementChild.setAttribute("id",uid);
    clone.firstElementChild.style.cssText = "--main-color:"+colorCode+";";
    return clone.firstElementChild;
}

function colorReset(target, colorIndex){
    let dataColorSelected = target.querySelector("[data-colorSelected]");
    if(dataColorSelected.getAttribute("data-colorSelected")==colorIndex){
        dataColorSelected.setAttribute("data-colorSelected",-1); //reset to avoid deselection
    }
    // make color selected
    dataColorSelected.children[colorIndex].click(); //make first color selected
}
/* #endregion */

/* #utils region */
function getLocalData(id){
    return JSON.parse(localStorage.getItem(id) || "{}");
}

function saveLocalData(id, data){
    if(typeof(data)!="object") return "Please pass object ot array!";
    return localStorage.setItem(id, JSON.stringify(data));
}

function smoothScrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function createClone(id){
    let template = document.getElementById(id);
    return template.content.cloneNode(true);
}

function getColorCodeFromStyle(node){
    if(node.style.cssText)
        return node.style.cssText.split(":")[1].split(";")[0];
    else return "";
}

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function debounceFunc(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.call(this,...args);
        },delay);
    }
}
/* #endregion */