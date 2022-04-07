const SWAPI_URL = 'https://swapi.api.webmasters-akademie.dev/planets/'
const $ = document.querySelector.bind(document)

let planet_list = []

const showPlanets = () => {
    $('#planet_list').innerHTML = planet_list.join(', ')
}

const fetchPlanets = () => {
    new Promise((resolve, reject) => {
        fetch(SWAPI_URL)
            .then(res => res.json())
            .then(planets => resolve(planets))
            .catch(err => reject())
    }).then(planets => {
        planets.map(planet => {
            planet_list.push(planet.name)
        })
        showPlanets()

        $('#status').innerHTML = planet_list.length + ' planets loaded:'
    })
}

fetchPlanets()
