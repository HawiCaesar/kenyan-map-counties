import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Tailwind CSS v3 is configured via PostCSS
export default defineConfig({
  plugins: [react()],
})
