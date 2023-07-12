let rows = 100;
let column = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBarDisplay = document.querySelector(".adress-bar");
for (let i = 0; i < rows; i++) {
  let addressCol = document.createElement("div");
  addressCol.setAttribute("class", "address-col");
  addressCol.innerText = i + 1;
  addressColCont.appendChild(addressCol);
}

for (let i = 0; i < column; i++) {
  let addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(65 + i);
  addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
  let rowCount = document.createElement("div");
  rowCount.setAttribute("class", "row-count");
  for (let j = 0; j < column; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell-cont");
    cell.setAttribute("contenteditable", "true");
    rowCount.appendChild(cell);
    addEventListenerDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowCount);
}

function addEventListenerDisplay(cell, i, j) {
  cell.addEventListener("click", () => {
    let rowId = i + 1;
    let colId = String.fromCharCode(65 + j);
    addressBarDisplay.value = `${colId}${rowId}`;
  });
}
