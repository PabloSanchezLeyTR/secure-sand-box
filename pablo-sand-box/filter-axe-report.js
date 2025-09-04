// filter-axe-report.js
// Filtra el reporte de axe-core para mostrar solo violaciones relacionadas con archivos modificados

const fs = require('fs');

const axeReportPath = 'axe-report.json';
const changedFilesPath = 'changed_files.txt';

if (!fs.existsSync(axeReportPath) || !fs.existsSync(changedFilesPath)) {
  console.error('No se encontró axe-report.json o changed_files.txt');
  process.exit(1);
}

const axeReport = JSON.parse(fs.readFileSync(axeReportPath, 'utf-8'));
const changedFiles = fs.readFileSync(changedFilesPath, 'utf-8')
  .split('\n')
  .filter(Boolean)
  .map(f => f.replace(/^src\/app\//, '').replace(/\..*$/, ''));

// Busca coincidencias por nombre de componente en el HTML de la violación
function isRelatedToChangedFile(html) {
  return changedFiles.some(name => html.includes(name));
}

const filteredViolations = axeReport.violations.map(v => ({
  ...v,
  nodes: v.nodes.filter(n => isRelatedToChangedFile(n.html))
})).filter(v => v.nodes.length > 0);

if (filteredViolations.length > 0) {
  console.log('Violaciones de accesibilidad relacionadas con archivos modificados:');
  filteredViolations.forEach(v => {
    console.log(`- [${v.id}] ${v.help}`);
    v.nodes.forEach(n => {
      console.log(`  HTML: ${n.html}`);
      console.log(`  Selector: ${n.target.join(', ')}`);
    });
  });
  process.exit(1);
} else {
  console.log('No se encontraron violaciones de accesibilidad relacionadas con archivos modificados.');
  process.exit(0);
}
