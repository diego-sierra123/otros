function calcularMedia() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (num1 === "" || num2 === "" || num3 === "") {
        document.getElementById("res").innerHTML = "<div style='padding:4%; border-radius: 8px; border: 4px solid black;'><h5 style='color: white;'><b>Por favor, complete todos los campos o ingrese todos los números en sus respectivos campos de manera correcta (Ingresar números enteros positivos).</b></h5></div>";
    } else if (num1 < 1 || num2 < 1 || num3 < 1 || !Number.isInteger(parseFloat(num1)) || !Number.isInteger(parseFloat(num2)) || !Number.isInteger(parseFloat(num3))) {
        document.getElementById("res").innerHTML = "<div style='padding:4%; border-radius: 8px; border: 4px solid black;'><h5 style='color: white;'><b>Por favor, ingrese números enteros positivos en todos los campos.</b></h5></div>";
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);

        var media = (num1 + num2 + num3) / 3;

        if (media % 1 === 0) { 
            media = media.toFixed(0); 
        } else {
            media = media.toFixed(2); 
        }

        document.getElementById("res").innerHTML = "<div style='padding:4%; border-radius: 12px; border: 4px solid black;'><h5 style='color: white;'><b>El promedio de los tres números ingresados es: <span style='color: red;'>" + media + "</span></b></h5></div>";
    }
}

function borrar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("res").innerHTML = "";
}
