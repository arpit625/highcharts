

function getRevenue(region, mpng) {
    var filteredData = mpng.filter(filterMappings(region,"cluster"));
    
    var sum = 0;

    $.each(filteredData, function () {
        sum = sum + this["existing_sales_p"];
    });

    return parseFloat(sum).toFixed(2);
}
