// total will store the running total, starting at 0

var runningTotal = 0;

// `enter()` reads the user's input, and updates the receipt

function enter (event) {

    // Set up variables to use

    // Prevent form submission
    event.preventDefault();

    // Read the user input
    var newEntry = parseFloat($("#newEntry").val());

    // Convert to currency
    var newEntryString = formatAsUSD(newEntry);


    // Add line item to table
    $("#entries").append("<tr><td></td><td>"+newEntryString+"</td></tr>");

    // Update the running total
    runningTotal = runningTotal + newEntry;

    // Print the updated total with proper currency formatting
    $("#total").text(formatAsUSD(runningTotal));

    // Clear out the input field, ready for next value
    $("#newEntry").val(" ");
}

// Use this to convert a number to U.S. currency format

function formatAsUSD (inputValue) {

    // Convert the number to decimal
     inputValue = parseFloat(inputValue);

    // Round to 2 decimal places
    inputValue = inputValue.toFixed(2);

    // Add the $ before the number
    var outPutValue = "$" + inputValue:

    // Send back the result
    return outPutValue;
}

// When the user submits the form, run the `enter` function
$("#entry").on("submit", enter);
