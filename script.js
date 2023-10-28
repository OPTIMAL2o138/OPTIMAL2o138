var map = L.map('map').setView([10.699473657441606, 76.08935567428753], 25);

map.options.autoClose = false;



//osm 
var osm =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})



//google sat
var gsat =  L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
osm.addTo(map)


var myIcon = L.icon({
    iconUrl: 'images/marker1.png',
    iconSize: [45, 45],   
})

var boys = L.icon({
    iconUrl: 'images/mens_washroom.jpeg',
    iconSize: [45, 45],   
})

var girls = L.icon({
    iconUrl: 'images/womens_ washroom.png',
    iconSize: [45, 45],   
})

var locator = L.icon({
    iconUrl: 'images/locator.png', 
    iconSize: [45, 45,1]
})

var BHILAHARII = L.icon({
    iconUrl: 'images/BHILAHARI.png',
    iconSize: [60,60]
})

var CHARUKESII = L.icon({
    iconUrl: 'images/CHARUKESI.png',
    iconSize: [60,60]
})




// //ablock
// var ablock = L.marker([10.69947545702869, 76.09119310154685], {icon: myIcon, draggable: false}).addTo(map)
// var popup1 =  ablock.bindPopup('A block').openPopup()
// popup1.addTo(map)
// //block
// var bblock = L.marker([10.699406009807127, 76.09048812952989], {icon: myIcon, draggable: false}).addTo(map)
// var popup2 =  bblock.bindPopup('B block').openPopup()
// popup2.addTo(map)
// //cblock
// var cblock = L.marker([10.69887688645638, 76.09037696509829], {icon: myIcon, draggable: false}).addTo(map)
// var popup3 =  cblock.bindPopup('C block').openPopup()
// popup3.addTo(map)
// //dblock
// var mblock = L.marker([10.699248962610039, 76.0888482541323], {icon: myIcon, draggable: false}).addTo(map)
// var popup4 =  mblock.bindPopup('M block').openPopup()
// popup4.addTo(map)

// var mosque1 = L.marker([10.699764328360253, 76.09067589390187], {icon: myIcon, draggable: false}).addTo(map)
// var popup5 =  mosque1.bindPopup('Mosque').openPopup()
// popup5.addTo(map)

// var bWashroom1 = L.marker([10.699810830576139, 76.09074298537598] , {icon: boys }).addTo(map)
// var popup6 = bWashroom1.bindPopup('Boys Washroom').openPopup()
// popup6.addTo(map)

// var gWashroom1 = L.marker([10.698655516980088, 76.0903699574991] , {icon: girls }).addTo(map)
// var popup7 = gWashroom1.bindPopup('Girls Washroom').openPopup()
// popup7.addTo(map)


//layer selector 

var BHILAHARI = L.marker([10.699464058173962, 76.09059998782192] , {icon: BHILAHARII }).addTo(map)
var popup7 = BHILAHARI.bindPopup('BHILAHARI')
BHILAHARI.addTo(map)

var CHARUKESI = L.marker([10.699277591005009, 76.09037937613925] , {icon: CHARUKESII }).addTo(map)
var popup8 = CHARUKESI.bindPopup('CHARUKESI')
CHARUKESI.addTo(map)









var baseMaps = {
    "Sattelite": gsat,
    "OSM": osm,
};

var klm = L.geoJSON(pointJson, { 
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
}
    
    );

var overlayMaps = {
}


var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false}).addTo(map);


//geojson









if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature.");
} else {
    // Request high accuracy and reduce the timeout to get updates more frequently.
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition, error => {
            console.error("Error getting user location: " + error.message);
        }, { enableHighAccuracy: true, timeout: 5000 });
    }, 2000);
}

var gpsloc, circ;

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    // Remove previous location marker and accuracy circle if they exist
    if (gpsloc) {
        map.removeLayer(gpsloc);
    }

    if (circ) {
        map.removeLayer(circ);
    }

    gpsloc = L.marker([lat, long], { icon: locator });
    circ = L.circle([lat, long], { radius: accuracy });

    // Add the new marker and accuracy circle to the map
    var pointer = L.featureGroup([gpsloc, circ]).addTo(map);

    

    console.log("Latitude:", lat);
    console.log("Longitude:", long);
    console.log("Accuracy:", accuracy);
}

// Include the Leaflet map initialization code here, which you already have in your original code.
