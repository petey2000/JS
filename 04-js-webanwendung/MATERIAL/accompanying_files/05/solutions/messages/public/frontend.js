const $ = document.querySelector.bind(document)

const showMessages = messages => {
    $('#count').innerHTML = messages.length
    $('#messages').innerHTML = ejs.render(
        `
        <% messages.forEach( message => { 
        %>
          <p><%= message.content  %>
        <% }) %>
        `,
        { messages },
    )
}

fetch('/message/')
    .then(res => res.json())
    .then(messages => showMessages(messages))
