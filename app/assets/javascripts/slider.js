// Facebook Javascript SDK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=252385738211526";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook comments
$(document).ready(function(){
  $("div.flip").click(function(){
    $("div.panel").slideToggle("slow",function(){
      //$("<div class='fb-comments' data-href='http://www.plupets.com' data-num-posts='10' data-width='470'></div>").appendTo("div.panel");
    });
  });
});

//Slider
$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
      $('.slides li img ').click(function(event) {
        event.preventDefault();
        slider.flexAnimate(slider.getTarget("next"));
      });
    }
  });
});
