//Inputs Outputs
const Nint = document.querySelector(".input");
const out = document.querySelector(".result");
const clear = document.querySelector(".clear")

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

//Bar U
const btn9 = document.querySelector(".bartopa");
const btn10 = document.querySelector(".bartoatm")
const btn11 = document.querySelector(".bartommHg");
const btn12 = document.querySelector(".bartopsi");

//Psi U
const btn13 = document.querySelector(".psitopa");
const btn14 = document.querySelector(".psitoatm")
const btn15 = document.querySelector(".psitommHg");
const btn16 = document.querySelector(".psitobar");

//Clear
clear.addEventListener("click", () => {
    out.innerHTML = " ";
    Nint.value = " ";
})


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

//btn BAR
btn9.addEventListener("click",bartopa);
btn10.addEventListener("click",bartoatm);
btn11.addEventListener("click",bartommHg);
btn12.addEventListener("click",bartopsi);

//btn PSI
btn13.addEventListener("click",psitopa);
btn14.addEventListener("click",psitoatm);
btn15.addEventListener("click",psitommHg);
btn16.addEventListener("click",psitobar);


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
//functions BAR
function bartopa(){
    let j =parseFloat(Nint.value) * 100000;
    out.innerHTML = j + " Pa";
}
function bartoatm(){
    let k = parseFloat(Nint.value) / 1.013;
    out.innerHTML = k + " Atm" ;
}
function bartommHg(){
    let L = parseFloat(Nint.value) / 750.1;
    out.innerHTML = L + " Atm" ;
}
function bartopsi(){
    let M = parseFloat(Nint.value) * 14.504;
    out.innerHTML = M + " Psi" ;
}
//functions PSI

function psitopa(){
let N = parseFloat(Nint.value) * 6895;
out.innerHTML = N + " Pa";
}
function psitoatm(){
let O = parseFloat(Nint.value) / 14.696;
out.innerHTML = O + " Atm";
}
function psitommHg(){
let p = parseFloat(Nint.value) * 51.7149;
out.innerHTML = p + " mmHg";
}

function psitobar(){
let q = parseFloat(Nint.value) / 14.504;
out.innerHTML = q + " Bar";
}
