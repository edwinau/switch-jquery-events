$(document).ready(function() {

 var clicks = 1

   $('.plate').on('click', function(){
     if (clicks % 2 === 0){
       $('body').removeClass('dark').addClass('light');
       $('button').removeClass('off').addClass('on');

     } else {
       $('body').removeClass('light').addClass('dark');
       $('button').removeClass('on').addClass('off');

     }
     clicks += 1;
     console.log('clicked!');
   })

});
