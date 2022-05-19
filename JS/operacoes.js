let inps = []
for (let i = 0 ; i < (document.querySelectorAll('input')).length; i++) {
    inps.push((document.querySelectorAll('input'))[i])
}

let X_num1 , Y_num1 , tipo_num1 = '' , X_num2 , Y_num2 , tipo_num2 = ''

let X_resul_retan , Y_resul_retan , X_resul_polar , Y_resul_polar

let inps_checks = []

inps_checks.push(inps[2] , inps[3] , inps[6] , inps[7])

inps[2] = 0, inps[3] = 0, inps[6] = 0, inps[7] = 0


check_inps_p_1 = () => {
    if(inps_checks[0].checked) {
        inps_checks[1].checked = false;
        tipo_num1 = 'polar'
    }
    else {
        tipo_num1 = ''
    }
}

check_inps_r_1 = () => {
    if(inps_checks[1].checked) {
        inps_checks[0].checked = false;
        tipo_num1 = 'retangular'
    }
    else {
        tipo_num1 = ''
    }
}

check_inps_p_2 = () => {
    if(inps_checks[2].checked) {
        inps_checks[3].checked = false;
        tipo_num2 = 'polar'
    }
    else {
        tipo_num2 = ''
    }
}

check_inps_r_2 = () => {
    if(inps_checks[3].checked) {
        inps_checks[2].checked = false;
        tipo_num2 = 'retangular'
    }
    else {
        tipo_num2 = ''
    }
}

validar = () => {

    for (let i = 0; i < 6; i++) {

        if (inps[i].value == false || tipo_num1 === '' || tipo_num2 === '') {
            if (inps[i].length == 0 || tipo_num1 === '' || tipo_num2 === '') {
                alert('Por favor preencha os campos');
                return false
            }
        }
    }
    document.getElementById('resultados').style.visibility = 'visible'

    X_num1 = inps[0].value;
    Y_num1 = inps[1].value;
    X_num2 = inps[4].value;
    Y_num2 = inps[5].value;
}

conv_to_retan = () => {

    if ( tipo_num1 === 'polar' ) {

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

    if ( tipo_num2 === 'polar' ) {

        Xpolar = inps[3].value
        Ypolar = inps[4].value

        ToRectangular(Xpolar, Ypolar)

        X_num2 = parseFloat(Xretan)
        Y_num2 = parseFloat(Yretan)
    }
    else {
        X_num2 = parseFloat(inps[4].value)
        Y_num2 = parseFloat(inps[5].value)
    } 
}

conv_to_polar = () => {

    if ( tipo_num1 = 'retangular' ) {

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

    if ( tipo_num2 = 'retangular' ) {

        Xretan = inps[4].value
        Yretan = inps[5].value

        ToPolar(Xretan, Yretan)

        X_num2 = parseFloat(Xpolar)
        Y_num2 = parseFloat(Ypolar)
    }
    else {
        X_num2 = parseFloat(inps[4].value)
        Y_num2 = parseFloat(inps[5].value)
    } 
}

somar = () => {

    validar()

    conv_to_retan()

    X_resul_retan = X_num1 + X_num2
    Y_resul_retan = Y_num1 + Y_num2

    inps[10].value = X_resul_retan.toFixed(4)
    inps[11].value = Y_resul_retan.toFixed(4)

    ToPolar(X_resul_retan, Y_resul_retan)
    
    inps[8].value = Xpolar
    inps[9].value = Ypolar
}

subtrair = () => {

    validar()

    conv_to_retan()

    X_resul_retan = X_num1 - X_num2
    Y_resul_retan = Y_num1 - Y_num2

    inps[10].value = X_resul_retan.toFixed(4)
    inps[11].value = Y_resul_retan.toFixed(4)

    ToPolar(X_resul_retan, Y_resul_retan)
    
    inps[8].value = Xpolar
    inps[9].value = Ypolar
}

multiplicar = () => {

    validar()

    conv_to_polar()

    X_resul_polar = X_num1 * X_num2
    Y_resul_polar = Y_num1 + Y_num2

    inps[8].value = X_resul_polar
    inps[9].value = Y_resul_polar

    ToRectangular(X_resul_polar, Y_resul_polar)
    
    inps[10].value = Xretan
    inps[11].value = Yretan
}

dividir = () => {

    validar()

    conv_to_polar()

    X_resul_polar = X_num1 / X_num2
    Y_resul_polar = Y_num1 - Y_num2

    inps[8].value = X_resul_polar
    inps[9].value = Y_resul_polar

    ToRectangular(X_resul_polar, Y_resul_polar)
    
    inps[10].value = Xretan
    inps[11].value = Yretan
}