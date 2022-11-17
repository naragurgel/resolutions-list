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
            <i class="mdi mdi-circle-outline"></i>

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


//when enter is pressed, submit the item to the list
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

