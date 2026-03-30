/* =====================================
CROPS MODULE
===================================== */

let selectedCrop = null

function addCrop(){

let crop_set = document.getElementById("crop_set").value
let crop_name = document.getElementById("crop_name").value
let plantation_date = document.getElementById("plantation_date").value
let harvest_date = document.getElementById("harvest_date").value
let quantity = document.getElementById("quantity").value

fetch("crops_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=add&crop_set=${crop_set}&crop_name=${crop_name}&plantation_date=${plantation_date}&harvest_date=${harvest_date}&quantity=${quantity}`
})
.then(()=>loadCrops())

}

function loadCrops(){

fetch("crops_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:"action=get"
})
.then(res=>res.json())
.then(data=>{

let table = document.getElementById("cropsTable")
if(!table) return

table.innerHTML=""

data.forEach(crop=>{

table.innerHTML += `

<tr>
<td>${crop.crop_set}</td>
<td>${crop.crop_name}</td>
<td>${crop.plantation_date}</td>
<td>${crop.harvest_date}</td>
<td>${crop.quantity_harvested}</td>

<td>
<button onclick="editCrop(${crop.crop_id},'${crop.crop_set}','${crop.crop_name}','${crop.plantation_date}','${crop.harvest_date}',${crop.quantity_harvested})"
class="btn btn-warning btn-sm">Edit</button>

<button onclick="deleteCrop(${crop.crop_id})"
class="btn btn-danger btn-sm">Delete</button>

</td>

</tr>`
})

})

}

function editCrop(id,set,name,pdate,hdate,qty){

selectedCrop = id

document.getElementById("crop_set").value = set
document.getElementById("crop_name").value = name
document.getElementById("plantation_date").value = pdate
document.getElementById("harvest_date").value = hdate
document.getElementById("quantity").value = qty

}

function updateCrop(){

let crop_set = document.getElementById("crop_set").value
let crop_name = document.getElementById("crop_name").value
let plantation_date = document.getElementById("plantation_date").value
let harvest_date = document.getElementById("harvest_date").value
let quantity = document.getElementById("quantity").value

fetch("crops_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=update&id=${selectedCrop}&crop_set=${crop_set}&crop_name=${crop_name}&plantation_date=${plantation_date}&harvest_date=${harvest_date}&quantity=${quantity}`
})
.then(()=>loadCrops())

}

function deleteCrop(id){

fetch("crops_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=delete&id=${id}`
})
.then(()=>loadCrops())

}

/* =====================================
LIVESTOCK MODULE
===================================== */

let selectedAnimal = null

function addAnimal(){

let animal_type = document.getElementById("animal_type").value
let product = document.getElementById("product").value
let quoted = document.getElementById("quoted_animal").value

fetch("livestock_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=add&animal_type=${animal_type}&product=${product}&quoted_animal=${quoted}`
})
.then(()=>loadAnimals())

}

function loadAnimals(){

fetch("livestock_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:"action=get"
})
.then(res=>res.json())
.then(data=>{

let table = document.getElementById("livestockTable")
if(!table) return

table.innerHTML=""

data.forEach(animal=>{

table.innerHTML += `

<tr>

<td>${animal.animal_type}</td>
<td>${animal.product}</td>
<td>${animal.quoted_animal}</td>

<td>
<button onclick="editAnimal(${animal.animal_id},'${animal.animal_type}','${animal.product}',${animal.quoted_animal})"
class="btn btn-warning btn-sm">Edit</button>

<button onclick="deleteAnimal(${animal.animal_id})"
class="btn btn-danger btn-sm">Delete</button>

</td>

</tr>`
})

})

}

function editAnimal(id,type,product,quoted){

selectedAnimal = id

document.getElementById("animal_type").value = type
document.getElementById("product").value = product
document.getElementById("quoted_animal").value = quoted

}

function updateAnimal(){

let type = document.getElementById("animal_type").value
let product = document.getElementById("product").value
let quoted = document.getElementById("quoted_animal").value

fetch("livestock_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=update&id=${selectedAnimal}&animal_type=${type}&product=${product}&quoted_animal=${quoted}`
})
.then(()=>loadAnimals())

}

function deleteAnimal(id){

fetch("livestock_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=delete&id=${id}`
})
.then(()=>loadAnimals())

}

/* =====================================
PRODUCTS MODULE
===================================== */

let selectedProduct = null

function loadProductNames(){

let type = document.getElementById("product_type").value
let action = ""

if(type === "Crops") action = "getCropProducts"
if(type === "Livestock") action = "getAnimalProducts"

fetch("products_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=${action}`
})
.then(res=>res.json())
.then(data=>{

let dropdown = document.getElementById("product_name")
dropdown.innerHTML=""

data.forEach(item=>{

let name = item.crop_name || item.product
dropdown.innerHTML += `<option value="${name}">${name}</option>`

})

})

}

function addProduct(){

let type = document.getElementById("product_type").value
let name = document.getElementById("product_name").value
let price = document.getElementById("price").value

fetch("products_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=add&product_type=${type}&product_name=${name}&price=${price}`
})
.then(()=>loadProducts())

}

function loadProducts(){

fetch("products_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:"action=get"
})
.then(res=>res.json())
.then(data=>{

let table = document.getElementById("productsTable")
if(!table) return

table.innerHTML=""

data.forEach(product=>{

table.innerHTML += `

<tr>
<td>${product.product_type}</td>
<td>${product.product_name}</td>
<td>${product.price}</td>

<td>
<button onclick="editProduct(${product.product_id},'${product.product_type}','${product.product_name}',${product.price})"
class="btn btn-warning btn-sm">Edit</button>

<button onclick="deleteProduct(${product.product_id})"
class="btn btn-danger btn-sm">Delete</button>

</td>

</tr>`
})

})

}

function editProduct(id,type,name,price){

selectedProduct = id

document.getElementById("product_type").value = type
document.getElementById("product_name").value = name
document.getElementById("price").value = price

}

function updateProduct(){

let type = document.getElementById("product_type").value
let name = document.getElementById("product_name").value
let price = document.getElementById("price").value

fetch("products_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=update&id=${selectedProduct}&product_type=${type}&product_name=${name}&price=${price}`
})
.then(()=>loadProducts())

}

function deleteProduct(id){

fetch("products_api.php",{
method:"POST",
headers:{ "Content-Type":"application/x-www-form-urlencoded" },
body:`action=delete&id=${id}`
})
.then(()=>loadProducts())

}

/* =====================================
PAYMENT MODULE (DATABASE BASED)
===================================== */

function loadProductsDropdown(){

fetch("get_products.php")
.then(res=>res.json())
.then(data=>{

let dropdown = document.getElementById("product_name")

if(!dropdown) return

dropdown.innerHTML = '<option value="">Select Product</option>'

data.forEach(p=>{

dropdown.innerHTML += 
`<option value="${p.product_name}" data-price="${p.price}">
${p.product_name}
</option>`

})

})

}

function setPrice(){

let product = document.getElementById("product_name")
let price = product.options[product.selectedIndex].getAttribute("data-price")

document.getElementById("price").value = price
calculateTotal()

}

function calculateTotal(){

let qty = document.getElementById("quantity").value
let price = document.getElementById("price").value

if(qty=="" || price=="") return

document.getElementById("total_price").value = qty * price

}

function savePayment(){

let data = new FormData()

data.append("product_name",document.getElementById("product_name").value)
data.append("customer_name",document.getElementById("customer_name").value)
data.append("phone",document.getElementById("phone").value)
data.append("quantity",document.getElementById("quantity").value)
data.append("price",document.getElementById("price").value)
data.append("total_price",document.getElementById("total_price").value)
data.append("payment_date",document.getElementById("payment_date").value)

fetch("save_payment.php",{method:"POST",body:data})
.then(()=>{ alert("Payment Saved"); loadPayments() })

}

function loadPayments(){

fetch("get_payments.php")
.then(res=>res.json())
.then(data=>{

let table = document.getElementById("payment_table")
if(!table) return

table.innerHTML=""

data.forEach(p=>{

table.innerHTML += `

<tr>
<td>${p.id}</td>
<td>${p.product_name}</td>
<td>${p.customer_name}</td>
<td>${p.phone}</td>
<td>${p.quantity}</td>
<td>${p.price}</td>
<td>${p.total_price}</td>
<td>${p.payment_date}</td>

<td>
<button onclick="deletePayment(${p.id})" class="btn btn-danger btn-sm">Delete</button>
</td>

</tr>`
})

})

}

function deletePayment(id){

let data = new FormData()
data.append("id",id)

fetch("delete_payment.php",{method:"POST",body:data})
.then(()=>loadPayments())

}

function generateBill(){

const { jsPDF } = window.jspdf
let doc = new jsPDF()

let product = document.getElementById("product_name").value
let customer = document.getElementById("customer_name").value
let qty = document.getElementById("quantity").value
let total = document.getElementById("total_price").value

doc.text("Farm Management System Bill",20,20)
doc.text("Customer: "+customer,20,40)
doc.text("Product: "+product,20,50)
doc.text("Quantity: "+qty,20,60)
doc.text("Total Price: "+total,20,70)

doc.save("bill.pdf")

}

function loadReports(){

fetch("get_reports.php")
.then(res=>res.json())
.then(data=>{

let table = document.getElementById("reportTable")
if(!table) return

table.innerHTML=""

let revenue = 0

data.forEach(r=>{

revenue += Number(r.total_price)

table.innerHTML += `
<tr>

<td>${r.id}</td>
<td>${r.product_name}</td>
<td>${r.customer_name}</td>
<td>${r.quantity}</td>
<td>${r.total_price}</td>
<td>${r.payment_date}</td>

</tr>
`

})

document.getElementById("totalSales").innerText = data.length
document.getElementById("totalRevenue").innerText = "₹ " + revenue

})

}

function generateReport(){

const { jsPDF } = window.jspdf

let doc = new jsPDF()

doc.setFontSize(18)
doc.text("Farm Management System - Sales Report",20,20)

fetch("get_reports.php")
.then(res=>res.json())
.then(data=>{

let y = 40

data.forEach(r=>{

doc.text(
r.product_name + " | " + r.customer_name + " | Qty: " + r.quantity + " | ₹" + r.total_price,
20,
y
)

y += 10

})

doc.save("sales_report.pdf")

})

}

function loadDashboard(){

fetch("dashboard_api.php")
.then(res=>res.json())
.then(data=>{

/* CARDS */

document.getElementById("totalProducts").innerText = data.totalProducts;
document.getElementById("totalSales").innerText = data.totalSales;
document.getElementById("totalRevenue").innerText = "₹" + data.revenue;
document.getElementById("totalCustomers").innerText = data.customers;


/* RECENT SALES TABLE */

let table = document.getElementById("salesTable");

if(table){

table.innerHTML="";

data.recentSales.forEach(s=>{

table.innerHTML += `
<tr>
<td>${s.product_name}</td>
<td>${s.customer_name}</td>
<td>${s.quantity}</td>
<td>₹${s.total_price}</td>
</tr>
`;

});

}


/* SALES CHART */

let labels = [];
let values = [];

data.productSales.forEach(p=>{
labels.push(p.product_name);
values.push(p.total);
});

let ctx = document.getElementById("salesChart");

if(ctx){

new Chart(ctx, {
type: "bar",
data: {
labels: labels,
datasets: [{
label: "Products Sold",
data: values,
backgroundColor:"#2f5d50"
}]
},
options: {
responsive:true,
plugins:{
legend:{display:false}
}
}
});

}

});

}  