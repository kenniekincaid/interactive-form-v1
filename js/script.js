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
$(function() { //Going for Exceeds
    //set all variables to false
    let $nameErrorSpan = false;
    let $emailErrorSpan = false;
    let $activityErrorSpan = false;
    let $creditcardErrorSpan = false;
    let $cvvErrorSpan = false;
    let $zipErrorSpan = false;
    
    // Create spans dynamically if not allowed to place in HTML
    $('#user_name').append($('<span id="name_error"></span>'));
    $('#user_email').append($('<span id="email_error"></span>'));
    $('#user_activity').append($('<span id="activity_error"></span>'));
    $('#cc-num').append($('<span id="creditcard_error"></span>'));
    $('#cvv').append($('<span id="cvv_error"></span>'));
    $('#zip').append($('<span id="zip_error"></span>'));

    //Hide all error messages by span ID
    $('#name_error').hide();
    $('#email_error').hide();
    $('#activity_error').hide();
    $('#creditcard_error').hide();
    $('#cvv_error').hide();
    $('#zip_error').hide();

    //Set error messages to show on near input area, focusout function.
    $('#name').focusout(function(){
        check_name();
    });
    $('#mail').focusout(function(){
        check_email();
    });
    $('#input [type="checkbox]').focusout(function(){
        check_activity();
    });
    $('#cc-num').focusout(function(){
        check_creditcard();
    });
    $('#cvv').focusout(function(){
        check_cvv();
    });
    $('#zip').focusout(function(){
        check_zip();
    });

    //functions to test each required field.
    function check_name() {
        var name_length = $('#name').val().length;
        if (name_length < 3) {
            $('#name_error').html(' *Name must be 3 or more characters.');
            $('#name_error').show().css('color', 'red');
            $nameErrorSpan = true;
        } else {
            $('#name_error').hide();
        } 
    }

    function check_email() {
        const email_regex = /^([a-zA-Z0-9\\.]+)@([a-zA-Z0-9\\-\\_\\.]+)\.([a-zA-Z0-9]+)$/i;
        var email = $('#mail').val();
        if (!email_regex.test(email)) {
            $('#email_error').html(' *Please enter valid email. (i.e. name@gmail.com');
            $('#email_error').show().css('color', 'red');
            $emailErrorSpan = true;
        } else {
            $('#email_error').hide();
        }
    }

    function check_activity() {
        var activity_length = $('.activities input:checked').length;
        if (activity_length <= 0) {
            $('#activity_error').html(' *Please select one or more activities.');
            $('#activity_error').show().css('color', 'red');
            $activityErrorSpan = true;
        } else {
            $('#email_error').hide();
        }
    }

    function check_creditcard() {
        var creditcard_length = $('#cc-num').val().length;
        if (creditcard_length > 16 || creditcard_length < 13) {
            $('#creditcard_error').html(' *Card number must be between 13 & 16 digits. Omit spaces.');
            $('#creditcard_error').show().css('color', 'red');
            $creditcardErrorSpan = true;
        } else {
            $('#creditcard_error').hide();
        }
    }

    function check_cvv() {
        var cvv_length = $('#cvv').val().length;
        if (cvv_length !== 3) {
            $('#name_cvv').html(' *CVV must be 3 digits.');
            $('#name_cvv').show().css('color', 'red');
            $cvvErrorSpan = true;
        } else {
            $('#name_cvv').hide();
        }
    }

    function check_zip() {
        var zip_length = $('#zip').val().length;
        if (zip_length !== 5) {
            $('#zip_error').html(' *Zip must be 5 digits.');
            $('#zip_error').show().css('color', 'red');
            $zipErrorSpan = true;
        } else {
            $('#zip_error').hide();
        }
    }

    //Required fields to be checked for errors on submit.
    $('form').on('submit', function(){ //function to initiate on form submission.
        //resetting the variables to false
        $nameErrorSpan = false;
        $emailErrorSpan = false;
        $activityErrorSpan = false;
        $creditcardErrorSpan = false;
        $cvvErrorSpan = false;
        $zipErrorSpan = false;

        check_name();
        check_email();
        check_activity();
        check_creditcard();
        check_cvv();
        check_zip();

        if($nameErrorSpan == false && $emailErrorSpan == false && $activityErrorSpan == false && $creditcardErrorSpan == false && $cvvErrorSpan == false && $zipErrorSpan == false){
            return true;
        } else {
            return false;
        }
    });
});