(function(window, google) {
	
	var Mapster = (function() {
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
		}
		Mapster.prototype = {
			zoom: function(level) {
				if(level) {
					this.gMap.setZoom(level);
				} else {
					return this.gMap.getZoom();
				}
			},
			addMarker: function(opts) {
				opts.position = {
					lat: opts.lat,
					lng: opts.lng
				}
				this._createMarker(opts);
			},
			_createMarker: function(opts) {
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			}
		};
		return Mapster;
	}());
	
	Mapster.create = function(element, opts) {
		return new Mapster(element, opts);
	};
	
	window.Mapster = Mapster;
	
}(window, google));