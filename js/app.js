var fullObj = {
    qalinligi: '',
    Kattaligi: '',
    ustiga:[],
    qoshimcha:[]
}
var select = document.querySelector(".select")
var chek = document.querySelector(".check")
var resTitle = document.querySelector(".result__tit1")
var resTitle2 = document.querySelector(".result__tit2")
var result__chek = document.querySelector(".result__chek")
var result__chekk = document.querySelector(".result__chekk")
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var btn3 = document.querySelector(".btn3")
var check = document.querySelector(".chek")
var pomi = document.querySelector(".pomi")
var chekk = document.querySelector(".checkk")
var chekk2 = document.querySelector(".checkk2")
var chekk3 = document.querySelector(".checkk3")
var chekk4 = document.querySelector(".checkk4")
var chekk5 = document.querySelector(".checkk5")
var chekk6 = document.querySelector(".checkk6")
var chekk7 = document.querySelector(".checkk7")
var chekk8 = document.querySelector(".checkk8")
var result = document.querySelector(".result__btn")
select.addEventListener("change",(e)=>{
    resTitle.textContent = select.value
    fullObj.qalinligi = select.value
})
btn1.addEventListener("click",()=>{
    resTitle2.textContent = btn1.value;
    fullObj.Kattaligi = btn1.value
})
btn2.addEventListener("click",()=>{
    resTitle2.textContent = btn2.value;
    fullObj.Kattaligi = btn2.value
})
btn3.addEventListener("click",()=>{
    resTitle2.textContent = btn3.value;
    fullObj.Kattaligi = btn3x.value
})
chek.addEventListener("click",()=>{
    if(chek.checked == true){
        fullObj.ustiga.push('Pomidor')
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk.addEventListener("click",()=>{
    if(chekk.checked == true){
        fullObj.ustiga.push('Kurka Goshti')
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk2.addEventListener("click",()=>{
    if(chekk2.checked == true){
        fullObj.ustiga.push('Zaytun')
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk3.addEventListener("click",()=>{
    if(chekk3.checked == true){
        fullObj.ustiga.push('Tuzlangan Bodiring')
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk4.addEventListener("click",()=>{
    if(chekk4.checked == true){
        fullObj.ustiga.push("qo'ziqorin")
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk5.addEventListener("click",()=>{
    if(chekk5.checked == true){
        fullObj.ustiga.push('Qazi')
        result__chek .textContent = fullObj.ustiga
        
    }
})
chekk6.addEventListener("click",()=>{
    if(chekk6.checked == true){
        fullObj.qoshimcha.push('Achiq')
        result__chekk .textContent = fullObj.qoshimcha
        
    }
})
chekk7.addEventListener("click",()=>{
    if(chekk7.checked == true){
        fullObj.qoshimcha.push('Pishloq')
        result__chekk .textContent = fullObj.qoshimcha
        
    }
})
result.addEventListener("click",()=>{
    console.log(fullObj);
})
