import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import config from './gulp/config';

config.setEnv();

export const build = series(
  clean,
  parallel(
    pugBuild,
    sassBuild,
  ),
);

export const watch = series(
  build,
  server,
  parallel(
    pugWatch,
    sassWatch,
  ),
);
