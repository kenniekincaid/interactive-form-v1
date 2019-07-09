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
    }//Codes are working up to this point! :-D

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
                //     $('.activities input')[i].enabled = true; //will disable the matching activity
                // } else {
                //     $('.activities input')[i].enabled = false;//will enable the matching activity
                }
        }
    }  
});

//PAYMENT SECTION:
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
        $('div p:contains("PayPal")').slideDown(700).show();
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide();
    } else if ($paymentOptions === "bitcoin") {
        $('div p:contains("Bitcoin")').slideDown(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide();
    }
});



//FORM VALIDATION & ERROR MESSAGES:
const validName = () => { //function to validate name
    let  $nameInput = $('#name');
    //let regex = /^-----$/;
    let $validName = $nameInput.val();
    if($validName) {
        $nameInput.removeClass('invalid').addClass('valid');
    return true;
    } else {
        $nameInput.removeClass('valid').addCLass('invalid');
        $nameInput.prev().text('Please enter a valid name').css('color', 'red');
    } return false;
}



$('form').on('submit', function(e) {
    if ($paymentOptions === "credit card") {
        e.preventDefault();
        $('#credit-card').show();
        $('div p:contains("PayPal")').hide();
        $('div p:contains("Bitcoin")').hide();
    } else if ($paymentOptions === "paypal") {
        e.preventDefault();
        $('div p:contains("PayPal")').slideDown(700).show();
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide();
    } else if ($paymentOptions === "bitcoin") {
        e.preventDefault();
        $('div p:contains("Bitcoin")').slideDown(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide();
    } else if ($paymentOptions === "paypal") {
        e.preventDefault();
        $('div p:contains("PayPal")').slideDown(700).show();
        $('div p:contains("Bitcoin")').hide();
        $('#credit-card').hide();
    } else if ($paymentOptions === "bitcoin") {
        e.preventDefault();
        $('div p:contains("Bitcoin")').slideDown(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide();
    } else if ($paymentOptions === "bitcoin") {
        e.preventDefault();
        $('div p:contains("Bitcoin")').slideDown(700).show();
        $('#credit-card').hide();
        $('div p:contains("PayPal")').hide(); 
    } else {
            alert('Success! Thanks for registering!')
        }
    }
});
// & validEmail() & validActivities() & validCreditCard() & validCvv() & validZipcode()

// $('form').validate({//FORM VALIDATION: Wait for the DOM to be ready!
//     rules: {
//         name: {
//             required: true,
//             minlength: "Name should be at least 3 characters"
//         },
//         email: {
//             required: true,
//             email: "The email should be in the format: abc@domain.tld",
//             regex: /^[^@]+@[^@.]+\.[a-z]+$/i.test(email),
//         },
//     }
// });


//     //Select and store the 4 text input variables...
//     const nameInput = document.getElementById("user_name");
//     const emailInput = document.getElementById("email");
//     const activityInput = document.getElementById(".activities").parent();
//     const creditCardInput = document.getElementById("credit-card");
    
//         //Contains upper and lower case letters:
//         function isValidName(name){
//             return /^[a-zA-Z '.-]*$/.test(name)
//         }

//         //Must be a valid email address:
//         function isValidEmail(email) {
//             return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
//         }

//         //Activity section must be completed:
//         function isValidActivity() {}

//         //If paid via CC, valid info needed:
//         if ($('#payment').val("credit-card")) {
//             function isvalidCreditCard(creditcard) {
//                 return /(^(4|5)\d{3}-?\d{4}-?\d{4}-?\d{4}|(4|5)\d{15})|(^(6011)-?\d{4}-?\d{4}-?\d{4}|(6011)-?\d{12})|(^((3\d{3}))-\d{6}-\d{5}|^((3\d{14})))/.test(creditcard)
//             // var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");
//             //     return isValidZip;
//             }
//         }

//         function showOrHideTip(show, element) {
//             //show element when show is true, hide when false
//             if (show) {
//                 element.style.display = "inherit";
//             } else {
//                 element.style.display = "none:"
//             }
//         }
//         //Closure
//         function createListener(validator) {
//             return e => {
//                 const text = e.target.value;
//                 const valid = validator(text);
//                 const showTip = text !== "" && !valid;
//                 const toolTip = e.target.nextElementSibling;
//                 showOrHideTip(showTip, tooltip);
//             };
//         }
// //     })
// // });

// //Every time user types, the input is validated.
// nameInput.addEventListener("input", createListener(isValidName));
// emailInput.addEventListener("input", createListener(isValidEmail));
// activityInput.addEventListener("input", createListener(isValidActivity));
// creditCardInput.addEventListener("input", createListener(isvalidCreditCard));

//Initialize form validation on the registration form.
//     $('form').validate({
//         //specify validation rules
//         rules: {
//             //name attribute of input field on left side : rule on right side.
//             user_name: {
//                 required: true,
//                 user_name: true,
//                 regex: '\S+(?:\s(?!Jr\.)\S+)*'
            
//             },
//             user_email: {
//                 required: true,
//                 user_email: true,
//                 regex: ''
//             },      
//         },
//         messages: {
//             user_name:"Please enter your name",
//             user_email: "Please enter a valid email address",
//         },
//         registerHandler: function(form) {
//             form.register();
//         }
//     })
// });

// Form validation messages:       
//  if ($('input [type="text"]' <= 0)) {
//             return('invalid');
//         };

//         if ($('input [type="email"]').match()

$("form").submit((e) => {
        e.preventDefault();
    if(validFormFields()) {
        location.reload();
    }
});

 