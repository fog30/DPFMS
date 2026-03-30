<?php

include "db.php";

$product = $_POST['product_name'];
$customer = $_POST['customer_name'];
$phone = $_POST['phone'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];
$total = $_POST['total_price'];
$date = $_POST['payment_date'];

$sql = "INSERT INTO payment
(product_name, customer_name, phone, quantity, price, total_price, payment_date)
VALUES
('$product','$customer','$phone','$quantity','$price','$total','$date')";

mysqli_query($conn,$sql);

echo "success";

?>