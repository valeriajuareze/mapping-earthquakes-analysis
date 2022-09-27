// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
	[37.6213, -122.3790],
	[30.1974, -97.6663],
	[43.677717, -79.624819],
	[40.6417, -73.780968],
	[25.774851, -100.1138]

  ];
	

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
	color: "blue",
	weight: 4,
	opacity: 0.5,
	dashArray: 5

	
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);
