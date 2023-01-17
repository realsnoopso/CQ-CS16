import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Graph } from './graph.js';
import { Triangle } from './triangle.js';
import { Square } from './square.js';

const rl = readline.createInterface({ input, output });
const question = (question) => rl.question(question);
const close = () => rl.close();
const write = (content) => process.stdout.write(content);

function getCoordinates(input) {
  return input.split('-').map((element) =>
    element
      .replace('(', '')
      .replace(')', '')
      .split(',')
      .map((num) => Number(num))
  );
}

async function printResult(inputs) {
  let coordinates = null;
  if (inputs) coordinates = getCoordinates(inputs);
  else
    coordinates = getCoordinates(
      await question('좌표를 입력하세요. 예: (10,10)-(14,15)')
    );

  const graph = new Graph(coordinates);
  const result = graph.createGraph();
  const calcuration = calcurate(coordinates);
  write('\n' + result + '\n\n');
  write(calcuration + '\n');
  close();
}

function calcurate(coordinates) {
  if (coordinates.length === 1) return 'error';
  switch (coordinates.length) {
    case 2:
      // const [length] = straigthLengthes;
      return '두 점 사이의 거리는' + String(length);
    case 3:
      const triangle = new Triangle(coordinates);
      const triangleArea = triangle.getTriangleArea();
      return '삼각형의 넓이는' + String(triangleArea);
    case 4:
      const square = new Square(coordinates);
      const squareArea = square.getSquareArea();
      return '사각형의 넓이는' + String(squareArea);
    default:
    // return getPolyhedronArea(coordinates);
  }
}

printResult('(10,10)-(14,15)-(5,3)');
printResult('(10,10)-(14,15)-(2,10)-(5,3)');
