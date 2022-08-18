document.getElementById('btnwithdraw').addEventListener('click', function () {
    const btnWithdra = document.getElementById('withdrawinputid');
    const btnwithdrawInputString = btnWithdra.value;
    const previouswithdrawAmount = parseFloat(btnwithdrawInputString);

    btnWithdra.value = '';


    const withdrawTotal = document.getElementById('withdraw-total');
    const withDrawTotalString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withDrawTotalString);

    const totalwithdrawAmount = previouswithdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = totalwithdrawAmount;


    const balanceTotaldisplay = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotaldisplay.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const presentbalanceAfterWithdraw = balanceTotalAmount - previouswithdrawAmount;
    balanceTotaldisplay.innerText = presentbalanceAfterWithdraw;
})