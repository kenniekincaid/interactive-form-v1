//Set Focus on the first text field section:
$('#name').focus(); //Focuses cursor to Name text field on page load.

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

//Brainstorming below:
$('#design').change(function() {
    const $shirtDesign = $('#design').val();
    const $shirtColor = $('#color').val();
    // const jspunsColors = $('#color').val();
    // const heartjsColors = $('#color').val();
        if ($(this).val()=='js puns') {
            $('#selectlist')[0,1,2].show();
            $('#selectlist')[3,4,5].hide();
            // $('#color').hide('tomato', 'steelblue', 'dimgrey');
            // $('#color').show('cornflowerblue', 'darkslategrey', 'gold').hide('tomato', 'steelblue', 'dimgrey');
            // $('#color').val('tomato','steelblue','dimgrey').hide();
        } else {
        if ($(this).val()=='heart js') {
            $('#selectlist')[0,1,2].hide();
            $('#selectlist')[3,4,5].show();
            // $('#color').hide('cornflowerblue', 'darkslategrey', 'gold');  
                 // $('#color').show('tomato', 'steelblue', 'dimgrey').hide('cornflowerblue', 'darkslategrey', 'gold');
                // $('#color').val('cornflowerblue','darkslategrey','gold').hide();
            }
        }
}).trigger('change');
    
//"Register for Activities" section:

//"Payment Info" section:

//Form validation section:

//Form validation messages:

