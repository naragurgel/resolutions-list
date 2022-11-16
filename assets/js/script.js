let input = document.getElementById('inputReso');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('listReso');

function addResolution() {
    //get the input data
    let dataInput = input.value;

    //If it is not empty, null or undefined 
    if((dataInput !=="") && (dataInput !== null) && (dataInput !== undefined)) {
        let newItem= `<div class="item">
        <div class="icon-item">
            <i class="mdi mdi-circle-outline"></i>

        </div>
        <div class="icon-name">
            ${dataInput}
        </div>
        <div class="icon-button">
            <button class="delete"><i class="mdi mdi-delete"></i>Delete</button>
            
        </div>
        </div>`;

        //add new item to the main section
        main.innerHTML += newItem;

        //clean the inputs 
        input.value= "";
        input.focus();

    }
}

input.addEventListener("keyup", function(event) {
    if(event.keyCode === 'Enter') {
        event.preventDefault();
        btnAdd.click();
    }
})