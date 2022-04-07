# Event Eigenschaften

### Wichtige Event Eigenschaften, die an alle spez. Eventtypen vererbt werden.

| Eigenschaft   | Bedeutung                                                                             |
| ------------- | ------------------------------------------------------------------------------------- |
| currentTarget | Element, auf dem der aktuelle Eventhandler registriert ist (oft identisch mit target) |
| target        | Element, das das Event ausgelöst hat (oft identisch mit `currentTarget`)              |
| timestamp     | Zeitpunkt, zu dem das Event ausgelöst wurde                                           |

## MouseEvent - Eigenschaften

<https://developer.mozilla.org/de/docs/Web/API/MouseEvent>

Das [MouseEvent()](https://developer.mozilla.org/de/docs/Web/API/MouseEvent) erbt Eigenschaften der Elternobjekte [UIEvent](https://developer.mozilla.org/de/docs/Web/API/UIEvent) und [Event](https://developer.mozilla.org/de/docs/Web/API/Event).

### MouseEvent: wichtige Eigenschaften

| Eigenschaft | Bedeutung                                                                            |
| ----------- | ------------------------------------------------------------------------------------ |
| altKey      | Gibt `true` bei gedrückter **ALT**-Taste zurück.                                     |
| button      | Nummer des gedrückten Buttons (0 bis4)                                               |
| clientX     | X-Position des Mauszeigers im DOM                                                    |
| clientY     | Y-Position des Mauszeigers im DOM                                                    |
| ctrlKey     | Gibt `true` bei gedrückter **CTRL**-Taste zurück.                                    |
| metaKey     | Gibt `true` bei gedrückter **META**-Taste (Windows- bzw. Command-Taste) zurück.      |
| movementX   | Relative Bewegung des Mauszeigers auf der X-Coordinate seit dem letztem `mousemove`. |
| movementY   | Relative Bewegung des Mauszeigers auf der Y-Coordinate seit dem letztem `mousemove`. |
| screenX     | X-Position des Mauszeigers auf dem Bildschirm.                                       |
| screenY     | Y-Position des Mauszeigers auf dem Bildschirm.                                       |
| shiftKey    | Gibt `true` bei gedrückter **SHIFT**-Taste zurück.                                   |

## KeyboardEvent - Eigenschaften

<https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent>

Das [KeyboardEvent()](https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent) erbt Eigenschaften der Elternobjekte [UIEvent](https://developer.mozilla.org/de/docs/Web/API/UIEvent) und [Event](https://developer.mozilla.org/de/docs/Web/API/Event).

### KeyboardEvent: wichtige Eigenschaften

| Eigenschaft | Bedeutung                                                                       |
| ----------- | ------------------------------------------------------------------------------- |
| altKey      | Gibt `true` bei gedrückter **ALT**-Taste zurück.                                |
| code        | Codewert der gedrückten Taste, z.B. `KeyA` (unabhängig vom Keyboard-Layout)     |
| ctrlKey     | Gibt `true` bei gedrückter **CTRL**-Taste zurück.                               |
| key         | die gedrückte Taste, z.B. `a` oder `ArrowDown` (abhängig vom Keyboard-Layout)   |
| metaKey     | Gibt `true` bei gedrückter **META**-Taste (Windows- bzw. Command-Taste) zurück. |
| shiftKey    | Gibt `true` bei gedrückter **SHIFT**-Taste zurück.                              |

## WheelEvent - Eigenschaften

<https://developer.mozilla.org/de/docs/Web/API/WheelEvent>

Das [WheelEvent()](https://developer.mozilla.org/de/docs/Web/API/WheelEvent) erbt Eigenschaften der Elternobjekte [UIEvent](https://developer.mozilla.org/de/docs/Web/API/UIEvent) und [Event](https://developer.mozilla.org/de/docs/Web/API/Event).

### WheelEvent: wichtige Eigenschaften

| Eigenschaft | Bedeutung                      |
| ----------- | ------------------------------ |
| deltaX      | Scrollbewegung auf der X-Achse |
| deltaY      | Scrollbewegung auf der Y-Achse |
