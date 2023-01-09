/* eslint-disable jest/valid-title */
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Json = getFixturePath('file1.json');
const file1Yml = getFixturePath('file1.yml');
const file2Json = getFixturePath('file2.json');
const file2Yml = getFixturePath('file2.yml');
const expectedStylish = readFile('resultStylish.txt');
const expectedPlain = readFile('resultPlain.txt');
const expectedJson = readFile('resultJson.txt');

test.each([
  [file1Json, file2Json, expectedStylish, 'stylish'],
  [file1Yml, file2Yml, expectedStylish, 'stylish'],
  [file1Json, file2Json, expectedPlain, 'plain'],
  [file1Yml, file2Yml, expectedPlain, 'plain'],
  [file1Json, file2Json, expectedJson, 'json'],
  [file1Yml, file2Yml, expectedJson, 'json'],
])('Test number %#', (file1, file2, expected, format) => {
  expect(genDiff(file1, file2, format)).toEqual(expected);
});
