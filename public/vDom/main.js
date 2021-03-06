import render from '/comp/render';
import createElem from '/comp/createElem';
import mount from '/comp/mount';
import diff from '/comp/diff'; //gives us a patch

let count = 1;

var cVirNode = (count) => createElem("div", {
    attr: {
        id: "home"+count
    },
    children: [
        createElem("h3", {
            attr: {
                innerHTML: count
            }
        }),
        createElem("input"),
        ... new Array(count).fill(
            createElem("img", {
                attr: {src: "https://media.giphy.com/media/mx9fVEF08tyne/giphy.gif"}
            })
        )
    ]
});

let $vNode = cVirNode(count);
let $app = render($vNode);
let rootElement = mount($app, document.getElementById("app")); //actually rootElement is $app and mounted now

setInterval(()=>{ // stimulate DOM changes
    count = Math.floor(Math.random()*10);
    updateCount(count);
},3000);

function updateCount(cnt){
    count = cnt;
    let $newNode = cVirNode(count);// every time full vDOM is created 200K node in sec
    patchDOM($newNode);
}


var patchDOM = ($newNode)=>{
    const patch = diff($vNode, $newNode);
    rootElement = patch(rootElement);
    $vNode = $newNode; //reset for next iteration
}
