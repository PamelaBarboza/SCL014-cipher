window.onload=function(){
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
    let input = document.getElementById("input");
    let valor = input.value;
    document.getElementById("fname").innerHTML = "¡Hola " + valor + "!";
    });
    }