//manipalation DOM
//first i have to create variables
const numberOfRows = document.getElementById('rows');
//please crete variable for columns
const numberOfRows = document.getElementById('columns');
const button= document.querySelector('button')
button.addEventListener("click", createTable)

function createTable(){
  //how many lines? now you can get the values from numberOfRows
Cell1 = newRow.insertCell(0);
Cell2 = newRow.insertCell(1);

Cell1.innerHTML = rows;
Cell2.innerHTML = columns;
  
  console.log("Labas")
}
