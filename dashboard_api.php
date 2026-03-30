<?php

include "db.php";

$data = [];

/* TOTAL PRODUCTS */
$productQuery = mysqli_query($conn,"SELECT COUNT(*) as total FROM products");
$product = mysqli_fetch_assoc($productQuery);
$data['totalProducts'] = $product['total'];

/* TOTAL SALES */
$salesQuery = mysqli_query($conn,"SELECT COUNT(*) as total FROM payment");
$sales = mysqli_fetch_assoc($salesQuery);
$data['totalSales'] = $sales['total'];

/* TOTAL REVENUE */
$revQuery = mysqli_query($conn,"SELECT SUM(total_price) as revenue FROM payment");
$rev = mysqli_fetch_assoc($revQuery);
$data['revenue'] = $rev['revenue'] ? $rev['revenue'] : 0;

/* TOTAL CUSTOMERS */
$customerQuery = mysqli_query($conn,"SELECT COUNT(DISTINCT customer_name) as total FROM payment");
$customer = mysqli_fetch_assoc($customerQuery);
$data['customers'] = $customer['total'];

/* RECENT SALES */
$recentQuery = mysqli_query($conn,"SELECT product_name,customer_name,quantity,total_price FROM payment ORDER BY id DESC LIMIT 5");

$recent = [];

while($row = mysqli_fetch_assoc($recentQuery)){
    $recent[] = $row;
}

$data['recentSales'] = $recent;
/* SALES PER PRODUCT */

$productSalesQuery = mysqli_query($conn,"
SELECT product_name, SUM(quantity) as total
FROM payment
GROUP BY product_name
");

$productSales = [];

while($row = mysqli_fetch_assoc($productSalesQuery)){
    $productSales[] = $row;
}

$data['productSales'] = $productSales;
echo json_encode($data);

?>