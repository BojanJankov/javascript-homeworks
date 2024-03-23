console.log("It is working");

const rowInput = document.querySelector("#inputRow");

const colInput = document.querySelector("#inputCol");

const submitButton = document.querySelector("#btn");

const paragraph = document.querySelector("#paragraph");

function createTableInHTML() {
  const numberRow = document.querySelector("#inputRow").value;

  const numberCol = document.querySelector("#inputCol").value;

  let table = `<table>`;
  for (let i = 0; i < numberRow; i++) {
    table += `<tr>`;
    for (let j = 0; j < numberCol; j++) {
      table += `<td> Row-${i + 1} Column-${j + 1} </td>`;
    }
    table += `</tr>`;
  }
  table += `</table>`;
  const tableContainer = document.querySelector("#table-container");
  tableContainer.innerHTML = table;
  if (
    isNaN(numberRow) ||
    isNaN(numberCol) ||
    numberRow <= 0 ||
    numberCol <= 0
  ) {
    paragraph.innerHTML += `<p>Enter valid numbers for Rows and Columns!</p>`;
    paragraph.style.color = "red";
  }
  return table;
}

submitButton.addEventListener("click", createTableInHTML);
