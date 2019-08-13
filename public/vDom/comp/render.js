let render = (vElement)=>{

    if(typeof vElement === "string"){
        return document.createTextNode(vElement);
    }

    // just create DOM element
    let $app = document.createElement(vElement.tagName);

    //set attributes
    for( const [k,v] of Object.entries(vElement.attr)) {
        if(k=="innerHTML"){
            $app.innerHTML = v;
        }else{
            $app.setAttribute(k,v);
        }
    }

    //creat children
    vElement.children.forEach(child => {
        let $child = render(child);
        $app.appendChild($child);
    });

    return $app; // newly created DOM
}

export default render;