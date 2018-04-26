import {sayHello} from './hello.mjs';

const getLast = list => list.length ? list[list.length - 1] : null;

console.log(sayHello(getLast(process.argv)));
