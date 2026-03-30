<?php
include 'db.php';

$action = $_POST['action'];

if($action == "add"){

$crop_set = $_POST['crop_set'];
$crop_name = $_POST['crop_name'];
$plantation_date = $_POST['plantation_date'];
$harvest_date = $_POST['harvest_date'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO crops(crop_set,crop_name,plantation_date,harvest_date,quantity_harvested)
VALUES('$crop_set','$crop_name','$plantation_date','$harvest_date','$quantity')";

$conn->query($sql);

}

if($action == "get"){

$result = $conn->query("SELECT * FROM crops");

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

}

if($action == "delete"){

$id = $_POST['id'];

$conn->query("DELETE FROM crops WHERE crop_id=$id");

}

if($action == "update"){

$id = $_POST['id'];
$crop_set = $_POST['crop_set'];
$crop_name = $_POST['crop_name'];
$plantation_date = $_POST['plantation_date'];
$harvest_date = $_POST['harvest_date'];
$quantity = $_POST['quantity'];

$sql = "UPDATE crops SET
crop_set='$crop_set',
crop_name='$crop_name',
plantation_date='$plantation_date',
harvest_date='$harvest_date',
quantity_harvested='$quantity'
WHERE crop_id=$id";

$conn->query($sql);

}
?>