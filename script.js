//  login button event handler 

const loginBtn = document.getElementById("enter-btn");
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('login-section');
    loginArea.style.display = "none";
    const trancationArea = document.getElementById('transaction');
    trancationArea.style.display = "block";
})


// deposit amount part 

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function() {
    const depositNumber = document.getElementById("addNumber").value;
    const depositAmount = parseFloat(depositNumber);
    document.getElementById("addNumber").value = "";

    const currentAmount = document.getElementById("depositAmount").innerText
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = currentAmountNumber + depositAmount;
    document.getElementById("depositAmount").innerText = totalAmount;

    // balance section 

    const currentBalance = document.getElementById("totalBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositAmount;
    document.getElementById("totalBalance").innerText = totalBalance;
})

// withdraw amount 

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = document.getElementById("addWithdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    document.getElementById("addWithdrawAmount").value = "";

    const currentWithdrawAmount = document.getElementById("withdrawAmount").innerText;
    const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmount);
    const totalWithdraw = currentWithdrawAmountNumber + withdrawAmountNumber;

    document.getElementById("withdrawAmount").innerText = totalWithdraw;

    // for balance 

    const currentBalance = document.getElementById("totalBalance").innerText
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalanceWithWithdraw = currentBalanceNumber - withdrawAmountNumber;

    document.getElementById("totalBalance").innerText = totalBalanceWithWithdraw;
})