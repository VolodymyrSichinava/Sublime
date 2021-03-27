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
