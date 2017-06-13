    var cartItems = [];
    if (JSON.parse(localStorage.getItem('Cart Items'))) {
        cartItems = JSON.parse(localStorage.getItem('Cart Items'));
    } else {
        cartItems = [];
    }
    var counter = 0;

    function counterUpgrader() {
        counter = 0;
        cartItems.forEach(function (element) {
            counter = Number(element.quantity) + counter;
        });
        document.getElementById("counter_holder_span").innerHTML = counter;
    }
    counterUpgrader();

    function addToCart(index) {
        var matchFound = false;
        if (cartItems.length > 0) {
            cartItems.forEach(function (element) {
                if (element.name == cars[index].name) {
                    matchFound = true;
                    console.log(true)
                    element.quantity++;
                }
            });
            if (matchFound == false) {
                cartItems.push(cars[index]);
                cartItems.forEach(function (element) {
                    if (element.name == cars[index].name) {
                        matchFound = true;
                        console.log(true)
                        element.quantity++;
                    }
                });
            }
        } else {
            cartItems.push(cars[index]);
            cartItems.forEach(function (element) {
                if (element.name == cars[index].name) {
                    matchFound = true;
                    console.log(true)
                    element.quantity++;
                }
            });
        }
        console.log(cartItems);
        localStorageAdder();
        counterUpgrader();
    }

    function localStorageAdder() {
        localStorage.setItem("Cart Items", JSON.stringify(cartItems));
        localStorage.setItem("Total", totalAmount);
    }

    function showCartItems() {
        if (cartItems.length > 0) {
            document.getElementById("cart_main_content").className = "cart_empty_indicator_hide";
            document.getElementById("cart_items_table").innerHTML = "";
            amountCalc();
            document.getElementById("cart_items_table").innerHTML = `<tr class="cart_items_table_heading">
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>`;
            for (i = 0; i < cartItems.length; i++) {
                document.getElementById("cart_items_table").innerHTML += `<tr class="cart_items_table_content">
                <td class="remove_cart_tds" onclick=deleteCartItem(` + i + `)><abbr title="Remove this Item"><i class="fa fa-times-circle" aria-hidden="true"></i></abbr></td>
                <td><img src="` + cartItems[i].imgURL + `" width="40px" height="40px" /></td>
                <td class="cart_items_item_name">` + cartItems[i].name + `</td>
                <td>` + cartItems[i].price + `</td>
                <td><input type="number" class="cart_items_quantity" onchange="quantityUpdater(` + i + `)" value="` + cartItems[i].quantity + `" /></td>
                <td style="padding-right:2%">` + (cartItems[i].quantity * cartItems[i].price) + `</td>
            </tr>`;
            }
            document.getElementById("cart_items_table").innerHTML += `<tr>
                <td colspan="6" style="border-top:2px solid rgba(0, 0, 0, 0.2);padding-top: 5px !important;">
                    <div id="couponCodeHandler">
                        <input type="text" id="couponCode" placeholder="Coupon Code" />
                        <button id="couponApply" onclick="couponApplier()();">Apply Coupon</button>
                        <button id="update_basket" type="submit" class="update_basket_initital">Update Basket</button>
                    </div>
                </td>
            </tr>
        `;
            document.getElementById("extra_cart_opt").innerHTML = `<div id="interested"></div>
            <div id="cart_totals">
                <p>Cart Totals</p>
                <table>
                    <tr>
                        <th>Subtotal</th>
                        <td id="sub_total" style="font-weight: normal !important;">` + localStorage.getItem("Total") + `</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td id="total">` + localStorage.getItem("Total") + `</td>
                    </tr>
                </table>
                <a href='checkout.html'><button id="checkout">Proceed To Checkout</button></a>
            </div>`;
            console.log(totalAmount);
        } else {
            document.getElementById("cart_items_table").innerHTML = "";
            document.getElementById("extra_cart_opt").innerHTML = "";
            document.getElementById("cart_main_content").className = "";
        }
    }
    if (window.location.href.indexOf("cart") != -1) {
        showCartItems();
    }
    var totalAmount = 0;

    function quantityUpdater(index) {
        if (document.getElementsByClassName("cart_items_quantity")[index].value < 1) {
            document.getElementsByClassName("cart_items_quantity")[index].value = 1;
        }
        document.getElementById("update_basket").setAttribute("onclick", "updateBasket()");
        cartItems[index].quantity = document.getElementsByClassName("cart_items_quantity")[index].value;
        document.getElementById("update_basket").className = "";
        localStorageAdder();
    }
    var updaterIndicator = false;

    function updateBasket() {
        document.getElementById("update_basket").removeAttribute("onclick");
        updaterIndicator = true;
        document.getElementById("cart_items_table").className = "lowOpactiy";
        document.getElementById("cart_totals").className = "lowOpactiy";
        document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
        document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
        setTimeout(function () {
            document.getElementById("cart_items_table").className = "";
            document.getElementById("cart_totals").className = "";
            showCartItems();
            amountCalc();
            document.getElementById("cart_items_table").className = "margin_helper";
            counterUpgrader();
            document.getElementById("table_extra_functions").className += " table_margin";
            document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
            document.getElementById("updater_oF_cart").innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Cart Updated';
        }, 1500);
    }

    function deleteCartItem(index) {
        document.getElementsByClassName("remove_cart_tds")[index].removeAttribute("onclick");
        document.getElementById("cart_items_table").className = "lowOpactiy";
        document.getElementById("cart_totals").className = "lowOpactiy";
        document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
        document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
        setTimeout(function () {
            document.getElementById("cart_items_table").className = "";
            document.getElementById("cart_totals").className = "";
            document.getElementById("cart_items_table").className = "margin_helper";
            document.getElementById("table_extra_functions").className += " table_margin";
            document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
            document.getElementById("updater_oF_cart").innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> ' + cartItems[index].name + ' removed.<a href="JavaScript:void(0)" onclick="undoo(' + index + ')" style="color:red">Undo?</a>';
            console.log(cartItems[index]);
            undo = (cartItems.splice(index, 1))[0];
            // console.log('Undo '+JSON.stringify(undo));
            localStorageAdder();
            showCartItems();
            amountCalc();
            counterUpgrader();
            if (cartItems.length == 0) {
                document.getElementById("table_extra_functions").innerHTML = "";
                document.getElementById("updater_oF_cart").innerHTML = "";
                document.getElementById("updater_oF_cart").className = "";
            }
        }, 1500);
    }

    function undoo(i) {
        cartItems.splice(i, 0, undo);
        localStorageAdder();
        showCartItems();
        counterUpgrader();
        amountCalc();
        document.getElementById("updater_oF_cart").className = "";
        document.getElementById("updater_oF_cart").innerHTML = '';
    }

    function amountCalc() {
        if (couponReputaion) {
            totalAmount = 0;
            cartItems.forEach(function (element) {
                totalAmount = (element.quantity * element.price) + totalAmount;
            });
            totalAmount = totalAmount * 0.90;
            localStorageAdder();
            console.log(1)
        } else {
            totalAmount = 0;
            console.log(2)
            cartItems.forEach(function (element) {
                totalAmount = (element.quantity * element.price) + totalAmount;
            });
            localStorageAdder();
        }
    }
    var couponReputaion = false;

    function couponApplier() {
        var originalCouponCode = "freebies",
            userCouponCode = (document.getElementById("couponCode").value).toLowerCase();
        document.getElementById('couponApply').removeAttribute('onclick');
        if (updaterIndicator == false && userCouponCode == originalCouponCode) {
            couponReputaion = true;
            document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
            document.getElementById("table_extra_functions").className = "table_margin";
            document.getElementById("cart_items_table").className = "lowOpactiy";
            document.getElementById("cart_totals").className = "lowOpactiy";
            document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
            document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
            setTimeout(function () {
                abc = (document.getElementById('updater_oF_cart').className).split(" ");
                console.log(abc);
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                document.getElementById('couponApply').setAttribute('onclick', 'couponApplier()');
                abc = ((abc.toString()).split(",", 1)).toString();
                document.getElementById('updater_oF_cart').className = abc;
                document.getElementById("updater_oF_cart").innerHTML = "Congratulation! You got 10% discount on checkout";
                console.log(true)
                document.getElementById("cart_items_table").className = "";
                document.getElementById("cart_totals").className = "";
                document.getElementById("cart_items_table").className = "margin_helper";
                document.getElementById("table_extra_functions").className += " table_margin";
                document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
                totalAmount = totalAmount * 0.90;
                console.log(totalAmount);
                showCartItems();
            }, 1500);
        }
        if (updaterIndicator == true && userCouponCode == originalCouponCode) {
            couponReputaion = true;
            document.getElementById("cart_items_table").className = "lowOpactiy";
            document.getElementById("cart_totals").className = "lowOpactiy";
            document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
            document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
            setTimeout(function () {
                abc = (document.getElementById('updater_oF_cart').className).split(" ");
                console.log(abc);
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                // typeof (abc)
                abc = ((abc.toString()).split(",", 1)).toString();
                document.getElementById('updater_oF_cart').className = abc;
                document.getElementById("updater_oF_cart").innerHTML = "Congratulation! You got 10% discount on checkout";
                console.log(true)
                document.getElementById("cart_items_table").className = "";
                document.getElementById("cart_totals").className = "";
                document.getElementById("cart_items_table").className = "margin_helper";
                document.getElementById("table_extra_functions").className += " table_margin";
                document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
                totalAmount = totalAmount * 0.90;
                showCartItems();
                document.getElementById('couponApply').setAttribute('onclick', 'couponApplier()');
            }, 1500);
            // document.getElementById("updater_oF_cart").className+=" updater_oF_cart_color_p";
        } else if (updaterIndicator == true && userCouponCode != originalCouponCode && userCouponCode) {
            document.getElementById("cart_items_table").className = "lowOpactiy";
            document.getElementById("cart_totals").className = "lowOpactiy";
            document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
            document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
            setTimeout(function () {
                abc = (document.getElementById('updater_oF_cart').className).split(" ");
                console.log(abc);
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                // typeof (abc)
                abc = ((abc.toString()).split(",", 1)).toString();
                document.getElementById('updater_oF_cart').className = abc;
                // document.getElementById("updater_oF_cart").innerHTML = "Congratulation! You got 10% discount on checkout";
                document.getElementById("updater_oF_cart").innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Coupon "' + userCouponCode + '" does not exist!';
                console.log(true)
                document.getElementById("cart_items_table").className = "";
                document.getElementById("cart_totals").className = "";
                document.getElementById("cart_items_table").className = "margin_helper";
                document.getElementById("table_extra_functions").className += " table_margin";
                document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
                showCartItems();
                document.getElementById("updater_oF_cart").className += " updater_oF_cart_color";
                document.getElementById("updater_oF_cart").className += " updater_oF_cart_color";
                document.getElementById('couponApply').setAttribute('onclick', 'couponApplier()');
            }, 1500);
        }
        if (userCouponCode == "") {
            document.getElementById("cart_items_table").className = "lowOpactiy";
            document.getElementById("cart_totals").className = "lowOpactiy";
            document.getElementById("cart_items_table").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw"></i>';
            document.getElementById("cart_totals").innerHTML += '<i class="fa fa-spinner fa-spin fa-4x fa-fw abc"></i>';
            setTimeout(function () {
                abc = (document.getElementById('updater_oF_cart').className).split(" ");
                console.log(abc);
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                for (i = 0; i < abc.length; i++) {
                    if (abc[i] == "updater_oF_cart_color") {
                        abc.splice(i, 1);
                        console.log(abc)
                    }
                }
                // typeof (abc)
                abc = ((abc.toString()).split(",", 1)).toString();
                document.getElementById('updater_oF_cart').className = abc;
                // document.getElementById("updater_oF_cart").innerHTML = "Congratulation! You got 10% discount on checkout";
                console.log(true)
                document.getElementById("cart_items_table").className = "";
                document.getElementById("cart_totals").className = "";
                document.getElementById("cart_items_table").className = "margin_helper";
                document.getElementById("table_extra_functions").className += " table_margin";
                document.getElementById("updater_oF_cart").className = "updater_oF_cart_upgrader";
                document.getElementById("updater_oF_cart").className += " updater_oF_cart_color";
                document.getElementById("updater_oF_cart").innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please enter a coupon code.';
                showCartItems();
                document.getElementById('couponApply').setAttribute('onclick', 'couponApplier()');
            }, 1500);
        }
        updaterIndicator = true;
    }