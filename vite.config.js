import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/freecodecamp/', // Add the repository name as the base
  plugins: [react()],
});
