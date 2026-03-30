<?php
include 'db.php';

$action = $_POST['action'];

if($action == "getProducts"){

$result = $conn->query("SELECT product_name,price FROM products");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

if($action == "add"){

$product = $_POST['product_name'];
$customer = $_POST['customer_name'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];
$date = $_POST['date'];
$total = $_POST['total_price'];

$sql = "INSERT INTO payment(product_name,customer_name,quantity,price,date,total_price)
VALUES('$product','$customer','$quantity','$price','$date','$total')";

$conn->query($sql);

}

if($action == "get"){

$result = $conn->query("SELECT * FROM payment");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

?>