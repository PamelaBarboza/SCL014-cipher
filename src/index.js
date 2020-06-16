   //PRIMERA PANTALLA
window.onload=function(){
comenzar.addEventListener("click", function () {
    contenedor.style.display = "none";
    intro.style.display = "block";
 
  });
   //SEGUNDA PANTALLA
  continuar.addEventListener("click", function () {
    intro.style.display = "none";
    principal.style.display = "block";

  });
   //TERCERA PANTALLA
  cifrar.addEventListener("click", function () {
    principal.style.display = "none";
    cuerpo.style.display = "block";

  });
   //CUARTA PANTALLA
  siguiente.addEventListener("click", function () {
    cuerpo.style.display = "none";
    generador.style.display = "block";

  });
   //QUINTA PANTALLA
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

    /*generador.style.display = "none";
    final.style.display = "block";*/

    });

   
 
  
   //SEXTA PANTALLA
  inicio1.addEventListener("click", function () {
    final.style.display = "none";
    contenedor.style.display = "block";

    

    /*window.onload=function(){
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
    let input = document.getElementById("input");
    let valor = input.value;
    document.getElementById("fname").innerHTML = "¡Hola " + valor + "!";
    });
    } 
*/
});

    const caesarCipher = (string, n)=>{    
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
   /*console.log(caesarCipher(input1.value, 3));*/
   
  

 

   //SEPTIMA PANTALLA
  crear1.addEventListener("click", function () {
    final.style.display = "none";
    cuerpo.style.display = "block";

  });
   //CUARTA 2 PANTALLA
  descifrar.addEventListener("click", function () {
    principal.style.display = "none";
    generador2.style.display = "block";

  });
   //QUINTA 2 PANTALLA
  generar2.addEventListener("click", function () {
    generador2.style.display = "none";
    final2.style.display = "block";

  });
   //SEXTA 6 PANTALLA
  crear2.addEventListener("click", function () {
    final2.style.display = "none";
    generador2.style.display = "block";

  });
   //SEPTIMA 2 PANTALLA
  inicio2.addEventListener("click", function () {
    final2.style.display = "none";
    contenedor.style.display = "block";

  }); 
  
}




