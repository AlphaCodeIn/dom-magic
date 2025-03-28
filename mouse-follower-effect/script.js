let main = document.querySelector('#main')
let crsr = document.querySelector('#crsor')

main.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
