// deposit

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositFeild = document.getElementById('deposit-feild');
    const depositAmoutstring = depositFeild.value;
    const depositAmout =parseFloat(depositAmoutstring)

    const depositDisplay = document.getElementById('deposit-display');
    const preveusTotaldepositString =depositDisplay.innerText;
    const preveusTotaldeposit = parseFloat(preveusTotaldepositString)
    
    const newDepositTotal = preveusTotaldeposit + depositAmout
    depositDisplay.innerText = newDepositTotal;

    const balanceDisplay = document.getElementById('balance-display');
    const balanceString = balanceDisplay.innerText;
    const preveusBalance = parseFloat(balanceString);
    const totalBalance = preveusBalance + depositAmout;
    balanceDisplay.innerText = totalBalance;


    depositFeild.value = '';


    


})