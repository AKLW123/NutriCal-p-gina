//almacenar slider en una variable
var slider1=$('#slider1');
//almacenar botones
var siguiente= $('#btn-next');
var anterior= $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider1 section:Last').insertBefore('#slider1 section:first');
//mostrar la primera imagen con un margen de -100%
slider1.css('margin-Left', '-'+100+'%');


function moverD(){
    slider1.animate({
        marginLeft:'-'+200+'%'
}   ,700, function(){
    $('#slider1 section:first').insertAfter('#slider1 section:Last');
    slider1.css('margin-Left', '-'+100+'%');
});
}

function moverI(){
    slider1.animate({
        marginLeft:0
}   ,700, function(){
    $('#slider1 section:Last').insertBefore('#slider1 section:First');
    slider1.css('margin-Left', '-'+100+'%');
   
});
}

siguiente.on('click',function() {
    moverD();
});

anterior.on('click',function() {
    moverI();
})