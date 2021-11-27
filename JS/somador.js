let inps = document.querySelectorAll('input')

console.log(inps);

somar = () => {

    for (let i = 0; i < 6; i++) {

        if (inps[i].value == false) {

            alert('Por favor preencha os campos');
            return false
        }
    }

    document.getElementById('resultados').style.visibility = 'visible'

    let X_num1 = inps[0].value;
    let Y_num1 = inps[1].value;
    let X_num2 = inps[3].value;
    let Y_num2 = inps[4].value;

    if (inps[2].value == 'a' || inps[2].value == 'A'|| inps[2].value == 'p'|| inps[2].value == 'P') {

        Xpolar = inps[0].value
        Ypolar = inps[1].value

        ToRectangular(Xpolar, Ypolar)

        X_num1 = parseFloat(Xretan)
        Y_num1 = parseFloat(Yretan)
    }

    if (inps[5].value == 'a' || inps[5].value == 'A'|| inps[2].value == 'p'|| inps[2].value == 'P') {

        Xpolar = inps[3].value
        Ypolar = inps[4].value

        ToRectangular(Xpolar, Ypolar)

        X_num2 = parseFloat(Xretan)
        Y_num2 = parseFloat(Yretan)
    }

    let X_resul_retan = X_num1 + X_num2
    let Y_resul_retan = Y_num1 + Y_num2

    inps[8].value = X_resul_retan.toFixed(4)
    inps[9].value = Y_resul_retan.toFixed(4)

    converter = () => {
        
        ToPolar(X_resul_retan, Y_resul_retan)
        
        inps[6].value = Xpolar
        inps[7].value = Ypolar
    }
    
    converter()

}