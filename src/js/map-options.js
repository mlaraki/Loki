(function(window, google, mapster) {
	
	mapster.MAP_OPTIONS = {
		center: {
			lat: 37.791350,
			lng: -122.435883
		},
		zoom: 10,
		scrollwheel: false,
		disableDefaultUI: false,
		draggable: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP,
			style: google.maps.ZoomControlStyle.DEFAULT
		}
	};
	
}(window, google, window.Mapster || (window.Mapster = {})));