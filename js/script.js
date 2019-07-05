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
// $('#color').hide();//Extra credit to hide color field until designs are chosen.

$('#design').change(function() {//function with event to take place when design is selected/changed.
    $('#design option:selected').val();//gets the value of the design options.
    $('#color option').hide(); //hides all other options from view.
    if ($('#design option:selected').val() === 'js puns') {
        $('#color option:contains("JS Puns shirt only")').show(); //show t-shirts with js puns
        $('#color').val("cornflowerblue");
    } else {
        $('#color option:contains("JS shirt only")').show();// show t-shirts with heart js
        $('#color').val("tomato");
    }
}); 

//"Register for Activities" section:
let totalCostSpan = $('.activities').append('<span id="totalCost">Total Cost:</span>');//Created total cost DOM element.
$('.activities').append($domELement); //Appends global element after the last child nested under activities.

$('.activities :checkbox').on('change', function() {
// $('.activities :checkbox').on('change', function() {
    let totalActivityCost = 0; //Global variable to store total activity cost, initially set to 0.
    let parentTextContent = $(this)[0].parentElement.innerText();
    // let parentTextContent = $('.activities label').innerText(); //mine
    let dollarIndex = parentLabelText.indexOf('$'); //focuses on the values containing a $ sign.
    let activityCost = parentTextContent.slice(dollarIndex + 1);
    // let inputElement = $('.activities :checkbox').val('$'); // to find the text content to index

        if ($(this)[0].checked) {
            totalActivityCost += parseInt(activityCost);
        } else {
            totalActivityCost += parseInt(activityCost);
        }
    // for(let i=0; i < activities.length; i++) {//loops over all of the checkboxes
    //     let activity = activities[i];
    //     let activityText = activity.parentElement.innerText; //references the text of the parent element
    //     let dollarValue = parseInt(activityText.slice(activityText.indexOf('$') + 1)); //Finds value AFTER the $ sign and grabs the numbers after it.
    // if ($('input[name=' + activity.name + ']').prop('checked')) {
    //     totalSum += dollarValue;
    // }
    // }
    let spanTotalActivity = $('#totalCost'); //assigns the total cost to the span variable.
    spanTotalActivity.text("Total: $" + totalActivityCost); //adds text before the total cost.
});   


// $('.activities').change(function() {
//     let totalActivityCost = 0; //Global variable to store total activity cost - initially set to 0.
//     let $activities = $('.activities input[type=checkbox]');
//         for(let i=0; i < activities.length; i++) {//loops over all of the checkboxes
//             let activity = activities[i];
//             let activityText = activity.parentElement.innerText; //references the text of the parent element
//             let dollarValue = parseInt(activityText.slice(activityText.indexOf('$') + 1)); //Finds value AFTER the $ sign and grabs the numbers after it.
//         if ($('input[name=' + activity.name + ']').prop('checked')) {
//             totalSum += dollarValue;
//         }
//         }
//     let totalCostSpan = $('#totalCost');
//     totalCostSpan.text("Total: $" + totalActivityCost);

// let parentText = 
// let activities
    
   


//"Payment Info" section: HINT - it's just like to T-shirt section:
// $('#design option:first').hide(); //hides the 'Select Theme' option from drop-down menu.
// $('#color option').hide(); //hides all other options from view.
// // $('#color').hide();//Extra credit to hide color field until designs are chosen.

// $('#design').change(function() {//function with event to take place when design is selected/changed.
//     $('#design option:selected').val();//gets the value of the design options.
//     $('#color option').hide(); //hides all other options from view.
//     if ($('#design option:selected').val() === 'js puns') {
//         $('#color option:contains("JS Puns shirt only")').show(); //show t-shirts with js puns
//     } else {
//         $('#color option:contains("JS shirt only")').show();// show t-shirts with heart js
//     }
// }); 


//Form validation section:


//Form validation messages:



});