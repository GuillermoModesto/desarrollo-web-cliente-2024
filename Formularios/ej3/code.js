window.onload = function() {
    let texto = [];
    let formu = document.querySelector("form");
    for (let i = 0; i < 4; i++) {
        formu[i].onchange = function() {
            if (this.checked) {
                texto.push(this.value);
            } else {
                texto.splice(texto.indexOf(this.value), 1);
            }
            document.querySelector("textarea").value = texto.join("\n");
        }
    }
}