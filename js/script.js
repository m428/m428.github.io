// TODO add back zoom animation because it's fun!
// ZOOM ANIMATION
  $(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
  });
