/*jshint esversion: 6 */
let count = 0;
let input = document.getElementById('inputReso');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('listReso');

/**
 * Function: createNewResolutionItem creates a resolution item in the list placeholder element
 * @param {*} dataInput : resolution text
 * @param {*} isClicked : is  the item completed or not 
 */
function createNewResolutionItem(dataInput, isClicked) {
    //If it is not empty, null or undefined 
    if ((dataInput !== "") && (dataInput !== null) && (dataInput !== undefined)) {
        // getting html and adding data with JS
        ++count;

        let newItem = `<div id="${count}" class="item ${isClicked}">
        <div onclick="tagTask(${count})" class="icon-item">`;

        if (isClicked === 'clicked') {
            newItem += `<i id="icon_${count}" class="mdi mdi-check-circle"></i>`;
        } else {
            newItem += `<i id="icon_${count}" class="mdi mdi-circle-outline"></i>`;
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

/** 
 * Function: addResolution get the data from the input
*/
function addResolution() {
    //to get the data from the input
    let dataInput = input.value;

    createNewResolutionItem(dataInput, '');

    //to clean the inputs after the user submit a data
    input.value = "";
    input.focus();
}

//Function delet: to delete a item from the list

function delet(id) {
    let task = document.getElementById(id);
    task.remove();
    saveResolutionData();
}
//Function tagTask: when the user tag as checks or unchecks each item from the list
function tagTask(id) {
    let item = document.getElementById(id);
    let kind = item.getAttribute('class');
    console.log(kind);

    if (kind == "item") {
        item.classList.add('clicked');

        let icon = document.getElementById('icon_' + id);
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');

    } else {
        item.classList.remove('clicked');

        let icon = document.getElementById('icon_' + id);
        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');
    }
    saveResolutionData();
}

//To submit the item to the list when the user press enter tab
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
        saveResolutionData();
    }
});

/**
 * Function to save the resolution data into local storage so user doesn't have to reenter data if they come back to the site 
 * 
 * data will be stored in "naragurgelResolutionsList"
 */

function saveResolutionData() {
    const resolutions = document.querySelectorAll('#listReso div.item');
    let reso_array = [];
    // loop through items & make it json data
    for (const resolution of resolutions) {
        const text = resolution.querySelector('.icon-name').innerHTML.trim();
        const completed = resolution.classList.contains('clicked') ? 'yes' : 'no';
        const new_resolution = {
            'text': text,
            'complete': completed
        };
        reso_array.push(new_resolution);
    }
    const reso_object = { resolutions: reso_array };
    //save data to local storage
    localStorage.setItem('naragurgelResolutionsList', JSON.stringify(reso_object));
}

/**
 * Function to preload resolutions from local storage
 * 
 * loops through local storage item 'naragurgelResolutionsList' for resolutions & creates elements if expected data structure ir present 
 */

function preloadResolutionsFromLocalStorage() {
    let reso_object = JSON.parse(localStorage.getItem('naragurgelResolutionsList'));
    if (reso_object !== null && typeof (reso_object.resolutions) !== undefined && reso_object.resolutions)
        for (const resolution of reso_object.resolutions) {
            if (typeof (resolution.text) !== undefined && typeof (resolution.complete !== undefined)) {

                const dataInput = resolution.text;
                const clicked = resolution.complete === 'yes' ? 'clicked' : '';

                createNewResolutionItem(dataInput, clicked);
            }
        }
}

/**
 * All resouces are ready, check 
 */

document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'complete') {
        preloadResolutionsFromLocalStorage();
    }
};