console.log('ciao padrone');

//costante che collega le box da html a js 
const boxes = document.querySelector('.box');


// scriviamo un ciclo che stampi i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    let result;
    result = i;
    const box = `<div class="boxes">${result}</div>`;
    boxes.innerHTML += box;


}
