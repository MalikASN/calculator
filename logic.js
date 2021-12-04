var inpt=document.getElementById("aria");
b1=document.getElementById("btone");
console.log(inpt);
b1.addEventListener("click",function a1(e) {
    inpt.innerText=inpt.innerText+e.target.innerText;

})
function a2() {
    inpt.innerText=inpt.innerText+"2"; 
}
function a3() {
    inpt.innerText=inpt.innerText+"3";
}
function a4() {
    inpt.innerText=inpt.innerText+"4";
}
function a5() {
    inpt.innerText=inpt.innerText+"5";
}
function a6() {
    inpt.innerText=inpt.innerText+"6";
}
function a7() {
    inpt.innerText=inpt.innerText+"7";
}
function a8() {
    inpt.innerText=inpt.innerText+"8";
}
function a9() {
    inpt.innerText=inpt.innerText+"9";
}
function add() {
    inpt.innerText=inpt.innerText+"+";
}
function mul() {
    inpt.innerText=inpt.innerText+"*";
}
function div() {
    inpt.innerText=inpt.innerText+"/";
}
function del() {
    inpt.innerText=inpt.innerText+"-";
}
function eql() {
    eval(inpt.innerText);
   inpt.innerText=eval(inpt.innerText);
}
function a0() {
    inpt.innerText=inpt.innerText+"0";
}
function clk() {
    inpt.innerText="";
}
