"use strict";

const btn = document.querySelectorAll(".btn");

// as btn gets clicked-> 1. grab the id of the input to get the value of input
// then render down below (stuffing html down below the h3)
let finalTotal = 0;
btn.forEach((el) => {
  el.addEventListener("click", () => {
    const curBtn = el.getAttribute("data-id");
    const item = document.querySelector(`#item${curBtn}`);
    const curInput = document.querySelector(`#i${curBtn}`).value;
    const price = document.querySelector(`#price${curBtn}`).innerHTML;
    const table = document.querySelector(".table");
    const quantityNo = Number(curInput);
    const priceNo = Number(price.slice(1));
    const rowTotal = quantityNo * priceNo;

    finalTotal += rowTotal;
    // if more than one item in cart,
    // const finalRow = document.querySelector("#totalRow");
    // finalRow.remove();
    const finalRow = document.querySelector("#totalRow");
    if (finalRow) {
      finalRow.remove();
    }
    let tableRow = `
    <tr id="tr${curBtn}">
    <th scope="row">${item.innerHTML}</th>
    <td>${curInput}</td>
    <td>${price}</td>
    <td>${rowTotal}</td>
    <td class="remove"><button id="removeBtn${curBtn}" class="btn-danger m-0">Remove</button></td>
  </tr>
  <tr id="totalRow">
  <th scope="row">Total:</th>
  <td>${finalTotal}</td>
    </tr>
    `;
    table.innerHTML += tableRow;

    const removeBtn = document.querySelector(`#removeBtn${curBtn}`);
    const removeTr = document.querySelector(`#tr${curBtn}`);
    removeBtn.addEventListener("click", () => {
      removeTr.remove();
      document.querySelector(`#i${curBtn}`).value = 0;
     
    });

    return tableRow;
  });
});

// if (e.target.id === btn1) {
//   // check which button got clicked?
//   // then grab the value of input
//   // render is using function below but maybe using .map?
// }
