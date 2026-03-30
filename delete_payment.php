<?php

$conn = new mysqli("localhost","root","","dpfms");

$id = $_POST['id'];

$conn->query("DELETE FROM payment WHERE id='$id'");

echo "deleted";

?>