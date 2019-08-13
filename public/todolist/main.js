let mainData = [];

document.getElementById("submitButton").addEventListener("click", (event)=>{
    event.stopPropagation();

    let todoname = document.getElementById("todoname");
    if(todoname.value==""){
        M.toast({html: 'Please enter name first!'});
        return;
    }
    let listData = {
        id: mainData.length,
        name: todoname.value,
        task: []
    };
    mainData.push(listData);

    let template = document.getElementById("new_list_template");
    var clone = template.content.cloneNode(true);
    let titleText = clone.querySelector("#titleText");
    let theList = clone.querySelector("#list");
    let taskButton = clone.querySelector("#taskButton");

    titleText.innerHTML = todoname.value;
    clone.firstElementChild.setAttribute("id",listData.id);
    theList.setAttribute("id","list-"+listData.id);
    titleText.setAttribute("id","title-"+listData.id);
    taskButton.setAttribute("id","button-"+listData.id);

    document.getElementById("mainList").appendChild(clone);
},true);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

document.getElementById("mainList").addEventListener("click", (event)=>{
    event.stopPropagation();

    let targetID = event.target.id;
    let [type, id] = targetID.split("-");
    switch(type){
        case "button": {
            addTask(id, event.target);
            break;
        }
        case "submit": {
            submitNewTask(id, event.target);
            break;
        }
    }
},true);

let addTask = function(id, target){

    let template = document.getElementById("add_task_input");
    var clone = template.content.cloneNode(true);

    let taskName = clone.querySelector("#taskName"),
    taskDescription = clone.querySelector("#taskDescription"),
    submitButton = clone.querySelector("#submitButton");

    taskName.setAttribute("id","name-"+id);
    taskDescription.setAttribute("id","desc-"+id);
    submitButton.setAttribute("id","submit-"+id);

    insertAfter(clone, target);
}

function submitNewTask(id, target){

    let targetDS = mainData[Number(id)];

    let taskName = document.getElementById("name-"+id);
    let taskDescription = document.getElementById("desc-"+id);
    if(taskName.value==""){
        M.toast({html: 'Please enter name first!'});
        return;
    }
    if(taskDescription.value==""){
        M.toast({html: 'Please enter description!'});
        return;
    }

    let newTask = {
        id : id + ";" + targetDS.task.length,
        name: taskName.value,
        description: taskDescription.value
    }
    targetDS.task.push(newTask);

    let template = document.getElementById("new_task_template");
    var clone = template.content.cloneNode(true);

    let nameText = clone.querySelector("#nameText"),
    descriptionText = clone.querySelector("#descriptionText");

    nameText.innerHTML = newTask.name;
    descriptionText.innerHTML = newTask.description;

    nameText.setAttribute("id","Tname-"+newTask.id);
    descriptionText.setAttribute("id","Tdescription-"+newTask.id);
    clone.firstElementChild.setAttribute("id",newTask.id);

    document.getElementById("list-"+id).appendChild(clone);
    target.parentNode.remove();
}

document.getElementById("mainList").addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    console.log(event.target);
    
    event.dataTransfer.setData("Text", event.target.id);
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
  });

  document.getElementById("mainList").addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  

  document.getElementById("mainList").addEventListener("dragover", function(event) {
    event.preventDefault();
  });

document.getElementById("mainList").addEventListener("drop", (event)=>{
    event.stopPropagation();
    let comingID =  event.dataTransfer.getData("Text");
    if(comingID.includes("-")){
        comingID = comingID.split("-")[1];
    }
    let [comingList, comingPosition] = comingID.split(";");

    let targetID = event.target.id;
    if(targetID.includes("-")){
        targetID = targetID.split("-")[1];
    }
    let [targetList, targetPosition] = targetID.split(";");

    if(!comingPosition) {
        //full list is moved
        let comingChild = document.getElementById(comingList);
        let targetChild = document.getElementById(targetList);
        if(comingList>targetList){
            insertAfter(targetChild, comingChild);
        }else{
            insertAfter(comingChild, targetChild);            
        }

        //ID update pending
    }else{
        //task is moved
        let newTask = mainData[comingList].task[comingPosition];
        newTask.id = targetList+";"+mainData[targetList].task.length;
        mainData[targetList].task.push(newTask);

        let template = document.getElementById("new_task_template");
        var clone = template.content.cloneNode(true);
    
        let nameText = clone.querySelector("#nameText"),
        descriptionText = clone.querySelector("#descriptionText");
    
        nameText.innerHTML = newTask.name;
        descriptionText.innerHTML = newTask.description;
    
        nameText.setAttribute("id","Tname-"+newTask.id);
        descriptionText.setAttribute("id","Tdescription-"+newTask.id);
        clone.firstElementChild.setAttribute("id",newTask.id);
    
        document.getElementById("list-"+targetList).appendChild(clone);


        mainData[comingList].task.splice(comingPosition,1);

        document.getElementById(comingList+";"+comingPosition).remove();
    }
    
}, true);