// Das Promise Objekt stellt eine Repräsentation einer eventuellen Ausführung (oder eines Fehlschlags) einer asynchronen Operation und den daraus resultierenden Ergebnissen dar.

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise

const promiseHandler = (resolve, reject) => {
  const ergebnis = 21 * 2;
  if (ergebnis === 41) {
    resolve(ergebnis);
  } else {
    reject(`Error: ${ergebnis} ist nicht korrekt`);
  }
};

const p1 = new Promise(promiseHandler);

p1.then(
  (result) => {
    console.log(`OK (fulfilled): ${result}`);
  },
  (reason) => {
    console.log(`KO (rejected): ${reason}`);
  }
);

p1.then((result) => {
  console.log(`OK (fulfilled): ${result}`);
}).catch((reason) => {
  console.log(`KO (rejected): ${reason}`);
});
