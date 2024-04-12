// import react and vite
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import localhost 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    open: true
  }
})
