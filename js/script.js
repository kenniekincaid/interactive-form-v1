$(document).ready(function() {//Codes will run when JS script is ready to execute.

$('#name').focus(); //Set Focus on the first text field section:

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
let totalCostSpan = $('.activities').append('<span id="totalCost"></span>');//Created total cost DOM element nd appended after last child.
$('.activities').append(totalCostSpan);
// $('#totalCost').hide();

// let totalActivityCost = 0;
// $('.activities input:checkbox').change(function () {
//     let inputElement = '';
//     let parentTextContent = '';
//     let dollarIndex = '$';
//     let activityCost = '.slice()';
//     if ('inputElement :checked') {
//         //add he cost of the curently selected activity totalCost
//     }else{
//         //subtract the cost
//     }
// });


//"Payment Info" section: HINT - it's just like to T-shirt section:
$('#payment').show().val("credit card");//credit card is the default view.
$('#payment option:contains("Select Payment Method")').hide(); //hides the 'Select Payment Method' option from drop-down menu.
// $('#payment option:contains("PayPal")').hide();
// $('#payment option:contains("Bitcoin")').hide();
$('div p:contains("PayPal")').hide(); //hides the paypal section until that payment method is selected.
$('div p:contains("Bitcoin")').hide();//hides the bitcoin section until that payment method is selected.

$('#payment').change(function() {
    const $paymentOptions = $(this).val();
    if ($paymentOptions === "credit card") {
        $('#credit-card').show();
        $('div p:contains("PayPal")').hide();
        $('div p:contains("Bitcoin")').hide();
    } else if ($paymentOptions === "paypal") {
        $('div p:contains("PayPal")').fadeIn(700).show();
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide();
    } else if ($paymentOptions === "bitcoin") {
        $('div p:contains("Bitcoin")').fadeIn(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide();
    }
});

//VALIDATION ERRORS:



//ALTERNATE PAYMENT RESOLUTION:
// $('#payment').change(function() {
//     const $paymentOptions = $(this).val();
//     // if ($paymentOptions === "credit card") {
//     //     // $('#payment option').hide().val("paypal");
//     //     // $('#payment option').hide().val("bitcoin");
//     if ($paymentOptions === "paypal") {
//         $('#payment option').show().val("paypal");
//         $('#payment option').hide().val("bitcoin");
//         $('#payment option').hide().val("credit card");
//         $('#credit-card').hide();
//     } else if ($paymentOptions === "bitcoin") {
//         $('#payment option').show().val("bitcoin");
//         $('#payment option').hide().val("credit card");
//         $('#credit-card').hide();
//         $('#payment option').hide().val("paypal");
//     }
// });

//Form validation section:

//Form validation messages:

});