let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let ed = new Audio("gameover.mp3")
let turn = "0"
let gameover = false

const changeTurn = ()=>{
    if(turn==='0'){
        return turn='X'
    }
    else{
        return turn='0'
    }
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxText")
    let wins = [
        [0, 1, 2, -10, 5, 0],
        [3, 4, 5, -10, 15, 0],
        [6, 7, 8, -10, 25, 0],
        [0, 3, 6, -20, 15, 90],
        [1, 4, 7, -10, 15, 90],
        [2, 5, 8, 0, 15, 90],
        [0, 4, 8, -10, 15, 45],
        [2, 4, 6, -10, 15, 135],
    ]

    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            ed.play()
            gameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.transform = `translate(${[e[3]]}vw, ${[e[4]]}vw) rotate(${[e[5]]}deg)`
            document.querySelector(".line").style.width = "30vw";

        }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                ting.play();
                checkWin();
                if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

})



reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxText')
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    })
    turn = '0'
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector(".line").style.width = "0vw";
})