import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'DesktopChrome',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'DesktopEdge',
      use: { ...devices['Desktop Edge'] }
    },
    {
      name: 'Iphone',
      use: { ...devices['iPhone 11 Pro'] }
    },
    {
      name: 'Pixel',
      use: { ...devices['Pixel 5']}
    },
    {
      name: 'IPad',
      use: { ...devices['iPad Pro 11']}
    },
    {
      name: 'SamsungTablet',
      use: { ...devices['Galaxy Tab S4']}
    }
  ]
};
export default config;