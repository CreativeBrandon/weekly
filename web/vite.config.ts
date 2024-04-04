import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const getCerts = () => {
  try {
    return {
      key: fs.readFileSync('.ssl/key.pem'),
      cert: fs.readFileSync('.ssl/cert.pem')
    }
  } catch {
    return undefined
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: getCerts()
  },
  plugins: [react()]
})
