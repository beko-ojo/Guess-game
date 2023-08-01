const Answer=Math.floor(Math.random() * 11);
let guesses=0;
   
document.getElementById("guesssubmit").onclick = function(){
    let guess=document.getElementById("guessbox").value 
    guesses++
    guess=Number(guess)

     if (guess==Answer) {document.getElementById("guesslabel").innerHTML=`You've guessed correctly after ${guesses}amount of guesses`}
    else document.getElementById("guesslabel").innerHTML=`You've guessed wrong, try again`
    while (guesses>3) {
        window.alert(`You've exceeded guess trials. Refresh page to renew trials`)
         break } 
}
