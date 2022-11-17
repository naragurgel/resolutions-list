let count = 0;
let input = document.getElementById('inputReso');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('listReso');

function addResolution() {
    //get the input data
    let dataInput = input.value;

    //If it is not empty, null or undefined 
    if((dataInput !=="") && (dataInput !== null) && (dataInput !== undefined)) {
        
        ++count;
        
        let newItem= `<div id="${count}" class="item">
        <div onclick="tagTask(${count})" class="icon-item">
            <i id="icon_${count}" class="mdi mdi-circle-outline"></i>

        </div>
        <div onclick="tagTask(${count})" class="icon-name">
            ${dataInput}
        </div>
        <div class="icon-button">
            <button onclick="delet(${count})" class="delet"><i class="mdi mdi-delete"></i>Delete</button>
            
        </div>
        </div>`;

        //add new item to the main section
        main.innerHTML += newItem;

        //clean the inputs 
        input.value= "";
        input.focus();

    }
}


function delet(id) {
    var task = document.getElementById(id);
    task.remove();
}

function tagTask(id){
    var item = document.getElementById(id);
    var kind = item.getAttribute('class');
    console.log(kind);

    if(kind=="item"){
        item.classList.add('clicked')
       
        //shows the task as done or not 
        var icon = document.getElementById('icon_'+id)
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');

    //send the clicked item to the end of the list
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicked')

        //shows the task as done or not 
        var icon = document.getElementById('icon_'+id);
        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');
    }
}
//when enter is pressed, submit the item to the list
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

