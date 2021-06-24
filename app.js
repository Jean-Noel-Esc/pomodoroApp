const affichageTravail = document.querySelector('.affichageT');
const affichageRepos = document.querySelector('.affichageR')
const btnGO = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnreset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let tempsInitial = 3;
let tempsDeRepos = 3;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles ${ nbDeCycles }`;

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
    (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

affichageRepos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
        (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;


btnGO.addEventListener('click', () => {
    tempsInitial --;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
        (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial %
        60}`;

        let timer = setInterval(() => {
            if(tempsInitial > 0){
                tempsInitial --;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                    (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial %
                    60}`;
            }
            else if (tempsDeRepos === 0 && tempsInitial === 0){
                tempsInitial = 3;
                tempsDeRepos = 3;
                nbDeCycles++;
                cycles.innerText = `Nombres de cycles ${nbDeCycles}`;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichageRepos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }
            else if (tempsInitial === 0){
                tempsDeRepos--;
                affichageRepos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                    (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }

        }, 1000);
})     