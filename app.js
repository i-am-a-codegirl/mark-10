const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
 const checkButton = document.querySelector("#check-button");
 const nextButton = document.querySelector(".next-button");
 const noOfNotes = document.querySelectorAll("#no-of-notes");
 const message = document.querySelector("#error-message");
 const changeTable = document.querySelector(".change-table");
 const finalOutput = document.querySelector(".final-output");
 const cashInput = document.querySelector(".cash-input");

 
 

 const avialableNotes = [2000, 500, 100, 50, 20, 10, 1];

 nextButton.addEventListener("click", function checkBillAmount() {
   hideMessage();
   if(Number(!isNaN(billAmount.value))){

   if(Number(billAmount.value) > 0){ 
    nextButton.style.display = "none";
    cashInput.style.display = "block";
  } 
   else{
       showMessage("please enter bill amount to proceed!");
   }

 }
else{
  showMessage("can you enter your bill in integer, as we do not take bills in words");
}
}
);


checkButton.addEventListener("click", function validateCashAmount() {
   hideMessage();
   finalOutput.style.display = "block";
  

 if ( Number(billAmount.value) > 0){
  changeTable.style.display = "block";
  if (Number(cashGiven.value) >= Number(billAmount.value)) {
     const cashReturened = cashGiven.value - billAmount.value;
        calculateChange(cashReturened);
    } else {
        changeTable.style.display = "none";
       showMessage("Do you wanna wash plates?");
          }
 }
else{
     showMessage("invalid bill amount!!");
 }   
 });

  function calculateChange(cashReturened){
  for(let i=0; i< avialableNotes.length; i++){
   const notesReturned = Math.trunc(cashReturened/avialableNotes[i]);
   cashReturened = cashReturened % avialableNotes[i];
     noOfNotes[i].innerText = notesReturned;

  }
 }

 function showMessage(msg){
 message.style.display = "block";
 message.innerText = msg;

}

function hideMessage() {

    message.style.display = "none";
}