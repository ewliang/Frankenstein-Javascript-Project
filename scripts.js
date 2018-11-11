var app = document.getElementById('app');
var pageTitleElement = document.getElementById('pageTitle');
var submitButton = document.getElementById('btnSubmit');

var tableBody = document.getElementsByTagName('tbody')[0];

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = "json"; // Response is specified as JSON. Default: Text
xhr.onload = function() {
  var data = xhr.response;
  var tableRowElement = document.createElement('tr');
  var tableRowDataElement = document.createElement('td');
  var inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  tableRowDataElement.appendChild(inputElement);
  tableRowElement.appendChild(tableRowDataElement);
  tableBody.appendChild(tableRowElement);
  inputElement.addEventListener('keyup', function(e) {
    // If [Enter], Add Entry To Table
    if(e.keyCode == 13) {
      addNewEntry(inputElement.value);
    }
  });
  for(let i = 0; i < 10; i++) {
    addNewEntry(data[i].title);
  }
  var rows = tableBody.children;
  for(let i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function() {
      console.log(rows[i].innerText);
      var editInputElement = document.createElement('input');
      editInputElement.setAttribute('type', 'text');
      editInputElement.value = rows[i].innerText;
      rows[i].parentNode.replaceChild(editInputElement, rows[i]);
      rows[i].addEventListener('focusout', function() {
        var tableRowElement = document.createElement('tr');
        var tableRowDataElement = document.createElement('td');
        tableRowDataElement.innerText = editInputElement.value;
        tableRowElement.appendChild(tableRowDataElement);
        rows[i].parentNode.replaceChild(tableRowElement, editInputElement);
      });
    });
  }
}
xhr.send();

function addNewEntry(data) {
  var tableRowElement = document.createElement('tr');
  var tableRowDataElement = document.createElement('td');
  tableRowDataElement.innerText = data;
  tableRowElement.appendChild(tableRowDataElement);
  tableBody.appendChild(tableRowElement);
}

// Welcome Message
window.onload = function() {
  alert("It's alive!!! It's alive!!!");
}
// Make the Page Title Green
pageTitleElement.style.color = "#00ff00";

/*
 *  Event Listeners
 */


// Listen for Form Submit Button Click
submitButton.addEventListener('click', function() {
  alert('You clicked me!');
});
