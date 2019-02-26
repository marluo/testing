var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listDelete = document.querySelector("ul");
var deletebuttons = document.getElementsByClassName('deletebutton');
var arrayLista = document.getElementsByClassName('li');
 
 
/* Loopa igenom arrayen deletebuttons */
    function loopButtons() {
    for(var i=0; i<deletebuttons.length; i++) {
        console.log(i)
    /* lägg till eventlistener på varje knapp och kör funktion delList om den körs*/
            deletebuttons[i].addEventListener("click", delList);
        }
}
    window.onload = loopButtons;
 
 
 
    function classListAdd(event) {
        /*funkar bara om det är en lista.*/
        if(event.tagName = "li")  {
        /*targetar bara targetn i listan */
        event.target.classList.toggle("done");
    }
}
    function delList(event) {
        /*Targetar parentnode*/
        event.target.parentNode.remove("li");
    }
 
    /*function skapaDeleteButton {
        var but = document.createElement("BUTTON");
            for(var i=0; i<arrayLista.length; i++) {
 
 
    }*/
 
//* MY SHIT *//
 
function inputLength() {
    return input.value.length;
}
 
function createListElement() {
    var li = document.createElement("li");
    var buttonx = document.createElement("button");
    buttonx.innerText = 'Delete';
    buttonx.classList.add("deletebutton");
    buttonx.addEventListener("click", delList);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(buttonx)
    input.value = "";
}
 
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
 
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
 
 
 
listDelete.addEventListener("click", classListAdd);
 
button.addEventListener("click", addListAfterClick);
 
 
input.addEventListener("keypress", addListAfterKeypress);