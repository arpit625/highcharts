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

// Generate pie chart data
$output = array();
$sql = "Select 	*  from test.sales";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	array_push($output, $row);        
    }
}

echo json_encode($output, JSON_NUMERIC_CHECK );



$conn->close();

?>