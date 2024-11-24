window.onload = function() {
    let formu = document.querySelector("form");
    formu[2].onclick = function() {
        let texto1 = Array.from(formu[0].value.toLowerCase());
        let texto2 = Array.from(formu[1].value.toLowerCase());
        if (esAnagrama(texto1, texto2)) 
            alert("Es anagrama");
        else
            alert("No es anagrama");
    }
}

function esAnagrama(uno, otro) {
    if (uno.length != otro.length)
        return false;
    uno.sort();
    otro.sort();
    if (uno.join("").trim() != otro.join("").trim())
        return false;
    return true;
}