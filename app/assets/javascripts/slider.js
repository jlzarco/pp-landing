

// Facebook Javascript SDK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=252385738211526";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



//Slider
$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
      $('.slides li img ').click(function(event) {
        event.preventDefault();
        slider.flexAnimate(slider.getTarget("next"));
		if(togle){
	    $("div.panel").slideToggle("slow",function(){
		});
	}
		togle=false;

      });
    }
  });
});
