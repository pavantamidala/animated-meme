const colors = ['red','green','yellow','black','brown']
let color =  document.querySelector('.color')

let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    const random = randomNumber()
    
    color.textContent = colors[random]
    document.body.style.backgroundColor = colors[random]
})

function randomNumber(){
    return Math.floor(Math.random()*colors.length)
}