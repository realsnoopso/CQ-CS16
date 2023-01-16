import { getStraightLength } from './straight.js';
import { getTriangleArea } from './triangle.js';
import { getSquareArea } from './square.js';
import { getPolyhedronArea } from './polyhedron.js';
import { padLeft } from './utils.js';

export const Graph = function () {
  this.maxHeight = 24;
  this.maxWidth = 24;
};

Graph.prototype.getCoordinates = function (input) {
  return input.split('-').map((element) =>
    element
      .replace('(', '')
      .replace(')', '')
      .split(',')
      .map((num) => Number(num))
  );
};

Graph.prototype.createGridlines = function () {
  const EMPTY = '⬜️';
  const column = new Array(this.maxWidth).fill(EMPTY);
  return new Array(this.maxHeight).fill(column);
};

Graph.prototype.addDatalabels = function (graph) {
  const DIVIDER_X = 'ㅡ';
  const DIVIDER_Y = 'ㅣ';

  let i = this.maxHeight;
  const result = graph.map((row) => {
    let labels = i % 2 === 0 ? padLeft(i) + DIVIDER_Y : '  ' + DIVIDER_Y;
    let newRow = [...row];
    newRow.unshift(labels);
    i--;
    return newRow;
  });

  result.push(new Array(this.maxWidth + 1).fill(DIVIDER_X).fill('  + ', 0, 1));

  let xLabels = [' 0 '];
  let j = 1;
  while (j <= this.maxWidth) {
    if (j % 2 === 0) xLabels.push(padLeft(j));
    else xLabels.push('  ');
    j++;
  }
  result.push(xLabels);
  return result;
};

Graph.prototype.calcurate = function (coordinates) {
  switch (coordinates.length) {
    case 1:
      return 'error';
    case 2:
      return getStraightLength(coordinates);
    case 3:
      return getTriangleArea(coordinates);
    case 4:
      return getSquareArea(coordinates);
    default:
      return getPolyhedronArea(coordinates);
  }
};

Graph.prototype.markCoordinates = function (graph, coordinates) {};

Graph.prototype.createGraph = function (input) {
  const MARK = '⬛️';
  const coordinates = this.getCoordinates(input);
  const gridlines = this.createGridlines();
  let graph = gridlines;

  coordinates.forEach((coordinate) => {
    const x = coordinate[0] - 1;
    const y = this.maxHeight - coordinate[1];
    const row = [...graph[y]];
    row[x] = MARK;
    graph[y] = row;
  });
  graph = this.addDatalabels(graph);

  const result = graph.map((v) => v.join('')).join('\n');
  const calcuration = this.calcurate(coordinates);

  return '\n' + result + '\n\n' + calcuration + '\n';
};

// const graph = new Graph();
// graph.createGraph('(10,10)-(14,15)');
