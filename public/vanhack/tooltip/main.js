// Add your javascript here

$(function(){
    // document ready
    addToolTip("topLeftElem","Title 1","Small title");
    addToolTip("topMiddleElem","Title Middle","Small Middle Title Here");
    addToolTip("topRightElem","Title 2","Hue content with logs of text inside"+
                    " it as you are see here. And if we want to go multi line we can do that right here.");
    addToolTip("bottomLeftElem","Title 3","Minor content");
    addToolTip("bottomMiddleElem","Title Middle","Small Middle Title Here");
    addToolTip("bottomRightElem","Title 4"," click on OK to dismiss");
});

function addToolTip(id, title, content){
    $("#"+id).showToolTip({
        title: title,
        content: content,
        onApprove: function(title){
            //use approve function callback here
            console.log("Approved "+title,this)
        }
    });
}

$.fn.showToolTip = function(argument){
    if(!argument || typeof(argument)!="object" ){
        return "Please provide valid input!"
    }
    let title = argument.title || "Title";
    let content = argument.content || "content";
    let approveCallback = argument.onApprove || function(){}
    
    let toolTipRef = $(this);
    toolTipRef[0].addEventListener("mouseover", hoverIn(toolTipRef, title, content, approveCallback, null) )
}

function hoverIn(element, title, content, approveCallback, toolTip){
    // currying the function
    let toolTipBox = null;
    return function(event){
        let boundedBox = getBoundedBox(element);
        if(toolTip==null){
            // create new tooltip only if element is hovered
            // save tooltip in closure for next hover in
            toolTip = getNewToolTip(title, content, approveCallback);
            element[0].append(toolTip);
        }
        if(toolTipBox==null){
            toolTipBox = getBoundedBox($(toolTip)); //read size before update to avoid unnecessary repaint
        }

        if(toolTip.style.display=="flex") return;
        
        requestAnimationFrame(()=>{
            let translate = placeAsPerBox(boundedBox, toolTipBox, toolTip, event);
            toolTip.style.display = "flex";
            toolTip.animate({
                transform: translate,
              }, {
                duration: 300,
                fill: 'both'
              });
        });
    }
}

function placeAsPerBox(boundedBox, toolTipBox, toolTip, event){
    let margin = 10;

    let clientWidth = document.body.clientWidth;

    let spaceTop = boundedBox.top-toolTipBox.height+margin;
    let spaceRight = (clientWidth-boundedBox.width-boundedBox.left)-toolTipBox.width+margin;

    let x = 0;
    let y = 0;

    if(spaceTop>0){
        //place in top
        y = -(toolTipBox.height+margin);
    }else{
        y = (boundedBox.height+margin);
    }

    let widthDifference = toolTipBox.width-boundedBox.width;
    if(widthDifference<spaceRight){
        // space right available
        x = 0;
    }else {
        x = -widthDifference;
    }

    return [ `scale(0) translate(${event.pageX-toolTipBox.left}px,${event.pageY-toolTipBox.top}px)`,
                `scale(1) translate(${x}px,${y}px)`];
}

function getNewToolTip(title, content, approveCallback){
    let template = document.getElementById("toolTipTemplate");
    let clone = template.content.cloneNode(true);
    
    let toolTipDiv = clone.firstElementChild;
    clone.querySelector(".toolTitle").innerHTML = title;
    clone.querySelector(".toolContent").innerHTML = content;
    
    clone.querySelector(".actionButton").addEventListener("click",function(){
        approveCallback.call(toolTipDiv, title); // attach parent tool tip if required
        requestAnimationFrame(()=>{
            toolTipDiv.animate({
                transform: ["scale(1)","scale(0)"],
            }, {
                duration: 300,
                fill: 'both'
            }); //back to scale zero
            setTimeout(()=>{
                toolTipDiv.style.display = "none";
            },300);
        });
    });

    toolTipDiv.addEventListener("mouseover", function(event){
        event.stopPropagation(); //prevent self hover
    })

    return toolTipDiv;
}

function getBoundedBox(element){
    return element[0].getBoundingClientRect();
}