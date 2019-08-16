var allRestaurants = [];
var allTags = {};
window.addEventListener('load', function() {
    fetch('./restaurant.json').then(response=>response.json())
    .then((data)=>{
        allRestaurants = data;
        loadAllRestaurants();
    });
});

//debouncing
var debounceFunc = function(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            return fn.call(this,...args);
        },delay);
    }
}

var inputSubmit = debounceFunc((event)=>{
    let value = event.target.value;
    value = value.toLowerCase();
    if(value.length<1){
        showAndHide(true);
        return; //very small search term
    }
    allRestaurants.forEach((restaurant)=>{
        restaurant.show = restaurant.caseName.includes(value);
    });

    showAndHide();
},300);

document.querySelector("#searchBar").addEventListener('keyup', inputSubmit);
document.querySelector("#searchButton").addEventListener('click', ()=>{inputSubmit({target:document.getElementById("searchBar")})});

document.getElementsByClassName("sorter")[0].addEventListener('click', (event)=>{
    if(event.target.tagName.toLowerCase()!="a"){
        return;
    }
    sortBy(event.target.id);
});

document.querySelector("#tagsContainer").addEventListener('click', (event)=>{
    let id = event.target.id;
    if(id=="tagsContainer"){
        return;
    }
    if(event.target.style.background=="aqua"){
        //de select
        event.target.style.background = "white";
        filterByTags(id,false);
    }else{
        //select
        event.target.style.background = "aqua";
        filterByTags(id,true);
    }
});

function loadAllRestaurants(){
    if(allRestaurants.length==0) return;
    let template = document.getElementById("each_restaurant_template");
    let restaurantContainer = document.getElementsByClassName("restaurantContainer")[0];
    allRestaurants.forEach((eachRestaurant)=>{
        let clone = template.content.cloneNode(true);
        clone.querySelector(".restaurantName").innerHTML = eachRestaurant.name + "- *" +
                                                                eachRestaurant.rating+" - "+
                                                                eachRestaurant.eta + " min";
        clone.firstElementChild.setAttribute("id",eachRestaurant.id);
        eachRestaurant.node = clone.firstElementChild;
        eachRestaurant.show = true;
        eachRestaurant.caseName = eachRestaurant.name.toLowerCase();
        restaurantContainer.appendChild(clone);

        eachRestaurant.tags.forEach((eachTag)=>{
            if(!allTags[eachTag]){
                allTags[eachTag] = [];
            }
            allTags[eachTag].push(eachRestaurant.id);
        });
    });
    fillTagContainer();
}

function filterByTags( tagName, trueForShow = true){
    let allRefId = [].concat(allTags[tagName]); //make new ref
    
    for(let i=0; i<allRestaurants.length; i++){
        let eachRestaurant = allRestaurants[i];
        if(eachRestaurant.tags.includes(tagName) && trueForShow){
            eachRestaurant.show = trueForShow;
        }else{
            eachRestaurant.show = !trueForShow;
        }
    }

    showAndHide();
}

function sortBy(key){
    allRestaurants = allRestaurants.sort((a,b)=>{
        if(a[key]>b[key]){
            //swap
            a.node.parentNode.insertBefore(a.node,b.node);
        }else{
            //a.node.parentNode.insertBefore(b.node,a.node);
        }
        return a[key]>b[key]?-1:1
    });
    console.log(allRestaurants);
    
}

function swapDOMNode(){

}


function showAndHide(showAll = false){
    allRestaurants.forEach((eachRestaurant)=>{
        if(showAll){
            if(eachRestaurant.node.style.display=="none"){
                eachRestaurant.node.style.display = "flex";
            }
            eachRestaurant.show = true;
            return
        }
        let display = eachRestaurant.node.style.display
        if(display=="none" && eachRestaurant.show==false){
            //all good
        }else if(display!="none" && eachRestaurant.show==true){
            //all good
        }else{
            eachRestaurant.node.style.display = eachRestaurant.show?'flex':'none';
        }
    });
}

function fillTagContainer(){
    let allTagLabel = Object.keys(allTags);

    let template = document.getElementById("each_tag_template");
    let tagsContainer = document.getElementById("tagsContainer");
    allTagLabel.forEach((tag)=>{
        let clone = template.content.cloneNode(true);
        clone.firstElementChild.innerHTML = tag;
        clone.firstElementChild.setAttribute("id",tag);
        tagsContainer.appendChild(clone);
    });
}