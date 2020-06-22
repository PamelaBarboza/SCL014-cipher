import cipher from './cipher.js';

//console.log(cipher);


   //PRIMERA PANTALLA
    window.onload=function(){
    let comenzar = document.getElementById("comenzar");
    comenzar.addEventListener("click", function () {
    contenedor.style.display = "none";
    let intro = document.getElementById("intro");
    intro.style.display = "block";
 
  });
   //SEGUNDA PANTALLA
   let continuar = document.getElementById("continuar");
   let principal = document.getElementById("principal");
    continuar.addEventListener("click", function () {
    let intro = document.getElementById("intro");
    intro.style.display = "none";
    principal.style.display = "block";

  });

    //TERCERA PANTALLA (cifrar)
    let cifrar = document.getElementById("cifrar");
    cifrar.addEventListener("click", function(){
    principal.style.display ="none";
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.style.display="block";

  });

    //TERCERA PANTALLA (descifrar- septima pantalla HTML)
    let descifrar = document.getElementById("descifrar");
    let decypher = document.getElementById("decypher");
    descifrar.addEventListener("click", function(){
    principal.style.display ="none";
    decypher.style.display ="block";
  });

   //CUARTA PANTALLA (cifrar)
   /* siguiente.addEventListener("click", function () {
    cuerpo.style.display = "none";
    generador.style.display = "block";

  });*/

   //QUINTA PANTALLA (cifrar)
   let siguiente = document.getElementById("siguiente");
    siguiente.addEventListener("click", function () {
      let cuerpo = document.getElementById("cuerpo");
    cuerpo.style.display = "none";
    let generador = document.getElementById("generador");
    generador.style.display = "block";

  });
  
      let generar = document.getElementById('generar'); //tomo al elemento por el Id generar, y lo guardo en una variable 
      generar.addEventListener("click", function () { //le asigno una funcion click y cuando el evento se ejecute en generar ocurre: 
      let input1 = document.getElementById("input1");//tomo al elemento por el Id input1, y lo guardo en una variable 
      let valor = input1.value; //luego almanceno en valor el value de input1
      let menuOpcion = document.getElementById("menuOpcion");//tomo al elemento por el Id menuOpcion, y lo guardo en una variable 
      let valor2 = parseInt(menuOpcion.value);//luego almanceno en valor el value de menuOpcion
       /*
      const cipher = (string, n)=>{ //se declara una constante de tipo string que tiene dos parametros
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
             
*/
    document.getElementById("tuClave").innerHTML = "TU NUEVA CLAVE ES: " +  cipher.encode(valor, valor2); //Toma el elemento id tuClave e imprime en pantalla.
  });
  
   //QUINTA PANTALLA (opciones crear e inicio)
   let crear1 = document.getElementById("crear1");
    crear1.addEventListener("click", function () {
    let generador = document.getElementById("crear1");
    generador.style.display = "none";
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.style.display = "block";
    let input1 = document.getElementById("input1");
    input1.value = " ";
    let menuOpcion = document.getElementById ("menuOpcion");
    menuOpcion.value = " ";

  });

  let inicio1 = document.getElementById("inicio1");
    inicio1.addEventListener("click", function () {
    let generador = document.getElementById("generador");
    generador.style.display = "none";
    contenedor.style.display = "block";

  });   

    //SEXTA PANTALLA (ADDEVENTLISTENER)
    let inicio2 = document.getElementById("inicio2");
    let contenedor = document.getElementById("contenedor");  
    inicio2.addEventListener("click", function () {
    decypher.style.display = "none";
    contenedor.style.display = "block";
  
  });

    //variables de función decode de 
    let generar2 = document.getElementById('generar2'); 
    generar2.addEventListener("click", function () {  
    let input2 = document.getElementById("input2");
    let valor3 = input2.value;
    let menuOpcion2 = document.getElementById("menuOpcion2");
    let valor4 = parseInt(menuOpcion2.value);
  /*
    const decipher = (string, n)=>{
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
*/
  document.getElementById("tuClave2").innerHTML = "TU CLAVE DESCRIFRADA ES: " +  cipher.decode (valor3, valor4);
  


  });
  
}
  
  
 
