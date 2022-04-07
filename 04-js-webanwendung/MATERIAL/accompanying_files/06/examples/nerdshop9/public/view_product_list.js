const viewProductList = () => {
    fetch('/product/')
        .then(res => res.json())
        .then(codes => Promise.all(codes.map(c => fetch('/product/' + c))))
        .then(res => Promise.all(res.map(r => r.json())))
        .then(products => show(products))

    const show = products => {
        $('#product_list').style.display = 'block'
        $('#product_edit').style.display = 'none'

        $('#product_list').innerHTML = ejs.render(
            `
      <table>
        <tr>
          <th>action</th>
          <th>code</th>
          <th>shortdesc</th>
          <th>tagline</th>
          <th class="number">quantity</th>
          <th class="number">price</th>
          <th>stockwarn</th>
        </tr>
        <% products.forEach( product => { %>
          <tr> 
            <td><a id="edit_<%= product.code %>"   href="#">edit</a>
                <a id="delete_<%= product.code %>" href="#">delete</a></td>
            <td><%= product.code %></td>
            <td style="width: 30%"><%= product.shortdesc %></td>
            <td style="width: 25%"><%= product.tagline %></td>
            <td class="number"><%= product.quantity %></td>
            <td class="number"><%= product.price %></td>
            <td><%= product.stockwarn %></td>
          </tr> 
        <% }); %>
      </table>
      <p>
        <a id="add" href="#">add new product</a>
      </p>
      `,
            { products },
        )

        $('#add').addEventListener('click', ev => {
            viewProductEdit()
            ev.preventDefault()
        })

        products.forEach(product => {
            $('#edit_' + product.code).addEventListener('click', ev => {
                viewProductEdit(product.code)
                ev.preventDefault()
            })

            $('#delete_' + product.code).addEventListener('click', ev => {
                fetch('/product/' + product.code, {
                    method: 'DELETE',
                }).then(() => viewProductList())
                ev.preventDefault()
            })
        })
    }
}
