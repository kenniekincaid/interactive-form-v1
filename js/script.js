$(document).ready(function() {//Codes will run when JS script is ready to execute.
 //Start of Project:   
$('#name').focus(); //Set Focus on the first text field section:
});/* >>>> DO NOT DELETE!!! DOCUMENT LOAD CLOSURE... <<<<< */


//"Job Role" section:
$('#other-title').hide(); //Initially hide the job role for Javascript. It will dispaly if JS is disabled.
$('#title').change(function() { //Function and event handler to control when text field is hidden or revealed.
    const $title = $('#title').val(); //Assigns all under under this ID to this variable. The '$' denotes that it's a jQuery variable.
    if ($title==='other') { // If test is true... 
        $('#other-title').fadeIn(1000); //...the text field will show.
    } else {  //The following will take place is the test proves false...                   
        $('#other-title').hide(); //The text field remains hidden.
    }
});//.trigger('change');

//"T-shirt Info" section:
$('#design option:first').hide(); //hides the 'Select Theme' option from drop-down menu.
$('#color option').hide(); //hides all other options from view.
$('#colors-js-puns').hide();//Extra credit to hide color field until designs are chosen.
//CHANGE FUNCTION:
$('#design').change(function() {//function with event to take place when design is selected/changed.
    $('#design option:selected').val();//gets the value of the design options.
    $('#color option').hide(); //hides all other options from view.
    if ($('#design option:selected').val() === 'js puns') {
        $('#colors-js-puns').show();//extra credit for color field to be hidden until design selected.
        $('#color option:contains("JS Puns shirt only")').show(); //show t-shirts with js puns
        $('#color').show().val("cornflowerblue");
    } else {
        $('#colors-js-puns').show();//extra credit for color field to be hidden until design selected.
        $('#color option:contains("JS shirt only")').show();// show t-shirts with heart js
        $('#color').show().val("tomato");
    }
}); 

//"Register for Activities" section:

//Creating an element to display the total Activity Cost...
const $totalCostSpan = $('<span id="totalCost"></span>'); //Creates the total cost span.
$('.activities').append($totalCostSpan); //On webpage, appends span at end of activity section.
let totalActivityCost = 0;

//Listening to changes in the activity section, and...
    //Updating and displaying the total activity cost part 1.
$('.activities [type="checkbox"]').on('change', function (e) { //Change event listener
    let $checkboxesClicked = $(this); //clicked DOM input element.
    let parentActivityLabel = $checkboxesClicked.parent(); //Parent text content label element.
    let textContent = parentActivityLabel.text(); //Text within the parent label element.
    let dollarIndex = textContent.indexOf('$'); //Indexes starting at the $.
    let activityCost = textContent.slice(dollarIndex + 1, textContent.length); //Grabs text after the $.
    let cost = parseInt(activityCost); 
    //Updating and displaying the total activity cost part 2  
    if ($checkboxesClicked.is(':checked')) { //Condition to execute with user action...
        totalActivityCost += cost; //Add the cost of the curently selected activity.
        $totalCostSpan.html("Total: $" + totalActivityCost);
    } else {
        totalActivityCost -= cost; //otherwise, subtract the cost
        $totalCostSpan.html("Total: $" + totalActivityCost);
    }

    //Disabling conflicting activities part 1: Variables
    let emDashIndex = textContent.indexOf('—'); //identifies info starting at the dash
    let commaIndex = textContent.indexOf(','); //identifies info by the comma
    let dayTimeText = textContent.slice(emDashIndex + 1, commaIndex); //selects the text between the dash and comma
    if (dayTimeText.includes('$')) { //
        dayTimeText = 'no date given';
    }
    //Disabling conflicting activities part 2: 
    let $activityCheckboxes = $('.activities [type="checkbox"]'); // Targeting the the activity input element
    for (let i=0; i<$activityCheckboxes.length; i++) { //loops over all of the input checkboxes.
        let checkboxText = $activityCheckboxes.eq(i).parent().text(); //targets activity input element at current iteration.
            if (checkboxText.includes(dayTimeText) && checkboxText !== textContent) {//condition that checkboxes are clicked but not self
                if($(e.target).is(':checked')) {
                    $('.activities input')[i].disabled = true;
                     //will disable the matching activity
                } else {
                    $('.activities input')[i].disabled = false;//will enable the matching activity
                }
        }
    }  
});

//PAYMENT SECTION:
//"Payment Info" section: HINT - it's just like to T-shirt section:
$('#payment').show().val("credit card");//credit card is the default view.
$('#payment option:contains("Select Payment Method")').hide(); //hides the 'Select Payment Method' option from drop-down menu.
$('div p:contains("PayPal")').hide(); //hides the paypal section until that payment method is selected.
$('div p:contains("Bitcoin")').hide();//hides the bitcoin section until that payment method is selected.

$('#payment').change(function() {
    const $paymentOptions = $(this).val();
    if ($paymentOptions === "credit card") {
        $('#credit-card').show();
        $('div p:contains("PayPal")').hide();
        $('div p:contains("Bitcoin")').hide();
    } else if ($paymentOptions === "paypal") {
        $('div p:contains("PayPal")').slideDown(700).show();
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide();
    } else if ($paymentOptions === "bitcoin") {
        $('div p:contains("Bitcoin")').slideDown(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide();
    }
});//Codes are working up to this point! :-D

//FORM VALIDATION & ERROR MESSAGES:
$('form').on('submit keyup', function(){ //function to initiate on form submission.
    //keypress, keydown, keyup
//Name Validation section: The problem with this one is that it 
const $nameErrorSpan = $('<span id="name_error">  *Please provide a valid first & last name!</span>').css('color','red'); //Creates the total cost span.
const errorMessage =  true;
$('#user_name').append($nameErrorSpan);
$(nameErrorSpan).hide(); //Initially hide the error span. Will set to show only if condition is true.
    if($("#name").val() == 0 || !test(/^[a-zA-Z]{3,}$/i)) { 
        $(nameErrorSpan).show();
        
    } else {
        $(nameErrorSpan).hide();
    } errorMessage = true;
});

    

// //EMAIL:
//     const $emailErrorSpan = $('<span id="email_error">  *Please provide a valid first & last name!</span>').css('color','red'); //Creates the total cost span.
// $('#user_email').append($nameErrorSpan);
//     // $('#nameerror').hide();
// console.log($emailErrorSpan);
    //     if($("#email").val() == 3 || "" && /^([a-zA-Z0-9\\.]+)@([a-zA-Z0-9\\-\\_\\.]+)\.([a-zA-Z0-9]+)$/i){
    //     $("#email").after().append("<span class='errorMessage'>Please provide a valid email!</span>").css('color', 'red');
    //     errorMessage = true;                             
    // } else if(!emailReg.test($("#email").val())){
    //     $("#email").after().append( "<span class='errorMessage'>Please provide a valid email!</span>").css('color', 'red');
    //     errorMessage = true;
    //     }  
    // //activity validation
    // var validateActivity = "";
    // //credit card validation
    // var creditCardInput = $('#cc-num').val() == /(^\(4|5)\d{3}-?\d{4}-?\d{4}-?\d{4}|(4|5)\d{15})|(^(6011)-?\d{4}-?\d{4}-?\d{4}|(6011)-?\d{12})|(^((3\d{3}))-\d{6}-\d{5}|^((3\d{14})))$/;
    // var errorQuantityDigits = creditCardInput < 13 || creditCardInput > 16 ? $("#cc-num").after().append("<span class='errorMessage'>Please enter a number that is between 13 and 16 digits long.</span>").css('color', 'red')
    // // var tooManyDigits = (userCardInput > 16) ? "" :"" ;
    // // $("#cc-num").after().append( "<span class='errorMessage'>Please enter a credit card number.</span>").css('color', 'red');
    // // if ($("#cc-num").val() < 13 || > 16) {
    // //     $("#cc-num").after().append( "<span class='errorMessage'>Please enter a number that is between 13 and 16 digits long.</span>").css('color', 'red');
    // //     errorMessage = true;
    // // }
    // //zip code validation
    // var validateZip = /^([, ]*\d{5})+[, ]*$/;
    // //cvv validation
    // var validateCVV = /^\d{3}$/;



    //validate email
//     $('.errors').remove();

//     return !errors;

