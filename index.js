//Inputs Outputs
const Nint = document.querySelector(".input");
const out = document.querySelector(".result");

//Pa to U
const btn =  document.querySelector(".mpatopa");
const btn1 = document.querySelector(".patoatm");
const btn2 = document.querySelector(".patobar")
const btn3 = document.querySelector(".patommhg");
const btn4 = document.querySelector(".patopsi")

//Atm a U
const btn5 = document.querySelector(".atmtopa");
const btn6 = document.querySelector(".atmtobar")
const btn7 = document.querySelector(".atmtommHg");
const btn8 = document.querySelector(".atmtopsi");

//btn Pa
btn.addEventListener("click",mpatopa);
btn1.addEventListener("click",patoatm);
btn2.addEventListener("click",patobar);
btn3.addEventListener("click",patommhg);
btn4.addEventListener("click",patopsi);

//btn ATM
btn5.addEventListener("click",atmtopa);
btn6.addEventListener("click",atmtobar);
btn7.addEventListener("click",atmtommHg);
btn8.addEventListener("click",atmtopsi);

//functions PA 

function mpatopa(){
    let a = parseFloat(Nint.value) * 1000000;
    out.innerHTML = a + " Pa";
}

function patoatm(){
    let b = parseFloat(Nint.value) / 101325;
    out.innerHTML= b + " Atm";
}

function patobar(){
    let c = parseFloat(Nint.value) / 100000;
out.innerHTML = c + " Bar";
}
function patommhg(){
    let d = parseFloat(Nint.value) /  133.3;
    out.innerHTML = d + " mmHg";
}
function patopsi(){
    let e = parseFloat(Nint.value) / 6895;
    out.innerHTML = e + " Psi";
}

//funtions Atm 

function atmtopa(){
    let f = parseFloat(Nint.value) * 101300;
    out.innerHTML = f + " Pa"
}
function atmtobar(){
    let g = parseFloat(Nint.value) * 1.013;
    out.innerHTML = g + " bar"
}
function atmtommHg(){
    let h = parseFloat(Nint.value) * 760;
    out.innerHTML = h + " mmHg"
}
function atmtopsi(){
    let i = parseFloat(Nint.value) * 14.696;
out.innerHTML = i + " Psi"
}