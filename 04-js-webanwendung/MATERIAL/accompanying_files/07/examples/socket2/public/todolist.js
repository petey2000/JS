const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const viewTodoList = list => {
    $('#todolist').innerHTML = ejs.render(
        `
    <form>
      <table>
        <% list.forEach( (todo, ix) => { %>
          <tr> 
            <td><%= todo.text %></td>
            <td><input type="checkbox" id="check_<%= ix %>"
                <% if (todo.done) { %> checked <% } %>
            </td>
          </tr> 
        <% }); %>
        <tr> 
          <td><input type="text" id="text" required></td>
          <td><input type="submit" value="submit new todo"></td>
        </tr>

      </table>
    </form>
    <p></p>
    <hr>
    <button id="dump">show list in terminal</button>
    <button id="clean">clear list</button>
    `,
        { list },
    )

    $('form').addEventListener('submit', ev => {
        socket.emit('add', $('#text').value)
        ev.preventDefault()
    })

    $('#dump').addEventListener('click', ev => {
        socket.emit('dump')
    })

    $('#clean').addEventListener('click', ev => {
        socket.emit('clean')
    })

    list.forEach((todo, ix) => {
        $('#check_' + ix).addEventListener('click', ev => {
            socket.emit('set', ix, $('#check_' + ix).checked)
        })
    })
}

let socket = io.connect()

socket.on('push', list => {
    viewTodoList(list)
})

socket.emit('get')
