document.getElementById('btnwithdraw').addEventListener('click', function () {
    const btnWithdra = document.getElementById('withdrawinputid');
    const btnwithdrawInputString = btnWithdra.value;
    const previouswithdrawAmount = parseFloat(btnwithdrawInputString);
    console.log(previouswithdrawAmount);

    btnWithdra.value = '';

    if (isNaN(previouswithdrawAmount)) {
        alert('please enter number')
        return;
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    const withDrawTotalString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withDrawTotalString);




    const balanceTotaldisplay = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotaldisplay.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);



    if (previouswithdrawAmount > balanceTotalAmount) {
        alert('Your balance is Low')
        return;
    }


    const totalwithdrawAmount = previouswithdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = totalwithdrawAmount;



    const presentbalanceAfterWithdraw = balanceTotalAmount - previouswithdrawAmount;
    balanceTotaldisplay.innerText = presentbalanceAfterWithdraw;
})