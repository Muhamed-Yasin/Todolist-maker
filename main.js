// Selectors
const todoinput = document.querySelector('.todoinput');
const todobtn = document.querySelector('.todobtn');
const todolist = document.querySelector('.todolist');


//functions
const addtodo = (e) =>{
    //Prevent form Submission
    e.preventDefault( );
    // Make list entry
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo');
    // create list items
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todoitem');
    tododiv.appendChild(newtodo);
    
    const checkbtn = document.createElement('button');
    checkbtn.innerHTML = '<i class="fas fa-check"></i>';
    checkbtn.classList.add('complete-btn');
    tododiv.appendChild(checkbtn);

    const delbtn = document.createElement('button');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    delbtn.classList.add('del-btn');
    tododiv.appendChild(delbtn);

    todolist.appendChild(tododiv);
    todoinput.value = "";


}

const delcheck = (e) =>{
const item = e.target;
if (item.classList[0] === 'del-btn'){
    item.parentElement.classList.add('fall')
    item.parentElement.addEventListener('transitionend',function(){
        item.parentElement.remove();
    })

}

if(item.classList[0]=== 'complete-btn'){
    item.parentElement.classList.toggle('completed');
    
}
}




// Event Listeners
todobtn.addEventListener('click',addtodo);
todolist.addEventListener('click',delcheck);








