<!--
marp: true
_class: invert
theme: md-theme
-->

# DOM Selection

---

Wichtige [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) und [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) Methoden zum Ansprechen von HTML Elementen (Nodes) im DOM.

| Methode                                                                                                  | Beschreibung                                                                                                                                                                        | Interface/ API |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `querySelector`                                                                                          | Gibt das erste Element zurück, das zum angegebenen Selektor passt. Durchsucht nur Elemente innerhalb des HTML-Teilbaums, auf dessen Wurzelelement querySelector aufgerufen wurde.   | Element        |
| `querySelectorAll`                                                                                       | Gibt alle Elemente zurück, die zum angegebenen Selektor passen. Durchsucht nur Elemente innerhalb des HTML-Teilbaums, auf dessen Wurzelelement `querySelectorAll` aufgerufen wurde. | Element        |
| [document.querySelector](https://developer.mozilla.org/de/docs/Web/API/Document/querySelector) (aka `$`) | Gibt das erste Element zurück, das zum angegebenen Selektor passt. Durchsucht das gesamte HTML-Dokument.                                                                            | Document       |
| `document.querySelectorAll` (aka `$$`)                                                                   | Gibt alle Elemente zurück, die zum angegeben Selektor passen. Durchsucht das gesamte HTML-Dokument.                                                                                 | Document       |

---

| Attribut      | Beschreibung                  | Interface/ API |
| ------------- | ----------------------------- | -------------- |
| document.head | Gibt das head-Element zurück. | Document       |
| document.body | Gibt das body-Element zurück. | Document       |
