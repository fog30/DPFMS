<?php

include "db.php";

if(isset($_GET['id'])){

    $id = $_GET['id'];

    $stmt = $conn->prepare("DELETE FROM payment WHERE id = ?");
    $stmt->bind_param("i", $id);

    if($stmt->execute()){
        echo "success";
    } else {
        echo "error";
    }

} else {
    echo "no id";
}

?>