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
  generar.addEventListener("click", function () {
    generador.style.display = "none";
    final.style.display = "block";

  });

  
   //SEXTA PANTALLA

  inicio1.addEventListener("click", function () {
    final.style.display = "none";
    contenedor.style.display = "block";

    const caesarCipher = (string, n)=>{
        let result = "", code;
        let input = document.getElementById("input1");
    let valor = input.value;
        for (let i=0; i<string.length;i++){
          if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
            code = (((string.charCodeAt(i)-65)+n)%26)+65;
          }
    
          else if (string.charCodeAt(i)===32){
            code = 32;
          }
          result+=String.fromCharCode(code);
        }
        return result;
      }
    
      document.getElementById(caesarCipher("tuClave", 3)).innerHTML =  valor;
      

  });
  /*let btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
  let input = document.getElementById("input");
  let valor = input.value;
  document.getElementById("fname").innerHTML = "¡Hola " + valor + "!";
  }); */


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




