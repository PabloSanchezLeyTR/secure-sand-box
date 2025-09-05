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
    const fs = require('fs');
    const path = require('path');

    if (process.argv.length < 4) {
      console.error('Uso: node pa11y-annotate.js <html-file> <pa11y-json-report>');
      process.exit(1);
    }

    const htmlFile = process.argv[2];
    const pa11yReportFile = process.argv[3];
    const pa11yReport = JSON.parse(fs.readFileSync(pa11yReportFile, 'utf8'));

    pa11yReport.forEach(issue => {
      if (issue.type === 'error') {
        const selector = issue.selector;
        const line = 1; // Siempre línea 1
        const message = `[Pa11y] ${issue.message} (selector: ${selector})`;
        // Ruta relativa al root del repo
        const repoRoot = path.resolve(__dirname);
        const absHtml = path.resolve(htmlFile);
        const relPath = path.relative(repoRoot, absHtml).replace(/\\/g, '/');
        // Output para GitHub Actions
        console.log(`::error file=${relPath},line=${line}::${message}`);
      }
    });
    const selector = issue.selector;
