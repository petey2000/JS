'use strict'

let myMap = new ol.Map({
    target: 'mymap',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([11.362, 46.496]),
        zoom: 14,
    }),
})
