//Inputs Outputs
const Nint = document.querySelector(".input");
const out = document.querySelector(".result");

//buttons
const btn =  document.querySelector(".mpatopa");
const btn1 = document.querySelector(".patoatm");
const btn2 = document.querySelector(".patobar")
const btn3 = document.querySelector(".patommhg");
const btn4 = document.querySelector(".patopsi")


btn.addEventListener("click",mpatopa);
btn1.addEventListener("click",patoatm);
btn2.addEventListener("click",patobar);
btn3.addEventListener("click",patommhg);
btn4.addEventListener("click",patopsi);

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