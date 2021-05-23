const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    pug: `${srcPath}/pug`,
    sass: `${srcPath}/assets/scss`,
    js: `${srcPath}/assets/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    icons: `${srcPath}/assets/icons`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/assets/css`,
    js: `${destPath}/assets/js`,
    fonts: `${destPath}/assets/fonts`,
    images: `${destPath}/assets/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--production');
    this.isDev = !this.isProd;
  },
};

export default config;
