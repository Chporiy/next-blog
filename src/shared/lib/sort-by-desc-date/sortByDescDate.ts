interface Data {
  date: string;
}

export const sortByDescDate = <Result extends Data>(data: Result[]) =>
  data.sort((a, b) => -1 * a.date.localeCompare(b.date));
