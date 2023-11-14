setInterval(function(){
      
   let color1 = Math.floor( Math.random()*255);
   let color2 = Math.floor( Math.random()*255);
   let color3 = Math.floor( Math.random()*255);

   document.body.style.background = `linear-gradient(rgb(${color2},${color3},${color1}),rgb(${color3},${color1},${color2}))`;
},1000)

let input = document.querySelector(`input`)

input.addEventListener(`input`,function() {
   document.querySelector(`h4`).innerText = input.value
})