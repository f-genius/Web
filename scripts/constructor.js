var formfield = document.getElementById('formfield');

function add(){
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','text');
    newField.setAttribute('class','text');
    newField.setAttribute('siz',50);
    newField.setAttribute('placeholder','Фамилия Имя участника');
    formfield.appendChild(newField);
}

function remove(){
    var input_tags = formfield.getElementsByTagName('input');
    if(input_tags.length > 1) {
        formfield.removeChild(input_tags[(input_tags.length) - 1]);
    }
}

function saveData() {
    var elements = document.getElementsByClassName("text");
    console.log(elements)
    var dataArray = []
    for (var i = 0; i < elements.length; i++) {
        dataArray.push(elements[i].value)
    }
    console.log(dataArray)
    localStorage.setItem('userData', JSON.stringify(dataArray))
    displayList();
}

function displayList() {
    var storedData = JSON.parse(localStorage.getItem('userData'));
    var dataList = document.getElementById('users__list');
    dataList.innerHTML = '';

    storedData.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        dataList.appendChild(listItem);
    });
    event.preventDefault();
}