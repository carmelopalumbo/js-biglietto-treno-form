// js

// VARIABLE

const costoalKm = 0.21;
let nomeCognome;
let kmRequest;
let fasciaEta;
const btnInput = document.getElementById('genera');
const btnReset = document.getElementById('annulla');
const minCarrozza = 1;
const maxCarrozza = 9;
const minCP = 10000;
const maxCP = 99999;

let calcolaSconto;
let prezzoFinale;


btnInput.addEventListener('click',function(){

    // FIRST CARD

    nomeCognome = document.getElementById('nomecognome').value;
    kmRequest = document.getElementById('kmpercorsi').value;
    fasciaEta = document.getElementById('fasciaeta').value; 

    // SECOND CARD

    document.getElementById('nomecognometot').innerHTML = nomeCognome;

    if(fasciaEta === 'minorenne'){
        document.getElementById('dirittosconto').innerHTML = '20% di Sconto';
        calcolaSconto = (kmRequest * costoalKm * 20) / 100;
        prezzoFinale = (kmRequest * costoalKm) - calcolaSconto;
    }else if(fasciaEta === 'over-65'){
        document.getElementById('dirittosconto').innerHTML = '40% di Sconto';
        calcolaSconto = (kmRequest * costoalKm * 40) / 100;
        prezzoFinale = (kmRequest * costoalKm) - calcolaSconto;
    }else{
        document.getElementById('dirittosconto').innerHTML = 'Biglietto Standard';
        prezzoFinale = kmRequest * costoalKm;
    }

    document.getElementById('costobiglietto').innerHTML = `${prezzoFinale.toFixed(2)}€`;

    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (maxCarrozza - minCarrozza + 1) + minCarrozza);

    document.getElementById('cpcode').innerHTML = Math.floor(Math.random() * (maxCP - minCP + 1) + minCP);
    });


// RESET

btnReset.addEventListener('click', function(){
    document.getElementById('nomecognome').value = '';
    document.getElementById('kmpercorsi').value = '';
    document.getElementById('fasciaeta').value = 'none';
    document.getElementById('nomecognometot').innerHTML = '-';
    document.getElementById('dirittosconto').innerHTML = '-';
    document.getElementById('carrozza').innerHTML = '-';
    document.getElementById('cpcode').innerHTML = '-';
    document.getElementById('costobiglietto').innerHTML = '-';
})
