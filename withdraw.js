// withdraw

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFeild = document.getElementById('withdraw-feild');
    const withdrawAmoutstring = withdrawFeild.value;
    const withdrawAmout =parseFloat(withdrawAmoutstring)

    const withdrawDisplay = document.getElementById('withdraw-display');
    const preveusTotalWithdrawString = withdrawDisplay.innerText;
    const preveusTotalWithdraw = parseFloat(preveusTotalWithdrawString);
    
    const newWithdrawTotal = preveusTotalWithdraw + withdrawAmout
    withdrawDisplay.innerText = newWithdrawTotal;

    const balanceDisplay = document.getElementById('balance-display');
    const balanceString = balanceDisplay.innerText;
    const preveusBalance = parseFloat(balanceString);
    const totalBalance = preveusBalance - withdrawAmout;
    balanceDisplay.innerText = totalBalance;
    if(totalBalance < 0){
        return alert('Your current account balance is 00')
    }


    withdrawFeild.value = '';


})