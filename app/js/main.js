$(document).ready(function() {
  $('.itemBlogs').not('.latest').hide();
  $('.list-blogs').filter('.active').css('color', '#ffc600');

  $('.list-blogs').click(function() {
    const value = $(this).attr('data-filter');
      $('.itemBlogs').not('.' + value).hide("slow");
      $('.itemBlogs').filter('.' + value).show("slow");
  });

  $('.list-blogs').click(function() {
    $(this).addClass('active').css('color', '#ffc600').siblings().removeClass('active').css('color', '#000');
    
  });
})

$(document).ready(function() {
  $('.list').click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.itemBox').show("slow");
    } else {
      $('.itemBox').not('.' + value).hide("slow");
      $('.itemBox').filter('.' + value).show("slow");
    }
  });

  $('.list').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
})

$('a.anchor').on('click', function (event) {
  var $anchor = $(this)
  $('html, boby')
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr('href')).offset().top,
      },
      {
        duration: 2000,
        specialEasing: {
          width: 'linear',
          height: 'easeInOutCubic',
        },
      }
    )
  event.preventDefault()
})


//# sourceMappingURL=main.js.map
