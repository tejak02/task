const crust = document.getElementById("crust");

const toppings = document.querySelectorAll("input[type='checkbox']");

const sizes = document.querySelectorAll(".size");

const coupon = document.getElementById("coupon");

let sizePrice = 0;

let sizeName = "Small";

sizes.forEach(button => {

    button.addEventListener("click", () => {

        sizes.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        sizePrice = Number(button.dataset.price);

        sizeName = button.innerText;

        calculate();

    });

});

crust.addEventListener("change", calculate);

coupon.addEventListener("keyup", calculate);

toppings.forEach(item => {

    item.addEventListener("change", calculate);

});

function calculate() {

    let base = Number(crust.value) + sizePrice;

    let toppingTotal = 0;

    toppings.forEach(item => {

        if (item.checked) {

            toppingTotal += Number(item.value);

        }

    });

    let subtotal = base + toppingTotal;

    let final = subtotal;

    let discountText = "0%";

    if (coupon.value.toUpperCase() == "SAVE10") {

        final = subtotal * 0.90;

        discountText = "10% (SAVE10)";

    }

    document.getElementById("base").innerHTML = "$" + base.toFixed(2);

    document.getElementById("top").innerHTML = "$" + toppingTotal.toFixed(2);

    document.getElementById("sub").innerHTML = "$" + subtotal.toFixed(2);

    document.getElementById("discount").innerHTML = discountText;

    document.getElementById("total").innerHTML = "$" + final.toFixed(2);

    let crustName = crust.options[crust.selectedIndex].text.split(" ")[1];

    document.getElementById("pizzaName").innerHTML =

        `${sizeName.toUpperCase()} ${crustName.toUpperCase()} CRUST PIZZA`;

}

calculate();

document.getElementById("orderBtn").addEventListener("click", () => {

    alert("🍕 Order Placed Successfully!");

});