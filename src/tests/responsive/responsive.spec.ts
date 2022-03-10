// example.spec.ts
import { test, expect } from '@playwright/test';

test.describe('load GE', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000');
  });

  test('my test', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('http://localhost:3000');
  });
});