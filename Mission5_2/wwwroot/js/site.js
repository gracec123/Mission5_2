$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val();
        var rate = $('#rate').val();
        var total = 0;
        var errorMessageDiv = $('#error-message');

        // Hide error message initially
        errorMessageDiv.hide();

        // Validate input
        if (hours > 0) {
            total = hours * rate;
            $('#total').text("$ " + total);
        } else {
            // Display error message instead of using alert
            errorMessageDiv.text("Please enter a positive number for hours.").show();
            $('#hours').val('').focus(); // Clear the input and set focus back to it
        }
    });

    $('#clear-hours').click(function () {
        $('#hours').val(''); // Clear the input
        $('#total').text("$ 0"); // Reset total
    });
});