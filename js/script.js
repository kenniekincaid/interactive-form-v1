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
    } else {
        $('#color option:contains("JS shirt only")').show();// show t-shirts with heart js
    }
}); 
    
//"Register for Activities" section:

//"Payment Info" section:

//Form validation section:

//Form validation messages:



});