//$ idenifies jQuery; '#...' identifies value is from the HTML page; .focus is straightforward. 
$('#name').focus(); // Cursor automatically appears in the Name: input area when page loads.

//Text field revealed when the "Other" option is selected.
$('#other-title').hide(); // hides the text field. I want it hidden until 'Other' is clicked.

$('#title').click(function() { // I need a formula here that will target the value or text of the 'Other' option and unhide the text area when clicked.
    $('#other-title').show();
});





//document.addEventListener('click').show('#other-title');