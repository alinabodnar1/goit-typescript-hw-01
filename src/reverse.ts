console.log(' Great reverse.ts: Hello TS!!!');

function reverse<K>(items: K[]): K[] {
  return items.reverse();
}

export {reverse};