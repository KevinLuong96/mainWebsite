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

// Hide project text by default 
$(document).ready(function(){
  $(".projects .text").css("display", "none");
});

// When picture or thermovest text is clicked, show text
function showProject(){
  $(this).next().slideToggle();
  // if($(this).next().css("display") === "none"){
  //   $(this).next().slideDown();
  // } else{
  //   $(this).next().slideUp();
  // }
}

$(".projects img").click(showProject);
//Show text of thermovest when it is clicked
$(".projects .thermovest h2").click(showProject);

//Apply the shown styling to images and the thermovest text when hovered over
function addShown(){
  $(this).addClass("shown");
}

function removeShown(){
  if($(this).next().css("display") === "none"){
    $(this).removeClass("shown");
  }
}

$(".projects img").hover(addShown,removeShown);
//Also apply to thermovest text
$(".thermovest h2").hover(addShown,removeShown)


//Hide interests text by default, when icon is clicked show text

//when the document loads, hide text. Allows Javascript to be unobtrusive 
$(document).ready(function(){
  $(".gallery .text").hide();
});

//when icons are clicked, show text
$(".icon").click(function(){
  $(this).next().slideToggle();
});


