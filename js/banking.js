// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
  
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal  =  previousDepositAmount+ newDepositAmount;
    depositTotal.innerText = newDepositTotal;

// update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalaceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalaceTotal;


    // clear the deposit input field
    depositInput.value ='';
})

///////////// handle withdraw event handler ///////////
document.getElementById('withdraw-button').addEventListener('click', function(){
const withdrawInput = document.getElementById('withdraw-input')
const withdrawAmountText = withdrawInput.value;
const newwithdrawAmount = parseFloat(withdrawAmountText)
console.log(newwithdrawAmount);

//set withdraw total 
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);

const newwithdrawTotal = previousWithdrawTotal + newwithdrawAmount
withdrawTotal.innerText = newwithdrawTotal;

//update balance 
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal =parseFloat(previousBalanceText);
const newBalaceTotal = previousBalanceTotal - newwithdrawAmount;

balanceTotal.innerText = newBalaceTotal ;

// clear withdraw input field
withdrawInput.value ='';
})
