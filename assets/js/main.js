$(document).ready(function() {
  console.log("load");

});
$(document).ready(function() {
  if ($(window).width() > 992) {
    var heights = $(".list-subcat").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".list-subcat").height(maxHeight);
  }
});
