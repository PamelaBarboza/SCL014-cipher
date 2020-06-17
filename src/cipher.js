let generar = document.getElementById('generar'); //tomo al elemento por el Id generar, y lo guardo en una variable 
generar.addEventListener("click", function () { //le asigno una funcion click y cuando el evento se ejecute en generar ocurre: 
let input1 = document.getElementById("input1");//tomo al elemento por el Id input1, y lo guardo en una variable 
let valor = input1.value; //luego almanceno en valor el value de input1
let menuOpcion = document.getElementById("menuOpcion");//tomo al elemento por el Id menuOpcion, y lo guardo en una variable 
let valor2 = parseInt(menuOpcion.value);//luego almanceno en valor el value de menuOpcion

  const caesarCipher = (string, n)=>{ //se declara una constante de tipo string que tiene dos parametros
      let result = "", code;
      for (let i=0; i<string.length;i++){ //el ciclo for analiza letra por letra va entrando en cada if segun corresponda
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          code = (((string.charCodeAt(i)-65)+n)%26)+65;
        }
        else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          code = (((string.charCodeAt(i)-97)+n)%26)+97;
        }
        else if (string.charCodeAt(i)===32){ //Analiza si el numero es considerado como 32 lo Toma como un espacio
          code = 32;
        }
        result+=String.fromCharCode(code);
      }
      return result;
    }

  document.getElementById("tuClave").innerHTML = "TU NUEVA CLAVE ES: " +  caesarCipher(valor, valor2); //Toma el elemento id tuClave e imprime en pantalla.
  
}); 

export default caesarCipher;


let generar2 = document.getElementById('generar2'); 
generar2.addEventListener("click", function () {  
let input2 = document.getElementById("input2");
let valor3 = input2.value;
let menuOpcion2 = document.getElementById("menuOpcion2");
let valor4 = parseInt(menuOpcion2.value);

const caesarCipher2 = (string, n)=>{
  let result = "", code;
      for (let i=0; i<string.length;i++){ 
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          code = (((string.charCodeAt(i)-65)+n)%26)+65;
        }
        else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          code = (((string.charCodeAt(i)-97)+n)%26)+97;
        }
        else if (string.charCodeAt(i)===32){ 
          code = 32;
        }
        result+=String.fromCharCode(code);
      }
      return result;
}

document.getElementById("tuClave2").innerHTML = "TU CLAVE DESCRIFRADA ES: " +  caesarCipher2 (valor3, valor4); //Toma el elemento id tuClave e imprime en pantalla.
}); 