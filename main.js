import '@g-js-api/g.js';
import { float_vector3, float_vector2, vector2 } from './vector.js';
import { renderer } from './renderer.js';

await $.exportConfig({
    type: "live_editor",
    options: { info: true }
});

// main stuff
let mainG = unknown_g();
let r = new renderer(mainG, 2);
r.placerG.move(10, 0, 0.0, NONE, 0, 1, 1, true, true);
r.draw();