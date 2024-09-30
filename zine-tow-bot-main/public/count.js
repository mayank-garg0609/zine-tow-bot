const countValB = document.getElementById('countb');
const countValA = document.getElementById('counta');
var ourClick = 0;
document.getElementById('countera').addEventListener('click', () => {
intA = parseInt(countValA.textContent);
intA++;
ourclick++;
countValA.textContent = intA;
localStorage.setItem('clicks', ourClick);
});

// const reset =document.getElementById('reset');
// reset.addEventListener('click', () => {
//     fetch('/reset'{
//         method: 'p'
//     })
// }

document.addEventListener('DOMContentLoaded',()=>{
        
    count = fetch('/count',{method:'GET'}).then(response => response.json())
.then(data => {      

if(counta){
document.getElementById('counta').textContent= `${data.counta}`;
localStorage.setItem('counta') = data.counta;
}
if(countb){
document.getElementById('countb').textContent = `${data.countb}`;
localStorage.setItem('countb') = data.countb;
}
})
.catch(error => console.log(error));
})




setInterval(() => {
    var clicksA = localStorage.getItem('counta');
    var intClicksA = parseInt(clicksA);
    
    fetch('/clickA', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({'clicks': intClicksA})})
    .then(response => response.json()).then(data)
    
    fetch('/count', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("counta").textContent = ` ${data.counta} `;
        document.getElementById("countb").textContent = ` ${data.countb} `;
        localStorage.setItem('counta', data.counta);
        localStorage.setItem('countb', data.countb);
        
    })
    .catch(error => console.log(error));
}, 2000);
