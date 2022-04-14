const myServices = []
const totalNum = document.querySelector(".totalNum")
let btn10 = document.querySelector(".btn10");
let btn20 = document.querySelector(".btn20");
let btn30 = document.querySelector(".btn30");
const btnSubmit = document.querySelector(".btnSubmit");

btn10.addEventListener("click", function(){
    if(btn10.value) {
        myServices.push(parseFloat(btn10.value))
        console.log(myServices)
    }
})

btn20.addEventListener("click", function(){
    if(btn20.value) {
        parseFloat(btn20)
        myServices.push(parseFloat(btn20.value))
        console.log(myServices)
    }
})

btn30.addEventListener("click", function(){
    if(btn30.value) {
        myServices.push(parseFloat(btn30.value))
        console.log(myServices)
    }
})


btnSubmit.addEventListener("click", function(){
    let total = myServices.reduce((a, b) => a + b, 0);
    totalNum.innerHTML = `<span>$ ${total}</span>`
}
)
