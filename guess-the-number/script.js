let h = document.querySelector('#num h3')
let bun = document.querySelector('#box button')
bun.addEventListener('click', function(){
    let ran = Math.floor(Math.random()*100)
    console.log(ran)
    h.innerHTML = `${ran}`
})