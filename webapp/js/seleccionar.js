
function cargar(){
     interruptor = false;
     $('.textLayer').children('div').each(function(index){
        if($(this).text() == "Trace optimization for dynamic languages."){
            console.log("Entrada", index);
            interruptor = true;
        }
        if(interruptor){
            $(this).css('background', "#ffff00");
            console.log("interruptor", index);
        }
        if($(this).text() == "traces."){
            console.log("Salida", index);
            interruptor = false;
        }
       // console.log(index +" "+ $(this).text());
     });
}

// function select(){
//     //console.log($("#viewer").children("[data-page-number = '2']").text());
//    $('.textLayer').children('div').click(function(){
//         console.log($(this).text());
//         var comentario = prompt("Introduzca su comentario : ");
//         if(comentario != null){
//             numComentario++;
//             $(this).css('background', "#ffff00");
//              $(this).attr('comentario', numComentario);
//         }else{
//             $(this).css('background', "#000");
//         }
//    });
// }
//  $(document).ready(function(){
//      console.log("Inicio");
//      interruptor = false;
//      $('.textLayer').children('div').each(function(index){
//         if(index == 230){
//             interruptor = true;
//         }
//         if(interruptor){
//             $(this).css('background', "#ffff00");
//         }
//         if(index == 238){
//             interruptor = false;
//         }
//      });
// });

var texto = document.getSelection();
function botonAgregar(){
    console.log(texto.anchorNode.data);
    console.log(texto.extentNode.data);
    console.log(texto);
    interruptor = false;
    var text = "";
    $('.textLayer').children('div').each(function(index){
        if($(this).text() == texto.anchorNode.data){
            $('#texto-entrada').html($(this).text());
            interruptor = true;
        }
        if(interruptor){
            text = text + $(this).text();
            $(this).css('background', "#ffff00");
        }

        if($(this).text() == texto.extentNode.data){
            interruptor = false;
            $('#texto-salida').html($(this).text());
            $('#texto-completo').html(text);
        }
     });
    
}

function Prueba(){
    console.log("Hola desde Seleccionar");
}
