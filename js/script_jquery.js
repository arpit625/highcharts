$( document ).ready(function() {

	console.log( "ready123!" );

	$(".rowTopNumber").html("<h3>349</h3>");

    callAjax(servervalue);


	columnchart("#chart1");
	barchart("#chart2");
	piechart("#chart3");
	scatterchart("#chart4");

});

function callAjax() {

	
}