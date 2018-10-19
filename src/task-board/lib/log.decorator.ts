// tslint:disable-next-line:function-name
export function Log(message: string) {
  return function logFn(constructor: Function) {
    console.log(message);
    constructor.prototype.additionalData = `Enhanced with: ${message}`;
  };
}
