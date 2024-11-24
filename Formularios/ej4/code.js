window.onload = function() {
    let formu = document.querySelector("form");
    formu["tipo"].onchange = function() {
        if (formu["tipo"].value == "doleu") {
            formu["num1"].placeholder = "$";
            formu["num2"].placeholder = "€";
        } else {
            formu["num1"].placeholder = "€";
            formu["num2"].placeholder = "$";
        }
    }
    formu[3].onclick = function() {
        if (formu["tipo"].value == "doleu") {
            formu["num2"].value = Math.round((Number(formu["num1"].value) * 0.83) * 100) / 100;
        } else {
            formu["num2"].value = Math.round((Number(formu["num1"].value) * 1.20481927711) * 100) / 100;
        }
    }
}