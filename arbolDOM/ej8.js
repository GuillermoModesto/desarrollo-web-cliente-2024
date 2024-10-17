window.onload = function() {
    let imagen = document.getElementsByTagName("img")[0];
    imagen.onmouseover = function() { this.setAttribute("src", "pelmite2.jpg"); };
    imagen.onmouseout = function() { this.setAttribute("src", "pelmite1.jpeg"); };
}