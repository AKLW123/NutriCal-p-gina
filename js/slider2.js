//almacenar slider en una variable
var slider2=$('#slider2');
//almacenar botones
var siguiente= $('#btn-next');
var anterior= $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider2 section:Last').insertBefore('#slider2 section:first');
//mostrar la primera imagen con un margen de -100%
slider2.css('margin-Left', '-'+100+'%');


function moverD(){
    slider2.animate({
        marginLeft:'-'+200+'%'
}   ,700, function(){
    $('#slider2 section:first').insertAfter('#slider2 section:Last');
    slider2.css('margin-Left', '-'+100+'%');
});
}

function moverI(){
    slider2.animate({
        marginLeft:0
}   ,700, function(){
    $('#slider2 section:Last').insertBefore('#slider2 section:First');
    slider2.css('margin-Left', '-'+100+'%');
   
});
}

siguiente.on('click',function() {
    moverD();
});

anterior.on('click',function() {
    moverI();
})