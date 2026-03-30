<?php
include 'db.php';

$action = $_POST['action'];

if($action == "add"){

$type = $_POST['product_type'];
$name = $_POST['product_name'];
$price = $_POST['price'];

$sql = "INSERT INTO products(product_type,product_name,price)
VALUES('$type','$name','$price')";

$conn->query($sql);

}

if($action == "get"){

$result = $conn->query("SELECT * FROM products");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

if($action == "delete"){

$id = $_POST['id'];

$conn->query("DELETE FROM products WHERE product_id=$id");

}

if($action == "update"){

$id = $_POST['id'];
$type = $_POST['product_type'];
$name = $_POST['product_name'];
$price = $_POST['price'];

$sql = "UPDATE products SET
product_type='$type',
product_name='$name',
price='$price'
WHERE product_id=$id";

$conn->query($sql);

}

if($action == "getCropProducts"){

$result = $conn->query("SELECT crop_name FROM crops");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

if($action == "getAnimalProducts"){

$result = $conn->query("SELECT product FROM livestock");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

?>