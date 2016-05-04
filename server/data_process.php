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

$output = array();
// $output['name'] = 'Category';
// Get processed data
$sql = "Select 	Category, SUM(Sales) as Sales from test.sales group by Category";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$value_obj = array();
    	$value_obj['name'] = $row["Category"];
    	$value_obj['y'] = $row["Sales"];

    	array_push($output, $value_obj);        
    }
}

$final['pie'] = $output;

// echo ($final);
echo json_encode($final, JSON_NUMERIC_CHECK);
// echo json_encode($output, JSON_NUMERIC_CHECK);

$conn->close();

?>