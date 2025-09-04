import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';

const rutas = fs.existsSync('tests/pr_routes.txt')
  ? fs.readFileSync('tests/pr_routes.txt', 'utf-8').split('\n').filter(Boolean)
  : ['/'];

test('accessibility scan en rutas modificadas', async ({ page }) => {
  for (const ruta of rutas) {
    await page.goto(`http://localhost:4200${ruta}`);
    const results = await new AxeBuilder({ page }).analyze();
  // Si hay violaciones, el test fallará con expect, no se imprime nada en consola
    expect(results.violations).toEqual([]);
  }
});
