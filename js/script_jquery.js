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

	// scatterchart("#chart4");

});


function callAjax() {
	$.ajax({
		type: 'GET',
		url: "server/data_fetch.php",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    }).done(function (dt) {
        	allData = dt;

			setValues(allData);

			drawCharts(allData);
			// piechart("#chart1", allData, allData.pie);
			// columnchart("#chart2", allData, allData.category,'Sales by Category', 'Subtitle goes here');
			// columnchart("#chart3", allData, allData.sub_category,'Sales by Sub-Category', 'Subtitle goes here');
			// scatterchart("#chart4", allData, allData.scatter);
			// mapsChart("#maps_container", allData, allData.maps);


    }).fail(function (dt) {
    	$("#testing").text("Failed");

    });
}

function setValues(data) {

	salesValue = getSales(data);
	quantityValue = getQuantity(data);
	discountValue = getDiscount(data);
	profitValue = getProfit(data);

	$(".rowTopNumber1").text(salesValue);
	$(".rowTopNumber2").text(quantityValue);
	$(".rowTopNumber3").text(discountValue);
	$(".rowTopNumber4").text(profitValue);
}

function drawCharts(data) {
	piechart("#chart1", data, "Region");
	columnchart("#chart2", data, "Category", 'Sales by Category', 'Subtitle goes here');
	columnchart("#chart3", data, "Sub_Category", 'Sales by Sub-Category', 'Subtitle goes here');
	scatterchart("#chart4", data, "Segment", "Sales", "Discount");
	mapsChart("#maps_container", data);



}


function getSales(data) {

	 var sum = 0;

    $.each(data, function () {
        sum = sum + this["Sales"];
    });

    return parseFloat(sum).toFixed(0);

}

function getQuantity(data) {

	 var sum = 0;

    $.each(data, function () {
        sum = sum + this["Quantity"];
    });

    return parseFloat(sum).toFixed(0);

}

function getDiscount(data) {

	 var sum = 0;
	 var count = 0;

    $.each(data, function () {
        sum = sum + this["Discount"];
        count = count + 1;
    });

    return (parseFloat(sum)*100/count).toFixed(0) + " %";

}

function getProfit(data) {

	 var sum = 0;

    $.each(data, function () {
        sum = sum + this["Profit"];
    });

    return parseFloat(sum).toFixed(0);

}