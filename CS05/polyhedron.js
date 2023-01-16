export function getPolyhedronArea(coordinate) {
  const [x1, y1] = coordinate[0];
  const [x2, y2] = coordinate[1];
  const [x3, y3] = coordinate[2];
  const [x4, y4] = coordinate[3];
  const a = Math.abs(x1 - x2);
  const b = Math.abs(x2 - x3);
  const c = Math.abs(x3 - x4);
  const d = Math.abs(x4 - x1);
  const h = Math.abs(y1 - y3);
  return (a * h) / 2 + (b * h) / 2 + (c * h) / 2 + (d * h) / 2;
}
