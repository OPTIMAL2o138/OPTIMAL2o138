var map = L.map('map').setView([10.699473657441606, 76.08935567428753], 25);

map.options.autoClose = false;



//osm 
var osm =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 21,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})



//google sat
var gsat =  L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
osm.addTo(map)


//icons

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

var ABHOGII = L.icon({
    iconUrl: 'images/ABHOGI.png',
    iconSize: [60,60]
})

var BAGESHRII = L.icon({
    iconUrl: 'images/BAGESHRI.png',
    iconSize: [60,60]
})

var HINDOLI = L.icon({
    iconUrl: 'images/HINDOL.png',
    iconSize: [60,60]
})

var PURVII = L.icon({
    iconUrl: 'images/PURVI.png',
    iconSize: [60,60]
})

var BHAVAPRIYAI = L.icon({
    iconUrl: 'images/BHAVAPRIYA.png',
    iconSize: [60,60]
})

var VANASPATHII = L.icon({
    iconUrl: 'images/VANASPATHI.png',
    iconSize: [60,60]
})

var VANASPATHIIB = L.icon({
    iconUrl: 'images/VANASPATHI2.png',
    iconSize: [60,60]
})

var SOORYAKANTHAMI = L.icon({
    iconUrl: 'images/SOORYAKANTHAM.png',
    iconSize: [60,60]
})

var SAHAANAI = L.icon({
    iconUrl: 'images/SAHAANA.png',
    iconSize: [60,60]
})

var MOHANAMI = L.icon({
    iconUrl: 'images/MOHANAM.png',
    iconSize: [60,60]
})

var HAMSADHWANII = L.icon({
    iconUrl: 'images/HAMSADHWANI.png',
    iconSize: [60,60]
})

var SAAVERII = L.icon({
    iconUrl: 'images/SAAVERI.png',
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

//FIRST FLOOR

var BHILAHARI = L.marker([10.699464058173962, 76.09059998782192] , {icon: BHILAHARII }).addTo(map)
var popup7 = BHILAHARI.bindPopup('BHILAHARI')

var CHARUKESI = L.marker([10.699277591005009, 76.09037937613925] , {icon: CHARUKESII }).addTo(map)
var popup8 = CHARUKESI.bindPopup('CHARUKESI')
CHARUKESI.addTo(map)

var ABHOGI = L.marker([10.699161051603355, 76.090408179474] , {icon: ABHOGII }).addTo(map)
var popup9 = ABHOGI.bindPopup('ABHOGI (B block)')
ABHOGI.addTo(map)

var ABHOGI2 = L.marker([10.698987103264134, 76.09036392302698] , {icon: ABHOGII }).addTo(map)
var popup10 = ABHOGI2.bindPopup('ABHOGI (C Block)')

var BHAVAPRIYA = L.marker([10.69891198917551, 76.09035989972062] , {icon: BHAVAPRIYAI }).addTo(map)
var popup14 = BHAVAPRIYA.bindPopup('BHAVAPRIYA')

var firstfloor = L.featureGroup([BHILAHARI, ABHOGI2,CHARUKESI,ABHOGI,BHAVAPRIYA])


//SECOND FLOOR

var BAGESHRI = L.marker([10.699458872018775, 76.09069115252248] , {icon: BAGESHRII }).addTo(map)
var popup11 = BAGESHRI.bindPopup('BAGESHRI')

var HINDOL = L.marker([10.699236165633762, 76.0904846224364] , {icon: HINDOLI }).addTo(map)
var popup12 = HINDOL.bindPopup('HINDOL')

var PURVI = L.marker([10.698847417402146, 76.090392086227574] , {icon: PURVII }).addTo(map)
var popup13 = PURVI.bindPopup('PURVI')

var secondfloor = L.featureGroup([BAGESHRI, HINDOL, PURVI])


//Ground floor

var VANASPATHI = L.marker([10.69920717425842, 76.0887210700041] , {icon: VANASPATHII }).addTo(map)
var popup14 = VANASPATHI.bindPopup('VANASPATHI (lab 5)')

var VANASPATHI2 = L.marker([10.699113611163199, 76.08873716325755] , {icon: VANASPATHII }).addTo(map)
var popup15 = VANASPATHI2.bindPopup('VANASPATHI (lab 6)')

var VANASPATHI3 = L.marker([10.69900687012808, 76.08865803809793] , {icon: VANASPATHIIB }).addTo(map) //basement
var popup16 = VANASPATHI3.bindPopup('VANASPATHI (lab 4)')

var VANASPATHI4 = L.marker([10.698993692220384, 76.08847967120542] , {icon: VANASPATHIIB }).addTo(map)  //basement icon
var popup17 = VANASPATHI4.bindPopup('VANASPATHI (lab 7/3)')

var SOORYAKANTHAM = L.marker([10.699681578248015, 76.09008363215514] , {icon: SOORYAKANTHAMI }).addTo(map)
var popup18 = SOORYAKANTHAM.bindPopup('SOORYAKANTHAM')

var SAHAANA = L.marker([10.699228150673088, 76.08961959249201] , {icon: SAHAANAI }).addTo(map)
var popup19 = SAHAANA.bindPopup('SAHAANA')

var MOHANAM = L.marker([10.69921730496142, 76.08941355735553] , {icon: MOHANAMI }).addTo(map)
var popup20 = MOHANAM.bindPopup('MOHANAM')

var HAMSADHWANI = L.marker([10.699275148752525, 76.08925903100317] , {icon: HAMSADHWANII }).addTo(map)
var popup21 = HAMSADHWANI.bindPopup('HAMSADHWANI')

var SAAVERI = L.marker([10.69928599446213, 76.08911922144627] , {icon: SAAVERII }).addTo(map)
var popup22 = SAAVERI.bindPopup('SAAVERI')







//add dhanshreee 





















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
    "1st Floor" : firstfloor,
    "2nd Floor" : secondfloor,
    };







var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false}).addTo(map);


//geojson

firstfloor.addTo(map)
secondfloor.addTo(map)







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
