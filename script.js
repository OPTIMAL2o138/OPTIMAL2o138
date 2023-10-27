var map = L.map('map').setView([10.699473657441606, 76.08935567428753], 25);


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
gsat.addTo(map)


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







;

// //ablock
// var ablock = L.marker([10.69947545702869, 76.09119310154685], {icon: myIcon, draggable: false}).addTo(map)
// var popup =  ablock.bindPopup('A block').openPopup()
// popup.addTo(map)
// //block
// var bblock = L.marker([10.699406009807127, 76.09048812952989], {icon: myIcon, draggable: false}).addTo(map)
// var popup =  bblock.bindPopup('B block').openPopup()
// popup.addTo(map)
// //cblock
// var cblock = L.marker([10.69887688645638, 76.09037696509829], {icon: myIcon, draggable: false}).addTo(map)
// var popup =  cblock.bindPopup('C block').openPopup()
// popup.addTo(map)
// //dblock
// var mblock = L.marker([10.699248962610039, 76.0888482541323], {icon: myIcon, draggable: false}).addTo(map)
// var popup =  mblock.bindPopup('M block').openPopup()
// popup.addTo(map)

// var mosque1 = L.marker([10.699764328360253, 76.09067589390187], {icon: myIcon, draggable: false}).addTo(map)
// var popup =  mosque1.bindPopup('Mosque').openPopup()
// popup.addTo(map)

// var bWashroom1 = L.marker([10.699810830576139, 76.09074298537598] , {icon: boys }).addTo(map)
// var popup = bWashroom1.bindPopup('Boys Washroom').openPopup()
// popup.addTo(map)

// var gWashroom1 = L.marker([10.698655516980088, 76.0903699574991] , {icon: girls }).addTo(map)
// var popup = gWashroom1.bindPopup('gisls Washroom').openPopup()
// popup.addTo(map)

//layer selector 

var baseMaps = {
    "OSM": osm,
    "Sattelite": gsat
};

var klm = L.geoJSON(pointJson, { 
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
}
    
    );

var overlayMaps = {
    "LP block" : klm
}


var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false}).addTo(map);


//geojson



klm.addTo(map)


map.on('mousemove', function(e){
    console.log(e.latlng.lat, e.latlng.lng)
})




