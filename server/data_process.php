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
echo "Connected successfully <br>";


$sql = "SELECT segment, sales FROM test.sales limit 10";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Segment : " . $row["segment"]. " - sales: " . $row["sales"] . "<br>";
    }
} else {
    echo "0 results";
}


$conn->close();

?>