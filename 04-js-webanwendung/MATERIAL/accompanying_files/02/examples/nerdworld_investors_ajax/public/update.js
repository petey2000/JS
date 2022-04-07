;(() => {
    const $ = document.querySelector.bind(document)

    const refresh = () => {
        fetch('/info')
            .then(res => res.json())
            .then(res => {
                showStockData(res.price, res.volume, res.time)
            })
            .catch(err => {
                showStockData('n/a', 'n/a', 'n/a')
            })

        setTimeout(refresh, 2000)
    }

    const showStockData = (price, volume, time) => {
        $('#price').textContent = price
        $('#volume').textContent = volume
        $('#time').textContent = time
    }

    refresh()
})()
