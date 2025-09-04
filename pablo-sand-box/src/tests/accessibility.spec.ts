
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const rutas = ['/', '/ruta1', '/ruta2']; // Puedes personalizar las rutas aquí

test('accessibility scan en rutas modificadas', async ({ page }) => {
  for (const ruta of rutas) {
    await page.goto(`http://localhost:4200${ruta}`);
    const results = await new AxeBuilder({ page }).analyze();
    if (results.violations.length > 0) {
      console.log(`Violaciones de accesibilidad en la ruta ${ruta}:`);
      results.violations.forEach(v => {
        console.log(`- [${v.id}] ${v.help}`);
        v.nodes.forEach(n => {
          console.log(`  Selector: ${n.target.join(', ')}`);
          console.log(`  HTML: ${n.html}`);
          console.log(`  Mensaje: ${n.failureSummary}`);
        });
      });
    }
    expect(results.violations).toEqual([]);
  }
});
