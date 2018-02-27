const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const li = document.querySelector('li');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.setAttribute("data-text", text);
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


ul.addEventListener("click",function(e) {
  if (e.target && e.target.matches("li")) {
    e.target.className = "foo"; // new class name here
    removeItem(e.target.textContent);
    }
});


function removeItem(id) {
 
  var index = -1;
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  for (var i = 0; i < itemsArray.length; i++) { //loop over the collection
    if (itemsArray[i].id === id) { //see if ids match
      itemsArray.splice(i, 1); //remove item from array
      break; //exit loop
    }
  }
  localStorage.setItem("items", JSON.stringify(itemsArray)); //set item back into storage
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('date').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




//window.onload = startTime();
