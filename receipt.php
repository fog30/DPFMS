<?php
include "db.php";

$id = $_GET['id'];

$sql = "SELECT * FROM payment WHERE id = $id";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html>
<head>
<title>Receipt</title>

<style>
body{
    font-family: Arial, sans-serif;
    background: #f2f2f2;
}

.container{
    width: 400px;
    margin: 50px auto;
    background: white;
    padding: 30px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2{
    margin-bottom: 5px;
}

.success{
    font-size: 50px;
    color: green;
}

.section{
    margin-top: 20px;
    text-align: left;
}

.row{
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}

.total{
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
}

button{
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    background: black;
    color: white;
    cursor: pointer;
}
</style>

</head>

<body>

<div class="container">

<div class="success">✔</div>

<h2>Order Confirmed!</h2>
<p>Thank you for your purchase</p>

<hr>

<div class="section">
    <div class="row">
        <span>Transaction ID</span>
        <span>#<?php echo $data['id']; ?></span>
    </div>
</div>

<h3>Order Summary</h3>

<div class="section">
    <div class="row">
        <span>Customer</span>
        <span><?php echo $data['customer_name']; ?></span>
    </div>

    <div class="row">
        <span>Product</span>
        <span><?php echo $data['product_name']; ?></span>
    </div>

    <div class="row">
        <span>Quantity</span>
        <span><?php echo $data['quantity']; ?></span>
    </div>

    <div class="row">
        <span>Date</span>
        <span><?php echo $data['payment_date']; ?></span>
    </div>
</div>

<hr>

<div class="row total">
    <span>Total Amount</span>
    <span>₹ <?php echo $data['total_price']; ?></span>
</div>

<button onclick="window.print()">Print</button>

</div>

</body>
</html>