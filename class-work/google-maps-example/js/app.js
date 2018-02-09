var map;
	
	var locations = [
	{
		lat: 37.7694,
		lng: -122.4862,
		name: 'Golden Gate Park',
	}, {
		lat: 37.828125,
		lng: ‎-122.422844,
		name: 'Alcatraz Island',
	}, {
		lat: 37.8023,
		lng: -122.4057,
		name: 'Coit Tower'.
	}]
















      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 8
        });
      }

