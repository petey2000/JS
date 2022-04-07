'use strict';
{
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // Funktion, die zum Start der Anwendung bzw. zum Zeitpunkt des Webseitenaufrufs ausgeführt wird.
  const init = () => {
    $('#member_search input').addEventListener('keyup', (e) => {
      const inputEl = e.target;
      updateHighlightingOfChatMembers(inputEl.value);
    });
  };

  const updateHighlightingOfChatMembers = (partOfMemberName) => {
    removeHighlightsFromAllChatMembers();
    highlightChatMembersBy(partOfMemberName);
  };

  const highlightChatMembersBy = (partOfMemberName) => {
    // const liNodes = chatMembers();
    if (partOfMemberName === '') return; // Guard: Vorzeitiger Abschluss wenn Suchstring leer.

    chatMembers()
      .filter((member) => doesMemberMatch(partOfMemberName, member))
      .forEach(highlight);
  };

  const removeHighlightsFromAllChatMembers = () => {
    chatMembers().forEach(removeHighlight);
  };
  const doesMemberMatch = (partOfMemberName, member) => member.innerHTML.toLowerCase().includes(partOfMemberName.toLowerCase());

  const chatMembers = () => $$('#chat_members li');

  const highlight = (el) => el.classList.add('highlighted');
  const removeHighlight = (el) => el.classList.remove('highlighted');

  init();
}
