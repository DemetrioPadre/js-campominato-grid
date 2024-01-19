console.log('ciao padrone');

//costante che collega le box da html a js 
const boxes = document.getElementById('gameBox');


// scriviamo un ciclo che stampi i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    // let result;
    // result = i;
    // const scatola = `<div class="box ">${i}</div>`;
    // boxes.innerHTML += scatola;
    // console.log(i);
    const cardElement = document.createElement('div');
    cardElement.classList.add('box');
    cardElement.innerHTML = i;
    boxes.append(cardElement);

}
