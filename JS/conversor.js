

let Xpolar;
let Ypolar;

let Xretan;
let Yretan;

function ToRectangular(Xpolar, Ypolar) {

        let r = parseFloat(Xpolar);
        let ang = parseFloat(Ypolar) * Math.PI / 180;
        let x;
        let y;
        let Precision = 5;
        y = r * Math.sin(ang);
        x = r * Math.cos(ang);
        Xretan = x.toFixed(Precision);
        Yretan = y.toFixed(Precision);
    
    //    console.log(Xretan, Yretan);
}

function ToPolar(Xretan, Yretan) {

        let x = parseFloat(Xretan);
        let y = parseFloat(Yretan);
        let ang;
        let r;
        let Precision = 5;
        ang = Math.atan(y / x);
        r = Math.sqrt(x * x + y * y);
        ang2 = ang * 180 / Math.PI;
        if (x < 0) {
            ang2 = 180 + ang2
        }
        Xpolar = r.toPrecision(Precision);
        Ypolar = ang2.toPrecision(Precision);

    //    console.log(Xpolar, Ypolar);
}