let colores = ["black", "red", "blue", "orange"];

window.onload = function(){
    let tds = document.getElementsByTagName("td");
    arr1 = Array.from(tds);
    let ths = document.getElementsByTagName("th");
    arr2 = Array.from(ths);

    let celdas = arr1.concat(arr2);    
    
    for (let celda of celdas) {
        let cont = 0;
        celda.onclick = function(){
            
            if(cont < colores.length - 1) cont++;
            else cont = 0;

            let aux = "background-color: " + colores[cont];

            this.setAttribute("style", aux);
            
            /*
            if (celda.style.backgroundColor === "black") {
                celda.setAttribute("style", "background-color: white");
            }
            else {
                celda.setAttribute("style", "background-color: black");
            }
            */
        } ;
    }
}
