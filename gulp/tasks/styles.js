import { src, dest, watch } from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import gulpif from 'gulp-if';
import config from '../config';

export const sassBuild = () => (
  src(`${config.src.sass}/**/*.scss`, { sourcemaps: config.isDev })
    .pipe(plumber({
      errorHandler(err) {
        notify.onError({
          title: 'Sass Error!',
          message: '<%= error.message %>',
        })(err);
      },
    }))
    .pipe(sass())
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer({
      cascade: false,
    })))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(config.dest.css, { sourcemaps: config.isDev }))
    .pipe(browserSync.stream())
);

export const sassWatch = () => watch(`${config.src.sass}/**/*.scss`, sassBuild);
