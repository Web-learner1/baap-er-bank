/* 
function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
 */

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    //  clear the deposit input field
    inputField.value = '';
    return inputAmount;
}







function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    
    totalElement.innerText = previousTotal + amount;
}



function updateBalance(inputAmount, isAdd){
    
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + inputAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - inputAmount;
    }
}






//  handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
            // get the amount deposited
/* 
        const inputField = document.getElementById('deposit-input');
        const inputText = inputField.value;
        const newinputAmount = parseFloat(inputText); */



        // get and update deposit total 

    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousinputAmount = parseFloat(previousDepositText)

    depositTotal.innerText = previousinputAmount + inputAmount; */
    
    



        // update  balance 
/* 
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + inputAmount;
          */

        const inputAmount = getInputValue('deposit-input');
        updateTotalField('deposit-total', inputAmount);
        updateBalance(inputAmount, true);
})







        //  handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
            /* const withdrawInput = document.getElementById('withdraw-input');
            const withdrawAmountText = withdrawInput.value;
            const withdrawAmount = parseFloat(withdrawAmountText); */
            
            

        // get and update withdraw total

/* 
        const withdrawTotal = document.getElementById('withdraw-total')
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);

        withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */



            // update balance 

        /* const balanceTotal = document.getElementById('balance-total')
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

        const withdrawAmount = getInputValue('withdraw-input')
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)

        })