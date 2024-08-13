import '@g-js-api/g.js';

let zeroG = unknown_g();
$.add(object({
    OBJ_ID: 725,
    X: 0,
    Y: 0,
    GROUPS: zeroG
}));

export function displayPoint(p) {
    p.group.move_to(zeroG);
    p.cx.to_const([...Array(150).keys()], (n) => {
        p.group.move(n, 0, 0, NONE, 0, 1, 1, true, false);
    });
    
    p.cy.to_const([...Array(150).keys()], (n) => {
        p.group.move(0, n, 0, NONE, 0, 1, 1, true, false);
    });
}

export class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        if(this.x >= 151)
            this.x = 150;
        if(this.y >= 151)
            this.y = 150;
        this.cx = counter();
        this.cy = counter();
        this.cx.set(this.x);
        this.cy.set(this.y);
        this.group = unknown_g();
        $.add(object({
            OBJ_ID: 725,
            X: 0,
            Y: 0,
            GROUPS: this.group
        }));
    }
};