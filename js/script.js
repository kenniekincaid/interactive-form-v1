//$ identifies jQuery; '#...' identifies value is from the HTML page; .focus is straightforward. 
$('#name').focus(); // Cursor automatically appears in the Name: input area when page loads.

//Text field revealed when the "Other" option is selected.
 // hides the text field. I want it hidden until 'Other' is clicked.
 $('#other-title').hide();

$('#title').change(function() { // I need a formula here that will target the value or text of the 'Other' option and unhide the text area when clicked.
    const title = $('#title').val(); //assigns the value of all options under the select ID element to the variable.
    if (title==='other') { //condition based on if the option value is strictly other... 
        $('#other-title').slideDown(700); // the input text field will show...
    } else { // otherwise...
        $('#other-title').hide(); // the input text field will remain hidden.
    }
}); //could also use .trigger(change); and remove the very first $('#other-title').hide();

// $('.selDiv option:contains("Other")').click(function() {
//         if  ($) {
//             $('other-title').show();
//         } else {
//             $('other-title').none();
//         }
        
            

// });





//document.addEventListener('click').show('#other-title');