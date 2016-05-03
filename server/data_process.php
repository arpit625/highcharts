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
} else {
    echo "No";
}

// echo ($final);
echo json_encode($final);

$conn->close();

?>