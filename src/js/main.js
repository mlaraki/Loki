
$(document).ready(function ($) {
	"use strict";
	
	/* ------------------------------------------------
		Isotope For Portfolio Items
	-------------------------------------------------- */

	if ( $( ".grid-layout" ).length ) {
	  var $container = $('.grid-layout').imagesLoaded( function() {
		 var isotope = function () {
			var winWidth2 = $(window).width();
			if (winWidth2 > 767) {
			$container.isotope({
					resizable: true,
					itemSelector: '.masonry_item' 
			});
			};
		 };
		 isotope();
	  });
      

      $('.grid-filter a').on("click", function(){
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                     duration: 750,
                     easing: 'linear',
                     queue: false
                  },
                  
                  
                  // slow transitions
                  transitionDuration: '0.8s',
                  hiddenStyle: {
                     opacity: 0
                   },
                   visibleStyle: {
                     opacity: 1
                   }
              });
        return false;
      });
   
      var $optionSets = $('.grid-filter'),
             $optionLinks = $optionSets.find('a');
             $optionLinks.on("click", function(){
                var $this = $(this);
                // don't proceed if already selected
                if ( $this.hasClass('selected') ) {
                    return false;
                }
         var $optionSet = $this.parents('.grid-filter');
         $optionSet.find('.selected').removeClass('selected');
         $this.addClass('selected'); 
      });
             
	}
	
	/* ------------------------------------------------
		Boxlayout
	-------------------------------------------------- */
	
	Boxlayout.init();
	
	/* ------------------------------------------------
		Float Bar
	-------------------------------------------------- */
	
	if($(".float-bar-triggler").length) {
		  
	   $(".float-bar-triggler, .go_to_top").on('click', function(e){

			if(Modernizr.touch){

				if($(this).parent('.float-bar').hasClass('float-hover')){

					$(this).parent('.float-bar').removeClass('float-hover');
					$('.andazi_back').animate({scrollTop:0},500);

				}else{

					$(this).parent('.float-bar').addClass('float-hover');

				}

			}else{
				$('.andazi_back').animate({scrollTop:0},500);
			}

			return true;
			
	   });

	};
	
	/* ------------------------------------------------
		Form Validation
	-------------------------------------------------- */
	
	$(".contact_form").validationEngine();
	
	/* ------------------------------------------------
		Comment Form Positioning
	-------------------------------------------------- */
	
	var winWidth = $(window).width();
	
	if (winWidth > 992) {
		var offset = 350;
		var duration = 500;
		$('div.andazi_panel_items > div > div').scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.comment_form_wrapper').addClass('fixed_position');
				$('.comment_form').addClass('abs_position');
			} else {
				$('.comment_form_wrapper').removeClass('fixed_position');
				$('.comment_form').removeClass('abs_position');
			}
		});
	};
	
	/* ------------------------------------------------
		Info Box Flipping
	-------------------------------------------------- */
	
	$(".info-box.flip").on({
        mouseenter: function () {
            $(this).addClass('flipped');
        },
        mouseleave: function () {
            $(this).removeClass('flipped');
        }
    });
	
	
	/* ------------------------------------------------
		Magnific Popup
	-------------------------------------------------- */
	
	var groups = {};
	$('.galleryItem').each(function() {
	  var id = parseInt($(this).attr('data-group'), 10);
	  
	  if(!groups[id]) {
		groups[id] = [];
	  } 
	  
	  groups[id].push( this );
	});


	$.each(groups, function() {
	  
	  $(this).magnificPopup({
		  type: 'image',
		  closeOnContentClick: true,
		  closeBtnInside: false,
		  gallery: { enabled:true },
		  zoom: {
			  enabled:true,
			  duration:300,
			  opener:function(element){return element.find("img")}
			}
		})
	  
	});
	
});

(function(window, mapster) {

	// Map Options
	var options = mapster.MAP_OPTIONS,
	
	element = document.getElementById('map-canvas'),
	
	// Map
	map = Mapster.create(element, options);
	map.zoom(18);
	
	map.addMarker({
		lat: 37.791350,
		lng: -122.435883,
		draggable: true,
		icon: 'images/map-icon.png'
		
	});
	
}(window, window.Mapster || (window.Mapster = {})));
