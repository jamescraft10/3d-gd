import '@g-js-api/g.js';

export class float_vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.cx = float_counter(this.x);
        this.cy = float_counter(this.y);
    }
}

export class float_vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.cx = float_counter(this.x);
        this.cy = float_counter(this.y);
        this.cz = float_counter(this.z);
    }
}

export class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.cx = counter(this.x);
        this.cy = counter(this.y);
    }
}

export class vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.cx = counter(this.x);
        this.cy = counter(this.y);
        this.cz = counter(this.z);
    }
}