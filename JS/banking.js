/* 
function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
 */

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const depositAmount = parseFloat(newDepositText);
    //  clear the deposit input field
    depositInput.value = '';
    return depositAmount;
}







//  handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
            // get the amount deposited

   /*   const depositInput = document.getElementById('deposit-input');
        const newDepositText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositText); */
        const depositAmount = getInputValue();

        // update deposit total 

    const depositTotal = document.getElementById('deposit-total');


    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)


    depositTotal.innerText = previousDepositAmount + depositAmount;
    




        // update account balance 

        const balanceTotal = document.getElementById('balance-total')

        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
         
})




        //  handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
            const withdrawInput = document.getElementById('withdraw-input');
            const withdrawAmountText = withdrawInput.value;
            const newWithdrawAmount = parseFloat(withdrawAmountText);
            

        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total')
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);

        withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;
            

            //  clear withdrawInput
        withdrawInput.value = '';

            // update balance 
        const balanceTotal = document.getElementById('balance-total')
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;

        })