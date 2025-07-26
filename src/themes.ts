import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

export interface Theme {
  id: string;
  name: string;
  className: string;
  desc: string;
  background: string;
  foreground: string;
  primary: string;
  primaryT: string;
  text: string;
  selectBg: string;
  selectFg: string;
  selectFg2: string;
  button: string;
  second: string;
  disabled: string;
  contrast: string;
  table: string;
  border: string;
  hl: string;
  tree: string;
  notif: string;
  accent: string;
  excluded: string;
  yellow: string;
  green: string;
  cyan: string;
  blue: string;
  purple: string;
  red: string;
  red2: string;
  orange: string;
  orange2: string;
  gray: string;
  silver: string;
  black: string;
  white: string;
  error: string;
  comments: string;
  vars: string;
  links: string;
  functions: string;
  keywords: string;
  tags: string;
  strings: string;
  operators: string;
  attributes: string;
  classes: string;
  numbers: string;
  parameters: string;
}

export interface Themes {
  material: Theme[];
  material2: Theme[];
  other: Theme[];
  other2: Theme[];
}

// Get the directory path of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the path to the themes.yml file
const yamlPath = path.resolve(__dirname, './data/themes.yml');

// Read and parse the YAML file
export const themes: Themes = yaml.load(fs.readFileSync(yamlPath, 'utf8')) as Themes;

export const currentTheme: Theme = themes.material[3];