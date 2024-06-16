
var map2;

window.addEventListener('load', () => {
    map2 = L.map('map2').setView([37.423288, -122.068564], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map2)
    
    let marker = L.marker([37.423288, -122.068564]).addTo(map2);
    
    })





// window.addEventListener(`load`, function(){
//   var container = L.DomUtil.get('map2'); if(container != null){ container._leaflet_id = null; }
//   if (map2 != undefined) map2.remove();
//     map2 = L.map('map2').setView([50.06393674895484, 19.940448026481388], 13);

// 	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map2);
// 	let marker = L.marker([50.06393674895484, 19.940448026481388]).addTo(map2);})