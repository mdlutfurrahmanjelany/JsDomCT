const ctx = document.getElementById("myChart");
const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Total", "Deposit", "Withdraw"],
    datasets: [
      {
        label: "# Money",
        data: [12, 19, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// input field ------------------------------------
function inputProcess(inputId) {
  const inputIdValue = document.getElementById(inputId);
  const inputIdString = inputIdValue.value;
  const inputIdNumber = parseFloat(inputIdString)
  inputIdValue.value = "";
  return inputIdNumber;
}
// bank er output field--------------------------
function totalBankOutput(addBankOutputId) {
  const addBankOutput = document.getElementById(addBankOutputId);
  const addBankOutputString = addBankOutput.innerText;
  const addBankOutputNumber = parseFloat(addBankOutputString);
  return addBankOutputNumber;
}
// input field er value ke bank er output a add kora--------------------
function setvalue(elementId, value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;
}

// ----------------------------------------- Deposit part ---------------------------------//

// deposit button --------------------------------------
document.getElementById('Deposit-btn').addEventListener('click', function () {
  const userInput = inputProcess("user-Deposit");
  const bankOutput = totalBankOutput("depositAdd");
  if (isNaN(userInput)) {
      alert('সংখ্যা ছাড়া কোনো কিছু Allow না।  Please provide a valid সংখ্যা')
      return;
  }
  const total = userInput + bankOutput;
  setvalue('depositAdd', total)
  const balanceAddFromDeposit = totalBankOutput('balanceAdd')
  const totalbalance = userInput + balanceAddFromDeposit;
  setvalue('balanceAdd', totalbalance)

})
//---------------------------------------- withdraw part ----------------------------------//

// withdraw button--------------------------
document.getElementById('Withdraw-btn').addEventListener('click', function(){
  const withdrawInput = inputProcess('user-Withdraw');
  const withdrawBankOutput = totalBankOutput('withdrawAdd');
  if (isNaN(withdrawInput)) {
      alert('সংখ্যা ছাড়া কোনো কিছু Allow না।  Please provide a valid সংখ্যা')
      return;
  }
  const balanceMinusFromWithdraw = totalBankOutput('balanceAdd');
  if (withdrawInput > balanceMinusFromWithdraw) {
      alert('তোমার একাউন্ট এ এতো টাকা নাই। ')
      return;
  }
  const withdrawBankOutputTotal = withdrawInput + withdrawBankOutput;
  setvalue('withdrawAdd', withdrawBankOutputTotal);
  const totalbalance =balanceMinusFromWithdraw - withdrawInput;
  setvalue('balanceAdd', totalbalance);
})

