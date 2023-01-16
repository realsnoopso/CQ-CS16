export function getTriangleArea(coordinates) {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const [x3, y3] = coordinates[2];
  const a = Math.abs(x1 - x2);
  const h = Math.abs(y1 - y3);
  return (a * h) / 2;
}
