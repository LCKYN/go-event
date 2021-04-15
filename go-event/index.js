$(document).ready(function () {
    

    $('#btnClick').on('click', function () {
        if ($('#1').css('display') != 'none') {
            $('#2').html('Here is my dynamic content').show().siblings('div').hide();
        } else if ($('#2').css('display') != 'none') {
            $('#1').show().siblings('div').hide();
        }
    });
});

function getTimeZone() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
}


async function paste() {
    const text = await navigator.clipboard.readText();
    document.getElementById("testsetst").value = text;
    document.getElementById("hello").value = text;
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    
}