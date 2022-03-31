//Funciones
//Funcion 1
function saludar(nombre){
    alert("Hola"+nombre+"!");
}
saludar("Carlos");

//Funcion 2
function saludar2(tipo,nombre){
    var tipo=tipo || "Hola";
    var nombre=nombre || "Carlos";
    alert(tipo+"," +nombre+"!");
}
saludar();