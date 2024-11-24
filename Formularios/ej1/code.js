window.onload = function () {
    let formu = document.querySelector("form");
    formu[2].onclick = function () {
        formu["text2"].value = formu["text1"].value;
    }
}