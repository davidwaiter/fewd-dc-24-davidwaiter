$(document).ready(function(){

$("#tableSubmit").click( function () {

	event.preventDefault();

       var rentAmount = $("#rentAmount").val();
	 	var loanAmount = $("#loanAmount").val();
		var gasAmount = $("#gasAmount").val();
		var funAmount = $("#funAmount").val();

		console.log("it worked");

	$(".dataTable").append("<table class='newTable table-bordered'><tbody><tr><th>Item</th><th>Amount Spent</th></tr><tr><td>Rent</td><td>"+rentAmount+"</td></tr><tr><td>Loans</td><td>"+loanAmount+"</td></tr><tr><td>Gas/Groceries</td><td>"+gasAmount+"</td></tr><tr><td>Fun!</td><td>"+funAmount+"</td></tr></tbody></table>");

});


$(".reveal").click( function () {

	$(".lastMonthData").css("display", "block");

})

});