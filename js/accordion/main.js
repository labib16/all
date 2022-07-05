
let MinuetsText = document.querySelector('.Minuets');
let SecondText = document.querySelector('.Second');
let MsecondsText = document.querySelector('.Mseconds');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let restButton = document.querySelector('.rest');
let Intervel;

startButton.addEventListener('click', function(){
    clearInterval(Intervel);
    Intervel = setInterval(Time,10)
})
stopButton.addEventListener('click', function(){
    clearInterval(Intervel);
})
restButton.addEventListener('click', function(){
    clearInterval(Intervel);
    MinuetsText.innerHTML = '00';
    SecondText.innerHTML = '00';
    MsecondsText.innerHTML = '00';
})

function Time(){
    MsecondsText.innerHTML++
    if(MsecondsText.innerHTML < 10){
        MsecondsText.innerHTML = '0' + MsecondsText.innerHTML;
    }
    if(MsecondsText.innerHTML == 99){
        SecondText.innerHTML++
        MsecondsText.innerHTML = '00';
        if(SecondText.innerHTML < 10){
            SecondText.innerHTML = '0' + SecondText.innerHTML;
        }
        if(SecondText.innerHTML == 59){
            MinuetsText.innerHTML++;
            SecondText.innerHTML = '00'
            if(MinuetsText.innerHTML < 10){
                MinuetsText.innerHTML = '0' + MinuetsText.innerHTML;
            }
        }
    }

}