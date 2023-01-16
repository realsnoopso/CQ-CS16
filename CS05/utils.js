export function padLeft(num) {
  const str = String(num);
  return new Array(2 - str.length + 1).join(' ') + str;
}
