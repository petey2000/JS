'use strict';
{
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // Funktion, die zum Start der Anwendung bzw. zum Zeitpunkt des Webseitenaufrufs ausgeführt wird.
  const init = () => {
    highlightChatMembersBy('ert');
  };

  const highlightChatMembersBy = (partOfMemberName) => {
    // const liNodes = chatMembers();
    chatMembers()
      .filter((member) => doesMemberMatch(partOfMemberName, member))
      .forEach(highlight);
  };

  const doesMemberMatch = (partOfMemberName, member) => member.innerHTML.toLowerCase().includes(partOfMemberName.toLowerCase());
  const chatMembers = () => $$('#chat_members li');
  const highlight = (li) => li.classList.add('highlighted');

  init();
}
