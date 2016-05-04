<?php
$servername = "localhost";
$username = "root";
$password = "ind123";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully <br>";


/*// Get processed data
$sql = "SELECT segment, sales FROM test.sales limit 10";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Segment : " . $row["segment"]. " - sales: " . $row["sales"] . "<br>";
    }
} else {
    echo "0 results";
}*/

$final = array();

// Get processed data
$sql = "Select 	SUM(sales) as Sales, SUM(Quantity) as Quantity, AVG(Discount) as Discount, SUM(Profit) as Profit from test.sales";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

        $final = array('Sales' => $row["Sales"], 'Quantity' =>  $row["Quantity"], 'Discount' => $row["Discount"], 'Profit' => $row["Profit"]);
    }
}

// Generate pie chart data
$output = array();
$sql = "Select 	Region, SUM(Sales) as Sales from test.sales group by Region";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$value_obj = array();
    	$value_obj['name'] = $row["Region"];
    	$value_obj['y'] = $row["Sales"];

    	array_push($output, $value_obj);        
    }
}

$final['pie'] = $output;

// Generate Category Bar chart Data
$output = array();
$output['name'] = 'Category';
$sql = "Select 	Category, SUM(Sales) as Sales from test.sales group by Category";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$output['xAxis'][] = $row['Category'];
    	$output['data'][] = $row["Sales"];
    }
}
// $output['xAxis'][] = $listCategory;

$final['category'] = $output;


// Generate Sub-Category Bar chart Data
$output = array();
$output['name'] = 'Sub-Category';
$sql = "Select 	Sub_Category, SUM(Sales) as Sales from test.sales group by Sub_Category";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$output['xAxis'][] = $row['Sub_Category'];
    	$output['data'][] = $row["Sales"];
    }
}
// $output['xAxis'][] = $listCategory;

$final['sub_category'] = $output;


/*// Generate Sub-Category Bar chart Data
$output = array();
$output['name'] = 'Sub-Category';
$sql = "Select 	Segment, State, SUM(Sales) as Sales, AVG(Discout) as Discout from test.sales group by Segment, State";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$output['xAxis'][] = $row['Sub_Category'];
    	$output['data'][] = $row["Sales"];
    }
}
// $output['xAxis'][] = $listCategory;

$final['sub_category'] = $output;*/

// Generate pie chart data
$output = array();
$value_obj = array();
// $sql = "Select 	Region, SUM(Sales) as Sales from test.sales group by Region";
$sql = "Select 	Segment, State, SUM(Sales) as Sales, AVG(Discount) as Discount from test.sales group by Segment, State";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$value_obj[$row["Segment"]]['name'] = $row["Segment"];

    	// $value_obj[$row["Segment"]]['data'][][] = $row["Sales"] ;
    	// $value_obj[$row["Segment"]]['data'][][] = $row["Discount"] ;
    	$value_obj[$row["Segment"]]['data'][] = array($row["Sales"] , $row["Discount"]);

    	// array_push($output, $value_obj);        
    }
}
    	array_push($output, $value_obj);        

$final['scatter'] = $output;


echo json_encode($final, JSON_NUMERIC_CHECK );
/*echo "<br>";
echo "<br>";
echo "<br>";
// echo json_encode($output, JSON_NUMERIC_CHECK);
echo json_encode($output, JSON_NUMERIC_CHECK);*/

$conn->close();

?>