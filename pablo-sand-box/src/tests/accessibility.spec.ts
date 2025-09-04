
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';

const rutas = fs.existsSync('tests/pr_routes.txt')
  ? fs.readFileSync('tests/pr_routes.txt', 'utf-8').split('\n').filter(Boolean)
  : ['/'];

test('accessibility scan en rutas modificadas', async ({ page }) => {
  const allResults: { violations: unknown[] } = { violations: [] };
  for (const ruta of rutas) {
    await page.goto(`http://localhost:4200${ruta}`);
    const results = await new AxeBuilder({ page }).analyze();
    allResults.violations.push(...results.violations);
  }
  fs.writeFileSync('axe-report.json', JSON.stringify(allResults, null, 2));
  expect(allResults.violations).toEqual([]);
});
