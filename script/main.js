let male = document.querySelector('.formed__check-male');
let female = document.querySelector('.formed__check-female');
let weight = document.querySelector('.weight');
let age = document.querySelector('.age');
let tall = document.querySelector('.tall');
let selectel = document.querySelector('.selectel');
let selectelTwo = document.querySelector('.selectel-two');
let calculate = document.querySelector('.calculate');
let formedGV = document.querySelector('.formed-item-GV');

let resultary;


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
onlyOne();

function genderIs(){
    if(female.checked){
        formedGV.style.display = 'flex';}
        else {
            formedGV.style.display = 'none';
        }
}
female.addEventListener('change', genderIs);



function calculateInto(){
   
}

function calculatePersentage(){
    resultary = resultary/0.5;
    resultary = resultary/0.10;
    resultary = resultary/0.15;
    resultary = resultary/0.20;
}
