let input = document.getElementById('inputReso');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('listReso');

function addResolution() {
    //get the input data
    let valueInput = input.value;

    //If it is not empty, null or undefined 
    if((valueInput !=="") && (valueInput !== null) && (valueInput !== undefined)) {
        let newItem= `<div class="item">
        <div class="icon-item">
            <i class="mdi mdi-circle-outline"></i>

        </div>
        <div class="icon-name">
            Teste
        </div>
        <div class="icon-button">
            <button class="delete"><i class="mdi mdi-delete"></i>Delete</button>
            
        </div>
    </div>`;

    main.innerHTML += newItem;

    }
}