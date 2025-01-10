import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  //created a proxy to the server
  server: {
    proxy: {
      '/api': {
        target:'http://localhost:3000',
        secure: false,
      },

    },  
  },
  plugins: [react()],
});
