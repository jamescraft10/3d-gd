import '@g-js-api/g.js';
import { float_vector3, float_vector2, vector2, vector3 } from './vector.js';
import { point, displayPoint } from './point.js';

await $.exportConfig({
    type: "live_editor",
    options: { info: true }
});

let projection = (a, b) => {
    b.cx.set(a.cx);
    b.cy.set(a.cy);
    b.cx.divide(a.cz);
    b.cy.divide(a.cz);
}

// main stuff
let v1 = new vector3(150, 150, 2);
let v1xy = new vector2(0, 0);
v1.cx.display(15, 15);
v1.cy.display(15, 45);
v1.cz.display(15, 75);
v1xy.cx.display(105, 15);
v1xy.cy.display(105, 45);
projection(v1, v1xy);

let p1 = new point(v1xy.cx, v1xy.cy);
displayPoint(p1);