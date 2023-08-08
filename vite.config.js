import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})

// export default defineConfig({
//   // base: "/PROJECT_3D/",
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "~": path.resolve(__dirname, "node_modules"),
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   build: {
//     chunkSizeWarningLimit: 1600,
//   },
// });
