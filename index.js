
import fugirana from './lib/furigana.js';

export default function (options) {
  return function (md) {
    md.inline.ruler.push('furigana', fugirana(options));
  };
}
