
import fugirana from './lib/furigana.js';

export default function (md, options) {
  md.inline.ruler.push('furigana', fugirana(options));
}
