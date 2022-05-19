let inps = document.querySelectorAll('input')

let X_num1
let Y_num1
let X_num2
let Y_num2

let X_resul_retan
let Y_resul_retan
let X_resul_polar
let Y_resul_polar


// console.log(inps);

validar = () => {

    for (let i = 0; i < 6; i++) {

        if (inps[i].value == false) {
            if (inps[i].length == 0) {

                alert('Por favor preencha os campos');
                return false
            }
        }
    }

    document.getElementById('resultados').style.visibility = 'visible'

    X_num1 = inps[0].value;
    Y_num1 = inps[1].value;
    X_num2 = inps[3].value;
    Y_num2 = inps[4].value;
}

conv_to_retan = () => {

    if (inps[2].value == 'a' || inps[2].value == 'A'|| inps[2].value == 'p'|| inps[2].value == 'P') {

        Xpolar = inps[0].value
        Ypolar = inps[1].value

        ToRectangular(Xpolar, Ypolar)

        X_num1 = parseFloat(Xretan)
        Y_num1 = parseFloat(Yretan)
    }
    else {
        X_num1 = parseFloat(inps[0].value)
        Y_num1 = parseFloat(inps[1].value)
    } 

    if (inps[5].value == 'a' || inps[5].value == 'A'|| inps[2].value == 'p'|| inps[2].value == 'P') {

        Xpolar = inps[3].value
        Ypolar = inps[4].value

        ToRectangular(Xpolar, Ypolar)

        X_num2 = parseFloat(Xretan)
        Y_num2 = parseFloat(Yretan)
    }
    else {
        X_num2 = parseFloat(inps[3].value)
        Y_num2 = parseFloat(inps[4].value)
    } 
}

conv_to_polar = () => {

    if (inps[2].value == 'j' || inps[2].value == 'J'|| inps[2].value == 'r'|| inps[2].value == 'R') {

        Xretan = inps[0].value
        Yretan = inps[1].value

        ToPolar(Xretan, Yretan)

        X_num1 = parseFloat(Xpolar)
        Y_num1 = parseFloat(Ypolar)
    }
    else {
        X_num1 = parseFloat(inps[0].value)
        Y_num1 = parseFloat(inps[1].value)
    } 

    if (inps[5].value == 'j' || inps[5].value == 'J'|| inps[2].value == 'r'|| inps[2].value == 'R') {

        Xretan = inps[3].value
        Yretan = inps[4].value

        ToPolar(Xretan, Yretan)

        X_num2 = parseFloat(Xpolar)
        Y_num2 = parseFloat(Ypolar)
    }
    else {
        X_num2 = parseFloat(inps[3].value)
        Y_num2 = parseFloat(inps[4].value)
    } 
}

somar = () => {

    validar()

    conv_to_retan()

    X_resul_retan = X_num1 + X_num2
    Y_resul_retan = Y_num1 + Y_num2

    inps[8].value = X_resul_retan.toFixed(4)
    inps[9].value = Y_resul_retan.toFixed(4)

    ToPolar(X_resul_retan, Y_resul_retan)
    
    inps[6].value = Xpolar
    inps[7].value = Ypolar
}

subtrair = () => {

    validar()

    conv_to_retan()

    X_resul_retan = X_num1 - X_num2
    Y_resul_retan = Y_num1 - Y_num2

    inps[8].value = X_resul_retan.toFixed(4)
    inps[9].value = Y_resul_retan.toFixed(4)

    ToPolar(X_resul_retan, Y_resul_retan)
    
    inps[6].value = Xpolar
    inps[7].value = Ypolar
}

multiplicar = () => {

    validar()

    conv_to_polar()

    X_resul_polar = X_num1 * X_num2
    Y_resul_polar = Y_num1 + Y_num2

    inps[6].value = X_resul_polar
    inps[7].value = Y_resul_polar

    ToRectangular(X_resul_polar, Y_resul_polar)
    
    inps[8].value = Xretan
    inps[9].value = Yretan
}

dividir = () => {

    validar()

    conv_to_polar()

    X_resul_polar = X_num1 / X_num2
    Y_resul_polar = Y_num1 - Y_num2

    inps[6].value = X_resul_polar
    inps[7].value = Y_resul_polar

    ToRectangular(X_resul_polar, Y_resul_polar)
    
    inps[8].value = Xretan
    inps[9].value = Yretan
}