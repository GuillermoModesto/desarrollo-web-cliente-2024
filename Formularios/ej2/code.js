window.onload = function() {
    let formu = document.querySelector("form");
    formu[0].oninput = function() {
        console.log("hola")
        formu[1].value = this.value;
    }
}