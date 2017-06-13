if (window.location.href.indexOf("checkoutDONE.html") == -1) {

    function createTable() {
        document.getElementById("checkout_products").innerHTML = `<tr>
            <th>Product</th>
            <th>Total</th>
        </tr>`;
        for (i = 0; i < cartItems.length; i++) {
            document.getElementById("checkout_products").innerHTML += `<tr>
            <td style='border-top:2px solid #D8D8D8 !important;'>` + cartItems[i].name + ` <span class='checkout-different'>&times ` + cartItems[i].quantity + `</span></td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;'>` + cartItems[i].price * cartItems[i].quantity + `</td>
        </tr>`;
        }
        document.getElementById("checkout_products").innerHTML += `<tr>
            <td style='border-top:2px solid #D8D8D8 !important;' class='checkout-different'>Subtotal</td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;' class='checkout-different'>` + localStorage.getItem("Total") + `</td></tr>
            <tr>            
            <td style='border-top:2px solid #D8D8D8 !important;' class='checkout-different'>Total</td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;' class='checkout-different'>` + localStorage.getItem("Total") + `</td>            
        </tr>`;
    }
    createTable();
    var confirmations = {
        firstNamee: false,
        lastNamee: false,
        country: false,
        address: false,
        postal: false,
        town: false,
        phone: false,
        email: false
    }

    function txtChecker(eid, propName) {
        if ((document.getElementById(eid).value).trim()) {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_true";
            confirmations[propName] = true;
            console.log(confirmations)
        } else {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_false";
        }

    }

    function forOptional(eid) {
        document.getElementById(eid).className = "checkout_input_styler checkout-input_true";
    }

    function postalNumChecker(eid) {
        var userPostal = (document.getElementById(eid).value).trim();
        if (userPostal != "" && isNaN(userPostal) == false && userPostal.length == 5) {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_true";
            confirmations.postal = true;
        } else {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_false";
        }
    }
    var confirmationOfEmail = false;

    function emailChecker(eid) {
        var userEmail = document.getElementById(eid).value;
        console.log(userEmail, eid)
        if (userEmail.indexOf(" ") === -1 && userEmail.indexOf("@") > 4 & userEmail.indexOf(".") - userEmail.indexOf("@") >= 3) {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_true";
            confirmations.email = true;
        } else {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_false";
        }
    }

    function countryGet() {
        var country = (document.getElementById("checkout_countries").options[document.getElementById("checkout_countries").selectedIndex]).value;
        if (country != "-- Select Your Country --") {
            confirmations.country = true;
        }
    }

    function cellNumChecker(eid) {
        var num = document.getElementById(eid).value.trim();
        if (num != "" && isNaN(num) == false && num.length === 11) {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_true";
            confirmations.phone = true;
        } else {
            document.getElementById(eid).className = "checkout_input_styler checkout-input_false";
        }
    }

    function paymentMethodIdentifier() {
        var radios = document.getElementsByName("payment_method");
        for (i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console
                break;
            }
        }
    }
    localStorage.setItem("m", "Check Payments");

    function checkout_btn_updater(num) {
        if (num == 0) {
            document.getElementById("finall_Checkout_btn").innerHTML = "Place Order";
            document.getElementById("finall_Checkout_btn").className = "";
        } else {
            document.getElementById("finall_Checkout_btn").innerHTML = "Proceed to PayPal";
            document.getElementById("finall_Checkout_btn").className = "checkout_final_btn_size";
            localStorage.setItem("m", "Papal");
        }
    }

    function finalization() {
        document.getElementById("checkout_main").className = "checkout_checking";
        document.getElementById("spinner").innerHTML = '<i class="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>';
        setTimeout(function () {
            document.getElementById("checkout_main").className = "";
            document.getElementById("spinner").innerHTML = '';
            var prop = [];
            for (var properties in confirmations) {
                prop.push(confirmations[properties]);
            }

            function abc(indicator) {
                return indicator == true;
            }
            if (prop.every(abc)) {
                var date = new Date();
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"];
                sessionStorage.infoR = localStorage.getItem("Cart Items");
                sessionStorage.info = "" + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + "";
                sessionStorage.m = localStorage.getItem("m");
                sessionStorage.infoT = localStorage.getItem("Total");
                localStorage.removeItem("Cart Items");
                localStorage.removeItem("Total");
                localStorage.removeItem("m");
                window.location.replace("checkoutDONE.html");
            } else {
                txtChecker('firstName', 'firstNamee');
                txtChecker('lastName', 'lastNamee');
                forOptional('company_name');
                txtChecker('street_address', 'address');
                forOptional('street_address_extra');
                postalNumChecker('postalCOde');
                txtChecker('city', 'town');
                emailChecker('user_checkout_email', 'email');
                cellNumChecker('checkout_phone');
                paymentMethodIdentifier();
                window.location.href = window.location.href + "#firstName_label";
            }
        }, 2000)
    }
}
if (window.location.href.indexOf("checkoutDONE.html") != -1) {
    document.getElementById("checkoutDONE_table").innerHTML = `
    <tr>
        <td>Order Number:<br /><span class='checkout-different'>1623</span></td>
        <td>Date: <br /><span class='checkout-different'>` + sessionStorage.info + `</span></td>
        <td>Total: <br /><span class='checkout-different'>` + sessionStorage.infoT + `</span></td>
        <td>Payment Method<br /><span class='checkout-different'>` + sessionStorage.m + `</span></td>
    </tr>`;
    document.getElementById("checkoutDONE_table_items").innerHTML = `<tr>
            <th>Product</th>
            <th>Total</th>
        </tr>`;
    for (i = 0; i < JSON.parse(sessionStorage.infoR).length; i++) {
        document.getElementById("checkoutDONE_table_items").innerHTML += `<tr>
            <td style='border-top:2px solid #D8D8D8 !important;'>` + JSON.parse(sessionStorage.infoR)[i].name + ` <span class='checkout-different'>&times ` + JSON.parse(sessionStorage.infoR)[i].quantity + `</span></td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;'>` + JSON.parse(sessionStorage.infoR)[i].price * JSON.parse(sessionStorage.infoR)[i].quantity + `</td>
        </tr>`;
    }
    document.getElementById("checkoutDONE_table_items").innerHTML += `<tr>
            <td style='border-top:2px solid #D8D8D8 !important;' class='checkout-different'>Subtotal</td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;' class='checkout-different'>` + sessionStorage.infoT + `</td></tr><tr>
            <td style='border-top:2px solid #D8D8D8 !important;' class='checkout-different'>Payment Method</td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;' class='checkout-different'>` + sessionStorage.m + `</td></tr>
            <tr>            
            <td style='border-top:2px solid #D8D8D8 !important;' class='checkout-different'>Total</td>
            <td style='border-top:2px solid #D8D8D8 !important;text-align: center;' class='checkout-different'>` + sessionStorage.infoT + `</td>            
        </tr>`;
}