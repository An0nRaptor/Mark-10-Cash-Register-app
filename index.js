const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const errorMsg = document.querySelector("#error-msg");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelectorAll(".noOfNotes");

const availableNotes = [2000, 500, 100,20, 10, 5, 1];

checkBtn.addEventListener("click", () => {
  hideMessgae();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const data = cashGiven.value - billAmount.value;

      calculateValue(data);
    } else {
      showMessage("Amount Should be greater than the BillAmount");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function showMessage(message) {
  errorMsg.style.display = "block";

  errorMsg.innerText = message;
}

function hideMessgae() {
  errorMsg.style.display = "none";
}

function calculateValue(data) {
  for (let i = 0; i < availableNotes.length; i++) {
    let data1 = Math.floor(data/availableNotes[i]);
console.log("data1", data1)

    data %= availableNotes[i];

    result[i].innerText = data1;
    
  }
}
