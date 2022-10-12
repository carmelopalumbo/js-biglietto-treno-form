// js

// VARIABLE

const costoalKm = 0.21;
let nomeCognome;
let kmRequest;
let fasciaEta;
const btnInput = document.getElementById('genera');

let calcolaSconto;
let prezzoFinale;

btnInput.addEventListener('click',function(){

    nomeCognome = prompt('Scrivi il tuo Nome e Cognome.');
    kmRequest = parseInt(prompt('Quanti km devi percorrere?'));
    fasciaEta = parseInt(prompt('Quanti anni hai?'));

    // FIRST CARD

    document.getElementById('nomecognome').value = nomeCognome;
    document.getElementById('kmpercorsi').value = kmRequest;

    if(fasciaEta < 18){
        document.getElementById('fasciaeta').value = 'minorenne';
    }else if(fasciaEta >= 65){
        document.getElementById('fasciaeta').value = 'over-65';
    }else{
        document.getElementById('fasciaeta').value = 'maggiorenne';
    }

    // SECOND CARD

    document.getElementById('nomecognometot').innerHTML = nomeCognome;

    if(fasciaEta < 18){
        document.getElementById('dirittosconto').innerHTML = '20% di Sconto';
        calcolaSconto = (kmRequest * costoalKm * 20) / 100;
        prezzoFinale = (kmRequest * costoalKm) - calcolaSconto;
        document.getElementById('costobiglietto').innerHTML = `${prezzoFinale.toFixed(2)}€`;
    }else if(fasciaEta >= 65){
        document.getElementById('dirittosconto').innerHTML = '40% di Sconto';
        calcolaSconto = (kmRequest * costoalKm * 40) / 100;
        prezzoFinale = (kmRequest * costoalKm) - calcolaSconto;
        document.getElementById('costobiglietto').innerHTML = `${prezzoFinale.toFixed(2)}€`;
    }else{
        document.getElementById('dirittosconto').innerHTML = 'Biglietto Standard';
        prezzoFinale = kmRequest * costoalKm;
        document.getElementById('costobiglietto').innerHTML = `${prezzoFinale.toFixed(2)}€`;
    }
    });
