let date=new Date();
let dia=date.getDate();
let diasemana=date.getDay();
let mes=date.getMonth()+1;
let anio=date.getFullYear();
let diamostar=document.getElementById("dia");
let mesmostrar=document.getElementById("mes");
let aniomostrar=document.getElementById("anio");
let diamostrar=document.getElementById("diamostrar");
let horamostrar=document.getElementById("hora");
let input=document.getElementById("input");
let btnMas=document.getElementById("mas");
let btnOrdenar=document.getElementById("btnordenar");
let ul=document.getElementById("lista");
    
    let hora=date.getHours();
    let minutos=date.getMinutes();
    let segundos=date.getSeconds();
    
    /*=== ASIGNAR MES DE NUMERO A CADENA ===*/
    
    let mestexto;
    switch(mes){
        case 1:
           mestexto="Enero";
        break;
        case 2:
            mestexto="Febrero";
        break;
        case 3:
            mestexto="Marzo";
        break;
        case 4:
           mestexto="Abril";
        break;
        case 5:
            mestexto="Mayo";
        break;
        case 6:
            mestexto="Junio";
        break;
        case 7:
           mestexto="Julio";
        break;
        case 8:
            mestexto="Agosto";
        break;
        case 9:
           mestexto="Septiembre"; 
        break;
        case 10:
           mestexto="Octubre";
        break;
        case 11:
            mestexto="Noviembre";
        break;
        case 12:
            mestexto="Diciembre";
        break;
           }
    
    
    /*=== ASIGNAR DIA DE NUMERO A CADENA ===*/
    
    let diatexto;
    switch(diasemana){
        case 1:
           diatexto="Lunes";
        break;
        case 2:
            diatexto="Martes";
        break;
        case 3:
            diatexto="Miercoles";
        break;
        case 4:
           diatexto="Jueves";
        break;
        case 5:
            diatexto="Viernes";
        break;
        case 6:
            diatexto="Sabado";
        break;
        case 7:
           diatexto="Domingo";
        break;        
           }
    
    diamostar.textContent=`${dia}`
    mesmostrar.textContent=`${mestexto}`
    aniomostrar.textContent=`${anio}`
    diamostrar.textContent=`${diatexto}`
    
    
    
    /*===  MOSTRAR HORA  ===*/
    
    function muestraReloj() {
        var fechaHora = new Date();
        var horas = fechaHora.getHours();
        var minutos =fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();

        if(hora < 10) { hora = '0' + hora; }
        if(minutos < 10) { minutos = '0' + minutos; }
        if(segundos < 10) { segundos = '0' + segundos; }

        document.getElementById("hora").innerHTML = hora+':'+minutos+':'+segundos;
}

    window.onload = function() {
        setInterval(muestraReloj, 1000);
    }
    
    
    
/*=== DOM  ===*/


btnMas.addEventListener("click",()=>{        
    let li=document.createElement(`li`);
    if(input.value){
        li.textContent=input.value;    
        li.addEventListener("click",elegirItem);
        ul.appendChild(li);          
        input.value="";
    }
        
});

const elegirItem=(event)=>{
    event.target.classList.toggle("done");    
};

const Ordenar=()=>{
    const hecho=[];
    const noHecho=[];
    ul.childNodes.forEach(el=>{
        (el.classList==("done"))?hecho.push(el): noHecho.push(el);        
    })
    return [...noHecho, ...hecho];
}

btnOrdenar.addEventListener("click",()=>{
    Ordenar().forEach(el=>ul.appendChild(el));
});
