/**
 * boxlayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var Boxlayout = (function() {

	var $el = $( '#body_content' ),
		$sections = $el.children( 'section' ),
		// works section
		$sectionPost = $( '.andazi_multioption' ),
		// work items
		$PostItems = $( '.andazi_multioption_items > li a.super_overlay' ),
		// work panels
		$postPanelsContainer = $( '#andazi_panel_items_view' ),
		$postPanels = $postPanelsContainer.children( 'div' ),
		totalpostPanels = $postPanels.length,
		// navigating the work panels
		$prevPostItem = $postPanelsContainer.find( 'nav > span.andazi-prev' ),
		$nextPostItem = $postPanelsContainer.find( 'nav > span.andazi-next' ),
		// if currently navigating the work items
		isAnimating = false,
		// close work panel trigger
		$closePostItem = $postPanelsContainer.find( 'nav > span.andazi-close' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {
		
		$sections.each( function() {
			
			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'andazi-expand andazi-expand-top' );
					$el.addClass( 'andazi-expand-item' );	
				}

			} ).find( 'span.andazi-close' ).on( 'click', function() {
				
				// close the expanded section and scale up the others
				$section.data( 'open', false ).removeClass( 'andazi-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'andazi-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'andazi-expand-top' );
				}

				$el.removeClass( 'andazi-expand-item' );
				
				return false;

			} );

		} );

		// clicking on a work item: the current section scales down and the respective work panel slides up
		$PostItems.on( 'click', function( event ) {

			// scale down main section
			$sectionPost.addClass( 'andazi-scale-down' );

			// show panel for this work item
			$postPanelsContainer.addClass( 'andazi-panel-items-show' );

			var $panel = $postPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentPostPanel = $panel.index();
			$panel.addClass( 'andazi-show-post' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		$prevPostItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $postPanels.eq( currentPostPanel );
			currentPostPanel = currentPostPanel < totalpostPanels + 1 ? currentPostPanel - 1 : 0;
			var $prevPanel = $postPanels.eq( currentPostPanel );

			$currentPanel.removeClass( 'andazi-show-post' ).addClass( 'andazi-hide-current-post' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-post' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-post' );
				isAnimating = false;
			}
			
			$prevPanel.addClass( 'andazi-show-post' );

			return false;

		} );
		
		$nextPostItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $postPanels.eq( currentPostPanel );
			currentPostPanel = currentPostPanel < totalpostPanels - 1 ? currentPostPanel + 1 : 0;
			var $nextPanel = $postPanels.eq( currentPostPanel );

			$currentPanel.removeClass( 'andazi-show-post' ).addClass( 'andazi-hide-current-post' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-post' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-post' );
				isAnimating = false;
			}
			
			$nextPanel.addClass( 'andazi-show-post' );

			return false;

		} );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closePostItem.on( 'click', function( event ) {

			// scale up main section
			$sectionPost.removeClass( 'andazi-scale-down' );
			$postPanelsContainer.removeClass( 'andazi-panel-items-show' );
			$postPanels.eq( currentPostPanel ).removeClass( 'andazi-show-post' );
			
			return false;

		} );

	}

	return { init : init };

})();



var Boxlayout2 = (function() {

	var $el = $( '#body_content' ),
		$sections = $el.children( 'section' ),
		// works section
		$sectionWork = $( '.andazi_multioption2' ),
		// work items
		$workItems = $( '.andazi_multioption_items2 > li a.super_overlay2' ),
		// work panels
		$workPanelsContainer = $( '#andazi_panel_items_view2' ),
		$workPanels = $workPanelsContainer.children( 'div' ),
		totalWorkPanels = $workPanels.length,
		// navigating the work panels
		$prevWorkItem = $workPanelsContainer.find( 'nav > span.andazi-prev.layout2' ),
		$nextWorkItem = $workPanelsContainer.find( 'nav > span.andazi-next.layout2' ),
		// if currently navigating the work items
		isAnimating = false,
		// close work panel trigger
		$closeWorkItem = $workPanelsContainer.find( 'nav > span.andazi-close' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {
		
		$sections.each( function() {
			
			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'andazi-expand andazi-expand-top' );
					$el.addClass( 'andazi-expand-item' );	
				}

			} ).find( 'span.andazi-close' ).on( 'click', function() {
				
				// close the expanded section and scale up the others
				$section.data( 'open', false ).removeClass( 'andazi-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'andazi-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'andazi-expand-top' );
				}

				$el.removeClass( 'andazi-expand-item' );
				
				return false;

			} );

		} );

		// clicking on a work item: the current section scales down and the respective work panel slides up
		$workItems.on( 'click', function( event ) {

			// scale down main section
			$sectionWork.addClass( 'andazi-scale-down' );

			// show panel for this work item
			$workPanelsContainer.addClass( 'andazi-panel-items-show' );

			var $panel = $workPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'andazi-show-work' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		$prevWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels + 1 ? currentWorkPanel - 1 : 0;
			var $prevPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$prevPanel.addClass( 'andazi-show-work' );

			return false;

		} );
		
		$nextWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels - 1 ? currentWorkPanel + 1 : 0;
			var $nextPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$nextPanel.addClass( 'andazi-show-work' );

			return false;

		} );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closeWorkItem.on( 'click', function( event ) {

			// scale up main section
			$sectionWork.removeClass( 'andazi-scale-down' );
			$workPanelsContainer.removeClass( 'andazi-panel-items-show' );
			$workPanels.eq( currentWorkPanel ).removeClass( 'andazi-show-work' );
			
			return false;

		} );

	}

	return { init : init };

})();


var Boxlayout3 = (function() {

	var $el = $( '#body_content' ),
		$sections = $el.children( 'section' ),
		// works section
		$sectionWork = $( '.andazi_multioption3' ),
		// work items
		$workItems = $( '.super_overlay3' ),
		// work panels
		$workPanelsContainer = $( '#andazi_panel_items_view3' ),
		$workPanels = $workPanelsContainer.children( 'div' ),
		totalWorkPanels = $workPanels.length,
		// navigating the work panels
		$prevWorkItem = $workPanelsContainer.find( 'nav > span.andazi-prev.layout3' ),
		$nextWorkItem = $workPanelsContainer.find( 'nav > span.andazi-next.layout3' ),
		// if currently navigating the work items
		isAnimating = false,
		// close work panel trigger
		$closeWorkItem = $workPanelsContainer.find( 'nav > span.andazi-close' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {
		
		$sections.each( function() {
			
			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'andazi-expand andazi-expand-top' );
					$el.addClass( 'andazi-expand-item' );	
				}

			} ).find( 'span.andazi-close' ).on( 'click', function() {
				
				// close the expanded section and scale up the others
				$section.data( 'open', false ).removeClass( 'andazi-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'andazi-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'andazi-expand-top' );
				}

				$el.removeClass( 'andazi-expand-item' );
				
				return false;

			} );

		} );

		// clicking on a work item: the current section scales down and the respective work panel slides up
		$workItems.on( 'click', function( event ) {

			// scale down main section
			$sectionWork.addClass( 'andazi-scale-down' );

			// show panel for this work item
			$workPanelsContainer.addClass( 'andazi-panel-items-show' );

			var $panel = $workPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'andazi-show-work' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		$prevWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels + 1 ? currentWorkPanel - 1 : 0;
			var $prevPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$prevPanel.addClass( 'andazi-show-work' );

			return false;

		} );
		
		$nextWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels - 1 ? currentWorkPanel + 1 : 0;
			var $nextPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$nextPanel.addClass( 'andazi-show-work' );

			return false;

		} );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closeWorkItem.on( 'click', function( event ) {

			// scale up main section
			$sectionWork.removeClass( 'andazi-scale-down' );
			$workPanelsContainer.removeClass( 'andazi-panel-items-show' );
			$workPanels.eq( currentWorkPanel ).removeClass( 'andazi-show-work' );
			
			return false;

		} );

	}

	return { init : init };

})();


var Boxlayout4 = (function() {

	var $el = $( '#body_content' ),
		$sections = $el.children( 'section' ),
		// works section
		$sectionWork = $( '.andazi_multioption2' ),
		// work items
		$workItems = $( '.andazi_multioption_items2 > li a.super_overlay2' ),
		// work panels
		$workPanelsContainer = $( '#andazi_panel_items_view2' ),
		$workPanels = $workPanelsContainer.children( 'div' ),
		totalWorkPanels = $workPanels.length,
		// navigating the work panels
		$prevWorkItem = $workPanelsContainer.find( 'nav > span.andazi-prev.layout2' ),
		$nextWorkItem = $workPanelsContainer.find( 'nav > span.andazi-next.layout2' ),
		// if currently navigating the work items
		isAnimating = false,
		// close work panel trigger
		$closeWorkItem = $workPanelsContainer.find( 'nav > span.andazi-close' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {
		
		$sections.each( function() {
			
			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'andazi-expand andazi-expand-top' );
					$el.addClass( 'andazi-expand-item' );	
				}

			} ).find( 'span.andazi-close' ).on( 'click', function() {
				
				// close the expanded section and scale up the others
				$section.data( 'open', false ).removeClass( 'andazi-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'andazi-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'andazi-expand-top' );
				}

				$el.removeClass( 'andazi-expand-item' );
				
				return false;

			} );

		} );

		// clicking on a work item: the current section scales down and the respective work panel slides up
		$workItems.on( 'click', function( event ) {

			// scale down main section
			$sectionWork.addClass( 'andazi-scale-down' );

			// show panel for this work item
			$workPanelsContainer.addClass( 'andazi-panel-items-show' );

			var $panel = $workPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'andazi-show-work' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		$prevWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels + 1 ? currentWorkPanel - 1 : 0;
			var $prevPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$prevPanel.addClass( 'andazi-show-work' );

			return false;

		} );
		
		$nextWorkItem.on( 'click', function( event ) {
			
			if( isAnimating ) {
				return false;
			}
			isAnimating = true;

			var $currentPanel = $workPanels.eq( currentWorkPanel );
			currentWorkPanel = currentWorkPanel < totalWorkPanels - 1 ? currentWorkPanel + 1 : 0;
			var $nextPanel = $workPanels.eq( currentWorkPanel );

			$currentPanel.removeClass( 'andazi-show-work' ).addClass( 'andazi-hide-current-work' ).on( transEndEventName, function( event ) {
				if( !$( event.target ).is( 'div' ) ) return false;
				$( this ).off( transEndEventName ).removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			} );

			if( !supportTransitions ) {
				$currentPanel.removeClass( 'andazi-hide-current-work' );
				isAnimating = false;
			}
			
			$nextPanel.addClass( 'andazi-show-work' );

			return false;

		} );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closeWorkItem.on( 'click', function( event ) {

			// scale up main section
			$sectionWork.removeClass( 'andazi-scale-down' );
			$workPanelsContainer.removeClass( 'andazi-panel-items-show' );
			$workPanels.eq( currentWorkPanel ).removeClass( 'andazi-show-work' );
			
			return false;

		} );

	}

	return { init : init };

})();