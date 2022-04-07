'use strict'
const request = require('request')
const proj4 = require('proj4')

const express = require('express')
const app = express()

const URL = 'http://127.0.0.1:8081/line11-sample.json'

const IP = '127.0.0.1'
const PORT = 8081

app.use(express.static('public'))

app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})

app.get('/positions', (req, res) => {
    fetchBusCoordinates()
        .then(data => res.send(data))
        .catch(err => res.status(502).send('could not get upstream data'))
})

const fetchBusCoordinates = () =>
    new Promise((resolve, reject) => {
        request(URL, (err, res, data) => {
            if (err || (res && res.statusCode != 200)) {
                reject(err)
            } else {
                data = JSON.parse(data)
                resolve(
                    transformCoordinates(
                        data.features.map(el => el.geometry.coordinates),
                    ),
                )
            }
        })
    })

const transformCoordinates = coordinates => {
    const SASA_PROJ =
        '+proj=utm +zone=32 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
    const OSM_PROJ =
        '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs'
    return coordinates.map(point => proj4(SASA_PROJ, OSM_PROJ, point))
}
