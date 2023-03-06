
import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';
import i18n from 'laravel-vue-i18n/vite';

export default ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    return ({
    base: process.env.APP_ENV === 'local' ? '' : `${process.env.APP_URL}/build/`, //command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: ['resources/js/app.js'],
        },
    },
    resolve: {
        alias: {
          '@': '/resources/js', //path.resolve(__dirname, './resources/js'),//'resources/js',
        }
      },
    plugins: [
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        },
        vue(),
        i18n(),
    ],
    css: {
        postCss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
                },
        },
    },
  });
};
