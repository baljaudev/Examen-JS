let numResCorrectas = 0
let numResIncorrectas = 0
let numResBlanco = 0

function resultados() { 

    let respuesta1 = "html"
    let respuesta2 = "while"
    let respuesta3 = "verdadero"
    let respuesta4 = "interpretado"
    let respuesta5 = "si"

    let pregunta1 = returnChecked("pregunta1")
    let pregunta2 = returnChecked("pregunta2")
    let pregunta3 = returnChecked("pregunta3")
    let pregunta4 = returnChecked("pregunta4")
    let pregunta5 = returnChecked("pregunta5")

    comprobar(pregunta1,respuesta1);
    comprobar(pregunta2,respuesta2);
    comprobar(pregunta3,respuesta3);
    comprobar(pregunta4,respuesta4);
    comprobar(pregunta5,respuesta5);

    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value

    if(nombre == "") {
        alert("El nombre no puede estar vacío")
    } else if(apellidos == "") {
        alert("Los apellidos no pueden estar vacíos")
    } else {
        alert("Nombre: " + nombre + 
        "\nApellidos: " + apellidos + 
        "\nNúmero de respuestas correctas: " + numResCorrectas +
        "\nNúmero de respuestas incorrectas: " + numResIncorrectas +
        "\nNúmero de respuestas en blanco: " + numResBlanco)
    }
}


function returnChecked(pregunta) {

    const radioButton = document.getElementsByName(pregunta);
    for(let i=0;i<radioButton.length;i++){
        if(radioButton[i].checked){
            console.log(radioButton[i].value);
            return radioButton[i].value; //el return corta la función y retorna el checkeado
        }
    }
    numResBlanco++; //solo ejecuta esta línea si no ha hecho ningún return y será porque no hay nada checked
}


function comprobar(respuesta, correcta) {
    if(respuesta === correcta){
        numResCorrectas++;
    } else {
        numResIncorrectas++;
    }
}