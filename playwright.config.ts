import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'edge', use: { channel: 'msedge' } },
  ],
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
});
