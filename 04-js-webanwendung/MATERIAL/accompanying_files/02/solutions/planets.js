const $ = e => document.querySelector(e)

const URL = 'https://solar.api.webmasters-akademie.dev/bodies/'
const NAME_TO_PLANET = {
    Sun: 'soleil',
    Mercury: 'mercure',
    Venus: 'venus',
    Earth: 'terre',
    Mars: 'mars',
    Jupiter: 'jupiter',
    Saturn: 'saturne',
    Uranus: 'uranus',
    Neptune: 'neptune',
    Pluto: 'pluton',
}
let info = $('#info')

const init = () => {
    $('#sun-link').addEventListener('mouseenter', function () {
        $('#sun').style.setProperty(
            'box-shadow',
            '0px 0px 10px 10px rgba(242, 120, 75, 0.4)',
        )
    })
    $('#sun-link').addEventListener('mouseleave', function () {
        $('#sun').style.setProperty(
            'box-shadow',
            '0px 0px 8px 8px rgba(242, 120, 75, 0.2)',
        )
    })
    $('#sun-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#mercury-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#venus-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#earth-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#mars-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#jupiter-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#saturn-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#uranus-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#neptune-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )
    $('#pluto-link').addEventListener('click', e =>
        searchPlanet(e.target.innerText),
    )

    enableHover()
}

const enableHover = () => {
    for (let i = 1; i < Object.keys(NAME_TO_PLANET).length; i++) {
        let planet = Object.keys(NAME_TO_PLANET)[i].toLowerCase()
        $(`#${planet}-link`).addEventListener('mouseenter', function () {
            if (planet !== 'pluto') {
                $(`#${planet}-orbit`).style.setProperty(
                    'border',
                    'solid 3px rgba(137, 196, 244, 0.4)',
                )
            } else {
                $(`#${planet}-orbit`).style.setProperty(
                    'border',
                    'dashed 1px rgba(137, 196, 244, 0.4)',
                )
            }
        })
        $(`#${planet}-link`).addEventListener('mouseleave', function () {
            if (planet !== 'pluto') {
                $(`#${planet}-orbit`).style.setProperty(
                    'border',
                    'solid 3px rgba(137, 196, 244, 0.1)',
                )
            } else {
                $(`#${planet}-orbit`).style.setProperty(
                    'border',
                    'dashed 1px rgba(137, 196, 244, 0.1)',
                )
            }
        })
    }
}

const searchPlanet = planet => {
    info.innerHTML = ''
    info.innerHTML = 'Loading data...'
    fetch(`${URL}${NAME_TO_PLANET[planet]}`)
        .then(res => res.json())
        .then(res => {
            info.innerHTML = ''
            createTable(res)
        })
        .catch(err => {
            console.log(err)
        })
}

const createTable = res => {
    const name = document.createElement('p')
    name.innerHTML = res.name
    const axialTilt = document.createElement('p')
    axialTilt.innerText = `${res.axialTilt}° Schieflage`
    const equaRadius = document.createElement('p')
    equaRadius.innerText = `${res.equaRadius}km Äquatorradius`
    const gravity = document.createElement('p')
    gravity.innerText = `${res.gravity}m/s² Gravitation`
    const discoveredBy = document.createElement('p')
    discoveredBy.innerText = `Entdeckt von ${
        res.discoveredBy ? res.discoveredBy : '---'
    }`

    info.append(name)
    info.append(axialTilt)
    info.append(equaRadius)
    info.append(gravity)
    info.append(discoveredBy)
}

init()
