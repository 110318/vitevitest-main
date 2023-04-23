/// <reference types="vitest" />
import path from 'path'

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  resolve:{
    alias:{
     '@':path.resolve(__dirname,'./src/myComponent')
    } 
  },
})
