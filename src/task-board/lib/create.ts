export type Constructor<T = {}> = new (...args: any[]) => T;

export function create<T>(construct: Constructor<T>): T {
  return new construct();
}
