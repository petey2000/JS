const Chat = {
  messages: [
    { content: 'Hi, how are you?' },
    { content: 'Fine! You?' },
    { content: 'Cool. cool.' },
  ],

  getAll() {
    return this.messages;
  },

  // getAll: function () {
  //   return this.messages;
  // },

  add(text) {
    this.messages.push({ content: text });
  },
};

module.exports = Chat;
