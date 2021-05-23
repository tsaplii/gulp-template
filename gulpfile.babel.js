import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { pugBuild, pugWatch } from './gulp/tasks/pug';

export const build = series(
  clean,
  parallel(
    pugBuild,
  ),
);

export const watch = series(
  build,
  server,
  parallel(
    pugWatch,
  ),
);
