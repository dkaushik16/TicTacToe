const turnSound=new Audio('./assets/turn.mp3')
const gameOverSound=new Audio('./assets/gameOver.mp3')
let turn="X"
let boxes=document.getElementsByClassName('box')
let isGameOver=false
let count=0
let reset=document.querySelector('#reset')
let boxtext=document.getElementsByClassName('textrBox')
let boxArr=Array.from(boxtext)
let gameArr=Array.from(boxes)


//function to change the turn
 function changeTurn(){
    return (turn==="X" ? "0": "X")
    
 }



//funtion to check win
 function checkWin(){
   let boxtext=document.getElementsByClassName('textrBox')
   let win=[[0,1,2,5,5,0],[3,4,5,5,15,0],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,5,15,90],[2,5,8,15,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]]
   
   win.forEach((e)=>{
      if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='') && count===0 ){
         isGameOver=true
         turn=boxtext[e[0]].innerText
       document.querySelector('.info').innerText=`Player ${turn} Won !!`
       document.querySelector('.line').style.width="20vw"
       document.querySelector('.line').style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
       gameOverSound.play()
       count++

      }

    })
 

 }

//Game logic 
 gameArr.forEach((el)=>{
     let boxtext=el.querySelector('.textrBox')
     let info=document.querySelector('.info')

     el.addEventListener('click',()=>{
        if(boxtext.innerText===''){   
            boxtext.innerText=turn
           turn=changeTurn()
           turnSound.play()
           checkWin() 
           if(!isGameOver){
           info.innerText=`Turn for ${turn}`
          }
       }

    })
 })



 reset.addEventListener('click',()=>{
    boxArr.forEach((e)=>{
     e.innerText=''
   })
   isGameOver=false
   turn="X"
   count=0
   document.querySelector('.line').style.width="0vw"
   document.querySelector('.info').innerText=`Turn for ${turn}`
 
  })

