export default class Page<T> {
  constructor(data?: Partial<Page<T>>) {
    Object.assign(this, data);
  }

  data: T[];
  count: number;

  static EMPTY = Page.of([], 0);

  static of<E>(data: E[], count: number) {
    return new Page<E>({
      data,
      count,
    });
  }
}
