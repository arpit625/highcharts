var allData;

$( document ).ready(function() {

	console.log( "ready123!" );

	callAjax();

	/*
	Below line won't work as it gets executed before the 'allData' variable gets vaule in it
	JS doesn't wait for the function to finish and keep moving on
	To handle this use the globar variable with allData after the AJAX call and make it like a chain of 
	Document.ready -> callAJAX -> function()
	*/
	// $("#testing").text("Welcome "+allData.Discount);

	// barchart("#chart2");
	// columnchart("#chart2");
	// columnchart("#chart3");
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

			setValues();
			piechart("#chart1", allData, allData.pie);
			columnchart("#chart2", allData, allData.category,'Sales by Category', 'Subtitle goes here');

    }).fail(function (dt) {
    	$("#testing").text("Failed");

    });
}

function setValues() {
	$(".rowTopNumber1").text((allData.Sales).toFixed(2));
	$(".rowTopNumber2").text((allData.Quantity).toFixed(0));
	$(".rowTopNumber3").text((allData.Discount).toFixed(2));
	$(".rowTopNumber4").text((allData.Profit).toFixed(2));
}

