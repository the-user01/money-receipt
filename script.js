function numberToWords(number) {
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return singleDigits[number];
    } else if (number < 20) {
        return teenNumbers[number - 10];
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const remainder = number % 10;
        return tens[ten] + (remainder !== 0 ? '-' + singleDigits[remainder] : '');
    } else if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        return singleDigits[hundred] + ' hundred' + (remainder !== 0 ? ' ' + numberToWords(remainder) : '');
    } else if (number < 100000) {
        const thousand = Math.floor(number / 1000);
        const remainder = number % 1000;
        return numberToWords(thousand) + ' thousand' + (remainder !== 0 ? ' ' + numberToWords(remainder) : '');
    } 
     else if (number < 10000000) {
        const lakh = Math.floor(number / 100000);
        const remainder = number % 100000;
        return numberToWords(lakh) + ' lakh' + (remainder !== 0 ? ' ' + numberToWords(remainder) : '');
    } 
    else {
        return 'Number too large to convert to words';
    }
}





const receiveerInfo = document.getElementById('receiver-name');
const receiveDate = document.getElementById('date');
const receiveAmount = document.getElementById('receive-amount');
const paymentFor = document.getElementById('payment-for');
const paidAmount = document.getElementById('paid-amount');
const uploadFile = document.querySelector('#upload-file');



/* calling  where to show data*/

const showReceiverInfo = document.getElementById('receiver-info');
const showReceiveDate = document.getElementById('receive-date');
const showPaymentReason = document.getElementById('payment-reason');
const balanceAmount = document.getElementById('balance-amount');
const showPaymentAmount = document.getElementById('payment-amount');
const showDueBalance = document.getElementById('due-balance');
const showTotalAmount = document.getElementById('show-total-amount');
const showAmountWord = document.getElementById('show-total-amount-word');


/* modal submit button */

const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', function () {

    showReceiverInfo.innerText = receiveerInfo.value;
    showReceiveDate.innerText = receiveDate.value;
    showTotalAmount.innerText = receiveAmount.value;
    balanceAmount.innerText = receiveAmount.value;
    showPaymentReason.innerText = paymentFor.value;
    showPaymentAmount.innerText = paidAmount.value;

    const getBalanceAmount = parseInt(balanceAmount.innerText);

    const getPaidAmount = parseInt(showPaymentAmount.innerText);

    showDueBalance.innerText = getBalanceAmount - getPaidAmount;
    


    showAmountWord.innerText = numberToWords(getBalanceAmount);


    /* Uploading Image */


    receiveerInfo.value = '';
    receiveDate.value = '';
    receiveAmount.value = '';
    paymentFor.value = '';
    paidAmount.value = '';
    uploadFile.value = '';
})


var upload_image = "";

uploadFile.addEventListener("change", ()=>{
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        upload_image = reader.result;

        document.querySelector('#show-upload-signature').style.backgroundImage = `url(${upload_image})`;
        
    });

    reader.readAsDataURL(this.files[0]);
})
