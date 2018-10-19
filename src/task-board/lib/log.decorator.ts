// tslint:disable-next-line:function-name
export function Log(message: string) {
  return function logFn(constructor: Function) {
    console.log(message);
    constructor.prototype.additionalData = `Enhanced with: ${message}`;
  };
}

// tslint:disable-next-line:function-name
export function WhatIsIt(message: string) {
  // tslint:disable-next-line:no-any
  return function whatIsItFn(
    target: Object,
    propertyKey: string | symbol,
    descriptor: number
  ) {
    // tslint:disable-next-line:no-any
    console.log(target, propertyKey, descriptor);
  };
}
