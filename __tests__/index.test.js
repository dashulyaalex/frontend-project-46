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

test('nested json stylish', () => {
  expect(genDiff(file1Json, file2Json, 'stylish')).toEqual(expectedStylish);
});

test('nested yaml stylish', () => {
  expect(genDiff(file1Yml, file2Yml, 'stylish')).toEqual(expectedStylish);
});

test('nested json plain', () => {
  expect(genDiff(file1Json, file2Json, 'plain')).toEqual(expectedPlain);
});

test('nested yml plain', () => {
  expect(genDiff(file1Yml, file2Yml, 'plain')).toEqual(expectedPlain);
});

test('nested json json', () => {
  expect(genDiff(file1Json, file2Json, 'json')).toEqual(expectedJson);
});

test('nested yml json', () => {
  expect(genDiff(file1Yml, file2Yml, 'json')).toEqual(expectedJson);
});
