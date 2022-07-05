let nmbr = document.querySelectorAll('.item');
let screen = document.getElementById('screen');
let screen2 = document.getElementById('screen2')

class claculator{
    constructor(nmbr,screen, screen2){
        this.nmbr = nmbr;
        this.screen = screen;
        this.screen2 = screen2;

        
    };

}

const Cal = new claculator(nmbr,screen,screen2);


function getResult(){
    Cal.screen2.innerText = eval(Cal.screen.textContent)
}

nmbr.forEach(function(element){
    element.addEventListener('click', function(){
      if(element.textContent == "="){
        getResult()
      }else{
        screen.innerText += element.textContent
      }
        
      })
  })