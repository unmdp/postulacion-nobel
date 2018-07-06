$(document).ready(function(){
$(".abre_modal").click(function() {
$("body").css("overflow","hidden");
  var modal = $(this).data("modal");
  $(modal).fadeToggle();
});

$(".close").click(function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(".modal").fadeOut();
    $("body").css("overflow","auto");
  }
});
});
// Esc Key, hide menu.
$(document).keydown(function(e) {
if(e.keyCode == 27) {
    $(".modal").fadeOut(300);

}
});