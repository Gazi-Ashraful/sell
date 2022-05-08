/*---back to top with smooth scroll---*/
var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {btn.addClass('show');} 

else { btn.removeClass('show');}});
btn.on('click', function(e) {e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');});
/*---back to top with smooth scroll---*/