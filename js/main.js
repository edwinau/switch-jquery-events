$(document).ready(function() {

 var clicks = 1

   $('.plate').on('click', function(){
     if (clicks % 2 === 0){
       $('body').removeClass('dark').addClass('light');

     } else {
       $('body').removeClass('light').addClass('dark');

     }
     clicks += 1;
     console.log('clicked!');
   })

});
