window.onload=function(){
comenzar.addEventListener("click", function () {
    contenedor.style.display = "none";
    intro.style.display = "block";
    //enlazar pantalla3
  });

  continuar.addEventListener("click", function () {
    intro.style.display = "none";
    principal.style.display = "block";

  });

  cifrar.addEventListener("click", function () {
    principal.style.display = "none";
    cuerpo.style.display = "block";

  });

  siguiente.addEventListener("click", function () {
    cuerpo.style.display = "none";
    generador.style.display = "block";

  });

  generar.addEventListener("click", function () {
    generador.style.display = "none";
    final.style.display = "block";

  });

  inicio1.addEventListener("click", function () {
    final.style.display = "none";
    contenedor.style.display = "block";

  });

  crear1.addEventListener("click", function () {
    final.style.display = "none";
    cuerpo.style.display = "block";

  });

  descifrar.addEventListener("click", function () {
    principal.style.display = "none";
    generador2.style.display = "block";

  });

  generar2.addEventListener("click", function () {
    generador2.style.display = "none";
    final2.style.display = "block";

  });

  crear2.addEventListener("click", function () {
    final2.style.display = "none";
    generador2.style.display = "block";

  });

  inicio2.addEventListener("click", function () {
    final2.style.display = "none";
    contenedor.style.display = "block";

  });



  
  
}


