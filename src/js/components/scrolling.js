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
