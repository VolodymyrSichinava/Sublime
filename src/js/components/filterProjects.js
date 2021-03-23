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
