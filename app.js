const siete=document.querySelector("#siete");
const ocho=document.querySelector("#ocho");
const nueve=document.querySelector("#nueve");
const division=document.querySelector("#division");
const seis=document.querySelector("#seis");
const cinco=document.querySelector("#cinco");
const cuatro=document.querySelector("#cuatro");
const multiplicacion=document.querySelector("#multiplicacion");
const tres=document.querySelector("#tres");
const dos=document.querySelector("#dos");
const uno=document.querySelector("#uno");
const suma=document.querySelector("#suma");
const cero=document.querySelector("#cero");
const igual=document.querySelector("#igual");
const resta=document.querySelector("#resta");
const borrar=document.querySelector("#borrar");
const resultado=document.querySelector("#resultado");
let primerNumero;
let segundoNumero;
let operacion;
// Eventos
nueve.addEventListener("click",()=>{  
    resultado.textContent=resultado.textContent +9;
})
ocho.addEventListener("click",()=>{
   resultado.textContent=resultado.textContent +8;
})
siete.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +7;
})
seis.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +6;
})
cinco.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +5;
})
cuatro.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +4;
})
tres.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +3;
})
dos.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +2;
})
uno.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +1;
})
cero.addEventListener("click",()=>{
    resultado.textContent=resultado.textContent +0;
})

multiplicacion.addEventListener("click",()=>{
    primerNumero=resultado.textContent;
    operacion="*";
    limpiar();
})
suma.addEventListener("click",()=>{
    primerNumero=resultado.textContent;
    operacion="+";
    limpiar();
})
resta.addEventListener("click",()=>{
    primerNumero=resultado.textContent;
    operacion="-";
    limpiar();
})
division.addEventListener("click",()=>{
    primerNumero=resultado.textContent;
    operacion="/";
    limpiar();
})
borrar.addEventListener("click",()=>{
    limpiar();
})
igual.addEventListener("click",()=>{
    segundoNumero=resultado.textContent;
    console.log(primerNumero);
    console.log(segundoNumero);
    resolver();
})
function resolver(){
    let res=0;
    switch (operacion) {
        case "+":
            res= parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case "*":
            res=parseFloat(primerNumero) * parseFloat(segundoNumero);
            break;
        case "/":
            res=parseFloat(primerNumero) / parseFloat(segundoNumero);
            break;
        case "-":
            res=parseFloat(primerNumero) - parseFloat(segundoNumero);
            break;
        default:
            break;
    }
    resultado.textContent=res;
    resetar()
};
function limpiar(){
    resultado.textContent="";
}
function resetar(){
    primerNumero=0;
    segundoNumero=0;
    operacion="";
}