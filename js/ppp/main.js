let box = document.querySelectorAll('.box')
let go = document.querySelector('.go')
let ar = [];
box.forEach(function(element,index){
    element.addEventListener('click', function(){
        ar.push(index)
        if(ar.length > 0){
            go.addEventListener('click', function(){
              box[index].classList.add('hidden')
            })
        }
    })
})
