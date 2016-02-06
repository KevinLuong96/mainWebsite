//Make selected navigation bars active when they are hovered over
$(".main-nav a").hover(function(){
  $(this).addClass("active");
}, function(){
  $(this).removeClass("active");
});

/*
  Add a menu button to the header for small screens.
  When menu is pressed, a dropdown menu of navigation links appears
*/
var $dropdown = "<img class= 'dropdown' src= 'img/menu.svg' alt='menu'>";

$(".main-header").prepend($dropdown);

$(".dropdown").click((function(event) {
  if( $(this).hasClass('selected')){
    $(this).next().slideUp();
    $(this).removeClass('selected')
  } else {
    $(this).next().slideDown();
    $(this).addClass('selected');
  }
}));