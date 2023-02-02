let male = document.querySelector('.formed__check-male');
let female = document.querySelector('.formed__check-female');
let weight = document.querySelector('.weight');
let age = document.querySelector('.age');
let tall = document.querySelector('.tall');
let selectel = document.querySelector('.selectel');
let selectelTwo = document.querySelector('.selectel-two');
let calculate = document.querySelector('.calculate');
let formedGV = document.querySelector('.formed-item-GV');
let out = document.querySelector('.out-f');
let persentage1 = document.querySelector('.persentage1');
let persentage2 = document.querySelector('.persentage2');
let persentage3 = document.querySelector('.persentage3');
let persentage4 = document.querySelector('.persentage4');
let container__formed = document.querySelector('.container__formed');
let container__dov = document.querySelector('.container__dov');
let resulted = document.querySelector('.resulted');
let info = document.querySelector('.info');



let resultary;


// function onlyOne(checkbox) {
//     var checkboxes = document.getElementsByName('.check')
//     checkboxes.forEach((item) => {
//         if (item !== checkbox) item.checked = false
//     })
// }
// onlyOne();

function genderIs(){
    if(female.checked){
        formedGV.style.display = 'flex';}
        else {
            formedGV.style.display = 'none';
        }
}
female.addEventListener('change', genderIs);



function calculateInto(weights, talls, ages){
    let resultWeight;
    if(female.checked){
    resultWeight = (10*weights) + (6.25*talls) -(4.92*ages) - 161;
    console.log(resultWeight+ 'sfasd');
    } else if(male.checked){
        resultWeight = (10*weights) + (6.25*talls) -(4.92*ages) + 5;
    console.log(resultWeight+ 'sfasd');
    }
    return resultWeight;
}
// calculate.onclick = ()=>{
//     container__formed.style.display=none;
//     container__dov.style.display=flex;
//     calculateInto(weight.value, tall.value, age.value);
// }

calculate.addEventListener('click', ()=>{
    container__formed.style.display='none';
    container__dov.style.display='flex';
    let quite = calculateInto(weight.value, tall.value, age.value);
    // console.log(calculateInto(weight.value, tall.value, age.value));
    resulted.innerHTML = `IMT ${quite} <br>`;
    // let resultary = parseFloat(resulted.value);
    const persentag1 = parseInt(quite*0.05);
    const persentag2 = parseInt(quite*0.10);
    const persentag3 = parseInt(quite*0.15);
    const persentag4 = parseInt(quite*0.20);
    info.innerHTML = `Mетаболі́зм — сукупність хімічних реакцій, що відбуваються в живих організмах.`;
    persentage1.innerHTML = `% 1 - ${persentag1} <br>`;
    persentage2.innerHTML = `% 2 - ${persentag2} <br>`;
    persentage3.innerHTML = `% 3 - ${persentag3} <br>`;
    persentage4.innerHTML = `% 4 - ${persentag4} <br>`;
}
    
)


function calculatePersentage(resultary){
    resultary = resultary/0.5;
    resultary = resultary/0.10;
    resultary = resultary/0.15;
    resultary = resultary/0.20;
}
