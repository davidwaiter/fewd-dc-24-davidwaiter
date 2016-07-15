
$("#pieChartSubmit").click( function () {

		event.preventDefault();

        var rentAmount = $("#rentAmount").val();
	 	var loanAmount = $("#loanAmount").val();
		var gasAmount = $("#gasAmount").val();
		var funAmount = $("#funAmount").val();


  var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Rent", "Loans", "Gas/Groceries", "Fun"],
        datasets: [{
            label: '# of Votes',
            data: [rentAmount, loanAmount, gasAmount, funAmount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(63, 191, 63, 0.28)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(63, 191, 63, 0.28)',
            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero:true
    //             }
    //         }]
    //     }
    // }
});


})

	

