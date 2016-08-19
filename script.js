var map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 4
	});

	map.data.loadGeoJson("http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2016-01-01&endtime=2016-01-02");
	map.data.setStyle(function(each) {
		var geo = each.getGeometry();
		geo.circle = new google.maps.Circle({
			map: map,
			center: geo.get(),
			fillColor: "#f00",
			opacity: 0.5,
			radius: 100000 * each.getProperty("mag"),
			strokeWeight: 1
		});
		return {visible: false};
	});
}
