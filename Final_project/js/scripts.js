$(document).ready(function () {
  $(".project-container").fadeTo(500, 0.65).hover(function () {
        $(this).fadeTo(500, 1);
        $("#r2").fadeTo(500,0.5);
    }, function () {
        $(this).fadeTo(500, 0.5);
    });

    $('div img').hover(
    function() {
        $(this).animate({ 'zoom': 1.07 }, 400);
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 400);
    });

  var documentEl = $(document),
    fadeElm = $('.fade-scroll');

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();
    fadeElm.each(function() {
      var $this = $(this),
        elemOffsetTop = $this.offset().top;
        if(currScrollPos > elemOffsetTop) $this.css('opacity', 1-(currScrollPos-elemOffsetTop)/750);
    });

  });

});
