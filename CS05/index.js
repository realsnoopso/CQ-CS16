import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Graph } from './graph.js';

const rl = readline.createInterface({ input, output });
const question = (question) => rl.question(question);
const close = () => rl.close();
const write = (content) => process.stdout.write(content);

printResult();

async function printResult() {
  const coordinates = await question('좌표를 입력하세요. 예: (10,10)-(14,15)');
  console.log(coordinates);
  const graph = new Graph();
  const result = graph.createGraph(coordinates);
  write(result);
  close();
}
