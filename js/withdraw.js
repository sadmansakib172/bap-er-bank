document.getElementById('btn-withdraw').addEventListener('click', function(){

    // get the new wihtdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

       // clear the input field
       withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please give a number');
        return;
    }

    // get previous withdraw total 
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   


    // get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if(newWithdrawAmount > previousBalanceTotal){
        alert('bap er bank a oto taka nei');
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    // set the current withdraw total
    previousWithdrawElement.innerText = currentWithdrawTotal;

   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   
   balanceTotalElement.innerText = newBalanceTotal;

    


    
})