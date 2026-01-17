
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// إذا كنت ستنشر الموقع على رابط فرعي مثل username.github.io/repo/
// يجب تغيير base إلى اسم المستودع. أما إذا كان دومين خاص فاجعله '/'
export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
