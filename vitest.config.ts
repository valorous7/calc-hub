import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.test.{js,jsx,ts,tsx}', 'src/**/__tests__/*.{js,jsx,ts,tsx}']
  }
});