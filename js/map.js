var map = L.map('leaflet-map').
setView([40,-110.941239841], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/edenhalperin/cifq0r0e5000q85m0d293k6mq/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWRlbmhhbHBlcmluIiwiYSI6IlFRZG0zMWMifQ.QUNKx4tIMjZfwmrE8SE6Bg').
addTo(map);

L.marker([40,-110.94123])
.bindPopup("test").addTo(map);