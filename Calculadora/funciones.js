function recogerNumero(texto){
    let cadena;
    do{
        cadena = prompt(texto, "");
        cadena = Number(cadena);
        if (isNaN(cadena)) alert("tu padre no te quiere");
    } while (isNaN(cadena));
    return cadena;
}

function sumar (a, b){
    return (a + b);
}

function restar (a, b){
    return (a - b);
}

function multiplicar (a, b){
    return (a * b);
}

function dividir (a, b){ 
    return (a / b);
}

function recogeOperacion (operaciones){
    do{
        tipo = prompt(operaciones);
        if (!operaciones.includes(tipo)) alert ("Operación no soportada");
    } while (!operaciones.includes(tipo));
    return tipo;
}

function calcular(){
    let a = recogerNumero("Dame el primer número");
    let b = recogerNumero("Dame el segundo número");

    let operaciones = ["sumar", "restar", "multiplicar", "dividir"];
    let tipo = recogeOperacion(operaciones);
    let resultado = 0;

    switch (tipo){
        case "sumar":
            resultado = sumar (a, b);
            break;
        case "restar":
            resultado = restar (a, b);
            break;
        case "multiplicar":
            resultado = multiplicar (a, b);
            break;
        case "dividir":
            resultado = dividir (a, b);
            break;
        default:
            alert("Illo algo va mal");
    }

    alert(resultado);
}