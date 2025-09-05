// pa11y-annotate.js
// Uso: node pa11y-annotate.js <html-file> <pa11y-json-report>
// Salida: líneas ::error file=...,line=...::mensaje para GitHub Actions

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

if (process.argv.length < 4) {
  console.error('Uso: node pa11y-annotate.js <html-file> <pa11y-json-report>');
  process.exit(1);
}

const htmlFile = process.argv[2];
const pa11yReportFile = process.argv[3];
const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const pa11yReport = JSON.parse(fs.readFileSync(pa11yReportFile, 'utf8'));
const $ = cheerio.load(htmlContent, { xmlMode: false, withStartIndices: true });

function getLineForSelector(selector) {
  try {
    const el = $(selector)[0];
    if (el && el.startIndex !== undefined) {
      // Cuenta líneas hasta el startIndex
      const before = htmlContent.slice(0, el.startIndex);
      return before.split('\n').length;
    }
  } catch (e) {}
  return 1; // fallback
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
