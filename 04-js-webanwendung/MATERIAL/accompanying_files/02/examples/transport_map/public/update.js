'use strict'
;(() => {
    const $ = document.querySelector.bind(document)
    let layer

    const refresh = () => {
        fetch('http://127.0.0.1:8081/positions')
            .then(res => res.json())
            .then(res => {
                redraw(res)
            })
            .catch(() => {
                redraw(false)
            })
        setTimeout(refresh, 5000)
    }

    const redraw = data => {
        if (layer) {
            myMap.removeLayer(layer)
        }
        if (!data) {
            $('#mytxt').textContent = 'could not fetch data'
            return
        }
        $('#mytxt').textContent = 'number of active buses: ' + data.length

        showMarkers(data)
    }

    const showMarkers = data => {
        let markers = data.map(
            (p, ix) =>
                new ol.Feature({
                    geometry: new ol.geom.Point(p),
                    text: String(ix + 1),
                }),
        )
        layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: markers,
            }),
            style: f =>
                new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 12,
                        fill: new ol.style.Fill({ color: '#FF9933' }),
                        stroke: new ol.style.Stroke({
                            color: '#000000',
                        }),
                    }),
                    text: new ol.style.Text({
                        font: '12px sans-serif',
                        text: f.get('text'),
                    }),
                }),
        })
        myMap.addLayer(layer)
    }

    refresh()
})()
