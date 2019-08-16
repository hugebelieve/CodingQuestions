var fetchAPI = function(url, data){

    
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{

    })
}