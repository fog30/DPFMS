<?php
include 'db.php';

$action = $_POST['action'];

if($action == "add"){

$type = $_POST['animal_type'];
$product = $_POST['product'];
$quoted = $_POST['quoted_animal'];

$sql = "INSERT INTO livestock(animal_type,product,quoted_animal)
VALUES('$type','$product','$quoted')";

$conn->query($sql);

}

if($action == "get"){

$result = $conn->query("SELECT * FROM livestock");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

if($action == "delete"){

$id = $_POST['id'];

$conn->query("DELETE FROM livestock WHERE animal_id=$id");

}

if($action == "update"){

$id = $_POST['id'];
$type = $_POST['animal_type'];
$product = $_POST['product'];
$quoted = $_POST['quoted_animal'];

$sql = "UPDATE livestock SET
animal_type='$type',
product='$product',
quoted_animal='$quoted'
WHERE animal_id=$id";

$conn->query($sql);

}

?>