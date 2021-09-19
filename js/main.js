//Selecting Elements
let score = document.getElementById('score')
const timerComputer = document.getElementById('timer-computer')
const containerGame = document.getElementById('container-game')
const containerRound = document.getElementById('container-round')
const optionSelected = document.getElementById('option-selected')
const randomSelected = document.getElementById('random-selected')
const resultsGame = document.getElementById('results-game')

const btnPlayAgain = document.getElementById('btn-playAgain')

const btnRules = document.getElementById('btn-rules')
const btnCloseModal = document.getElementById('btn-close-modal')
const containerModal = document.getElementById('container-modal')
const soundWins = document.getElementById('sound_wins')
const soundLose = document.getElementById('sound_lose')
const soundDraw = document.getElementById('sound_draw')

let decisionComputer = Math.floor(Math.random() * (3 - 1 + 1) + 1)
console.log(decisionComputer)
let myInterval
let pontuationScore = 0
let timer = 0

const playGame = (escolha) =>{
    containerGame.style.display = 'none'
    containerRound.style.display = 'block'

    //Depending on the choice the image will change
    if(escolha === 1){
        optionSelected.src = 'rock-paper-scissors-master/images/icon-paper.svg'
        optionSelected.style.border = '1rem solid #4E6BF6'
    }else if(escolha === 2){
        optionSelected.src = 'rock-paper-scissors-master/images/icon-scissors.svg'
        optionSelected.style.border = '1rem solid #EBA41F'
    }else if(escolha === 3){
        optionSelected.src = 'rock-paper-scissors-master/images/icon-rock.svg'
        optionSelected.style.border = '1rem solid #E13557'
    }

    myInterval = setInterval(() => {
        timer++
        timerComputer.innerHTML = timer

        if(timer === 4){
            setTimeout(() => {
                timerComputer.style.display = 'none'
                randomSelected.style.display = 'block'

                //Depending on the machine's decision, the image changes
                if(decisionComputer === 1){
                    randomSelected.src = 'rock-paper-scissors-master/images/icon-paper.svg'
                    randomSelected.style.border = '1rem solid #4E6BF6'
                }else if(decisionComputer === 2){
                    randomSelected.src = 'rock-paper-scissors-master/images/icon-scissors.svg'
                    randomSelected.style.border = '1rem solid #EBA41F'
                }else if(decisionComputer === 3){
                    randomSelected.src = 'rock-paper-scissors-master/images/icon-rock.svg'
                    randomSelected.style.border = '1rem solid #E13557'
                }

                //Logic main
                if(escolha === 1 && decisionComputer === 1 || 
                    escolha === 2 && decisionComputer === 2 || 
                    escolha === 3 && decisionComputer === 3){
                        resultsGame.innerHTML = 'DRAW'
                   
                        soundDraw.play()
                        optionSelected.style.boxShadow = '0px 4px 32px 33px rgba(245, 245, 245, 0.185)'
                        randomSelected.style.boxShadow = '0px 4px 32px 33px rgba(245, 245, 245, 0.185)'
                    }

                if(escolha === 1 && decisionComputer === 3 ||
                    escolha === 2 && decisionComputer === 1 || 
                    escolha === 3 && decisionComputer === 2){
                        pontuationScore = pontuationScore + 5
                        score.innerHTML = pontuationScore
                        resultsGame.innerHTML = 'YOU WIN'
                     
                        soundWins.play()
                        optionSelected.style.boxShadow = '0px 4px 32px 33px rgba(245, 245, 245, 0.185)'
                }

                if(escolha === 1 && decisionComputer === 2 || 
                    escolha === 2 && decisionComputer === 3 || 
                    escolha === 3 && decisionComputer === 1){
                        pontuationScore = pontuationScore - 2
                        score.innerHTML = pontuationScore
                        resultsGame.innerHTML = 'YOU LOSE'
                        
                        soundLose.play()
                        randomSelected.style.boxShadow = '0px 4px 32px 33px rgba(245, 245, 245, 0.185)'
                }

            }, 1);

           
            btnPlayAgain.style.display = 'block'
            resultsGame.style.display = 'block'
          

            stopInterval()
        }

    }, 1000);

}


//Stop Interval
const stopInterval = () =>{
    clearInterval(myInterval)
    timer = 0
}


btnPlayAgain.addEventListener('click', (e)=>{
    containerGame.style.display = 'block'
    containerRound.style.display = 'none'
    decisionComputer = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    optionSelected.style.boxShadow = '0px 4px 32px 33px rgba(0, 0, 0, 0)'
    randomSelected.style.boxShadow = '0px 4px 32px 33px rgba(0, 0, 0, 0)'
    timerComputer.style.display = 'block'
    randomSelected.style.display = 'none'
    btnPlayAgain.style.display = 'none'
    
    resultsGame.style.display = 'none'
   
})


//FUNCTION OPEN MODAL
btnRules.addEventListener('click', ()=>{
    containerModal.style.display = 'block'
})

//FUNCTION CLOSE MODAL
btnCloseModal.addEventListener('click', ()=>{
    containerModal.style.display = 'none'
})
