	$("#totalMonthlySpend").click( function () {

		event.preventDefault();

        var rentAmount = Number($("#rentAmount").val());
	 	var loanAmount = Number($("#loanAmount").val());
		var gasAmount = Number($("#gasAmount").val());
		var funAmount = Number($("#funAmount").val());
		var monthlyIncome = Number($("#incomeAmount").val());
		var monthTotal = rentAmount + loanAmount + gasAmount + funAmount;
		var difference = monthTotal - monthlyIncome;
		var surplus = monthlyIncome - monthTotal;
		var yearly = surplus * 12;

	$(".totalSpend").append("<h2>Total: " +monthTotal+ "</h2>");

	if (monthTotal > monthlyIncome) {
		$(".compare").append("<h3>You Went Over Budget By $" +difference+ "</h3>");
	} else if (monthTotal < monthlyIncome) {
		$(".compare").append("<h3>You Were Under Budget By $" +surplus+ ". Put That In Your Savings Account! <br> If save like this for an entire year you could potentially save $" +yearly+ "</h3>")
	} else {
		$(".compare").append("<h3>You Were Exactly On Budget. Good Job.</h3>");
	}

	});
