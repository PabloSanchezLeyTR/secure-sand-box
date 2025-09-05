// pa11y-annotate.js
// Uso: node pa11y-annotate.js <html-file> <pa11y-json-report>
// Salida: líneas ::error file=...,line=...::mensaje para GitHub Actions

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const parse5 = require('parse5');
const { default: cssSelect } = require('css-select');

if (process.argv.length < 4) {
  console.error('Uso: node pa11y-annotate.js <html-file> <pa11y-json-report>');
  process.exit(1);
}

const htmlFile = process.argv[2];
const pa11yReportFile = process.argv[3];
const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const pa11yReport = JSON.parse(fs.readFileSync(pa11yReportFile, 'utf8'));

// Parse5 con location info
const document = parse5.parse(htmlContent, { sourceCodeLocationInfo: true });
// Helper para recorrer el árbol y buscar nodos por selector
function findNodeBySelector(root, selector) {
  try {
    // Usar css-select sobre el árbol de parse5
    return cssSelect.selectOne(selector, root);
  } catch (e) {
    return null;
  }
}


function getLineForSelector(selector) {
  // 1. Intentar con parse5 y css-select
  const node = findNodeBySelector(document, selector);
  if (node && node.sourceCodeLocation && node.sourceCodeLocation.startLine) {
    return node.sourceCodeLocation.startLine;
  }
  // 2. Fallback a cheerio (como antes)
  try {
    const $ = cheerio.load(htmlContent, { xmlMode: false, withStartIndices: true });
    const el = $(selector)[0];
    if (el && el.startIndex !== undefined) {
      const before = htmlContent.slice(0, el.startIndex);
      return before.split('\n').length;
    }
  } catch (e) {}
  return 1;
}

pa11yReport.forEach(issue => {
  if (issue.type === 'error') {
    const selector = issue.selector;
    const line = getLineForSelector(selector);
    const message = `[Pa11y] ${issue.message} (selector: ${selector})`;
    // Ruta relativa al root del repo
    const repoRoot = path.resolve(__dirname);
    const absHtml = path.resolve(htmlFile);
    const relPath = path.relative(repoRoot, absHtml).replace(/\\/g, '/');
    // Output para GitHub Actions
    console.log(`::error file=${relPath},line=${line}::${message}`);
  }
});
