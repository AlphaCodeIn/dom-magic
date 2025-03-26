let arr = ['Alpha','Lucky','Men','AlphaBoy']

let h = document.querySelector('#num h3')
let bun = document.querySelector('#box button')
let len = arr.length
bun.addEventListener('click', function(){
    let ran = Math.floor(Math.random()*100)
    console.log(ran)
    h.innerHTML = `${ran}`
})