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
});//Could have used .trigger('change'); instead of the on change function.

//"T-shirt Info" section:
$('#design option:first').hide(); //hides the 'Select Theme' option from drop-down menu.
$('#color option').hide(); //hides all other options from view.
$('#colors-js-puns').hide(); //EXTRA CREDIT: to hide color field until designs are chosen.

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
    check_activity();
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
$('#payment').show().val("credit card"); //focus is set on the credit card option.
$('#payment option:contains("Select Payment Method")').hide(); //hides the 'Select Payment Method' option from drop-down menu.
$('div p:contains("PayPal")').hide(); //hides the paypal section until that payment method is selected.
$('div p:contains("Bitcoin")').hide(); //hides the bitcoin section until that payment method is selected.


let $paymentOptions = $('#payment').val();//created a global variable the value of payment menu.
$('#payment').change(function() { //on change of the payment options, the following will be executed.
    $paymentOptions = $('#payment').val();//

    // const $paymentOptions = $('#payment').val();
    if ($paymentOptions === "credit card") {// if this payment option...
        $('#credit-card').show();
        $('div p:contains("PayPal")').hide(); 
        $('div p:contains("Bitcoin")').hide(); //the other two will be hidden
    } else if ($paymentOptions === "paypal") { // if this payment option...
        $('div p:contains("PayPal")').slideDown(700).show(); //added animation
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide(); //the other two will be hidden
    } else if ($paymentOptions === "bitcoin") { // if this payment option...
        $('div p:contains("Bitcoin")').slideDown(700).show(); //added animation
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide(); //the other two will be hidden
    }
});//Codes are working up to this point! :-D

//FORM VALIDATION & ERROR MESSAGES:
 //Going for Exceeds
    //Created variables and set them to false for later use...
    let $nameErrorSpan = false;
    let $emailErrorSpan = false;
    let $activityErrorSpan = false;
    let $creditcardErrorSpan = false;
    let $cvvErrorSpan = false;
    let $zipErrorSpan = false;
    let paymentError = false;
    
    // Create spans dynamically if not allowed to place in HTML
    $('#user_name').append($('<span id="name_error"></span>'));//next time assign a class to the span and hide it ex: $(class).hide();
    $('#user_email').append($('<span id="email_error"></span>'));
    $('#user_activity').append($('<span id="activity_error"></span>'));
    $('#user_cc-num').append($('<span id="creditcard_error"></span>'));
    $('#user_cvv').append($('<span id="cvv_error"></span>'));
    $('#user_zip').append($('<span id="zip_error"></span>')); 
    // I learned that I could have added a class to the above spans and simplied my codes.

    // Hide all error messages by span ID and will prompt them to show conditionally. 
    $('#name_error').hide();//next time assign a class to the span and hide it ex: $(class).hide();
    $('#email_error').hide();
    $('#activity_error').hide();
    $('#creditcard_error').hide();
    $('#cvv_error').hide();
    $('#zip_error').hide();

    //EXTRA CREDIT: Error messages will be displayed as user input value and clicks or tabs out of that field.
    $('#name').on('focusout keyup' , function(){ //when focus or the cursor is removed from the targeted input fields, that input field will be checked and an error message will fire based on the conditions.
        check_name(); //when user enters a value into input field and clicks outside of that area, the value will be checked for errors.
    });
    $('#mail').on('focusout keyup' , function(){
        check_email();
    });
    $('.activities [type="checkbox"]').on('focusout keyup' , function(){
        check_activity();
    });
    $('#cc-num').on('focusout keyup' , function(){
        check_creditcard();
    });
    $('#cvv').on('focusout keyup' , function(){
        check_cvv();
    });
    $('#zip').on('focusout keyup' , function(){
        check_zip();
    });

    //functions to test each required field.
    $('#name_error').hide();  //EXTRA CREDIT: multiple conditional error messages & REAL TIME validation...
    function check_name() {  //testing for input, length, and numbers
        const name_regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;
        const name_val = $('#name').val();
        const name_length = $('#name').val().length; //the value of the user input will be checked
        if (name_length <= 0) { //if there is no name at all, show error message
            $('#name_error').html(' *Please enter your first and last name.');//error message to appear next to section label on true
            $('#name_error').show().css('color', 'red');//set color of error message to red
            $nameErrorSpan = true;
        } else if (name_length <= 3) {//if 3 or less characters, show error message
            $('#name_error').html(' *Name must be 3 or more characters.');//error message to appear next to section label on true
            $('#name_error').show().css('color', 'red');//set color of error message to red
            $nameErrorSpan = true;
        } else if (!name_regex.test(name_val)) {//if 3 or less characters, show error message
            $('#name_error').html(' *Numbers and special characters are not allowed!');//error message to appear next to section label on true
            $('#name_error').show().css('color', 'red');//set color of error message to red
            $nameErrorSpan = true;
        } else {
            $('#name_error').hide();
        } 
    }

    function check_email() { //EXTRA CREDIT: multiple conditional error messages & REAL TIME validation...
        const email_regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i; //regex stored in varible to test user input
        const email_val = $('#mail').val(); //the value of what user types is stored to this variable
        if (email_val <= 0) { //if no email entered, this error message will fire.
            $('#email_error').html(' *Please enter your email address.');//error message to appear next to section label on true
            $('#email_error').show().css('color', 'red');//set color of error message to red
            $emailErrorSpan = true;
        } else if (!email_regex.test(email_val)) {//condition where user input will be tested against the regex pattern
            $('#email_error').html(' *Please enter a valid email address. (Ex: name@gmail.com)');//error message to appear next to section label on true
            $('#email_error').show().css('color', 'red');//set color of error message to red
            $emailErrorSpan = true;
        } else {
            $('#email_error').hide();
        }
    }

    function check_activity() {//EXTRA CREDIT: Real time error message
        const activity_length = $('.activities input:checked').length;//the value of the user input will be checked
        if (activity_length <= 0) { // if no activities are selected... the error below will show
            $('#activity_error').html(' *Please select one or more activities.');//error message to appear next to section label on true
            $('#activity_error').show().css('color', 'red');//set color of error message to red
            $activityErrorSpan = true;
        } else {
            $('#activity_error').hide();
        }
    }

    //The credit card option is already set by default. It will check for real-time errors.
    function check_creditcard() {//EXTRA CREDIT: Real time error message    
        const credit_regex = /^[0-9]{13,16}$/;
        const credit_val = $('#cc-num').val();
        const creditcard_length = $('#cc-num').val().length; //the value of the user input will be checked
        if (creditcard_length <= 0) { //condition if digits less than 13 and more than 16
            $('#creditcard_error').html(' *Please enter your credit card number.'); //if true, this message will print to the page
            $('#creditcard_error').show().css('color', 'red'); //set color of error message to red
            $creditcardErrorSpan = true;
        } else if (creditcard_length < 13) { //condition if digits less than 13 and more than 16
            $('#creditcard_error').html(' *Card number cannot be less than 13 digits.'); //if true, this message will print to the page
            $('#creditcard_error').show().css('color', 'red'); //set color of error message to red
            $creditcardErrorSpan = true;
        } else if (creditcard_length > 16) { //condition if digits less than 13 and more than 16
            $('#creditcard_error').html(' *Card number cannot be more than 16 digits.'); //if true, this message will print to the page
            $('#creditcard_error').show().css('color', 'red'); //set color of error message to red
            $creditcardErrorSpan = true;
        } else if (!credit_regex.test(credit_val)) { //condition if digits less than 13 and more than 16
            $('#creditcard_error').html(' *Letters and special characters are not allowed.'); //if true, this message will print to the page
            $('#creditcard_error').show().css('color', 'red'); //set color of error message to red
            $creditcardErrorSpan = true;
        } else {
            $('#creditcard_error').hide();
        }
    }

    function check_cvv() {//EXTRA CREDIT: Real time error message
        const cvv_regex = /^[0-9]{3}$/;
        const cvv_val = $('#cvv').val();//Measures what and quality. Matching or getting specific content.
        const cvv_length = $('#cvv').val().length; //Measures how much and how far. Use for numbers, scope, array, etc.
        if (cvv_length <= 0) { //cvv must be exactly 3 digits or error msg will show
            $('#cvv_error').html(' *Please enter CVV.');//set color of error message to red
            $('#cvv_error').show().css('color', 'red');//set color of error message to red
            $cvvErrorSpan = true;
        } else if (cvv_length !==3) {
            $('#cvv_error').html(' *CVV must be 3 Numbers.');//set color of error message to red
            $('#cvv_error').show().css('color', 'red');//set color of error message to red
            $cvvErrorSpan = true;
        } else if (!cvv_regex.test(cvv_val)) { //cvv must be exactly 3 digits or error msg will show
            $('#cvv_error').html(' *CVV must be 3 Numbers.');//set color of error message to red
            $('#cvv_error').show().css('color', 'red');//set color of error message to red
            $cvvErrorSpan = true;
        } else {
            $('#cvv_error').hide();
        }
    }

    function check_zip() {//EXTRA CREDIT: Real time error message
        const zip_regex = /^[0-9]{5}$/;
        const zip_val = $('#zip').val();
        const zip_length = $('#zip').val().length; //the value of the user input will be checked
        if (zip_length !== 5) {//zip code must be exactly 5 digits or error message will show
            $('#zip_error').html(' *Please enter 5 digit zip code.');//set color of error message to red
            $('#zip_error').show().css('color', 'red');//set color of error message to red
            $zipErrorSpan = true;
        } else if(!zip_regex.test(zip_val)) {
            $('#zip_error').html(' *Numbers only please!');//set color of error message to red
            $('#zip_error').show().css('color', 'red');//set color of error message to red
        } else {
            $('#zip_error').hide();
        }
    }

    function creditCardValidation(){
        check_zip();
        check_creditcard();
        check_cvv();

        if($zipErrorSpan || $cvvErrorSpan || $creditcardErrorSpan){
            $paymentError = true;
        } else {
            $paymentError = false;
        }
    }

    let $paymentError = false;

    function payment(){

        if ($paymentOptions === "credit card") {
            creditCardValidation();
        } else {
            $paymentError = false;
        }
    }

    //I'm passing the submit function into real-time function. On submit, all required fields will be checked again.
    $('form').on('submit', function(e){ //function to initiate on form submission.
        e.preventDefault();
        
        //resetting the variables from the initial function back to false for this function.
        $nameErrorSpan = false;
        $emailErrorSpan = false;
        $activityErrorSpan = false;
        $creditcardErrorSpan = false;
        $cvvErrorSpan = false;
        $zipErrorSpan = false;
        $paymentError = false;

        //These are all of the functions that were previously run during real time.
        check_name();
        check_email();
        check_activity();
        payment();

        if($nameErrorSpan || $emailErrorSpan || $activityErrorSpan || $paymentError){
            return true; 
        } else {
            // return false;
            location.reload(true); 
        } 
    });