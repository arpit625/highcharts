var allData;

$( document ).ready(function() {

	console.log( "ready123!" );

	// $(".rowTopNumber").html("<h3>349</h3>");

	callAjax();

	/*
	Below line won't work as it gets executed before the 'allData' variable gets vaule in it
	JS doesn't wait for the function to finish and keep moving on
	To handle this use the globar variable with allData after the AJAX call and make it like a chain of 
	Document.ready -> callAJAX -> function()
	*/
	// $("#testing").text("Welcome "+allData.Discount);

	columnchart("#chart1");
	barchart("#chart2");
	piechart("#chart3");
	scatterchart("#chart4");

});


function callAjax() {
	$.ajax({
		type: 'GET',
		url: "server/data_process.php",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    }).done(function (dt) {
        	allData = dt;

            // $("#testing").text("Welcome "+dt.Sales);
			// $("#testing").text("Welcome "+allData.Discount);

			setValues();

    }).fail(function (dt) {
    	$("#testing").text("Failed");



    });
}

function setValues() {
	$(".rowTopNumber1").text(allData.Sales);
	$(".rowTopNumber2").text(allData.Quantity);
	$(".rowTopNumber3").text(allData.Discount);
	$(".rowTopNumber4").text(allData.Profit);

}