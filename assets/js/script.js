let count = 0;
let input = document.getElementById('inputReso');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('listReso');

function createNewResolutionItem(dataInput, isClicked){
    //If it is not empty, null or undefined 
    if((dataInput !=="") && (dataInput !== null) && (dataInput !== undefined)) {
        
        ++count;
        
        let newItem= `<div id="${count}" class="item ${isClicked}">
        <div onclick="tagTask(${count})" class="icon-item">`;

        if (isClicked==='cliked') {
            newItem += `<i id="icon_${count}" class=mdi mdi-check-circle"></i>`;
        } else {
            new item += `<i id="icon_${count}" class=mdi mdi-circle-outline"></i>`;
        }
        newItem += `</div>
        <div onclick="tagTask(${count})" class="icon-name">
            ${dataInput}
        </div>
        <div class="icon-button">
            <button onclick="delet(${count})" class="delet"><i class="mdi mdi-delete"></i>Delete</button>
            
        </div>
        </div>`;

        //add new item to the main section
        main.innerHTML += newItem;
    }
}

function addResolution() {
    //get the input data
    let dataInput = input.value;

    createNewResolutionItem(dataInput, '');

    //clean the inputs 
    input.value= "";
    input.focus();
}

//delete item
function delet(id) {
    let task = document.getElementById(id);
    task.remove();
    saveResolutionData();
}

// when the user tag as checks or unchecks
function tagTask(id){
    let item = document.getElementById(id);
    let kind = item.getAttribute('class');
    console.log(kind);

    if(kind=="item"){
        item.classList.add('clicked')
        
        let icon = document.getElementById('icon_'+id)
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');

    //send the clicked item to the end of the list
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicked')

        let icon = document.getElementById('icon_'+id);
        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');
    }
    saveResolutionData();
}
//To submit the item to the list when the user press enter tab
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
        saveResolutionData();
    }
})

/**
 * Function to save the resolution data into local storage so user doesn't have to reenter data if they come back to the site 
 * 
 * data will be stored in "naragurgelResolutionsList"
 */

function saveResolutionData(){
    const resolutions= document.querySelectorAll('#listReso div.item');
    let reso_array= [];
    // loop through items & make it json data
    for (const resolution of resolutions) {
        const text = resolution.querySelector('.icon-name').innerHTML.trim();
        const completed = resolution.classList.contains('clicked')? 'yes' : 'no';
        new_resolution= {
            'text': text,
            'complete': completed
        };
        reso_array.push(new_resolution);
    };
    const reso_object={resolutions: reso_array};
    //save data to local storage
    localStorage.setItem('naragurgelResolutionsList', JSON.stringify(reso_object));
}

/**
 * Function to preload resolutions from local storage
 * 
 * loops through local storage item 'naragurgelResolutionsList' for resolutions & creates elements if expected data structure ir present 
 */

function preloadResolutionsFromLocalStoragr (){
    let reso_object= JSON.parse(localStorage.getItem('naragurgelResolutionList'));
    if (reso_object !== null && typeof(reso_object.resolutions) !== undefined && reso_object.resolution)
    for (const resolution of reso_object.resolutions) {
        //mke sure we have the two expect parts of the resolution
        if (typeof(resolution.text) !== undefined && typeof(resolution.complete !== undefined)){
            const dataInput= resolution.text
            const clicked= resolution.complete === 'yes'? 'clicked' : '';
            createNewItem(dataInput, clicked);
        }
    }
}