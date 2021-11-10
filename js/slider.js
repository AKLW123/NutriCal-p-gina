//almacenar slider en una variable
var slider=$('#slider');
//almacenar botones
var siguiente= $('#btn-next');
var anterior= $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:Last').insertBefore('#slider section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-Left', '-'+100+'%');


function moverD(){
    slider.animate({
        marginLeft:'-'+200+'%'
}   ,700, function(){
    $('#slider section:first').insertAfter('#slider section:Last');
    slider.css('margin-Left', '-'+100+'%');
});
}

function moverI(){
    slider.animate({
        marginLeft:0
}   ,700, function(){
    $('#slider section:Last').insertBefore('#slider section:First');
    slider.css('margin-Left', '-'+100+'%');
   
});
}

siguiente.on('click',function() {
    moverD();
});

anterior.on('click',function() {
    moverI();
})

