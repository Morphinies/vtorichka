type arrType = { time: string; price: number };
export function sort(arr: arrType[], by: string) {
  switch (by) {
    case "c новых":
      return arr.sort(function (a, b) {
        return Date.parse(b.time) - Date.parse(a.time);
      });
    case "со старых":
      return arr.sort(function (a, b) {
        return Date.parse(a.time) - Date.parse(b.time);
      });
    case "с дорогих":
      return arr.sort(function (a, b) {
        return b.price - a.price;
      });
    case "с дешевых":
      return arr.sort(function (a, b) {
        return a.price - b.price;
      });
    default:
      return null;
  }
}
