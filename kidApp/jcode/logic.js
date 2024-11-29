let minis = [];
let velocidad = -12;
let coeficiente = 0.5;
let scale = 1;
let scaleRed = 0.05;
window.onload = function () {
    let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
    let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];

    document.body.appendChild(document.createElement("div"));

    let i = 0; // Para fondo general
    let j = 0; // Para fondo de figura

    let main = document.getElementsByTagName("div")[0];

    let escala = [
        new Audio("../sound/a.mp3"),
        new Audio("../sound/c.mp3"),
        new Audio("../sound/d.mp3"),
        new Audio("../sound/eb.mp3"),
        new Audio("../sound/f.mp3"),
        new Audio("../sound/g.mp3"),
        new Audio("../sound/sib.mp3")
    ];
    let lastIndex = -1;

    main.onmousedown = function (event) {
        // Cambiar color de fondo principal
        i = cambiarFondo(i, fondos, this);

        // Gestión de figura principal (crear figura, decidir si es cuadrado o círculo, posicionarla y ponerle color)
        let figura = document.createElement("div");
        if (Math.random() < 0.5)
            figura.setAttribute("class", "figura__cuadrado");
        else
            figura.setAttribute("class", "figura__circulo");
        figura.style.zIndex = 100;
        this.appendChild(figura);
        actualizarPos(event, figura);
        j = cambiarFondo(j, ccolores, figura);

        // Crear e inicializar partículas
        let timer = setInterval(function () {
            let xforce = Math.floor(Math.random() * 18);
            let minisLine = [document.createElement("div"), velocidad, xforce, scale, Math.floor(Math.random()*2)]; // A lo mejor estaría bien hacer una clase para esto
            minisLine[0].style.zIndex = 100;
            if (Math.random() < 0.5) { //Cambiar dirección movimiento en X
                minisLine[2] *= -1;
            }
            minis.push(minisLine);
            if (Math.random() < 0.5)
                minis[minis.length-1][0].setAttribute("class", "figura__cuadrado--mini");
            else
                minis[minis.length-1][0].setAttribute("class", "figura__circulo--mini");
            main.appendChild(minis[minis.length-1][0]);
            actualizarPos(event, minis[minis.length-1][0]);
            j = cambiarFondo(j, ccolores, minis[minis.length-1][0]);
        }, 10); // esto molaría que fuera una variable

        // Actualizar partículas
        let timer2 = setInterval(function() {
            for (let i = minis.length - 1; i >= 0; i--) {
                minis[i][0].style.top = parseInt(minis[i][0].style.top) + minis[i][1] + "px";
                minis[i][0].style.left = parseInt(minis[i][0].style.left) + minis[i][2] + "px"; // no estoy seguro que por qué esto funciona, pero lo hace
                let newScale;
                if (minis[i][4] == 0){
                    minis[i][0].style.zIndex = Number(minis[i][0].style.zIndex) + 1;
                    newScale = minis[i][3] + scaleRed;
                    minis[i][3] += scaleRed;
                } else {
                    minis[i][0].style.zIndex = Number(minis[i][0].style.zIndex) - 1;
                    newScale = minis[i][3] - (scaleRed/1000);
                    minis[i][3] -= scaleRed;
                }
                if (minis[i][3] <= 0.15) minis[i][3] = 0.15;
                console.log(newScale)
                
                minis[i][0].style.transform = `scale(${newScale})`;
                minis[i][1] += coeficiente;
        
                if (parseInt(minis[i][0].style.top) >= window.innerHeight) {
                    if (minis[i][0].parentNode == main) { // esto es mas feo que pegarle a un padre, pero funciona
                        main.removeChild(minis[i][0]);
                    }
                    minis.splice(i, 1);
                }
            }
        }, 15); // esto también molaría que fuese una variable

        // VAMOS A LA DISCO
        let timer3 = setInterval(function() {
            i = cambiarFondo(i, fondos, main);
            j = cambiarFondo(j, ccolores, figura);
        }, 1000);

        // Sonido
        playScale(Math.floor(Math.random()*(escala.length)), lastIndex, escala);

        // Figura principal sigue al ratón
        window.onmousemove = function (eve) {
            actualizarPos(eve, figura);
            event = eve;
        }

        // Eliminar figura al "desclickar"
        window.onmouseup = function () {
            main.removeChild(figura);
            clearInterval(timer);
            clearInterval(timer2);
            clearInterval(timer3);
        }
    }
}

function cambiarFondo(cont, fondos, ele) {
    if (cont < fondos.length-1)
        cont++;
    else
        cont = 0;
    ele.style.backgroundColor = fondos[cont];
    return cont;
}

function actualizarPos(event, figura) {
    let actualX = event.clientX - (figura.clientWidth/2);
    let actualY = event.clientY - (figura.clientHeight/2);
    figura.style.top = actualY+"px";
    figura.style.left = actualX+"px";
}

function playScale(index, lastIndex, escala) {
    index--;
    if (lastIndex == index) index--;
    if (index == -1) index += 2;
    lastIndex = index;
    let sound = escala[index];
    if (sound.currentTime != 0) sound.currentTime = 0;
    sound.play();
}