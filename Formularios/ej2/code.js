window.onload = function() {
    let formu = document.querySelector("form");

    formu[0].oninput = function() {
        formu[1].value = this.value;
    }
    
    formu[0].addEventListener("input", function() {
        formu[1].value = this.value;
    });
}