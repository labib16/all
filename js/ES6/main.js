let items = document.getElementsByClassName('item');
let btn = document.getElementById('addNew');
let myList = document.getElementById('myList')

// for(let i =0; i < items.length; i++){
//     var item = items[i];
//
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
// };
// btn.addEventListener('click', function(){
//     let newItem = document.createElement('li');
//     newItem.innerText = 'Item';
//     myList.appendChild(newItem);
// });
// myList.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target)
// })

for (let i = 0; i < items.length; i++){
    let item = items[i]

    item.addEventListener('click', function (x){
        x.target.parentNode.removeChild(x.target)
    })
}
    let newItem = document.createElement('li')
    newItem.innerText = 'New Item';
    myList.appendChild(newItem);
})
myList.addEventListener('click', function (x){
    x.target.parentNode.removeChild(x.target)
})