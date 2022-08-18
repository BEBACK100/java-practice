document.getElementById('bt-depo').addEventListener('click', function () {
    const btndeposit = document.getElementById('depositinput');
    const previousinputdepositstrin = btndeposit.value;
    const previousinputAmount = parseFloat(previousinputdepositstrin);


    btndeposit.value = '';

    const depositTotalfield = document.getElementById('deposit-total');
    const deposiTotalfieldstring = depositTotalfield.innerText;
    const newdepositTotalAmount = parseFloat(deposiTotalfieldstring);


    const presentdepositTotal = previousinputAmount + newdepositTotalAmount;
    depositTotalfield.innerText = presentdepositTotal;



    const balanceTotaldisplay = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotaldisplay.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const presentbalancetotalAmount = previousinputAmount + balanceTotalAmount;
    balanceTotaldisplay.innerText = presentbalancetotalAmount;

})