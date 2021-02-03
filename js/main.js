/*===========================*/ 

// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link');

// navToggle.addEventListener('click', ()=>{
//   document.body.classList.toggle('nav-open'); //how is nav-open within the html structure?
// })

// navLinks.forEach(link => {
//   link.addEventListener('click', ()=>{
//     document.body.classList.remove('nav-open');
//   })
// }
/*================================*/

let red;
let green;
let blue;
let rgbColor;

const randomColor = ()=> {
  for (var i = 0; i <=10; i += 1) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  // html += '<div style="background-color:' + rgbColor + '"></div>';
  return rgbColor;
  }
}

//const github = document.getElementById('github'); //icons[4]
github.addEventListener ('mouseover', () => {
github.style.color = randomColor();
});
//---
// const tarot = [
//     'The Fool 愚人',
//     'The Magician <br> 魔術師',
//     'The High Priestess <br> 女教皇',
//     'The Empress 女皇',
//     'The Emperor 皇帝',
//     'The Hierophant <br> 教皇',
//     'The Lovers 戀人',
//     'The Chariot 戰車',
//     'Strength 力量',
//     'The Hermit 隱士',
//     'Wheel of Fortune <br> 命運之輪',
//     'Justice 正義',
//     'The Hanged Man <br> 懸吊者',
//     'Death 死亡',
//     'Temperance 節制',
//     'The Devil 魔鬼',
//     'The Tower 高塔',
//     'The Star 星星',
//     'The Moon 月亮',
//     'The Sun 太陽',
//     'Judgement 審判',
//     'The World 世界'    
// ]

// function randomTarot(){
//     var i = Math.floor(Math.random()*22);
//     return tarot[i];  
// }

// function print(message){
//     // const message = randomTarot(output);
//     output.innerHTML = message;
// }
// const btn = document.getElementById('search');
// btn.addEventListener ('click', () => {
//   var message = randomTarot(output);
//   btn.style.color = randomColor();
//   print(message)
// });


  



