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
let back = document.querySelector('.back');
let what = document.querySelector('.what');
let selectIn = document.querySelector('.selectIn');



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
        formedGV.style.visibility = 'visible';}
        else {
            formedGV.style.visibility = 'hidden';
        }
}
female.addEventListener('change', genderIs);


function clean(){
    // container__formed.style.display='flex';
    container__formed.style.filter = "brightness(1)";
    container__dov.style.filter='brightness(0)';
}

function whatIs(){
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    div.classList.add('argument')
    selectIn.append(div);
    div.append(p1,p2,p3,p4);
}

let onceFun = whatIs;

back.addEventListener('click', clean)
what.addEventListener('mouseover', onceFun);
// what.addEventListener('mouseout', whatIs);

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
    // container__formed.style.display='none';
    container__formed.style.filter = "brightness(0)";
    // container__dov.style.display='flex';
    container__dov.style.filter = "brightness(1)";
    // if()
    let quite = calculateInto(weight.value, tall.value, age.value);
    // console.log(calculateInto(weight.value, tall.value, age.value));
    resulted.innerHTML = `Базовий обмін ~ ${quite} ккал <br>`;
    // let resultary = parseFloat(resulted.value);
    const persentag1 = parseInt(quite*0.05);
    const persentag2 = parseInt(quite*0.10);
    const persentag3 = parseInt(quite*0.15);
    const persentag4 = parseInt(quite*0.20);
    // info.innerHTML = `Mетаболі́зм — сукупність хімічних реакцій, що відбуваються в живих організмах.`;
    persentage1.innerHTML = `Швидка втрата ваги ~ ${quite-persentag4} ккал <br>`;
    persentage2.innerHTML = `Помірна втрата ваги ~ ${quite-persentag3} (${quite-persentag2}) ккал <br>`;
    persentage3.innerHTML = `Збереження ваги ~ ${quite} ккал <br>`;
    persentage4.innerHTML = `Збільшення ваги ~ ${persentag2+quite} ккал <br>`;
}
    
)


function calculatePersentage(resultary){
    resultary = resultary/0.5;
    resultary = resultary/0.10;
    resultary = resultary/0.15;
    resultary = resultary/0.20;
}
