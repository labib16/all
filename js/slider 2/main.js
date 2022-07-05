window.onload = function (){
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let restBtn = document.getElementById('rest');
    let secondTag = document.getElementById('second');
    let mSecondTag = document.getElementById('mSecond');
    let minutesTag = document.getElementById('minutes')
    let seconds = 0;
    let mSecond = 0;
    let minutes = 0;
    let interval;

    startBtn.addEventListener('click', function (){
        clearInterval(interval);
        interval = setInterval(myFun, 10)
    });
    stopBtn.addEventListener('click', function (){
        clearInterval(interval);
    });
    restBtn.addEventListener('click', function (){
        clearInterval(interval);
        seconds = '00';
        mSecond = '00';
        secondTag.innerHTML = seconds;
        mSecondTag.innerHTML = mSecond;
    });
    function myFun(){
        mSecond++;
        if (mSecond < 10){
            mSecondTag.innerText = '0' + mSecond;
        }

        if (mSecond > 9){
            mSecondTag.innerText = mSecond;
        }
        if (mSecond > 99){
            seconds++;
            secondTag.innerHTML = '0' + seconds;
            mSecond = 0;
            mSecondTag.innerHTML = '0' + 0;
        }
        if (seconds > 9){
            secondTag.innerHTML =  seconds;
        }
        if (seconds > 60){
            minutes++;
            minutesTag.innerHTML = '0' + minutes;
            seconds = 0;
            secondTag.innerHTML = '0' + 0;
        }
        if (minutes > 9){
            minutesTag.innerHTML = minutes;
        }
    }
}