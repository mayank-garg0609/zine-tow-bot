document.getElementById('counterb').addEventListener('click', () => {
    fetch('/clickedb', { method: 'POST' })
        .then(response => response.json())
        .then(data => {      
            localStorage.setItem('countb', data.countb);
        })
        .catch(error => console.log(error));
});

document.addEventListener('DOMContentLoaded',()=>{
        
    count = fetch('/count',{method:'GET'}).then(response => response.json())
.then(data => {      

if(counta){
document.getElementById('counta').innerHTML = `${data.counta}`;
}
if(countb){
document.getElementById('countb').innerHTML = `${data.countb}`;
}
})
.catch(error => console.log(error));
})

setInterval(() => {
    // fetch('/count', { method: 'GET' })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         document.getElementById("countera").innerHTML = `Button A was clicked ${data.counta} times`;
    //         document.getElementById("counterb").innerHTML = `Button B was clicked ${data.countb} times`;
            
    //     })
    //     .catch(error => console.log(error));

    fetch('/count',{method:'GET'})
    .then(response => response.json())
    .then(data => {
        document.getElementById("countera").innerHTML = `${data.counta}`;
        document.getElementById("counterb").innerHTML = `${data.countb}`;
    
    });

    fetch('')
}, 2000);