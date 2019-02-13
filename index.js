var submitButton = document.getElementById("generate name")
.addEventListener('click', function(event){
    console.log('buttonClicked');
    //randomlly generate a name
    var checkedGenderButton = document.querySelector('input[name = "gender"]:checked');
    var firstName = '';
    var color = '';
    var middleName = '';
    if (checkedGenderButton === null){
        var fullNameHeader = document.getElementById('full name');
        fullNameHeader.innerText = firstName;
        alert('choose Male or Female');
        return;
    }
    if (checkedGenderButton.value === 'male'){
        firstName = getRandElem(boyNameList);
        middleName = randFilteredElem(boyNameList, firstName);
        color = 'blue';
    } 
    else if(checkedGenderButton.value === 'female'){
        firstName = getRandElem(girlNameList);
        middleName = randFilteredElem(girlNameList, firstName);
        color = 'red';
    }
    var lastNameInput = document.getElementById('nameInput');
    if (lastNameInput.value.trim() === ""){
        alert('Please enter last name');
        return;
    }
    var fullName = buildName(firstName, middleName, lastNameInput.value);
    displayName(fullName, color);
})
// where first and last name is built
function buildName(firstName, middleName, lastName){
    //alert("Please enter your last name");
    return firstName + " " + middleName + " " + lastName;
}
function randFilteredElem(arr,filter){
    var elem = getRandElem(arr);
    while (elem === filter){
        elem = getRandElem(arr);
    }
    return elem;
}

function getRandElem(arr){
    return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
// to display full name on screen
function displayName(name, color){
    var fullNameHeader = document.getElementById('full name');
    fullNameHeader.innerText = name;
    fullNameHeader.style.color = color;
}