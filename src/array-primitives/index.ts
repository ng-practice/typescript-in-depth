interface Mannschaft {
  title: string;
  text: string;
  liga: number;
}

const mannschaften: Mannschaft[] = [
  { title: 'Hallo', text: 'KSC', liga: 3 },
  { title: 'Tschüss', text: 'Stuttgart', liga: 1 },
  { title: 'Wie immer', text: 'Bayern', liga: 1 }
];

const mappedList = mannschaften.map(mannschaft => mannschaft.text);
console.log(mappedList);

const mappedListWithout = mannschaften.filter(
  mannschaft => mannschaft.text !== 'Bayern'
);
console.log('Leider ohne Bayern', mappedListWithout);

const heimmanschaft = mannschaften.find(
  mannschaft => mannschaft.text === 'KSC'
);
console.log('Heim', heimmanschaft);

const texts = mannschaften
  .map(mannschaft => mannschaft.text)
  .filter(text => text !== 'Stuttgart');

console.log('Nicht Stuttgart', texts);

const alleInErsterLiga = mannschaften.every(
  mannschaft => mannschaft.liga === 1
);

console.log('Sind alle in der ersten Liga?', alleInErsterLiga);

const einPaarInDer3Liga = mannschaften.some(
  mannschaft => mannschaft.liga === 3
);

console.log('Gibt es Mannschaften in der 3. Liga?', einPaarInDer3Liga);

const anzahlMannschaften = mannschaften.reduce(count => ++count, 0);
console.log('Alle Mannschaften', anzahlMannschaften);

const gruppiertNachLiga = mannschaften.reduce(
  groupByLiga,
  {} as MannschaftenGruppiertNachLiga
);

console.log('Gruppiert nach Liga', gruppiertNachLiga);

function groupByLiga(
  gruppen: MannschaftenGruppiertNachLiga,
  mannschaft: Mannschaft
): MannschaftenGruppiertNachLiga {
  console.log('wird aggregiert', mannschaft);

  if (Array.isArray(gruppen[mannschaft.liga])) {
    gruppen[mannschaft.liga].push(mannschaft);
  } else {
    gruppen[mannschaft.liga] = [mannschaft];
  }
  return gruppen;
}

interface MannschaftenGruppiertNachLiga {
  [key: number]: Mannschaft[];
}

/**
 *
 * {
 *   NUMBER: Mannschaft[]
 *   1: [{}, {}]
 *   2: [{}]
 * }
 *
 *
 */
