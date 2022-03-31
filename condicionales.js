//Condicionales
//Condicional if
    var sum= prompt("Hola usuario ¿Cuanto es 1+1?");
    if(sum ===2){
    alert("La suma es correcta");
    }else{
    alert("La suma es incorrecta");
};

//Condicional switch case
    var nombreUsuario= prompt("Hola usuario ¿como te llamas?");
    switch(nombreUsuario){

        case"Pepe":
        alert("Hola pepe yo te conozco");
        break;
   
        case"Lucia":
        alert("Hola Lucia yo te conozco");
        break;
   
        default:
        alert("Eres nuevo...Bienvenido");
    }