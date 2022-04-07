fetch('/product/')
    .then(res => res.json())
    .then(codes => Promise.all(codes.map(c => fetch('/product/' + c))))
    .then(res => Promise.all(res.map(r => r.json())))
    .then(products => showProductList(products))

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const showProductList = products => {
    $('#product_list').innerHTML = ejs.render(
        `
        <% products.forEach( product => { %>
        <a id="<%= product.code %>" href="#"><%= product.shortdesc %></a><br>
        <% }); %>
        `,
        { products },
    )

    products.forEach(product => {
        $('#' + product.code).addEventListener('click', ev => {
            $('#product_detail').innerHTML = ejs.render(
                `
                <h1><%= product.shortdesc %></h1>
                <p><i><%= product.tagline %></i></p>
                <p>Price: EUR <%= product.price %></p>

                <% if (product.stockwarn) { %>
                    <p>Last items in stock!</p>
                <% } %>
                `,
                { product },
            )
            highlightProduct(product.code)
            ev.preventDefault()
        })
    })
}

const highlightProduct = code => {
    Array.from($$('a')).forEach(node => node.classList.remove('hi'))
    $('#' + code).classList.add('hi')
}
