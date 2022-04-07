<div class="logo-gfn"></div>

# CSS Selektoren

<h2 class="subclaim"><span>JS – HTML mühelos manipuliert</span></h2>

| Name               | Beispiel    | Beschreibung                                                                                                                                                                                               |
| ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Universal selector | \*          | Selektiert ein beliebiges Element. Diesen Selektor sollten Sie nicht ohne weitere Einschränkungen verwenden, da das Selektieren aller Elemente einer Website sehr viel Rechenzeit in Anspruch nehmen kann. |
| Type selector      | h1          | Selektiert alle Elemente eines bestimmten Typs.                                                                                                                                                            |
| ID selector        | #some-id    | Selektiert genau ein Element mit der gegeben id.                                                                                                                                                           |
| Class selector     | .some-class | Selektiert alle Elemente, denen die angegebene Klasse zugewiesen wurde. Beachten Sie, dass ein Element mehrere Klassen haben kann.                                                                         |
| -                  | h1, p, .go  | Das Komma ist selbst kein Selektor, sondern erlaubt es, mehrere Selektoren zu kombinieren. Im Beispiel würden alle h1-Elemente, alle p-Elemente und alle Elemente mit der Klasse go selektiert.            |

## Beispiel für folgende Tabelle

```html
<img src="funny_cat.png" alt="funny cat" ... />
```

| Selektor    | Beispiel zu           | Beschreibung                                                                                                                             |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [attr]      | [src]                 | Selektiert Elemente mit dem angegebenen Attribut. Der Attributwert spielt dabei keine Rolle (attribute presence).                        |
| [attr=val]  | [src='funny_cat.png'] | Selektiert Elemente, die das angegebene Attribut (src) mit genau dem angegebenen Wert (funny_cat.png) enthalten (exact attribute match). |
| [attr*=val] | [src*=cat]            | Selektiert Elemente, bei denen das angegebene Attribut (src) den Wert (cat) als Teilstring enthält (substring attribute match).          |
| [attr^=val] | [src^=funny]          | Selektiert Elemente, bei denen das angegebene Attribut (src) mit dem Wert (funny) beginnt.                                               |
| [attr$=val] | [src$=png]            | Selektiert Elemente, bei denen das angegebene Attribut (src) auf den angegebenen Wert (png) endet.                                       |

## Beispiel für folgende Tabelle

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Selector Testing</title>
  </head>
  <body>
    <ul id="ul1">
      <li id="li11"><span>11</span></li>
      <li id="li12">12</li>
      <li id="li13">13</li>
      <li id="li14">14</li>
    </ul>
    <ul id="ul2">
      <li id="li21"><span>21</span></li>
      <li id="li22">
        <strong><span>22</span></strong>
      </li>
      <li id="li23">23</li>
    </ul>
  </body>
</html>
```

| Name                                | Beispiel             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descendant combinator (Leerzeichen) | li span              | Selektiert Elemente (hier span), die die Nachfahren eines anderen angegebenen Elements (hier li) sind — völlig unabhängig davon, wie viele Ebenen dazwischen liegen. Ergebnis:`html [<span>11</span>, <span>21</span>, <span>22</span>]`                                                                                                                                                                                    |
| Adjacent sibling combinator (+)     | li#li11 + li         | Mit diesem Selektor können Sie das Element auswählen, das im HTML-Quelltext direkt nachdem angegeben Element (hier li#li11) auf der gleichen Ebene (Geschwister-Element) folgt. Falls das im Dokument nachfolgende Element nicht dem hinter dem +-Symbol angegebenen entspricht, wird nichts selektiert. Ergebnis:`html [<li id="li12">12</li>]`                                                                            |
| General sibling combinator (~)      | li#li12 ~ li         | Mit diesem Selektor können Sie alle Elemente auswählen, die im Dokument nach dem angegebenen Element (hier li#li12) auf der gleichen Ebene (Geschwister-Element) folgen. Es wird nicht nur das direkt folgende Element gewählt, wie beim Next sibling combinator. Ergebnis: `html[<li id="li13">13</li>, <li id="li14">14</li>]`                                                                                            |
| Child combinator (>)                | li > span            | Eine Variante der Nachfahren-Selektoren sind die Kind-Selektoren, mit denen Sie Elemente auswählen können, diedirekte»Kinder« von übergeordneten Eltern-Elementen sind. Im Beispiel werden nur span-Elemente selektiert, die sich direkt innerhalb eines li-Elements befinden. <span>22</span> befindet sich in einem strong-Element und wird deswegen nicht selektiert. Ergebnis:`html [<span>11</span>, <span>21</span>]` |
| :first-child                        | ul li:firstchild     | Mit dieser Pseudo-Klasse sprechen Sie das erste Kind-Element eines übergeordneten Containers (hier: ul) an, falls es sich um ein Element vom angegeben Tag-Typ (hier: li) handelt. Sollte das erste Kindelement nicht den richtigen Tag-Typ haben, wird nichts selektiert.                                                                                                                                                  |
| :nth-child(x)                       | ul li:nthchild(5)    | Die Pseudo-Klasse spricht das x-te Kind-Element an — im Beispiel das fünfte Element innerhalb von ul, falls es vom Tag-Typ li ist.                                                                                                                                                                                                                                                                                          |
| :last-child                         | ul li:lastchild      | Äquivalent zu :first-child selektieren Sie hier das letzte Kind-Element, sofern es vom richtigen Tag-Typ ist.                                                                                                                                                                                                                                                                                                               |
| :only-child                         | #article p:onlychild | Diese Klasse selektiert ein Element nur, wenn es sich um das einzige Kind eines angegebenen Eltern-Elementes handelt.                                                                                                                                                                                                                                                                                                       |
| :empty                              | div:empty            | Mit dieser Pseudo-Klasse sprechen Sie nur Elemente an, die ohne Kind-Elemente sind. Inhalt in Form von Text wird dabei ebenfalls als Kind-Element betrachtet.                                                                                                                                                                                                                                                               |
| :not(selector)                      | :not(span)           | Negation. Wählt Elemente aus, wenn sie nicht dem in Klammern angegebenen Selektor entsprechen. Im Beispiel würde alles außer span-Elementen ausgewählt.                                                                                                                                                                                                                                                                     |

## Element Classlist Methoden

Das **Element.classList** ist eine `read-only` Eigenschaft, welche die aktuelle [DOMTokenList](https://developer.mozilla.org/de/docs/Web/API/DOMTokenList) Sammlung der Klassen-Attribute des Elements zurückgibt.

| Methode    | Beispiel                              | Beschreibung                                                                                                                                                                                                               |
| ---------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add`      | `$("#bar").classList.add("foo")`      | Fügt eine Klasse hinzu. Im Beispiel erhält das Element mit der `id` bar die Klasse foo.                                                                                                                                    |
| `remove`   | `$("#bar").classList.remove("foo")`   | Entfernt eine Klasse. Enfernt im Beispiel die Klasse foo von dem Element mit der id bar.                                                                                                                                   |
| `item`     | `$("#bar").classList.item(2)`         | Gibt eine Klasse aus der Classlist anhand des übergebenen Index-Arguments zurück. Gibt im Beispiel den dritten Klassennamen des Elements mit der id `bar` zurück.                                                          |
| `toggle`   | `$("#bar").classList.toggle("foo")`   | Entfernt eine Klasse oder fügt sie hinzu. Im Beispiel wird die Klasse `foo` hinzugefügt, falls das Element mit der id `bar` noch nicht über diese Klasse verfügt. Falls die Klasse schon vorhanden ist, wird sie entfernt. |
| `contains` | `$("#bar").classList.contains("foo")` | Gibt `true` zurück, falls die angegebene Klasse in der Classlist vorhanden ist.                                                                                                                                            |

| Attribut  | Beispiel            | Beschreibung                                                            |
| --------- | ------------------- | ----------------------------------------------------------------------- |
| style     | $("#bar").style     | Enthält die CSS-Stile des Elements als CSS Style Declaration (änderbar) |
| classList | $("#bar").classList | Enthält die Liste der CSS-Klassen als DOMTokenList (änderbar).          |
