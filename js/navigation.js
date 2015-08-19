var menu = $("nav ul");
$("#pull #nav-icon").on("click", function(e){
  e.preventDefault();
  menu.slideToggle();
  $(this).toggleClass('open');
});

$(window).resize(function(){
  var w = $(this).width();
  if( w > 768 && menu.is(":hidden")) {
    menu.removeAttr('style');
  }
  // console.log(w);
});