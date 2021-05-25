import { src, dest, watch } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';

export const spritesBuild = () => (
  src(`${config.src.icons}/**/*.svg`)
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite.svg',
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ['class', 'data-name', 'fill', 'stroke.*'],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    }))
    .pipe(dest(config.dest.images))
);

export const spritesWatch = watch(`${config.src.icons}/**/*.svg`, spritesBuild);
