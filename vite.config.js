import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Đảm bảo đường dẫn chính xác
    build: {
        outDir: 'dist', // Thư mục build
    },
});
