document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-1:get the new deposit amount 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // last step: clear the deposit field 
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('please give a valid amount number:');
        return;
    }
    // get the previous deposit total 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //  calculate the current deposit total
    const currentDepositTotal =previousDepositTotal+  newDepositAmount ;

    depositTotalElement.innerText = currentDepositTotal;

    // get the previous balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal)

    // calcultate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
    
})