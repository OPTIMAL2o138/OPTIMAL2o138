var map = L.map('map',{attributionControl: false
}).setView([10.699473657441606, 76.08935567428753], 25);
map.options.autoClose = false;




var lastLat,gpsloc, lastLong, circ ;


//osm 
var osm =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 21,
minZoom: 18,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})



//google sat
var gsat =  L.tileLayer('https://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 21,
    minZoom: 18, 
    subdomains:['mt0','mt1','mt2','mt3']
});

osm.addTo(map)

var southWest = L.latLng(10.698375399010823, 76.0870128247687); 
var northEast = L.latLng(10.701350351157298, 76.09170157366809); 

var bounds = L.latLngBounds(southWest, northEast);


map.setMaxBounds(bounds);


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

var AWCAUDI = L.icon({
    iconUrl: 'images/AWCAUD.png', 
    iconSize: [120, 69],
})

var AUDI = L.icon({
    iconUrl: 'images/AUD.png', 
    iconSize: [120, 69],
})

var LPHALLI = L.icon({
    iconUrl: 'images/LPHALL.png', 
    iconSize: [120, 69],
})

var AVROOMI = L.icon({
    iconUrl: 'images/AVR.png', 
    iconSize: [120, 69],
})

var PHALLI = L.icon({
    iconUrl: 'images/ANIM.png', 
    iconSize: [120, 69],
})

var AWCCONI = L.icon({
    iconUrl: 'images/AWCON.png', 
    iconSize: [120, 69],
})

var LBLOCKI = L.icon({
    iconUrl: 'images/icong.png', 
    iconSize: [120, 69],
})

var IT7I = L.icon({
    iconUrl: 'images/IT7.png', 
    iconSize: [120, 69],
})

var IT2I = L.icon({
    iconUrl: 'images/ANIM.png', 
    iconSize: [120, 69],
})

var BASKETI = L.icon({
    iconUrl: 'images/BASKET.png', 
    iconSize: [120, 69],
})

var MEN = L.icon({
    iconUrl: 'images/menwc.png', 
    iconSize: [25, 25],
})

var WOMAN = L.icon({
    iconUrl: 'images/womenwc.png', 
    iconSize: [25, 25],
})


// //bark


// var customIcon = L.divIcon({   //second floor
//     className: 'custom-icon',
//     html: '<div class="icon"></div><div class="label">Green Room 1 to 23</div>',
//     iconSize: [50, 50], // Adjust the size of the icon container
// });

// var customIcon2 = L.divIcon({   //first floor
//     className: 'custom-icon2',
//     html: '<div class="icon"></div><div class="label">Green Room 24 to 45</div>',
//     iconSize: [50, 50], // Adjust the size of the icon container
// });

// var customIcon3 = L.divIcon({    //Second floor
//     className: 'custom-icon3',
//     html: '<div class="icon"></div><div class="label">Green Room 46-60/div>',
//     iconSize: [50, 50], // Adjust the size of the icon container
// });




// var greenLP = L.marker([10.699125243762452, 76.08880483564707], {
//     icon: customIcon,
// }).addTo(map).bindPopup("Ground Floor");

// var greenLP2 = L.marker([10.699057360977138, 76.08849245693403], {
//     icon: customIcon,
// }).addTo(map).bindPopup("Ground Floor");

// var greenLP3 = L.marker([10.699065494529627, 76.08880050951397], {
//     icon: customIcon2,
// }).addTo(map).bindPopup("First Floor");

// var greenLP4 = L.marker([10.699024885502318, 76.0883665711027], {
//     icon: customIcon2,
// }).addTo(map).bindPopup("First Floor");

// var greenLP5 = L.marker([10.699251772932291, 76.08881035038581], {
//     icon: customIcon3,
// }).addTo(map).bindPopup("Second Floor");


// var greenLP6 = L.marker([10.699035655343925, 76.08866081723203], {
//     icon: customIcon3,
// }).addTo(map).bindPopup("Second Floor");


















// //Ground floor

// var VANASPATHI = L.marker([10.69920717425842, 76.0887210700041] , {icon: VANASPATHII }).addTo(map)
// var popup14 = VANASPATHI.bindPopup('VANASPATHI (lab 5)')

var PHALL = L.marker([10.698993692220384, 76.08847967120542] , {icon: PHALLI }).addTo(map)
var popup15 = PHALL.bindPopup('Animation')

var IT7 = L.marker([10.69900687012808, 76.08865803809793] , {icon: IT7I }).addTo(map) //basement
var popup16 = IT7.bindPopup('Digital Painting')

// var VANASPATHI4 = L.marker([10.698993692220384, 76.08847967120542] , {icon: VANASPATHII }).addTo(map)  //basement icon
// var popup17 = VANASPATHI4.bindPopup('VANASPATHI (lab 7/3)')

var AUD = L.marker([10.699681578248015, 76.09008363215514] , {icon: AUDI }).addTo(map)
var popup18 = AUD.bindPopup('Stalls for Projects')

// var SAHAANA = L.marker([10.699228150673088, 76.08961959249201] , {icon: SAHAANAI }).addTo(map)
// var popup19 = SAHAANA.bindPopup('SAHAANA')

// var MOHANAM = L.marker([10.69921730496142, 76.08941355735553] , {icon: MOHANAMI }).addTo(map)
// var popup20 = MOHANAM.bindPopup('MOHANAM')

// var HAMSADHWANI = L.marker([10.699275148752525, 76.08925903100317] , {icon: HAMSADHWANII }).addTo(map)
// var popup21 = HAMSADHWANI.bindPopup('HAMSADHWANI')

var BASKET = L.marker([10.698996931135266, 76.09000726393536] , {icon: BASKETI }).addTo(map)
var popup22 = BASKET.bindPopup('Robo Race')

var LPHALL = L.marker([10.69984727509778, 76.08926198259117] , {icon: LPHALLI }).addTo(map)
var popup23 = LPHALL.bindPopup('Art Gallery')

var AWCAUD  = L.marker([10.700977467289936, 76.08880748844285] , {icon: AWCAUDI }).addTo(map)
var popup24 = AWCAUD.bindPopup('Inauguration, Validatory & Tech talk 1')

var AWCCON  = L.marker([10.701164826547634, 76.0891779969983] , {icon: AWCCONI }).addTo(map)
var popup25 = AWCCON.bindPopup('Tech talk 3 ')

var IT2I  = L.marker([10.699479049837075, 76.09098536008268] , {icon: IT2I }).addTo(map)
var popup31 = IT2I.bindPopup('Animation ')

var WC1  = L.marker([10.699756982396757, 76.09078810391689] , {icon: MEN }).addTo(map)
var popup28 = WC1.bindPopup('MEN WC')

var WC2  = L.marker([10.699465264696688, 76.09076567900514] , {icon: WOMAN }).addTo(map)
var popup28 = WC2.bindPopup('WOMEN WC')


// var groundFloor = L.featureGroup([VANASPATHI,VANASPATHI2,VANASPATHI3,VANASPATHI4,SOORYAKANTHAM,SAHAANA,MOHANAM,
//     HAMSADHWANI,SAAVERI,DHANASREE,NEELAMBHARI,SREERAGAM,MARWA,ANANDABHAIRAVI])


// //FIRST FLOOR

// var BHILAHARI = L.marker([10.699464058173962, 76.09059998782192] , {icon: BHILAHARII }).addTo(map)
// var popup7 = BHILAHARI.bindPopup('BHILAHARI')

// var CHARUKESI = L.marker([10.700112766989852, 76.08937266618754 ] , {icon: CHARUKESII }).addTo(map)
// var popup8 = CHARUKESI.bindPopup('CHARUKESI')
// CHARUKESI.addTo(map)

// var ABHOGI = L.marker([10.699161051603355, 76.090408179474] , {icon: ABHOGII }).addTo(map)
// var popup9 = ABHOGI.bindPopup('ABHOGI (B block)')
// ABHOGI.addTo(map)

// var ABHOGI2 = L.marker([10.698987103264134, 76.09036392302698] , {icon: ABHOGII }).addTo(map)
// var popup10 = ABHOGI2.bindPopup('ABHOGI (C Block)')

// var BHAVAPRIYA = L.marker([10.69891198917551, 76.09035989972062] , {icon: BHAVAPRIYAI }).addTo(map)
// var popup14 = BHAVAPRIYA.bindPopup('BHAVAPRIYA')

var AVROOM  = L.marker([10.699421732080468, 76.08992795794437] , {icon: AVROOMI }).addTo(map)
var popup26 = AVROOM.bindPopup('Tech Talk 2 ')

// var CHAKRAVAKAM  = L.marker([10.700121597915517, 76.08968359958921] , {icon: CHAKRAVAKAMI }).addTo(map)
// var popup27 = CHAKRAVAKAM .bindPopup('CHAKRAVAKAM ')

// var BIHAG  = L.marker([10.700079818476514, 76.08963181684805] , {icon: BIHAGI }).addTo(map)
// var popup26 = BIHAG .bindPopup('BIHAG ')

// var  AHIRI  = L.marker([10.7001440897146, 76.08936073123772] , {icon: AHRII }).addTo(map)
// var popup29 =  AHIRI.bindPopup(' AHIRI ')

// var AMRITHAVARSHINI  = L.marker([10.70011935205628, 76.08941791068749] , {icon: AMRITHAVARSHINII }).addTo(map)
// var popup26 = AMRITHAVARSHINI .bindPopup('AMRITHAVARSHINI ')



// var firstfloor = L.featureGroup([BHILAHARI, ABHOGI2,CHARUKESI,ABHOGI,BHAVAPRIYA, KALYANI, CHAKRAVAKAM, BIHAG,AHIRI,AMRITHAVARSHINI])


// //SECOND FLOOR

// var BAGESHRI = L.marker([10.699458872018775, 76.09069115252248] , {icon: BAGESHRII }).addTo(map)
// var popup11 = BAGESHRI.bindPopup('BAGESHRI')

// var HINDOL = L.marker([10.699236165633762, 76.0904846224364] , {icon: HINDOLI }).addTo(map)
// var popup12 = HINDOL.bindPopup('HINDOL')

// var PURVI = L.marker([10.698815022987706, 76.09038647552862] , {icon: PURVII }).addTo(map)
// var popup13 = PURVI.bindPopup('PURVI')

// var MEGH  = L.marker([10.700117375377422, 76.08963114629584] , {icon: MEGHI }).addTo(map)
// var popup27 = MEGH.bindPopup('MEGH ')

// var ASARAVI  = L.marker([10.700137142165493, 76.08947758983574] , {icon: ASARAVII }).addTo(map)
// var popup27 = ASARAVI.bindPopup('ASARAVI ')

// var KHAMAJ  = L.marker([10.70015097578137, 76.08937354288275] , {icon: KHAMAJII }).addTo(map)
// var popup30 = KHAMAJ.bindPopup('KHAMAJ')

// var KAFI  = L.marker([10.700086850223897, 76.08949454056238] , {icon: KAFII }).addTo(map)
// var popup31 = KAFI.bindPopup('KAFI')





// var secondfloor = L.featureGroup([BAGESHRI, HINDOL,MARWA, PURVI,MEGH,ASARAVI,KHAMAJ,KAFI])





//birder

var baseMaps = {
    "Satellite": gsat,
    "Normal": osm,
};

var klm = L.geoJSON(pointJson, { 
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
}
    
    );

var overlayMaps = {}


var layerControl = L.control.layers(baseMaps,overlayMaps,{ collapsed: false}).addTo(map);





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
}
// Include the Leaflet map initialization code here, which you already have in your original code.

function centerOnLocator() {
    if (gpsloc) {
        map.setView(gpsloc.getLatLng(), 20); // Adjust the zoom level as needed
    } else {
        alert("Locator is not available yet.");
    }
}

// Event listener for the button
document.getElementById('center-locator').addEventListener('click', centerOnLocator);

gsat.on('load', function() {
    console.log("Satellite layer loaded successfully.");
});

gsat.on('error', function() {
    console.warn("Satellite layer failed to load. Switching to OSM.");
    osm.addTo(map);
});