<!--
marp: true
_class: invert
theme: md-theme
-->

# DOM Manipulation

---

| Methode      | Beschreibung                                                                                                                                                                                                                                      | API       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| appendChild  | Hängt einen übergebenen Knoten (z.B. ein Element) als letztes Kind an den Elternknoten an, auf dem die Methode aufgerufen wurde. Falls der angehängte Knoten bereits Teil des Dokuments war, wird er von seiner ursprünglichen Position entfernt. | Node      |
| insertBefore | Fügt einen übergebenen Knoten (erstes Argument) vor einem anderen Knoten (zweites Argument) ein. Ausgegangen wird dabei von dem Elternknoten, auf dem die Methode aufgerufen wurde.                                                               | Node      |
| remove       | Entfernt einen Knoten aus seinem HTML-Baum. Der Knoten wird zurückgegeben und kann weiterverwendet werden.                                                                                                                                        | ChildNode |
| removeChild  | Die Methode Node.removeChild() entfernt einen Kindknoten aus dem DOM. Gibt den entfernten Knoten zurück.                                                                                                                                          | Node      |
